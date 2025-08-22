package com.ih13a175_05_kaneko.cheese.ui.home

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class HomeViewModel : ViewModel() {

    private val _text = MutableLiveData<String>().apply {
        value = "メイン画面だよ～"
    }
    val text: LiveData<String> = _text
}