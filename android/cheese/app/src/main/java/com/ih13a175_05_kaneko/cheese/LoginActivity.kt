package com.ih13a175_05_kaneko.cheese

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import android.content.Context // Contextのインポートを追加
import android.content.SharedPreferences // SharedPreferencesのインポートを追加
import android.widget.TextView

//data class Login(val mail:String, val pass:String)

class LoginActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_login)
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }
        val button: Button = findViewById<Button>(R.id.buttonLogin)
        button.setOnClickListener{
            val sharedPreferences: SharedPreferences = getSharedPreferences("app_prefs", Context.MODE_PRIVATE)
            sharedPreferences.edit().putBoolean("is_logged_in", true).apply()

            val intent = Intent(this, MainActivity::class.java)
            startActivity(intent)
            finish()
        }
        val subscribeLink: TextView = findViewById<TextView>(R.id.textViewRegister)
        subscribeLink.setOnClickListener(){
            val intent = Intent(this, Subscribe::class.java)
            startActivity(intent)
        }
    }
}
