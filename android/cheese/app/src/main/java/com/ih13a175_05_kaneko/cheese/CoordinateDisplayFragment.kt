package com.ih13a175_05_kaneko.cheese

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment

class CoordinateDisplayFragment : Fragment() {

    private lateinit var coordinateView: CoordinateView

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        return inflater.inflate(R.layout.fragment_coordinate_display, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        coordinateView = view.findViewById(R.id.coordinateView)
    }

    /**
     * 外部から座標データを受信してUIを更新するメソッド
     */
    fun updateCoordinates(data: CoordinateData) {
        if (isAdded && view != null) {
            coordinateView.updateData(data)
        }
    }

    companion object {
        @JvmStatic
        fun newInstance() = CoordinateDisplayFragment()
    }
}