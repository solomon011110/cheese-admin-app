package com.ih13a175_05_kaneko.cheese.ui.home

import android.content.Intent
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import androidx.fragment.app.Fragment
import com.ih13a175_05_kaneko.cheese.databinding.FragmentSettingBinding
import com.ih13a175_05_kaneko.cheese.databinding.FragmentHomeBinding
import androidx.navigation.fragment.findNavController
import com.ih13a175_05_kaneko.cheese.R
import com.ih13a175_05_kaneko.cheese.ScanActivity

class HomeFragment : Fragment() {

    private var _binding: FragmentHomeBinding? = null
    private val binding get() = _binding!!

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        _binding = FragmentHomeBinding.inflate(inflater, container, false)
        val root: View = binding.root

        // QRコード読み取りTextViewのクリックリスナー
        binding.textHomeQr.setOnClickListener {
            val intent = Intent(requireContext(), ScanActivity::class.java)
            startActivity(intent)
        }

        // 設定TextViewのクリックリスナー
        binding.textHomeSetting.setOnClickListener {
            // ナビゲーションコントローラを使用してnav_settingに遷移
            findNavController().navigate(R.id.nav_setting)
        }

        return root
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}

