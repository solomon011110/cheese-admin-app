package com.ih13a175_05_kaneko.cheese

import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.fragment.app.Fragment
import kotlin.random.Random

class ScanActivity : AppCompatActivity(), QrCodeScannerFragment.QrCodeScanListener {

    private var coordinateDisplayFragment: CoordinateDisplayFragment? = null
    private var updateHandler: Handler? = null
    private var updateRunnable: Runnable? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_scan)

        val toolbar: androidx.appcompat.widget.Toolbar = findViewById(R.id.toolbar)
        setSupportActionBar(toolbar)

        supportActionBar?.setDisplayHomeAsUpEnabled(true)

        if (savedInstanceState == null) {
            // --- デバッグ用のコード ---
            // この行のコメントアウトを外すと、QRコードスキャンをスキップして座標画面に遷移します
//             onQrCodeScanned("special_cheese_code")
            // -----------------------

//          --- 通常のコードデバッグ時はコメントアウト ---
            val fragment = QrCodeScannerFragment.newInstance()
            supportFragmentManager.beginTransaction()
                .add(R.id.fragment_container, fragment)
                .commit()
            // -----------------------
        }
    }

    override fun onSupportNavigateUp(): Boolean {
        onBackPressedDispatcher.onBackPressed()
        return true
    }

    override fun onQrCodeScanned(result: String) {
        // スキャン画面を閉じる
//        supportFragmentManager.popBackStack()

        if (result == "special_cheese_code") {
            coordinateDisplayFragment = CoordinateDisplayFragment.newInstance()
            supportFragmentManager.beginTransaction()
                .replace(R.id.fragment_container, coordinateDisplayFragment!!)
                .addToBackStack(null)
                .commit()
            startDataSimulation()
        } else {
            Toast.makeText(this, "無効なQRコードです", Toast.LENGTH_SHORT).show()
        }
    }

    override fun onScanError(exception: Exception) {
        Toast.makeText(this, "スキャンエラー: ${exception.message}", Toast.LENGTH_SHORT).show()
    }

    private fun startDataSimulation() {
        updateHandler = Handler(Looper.getMainLooper())
        updateRunnable = object : Runnable {
            override fun run() {
                val name = "デバイスA"
                val x = Random.nextInt(100)
                val y = Random.nextInt(100)
                val z = Random.nextInt(100)
                val receivedData = CoordinateData(name, x, y, z)

                coordinateDisplayFragment?.updateCoordinates(receivedData)
                updateHandler?.postDelayed(this, 1000)
            }
        }
        updateHandler?.post(updateRunnable!!)
    }

    override fun onDestroy() {
        super.onDestroy()
        updateHandler?.removeCallbacks(updateRunnable!!)
    }
}

