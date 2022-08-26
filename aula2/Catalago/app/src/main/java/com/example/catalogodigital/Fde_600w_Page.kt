package com.example.catalogodigital

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.Toast

class Fde_600w_Page : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_fdf600w_page)

        val btnComprar = findViewById<Button>(R.id.botao)

        btnComprar.setOnClickListener{
            val toast = Toast.makeText(this,"Ainda não implementado", Toast.LENGTH_LONG)
            toast.show()
        }
    }
}