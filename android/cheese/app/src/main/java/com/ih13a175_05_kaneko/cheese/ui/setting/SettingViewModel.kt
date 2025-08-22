package com.ih13a175_05_kaneko.cheese.ui.setting

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class SettingViewModel : ViewModel() {

    private val _text = MutableLiveData<String>().apply {
        value = "設定画面だよー"
    }
    val text: LiveData<String> = _text
}