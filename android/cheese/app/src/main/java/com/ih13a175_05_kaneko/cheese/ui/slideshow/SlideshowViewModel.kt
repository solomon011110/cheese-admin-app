package com.ih13a175_05_kaneko.cheese.ui.slideshow

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class SlideshowViewModel : ViewModel() {

    private val _text = MutableLiveData<String>().apply {
        value = "ログアウトするよ～"
    }
    val text: LiveData<String> = _text
}