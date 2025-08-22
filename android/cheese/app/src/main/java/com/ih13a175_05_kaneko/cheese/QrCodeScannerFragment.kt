package com.ih13a175_05_kaneko.cheese

import android.Manifest
import android.content.pm.PackageManager
import android.os.Bundle
import android.util.Log
import android.util.Size
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import androidx.camera.core.CameraSelector
import androidx.camera.core.ImageAnalysis
import androidx.camera.core.Preview
import androidx.camera.lifecycle.ProcessCameraProvider
import androidx.camera.view.PreviewView
import androidx.core.content.ContextCompat
import com.google.mlkit.vision.barcode.BarcodeScannerOptions
import com.google.mlkit.vision.barcode.BarcodeScanning
import com.google.mlkit.vision.barcode.common.Barcode
import com.google.mlkit.vision.common.InputImage
import java.util.concurrent.ExecutorService
import java.util.concurrent.Executors

/**
 * QRコードスキャン機能を提供するフラグメントです。
 * カメラのプレビューを表示し、ML Kit を使用してQRコードを検出します。
 */
class QrCodeScannerFragment : Fragment() {

    // カメラのプレビューを表示するためのビュー
    private lateinit var previewView: PreviewView

    // カメラの実行を管理するためのExecutorサービス
    private lateinit var cameraExecutor: ExecutorService

    // QRコードスキャン結果をリスナーに渡すためのインターフェース
    private var qrCodeScanListener: QrCodeScanListener? = null

    // カメラパーミッション要求のためのリクエストコード
    private val REQUEST_CODE_PERMISSIONS = 10

    // 必要なパーミッションの配列
    private val REQUIRED_PERMISSIONS = arrayOf(Manifest.permission.CAMERA)

    /**
     * QRコードスキャン結果を受け取るためのインターフェースです。
     */
    interface QrCodeScanListener {
        fun onQrCodeScanned(result: String)
        fun onScanError(exception: Exception)
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        // Camera Executorを初期化
        cameraExecutor = Executors.newSingleThreadExecutor()
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // フラグメントのレイアウトをインフレート
        return inflater.inflate(R.layout.fragment_qr_code_scanner, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        // レイアウトからPreviewViewを取得
        previewView = view.findViewById(R.id.previewView)

        // QRコードスキャンリスナーをセットアップ
        if (context is QrCodeScanListener) {
            qrCodeScanListener = context as QrCodeScanListener
        } else if (parentFragment is QrCodeScanListener) {
            qrCodeScanListener = parentFragment as QrCodeScanListener
        }

        // カメラパーミッションを確認し、必要であれば要求する
        if (allPermissionsGranted()) {
            startCamera()
        } else {
            requestPermissions(REQUIRED_PERMISSIONS, REQUEST_CODE_PERMISSIONS)
        }
    }

    override fun onDestroyView() {
        super.onDestroyView()
        // カメラExecutorをシャットダウンしてリソースを解放
        cameraExecutor.shutdown()
    }

    /**
     * カメラを開始し、プレビューと画像解析をバインドします。
     */
    private fun startCamera() {
        val cameraProviderFuture = ProcessCameraProvider.getInstance(requireContext())

        cameraProviderFuture.addListener({
            val cameraProvider: ProcessCameraProvider = cameraProviderFuture.get()

            // プレビューのセットアップ
            val preview = Preview.Builder()
                .build()
                .also {
                    it.setSurfaceProvider(previewView.surfaceProvider)
                }

            // 画像解析のセットアップ
            val imageAnalysis = ImageAnalysis.Builder()
//                .setTargetResolution(Size(1280, 720)) // 解像度を設定
                .setBackpressureStrategy(ImageAnalysis.STRATEGY_KEEP_ONLY_LATEST) // 最新のフレームのみを処理
                .build()
                .also {
                    it.setAnalyzer(cameraExecutor, BarcodeAnalyzer { barcodeValue ->
                        // バーコードが検出されたときに呼び出されるコールバック
                        qrCodeScanListener?.onQrCodeScanned(barcodeValue)
                        // スキャン成功後、カメラを停止するか、特定のQRコードのみを処理するようにロジックを追加できます
                        // 例えば、一度スキャンしたらフラグメントを閉じるなど
                    })
                }

            // 背面カメラを選択
            val cameraSelector = CameraSelector.DEFAULT_BACK_CAMERA

            try {
                // 既存のバインディングを解除
                cameraProvider.unbindAll()

                // カメラのユースケースをライフサイクルにバインド
                cameraProvider.bindToLifecycle(
                    this, cameraSelector, preview, imageAnalysis
                )

            } catch (exc: Exception) {
                Log.e(TAG, "ユースケースのバインドに失敗しました", exc)
                qrCodeScanListener?.onScanError(exc)
            }

        }, ContextCompat.getMainExecutor(requireContext()))
    }

    /**
     * すべての必要なパーミッションが許可されているかを確認します。
     */
    private fun allPermissionsGranted() = REQUIRED_PERMISSIONS.all {
        ContextCompat.checkSelfPermission(
            requireContext(), it
        ) == PackageManager.PERMISSION_GRANTED
    }

    /**
     * パーミッション要求の結果を処理します。
     */
    override fun onRequestPermissionsResult(
        requestCode: Int, permissions: Array<String>, grantResults: IntArray
    ) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults)
        if (requestCode == REQUEST_CODE_PERMISSIONS) {
            if (allPermissionsGranted()) {
                startCamera()
            } else {
                Toast.makeText(
                    requireContext(),
                    "カメラパーミッションが許可されていません。",
                    Toast.LENGTH_SHORT
                ).show()
                // パーミッションが拒否された場合の処理（例: フラグメントを閉じる）
                qrCodeScanListener?.onScanError(SecurityException("カメラパーミッションが拒否されました"))
            }
        }
    }

    companion object {
        private const val TAG = "QrCodeScannerFragment"

        /**
         * このフラグメントの新しいインスタンスを作成するためのファクトリメソッドです。
         *
         * @return QrCodeScannerFragmentの新しいインスタンス。
         */
        @JvmStatic
        fun newInstance() = QrCodeScannerFragment()
    }

    /**
     * カメラフレームを解析し、QRコードを検出するためのアナライザーです。
     *
     * @param listener QRコードが検出されたときに呼び出されるコールバック。
     */
    private class BarcodeAnalyzer(private val listener: (String) -> Unit) : ImageAnalysis.Analyzer {

        private val options = BarcodeScannerOptions.Builder()
            .setBarcodeFormats(Barcode.FORMAT_QR_CODE) // QRコードのみをスキャンするように設定
            .build()

        private val scanner = BarcodeScanning.getClient(options)

        override fun analyze(imageProxy: androidx.camera.core.ImageProxy) {
            val mediaImage = imageProxy.image
            if (mediaImage != null) {
                val image = InputImage.fromMediaImage(mediaImage, imageProxy.imageInfo.rotationDegrees)

                scanner.process(image)
                    .addOnSuccessListener { barcodes ->
                        for (barcode in barcodes) {
                            barcode.rawValue?.let {
//                                Log.d(TAG, "検出されたバーコード: $it")
                                listener(it)
                            }
                        }
                    }
                    .addOnFailureListener { e ->
                        Log.e(TAG, "バーコードスキャンエラー: ${e.message}", e)
                    }
                    .addOnCompleteListener {
                        imageProxy.close() // フレームの処理が完了したらImageProxyを閉じる
                    }
            } else {
                imageProxy.close() // mediaImageがnullの場合もImageProxyを閉じる
            }
        }
    }
}


