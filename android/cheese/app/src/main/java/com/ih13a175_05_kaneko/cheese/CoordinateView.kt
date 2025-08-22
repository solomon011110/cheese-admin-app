package com.ih13a175_05_kaneko.cheese

import android.content.Context
import android.graphics.Canvas
import android.graphics.Color
import android.graphics.Paint
import android.util.AttributeSet
import android.view.View

class CoordinateView @JvmOverloads constructor(
    context: Context,
    attrs: AttributeSet? = null,
    defStyleAttr: Int = 0
) : View(context, attrs, defStyleAttr) {

    // 描画用のPaintオブジェクト
    private val pointPaint = Paint().apply {
        color = Color.RED
        style = Paint.Style.FILL
    }
    private val textPaint = Paint().apply {
        color = Color.BLACK
        textSize = 30f // テキストサイズ
        textAlign = Paint.Align.LEFT
    }

    // 表示する座標データ
    private var data: CoordinateData? = null

    // 画面の幅と高さ
    private var viewWidth: Int = 0
    private var viewHeight: Int = 0

    // ビューのサイズが変更されたときに呼び出される
    override fun onSizeChanged(w: Int, h: Int, oldw: Int, oldh: Int) {
        super.onSizeChanged(w, h, oldw, oldh)
        viewWidth = w
        viewHeight = h
    }

    // ビューを描画するメソッド
    override fun onDraw(canvas: Canvas) {
        super.onDraw(canvas)
        data?.let {
            // 座標を画面のスケールに変換
            // 例: X, Y座標が0〜100の範囲の場合
            val x = (it.x.toFloat() / 100f) * viewWidth
            val y = (it.y.toFloat() / 100f) * viewHeight

            // 点を描画
            canvas.drawCircle(x, y, 10f, pointPaint)

            // 名前のテキストを描画
            canvas.drawText(it.name, x + 20f, y, textPaint)
        }
    }

    /**
     * 外部から座標データを受信してビューを更新するメソッド
     */
    fun updateData(newData: CoordinateData) {
        data = newData
        invalidate() // ビューを再描画
    }
}