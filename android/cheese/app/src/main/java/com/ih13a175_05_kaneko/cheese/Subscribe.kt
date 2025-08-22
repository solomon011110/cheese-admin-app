package com.ih13a175_05_kaneko.cheese

import android.app.DatePickerDialog
import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.widget.Toast
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import com.ih13a175_05_kaneko.cheese.databinding.ActivitySubscribeBinding
import java.util.Calendar
class Subscribe : AppCompatActivity() {

    // ViewBindingのインスタンスを保持するための変数
    private lateinit var binding: ActivitySubscribeBinding
    private val api = Api()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()

        // ビューバインディングをセットアップ
        binding = ActivitySubscribeBinding.inflate(layoutInflater)
        setContentView(binding.root)

        ViewCompat.setOnApplyWindowInsetsListener(binding.root) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }

        // ログイン画面へのリンクのクリックリスナー
        binding.textViewLoginLink.setOnClickListener {
            val intent = Intent(this, LoginActivity::class.java)
            startActivity(intent)
            finish()
        }

        // 日付選択ダイアログの表示
        binding.editTextAge.setOnClickListener {
            showDatePickerDialog()
        }
        binding.editTextAge.keyListener = null // キーボードが表示されないように設定

        // 会員登録ボタンのクリックリスナー
        binding.buttonSubscribe.setOnClickListener {
            // バリデーションチェックの例
            if (binding.editTextUsername.text.isNullOrEmpty()) {
                Toast.makeText(this, "ユーザー名を入力してください", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }

            // 各ビューから値を取得
            val userName = binding.editTextUsername.text.toString()
            val mailAddress = binding.editTextEmail.text.toString()
            val tel = binding.editTextPhone.text.toString()

            // RadioButtonの選択状態を取得
            val genderId = binding.radioGroupGender.checkedRadioButtonId
            val gender = if (genderId != -1) {
                // ビューバインディングを使ってRadioButtonを取得
                binding.root.findViewById<android.widget.RadioButton>(genderId).text.toString()
            } else {
                "未選択"
            }

            val pass = binding.editTextPassword.text.toString()
            val passCheck = binding.editTextConfirmPassword.text.toString()
            val age = binding.editTextAge.text.toString()

            Log.i("SubscribeData", "ユーザー名: $userName")
            Log.i("SubscribeData", "メールアドレス: $mailAddress")
            Log.i("SubscribeData", "性別: $gender")
            Log.i("SubscribeData", "生年月日: $age")

            // DB登録処理
            api.sendData()
        }
    }

    /**
     * 日付選択ダイアログを表示するプライベートメソッド
     */
    private fun showDatePickerDialog() {
        val calendar = Calendar.getInstance()
        val year = calendar.get(Calendar.YEAR)
        val month = calendar.get(Calendar.MONTH)
        val day = calendar.get(Calendar.DAY_OF_MONTH)

        val datePickerDialog = DatePickerDialog(
            // ここを変更
            this, android.R.style.Theme_Holo_Light_Dialog, // テーマを追加
            { _, selectedYear, selectedMonth, selectedDay ->
                val selectedDate = "${selectedYear}年${selectedMonth + 1}月${selectedDay}日"
                binding.editTextAge.setText(selectedDate)
            },
            year,
            month,
            day
        )
        // ダイアログのタイトルを非表示にすると、より見やすくなります
        datePickerDialog.setTitle("")
        datePickerDialog.show()
    }
}
