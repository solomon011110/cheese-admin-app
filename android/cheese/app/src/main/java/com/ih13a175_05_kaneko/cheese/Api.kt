package com.ih13a175_05_kaneko.cheese

import android.util.Log
import androidx.core.app.GrammaticalInflectionManagerCompat.GrammaticalGender
import okhttp3.Request
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.http.Body
import retrofit2.http.POST

class Api {
    data class Post(
        val id: Int
    )
    data class RequestData(
        val userName: String,
        val mailAddress: String,
        val tel:String,
        val gender: String,
        val pass: String
    )

    interface ApiService {
        @POST("api/android")
        fun getPost(): Call<Post>
        @POST("api/android")
        fun send(@Body data:RequestData): Call<Post>
    }

    val retrofit: Retrofit = Retrofit.Builder()
        .baseUrl("http://10.192.94.186:3000")
        .addConverterFactory(GsonConverterFactory.create())
        .build()

    val apiService: ApiService = retrofit.create(ApiService::class.java)

    fun fetchPost() {
        val call = apiService.getPost()
        call.enqueue(object : Callback<Post> {
            override fun onResponse(call: Call<Post>, response: Response<Post>) {
                if (response.isSuccessful) {
                    val post = response.body()
                    Log.d("API_CALL", "Title: ${post}")
                } else {
                    Log.d("API_CALL", "Response Error: ${response.code()}")
                }
            }
            override fun onFailure(call: Call<Post>, t: Throwable) {
                Log.e("API_CALL", "Network Error: ${t.message}", t)
            }
        })
    }

    fun sendData(){
        val call = apiService.send(RequestData("aaa","aaa","aaa","aaa","aaa"))
        call.enqueue(object : Callback<Post> {
            override fun onResponse(call: Call<Post>, response: Response<Post>) {
                if (response.isSuccessful) {
                    val post = response.body()
                    Log.d("API_CALL", "Title: ${post}")
//                    Log.d("API_CALL", "Body: ${post?.body}")
                } else {
                    Log.d("API_CALL", "Response Error: ${response.code()}")
                }
            }
            override fun onFailure(call: Call<Post>, t: Throwable) {
                Log.e("API_CALL", "Network Error: ${t.message}", t)
            }
        })
    }




}