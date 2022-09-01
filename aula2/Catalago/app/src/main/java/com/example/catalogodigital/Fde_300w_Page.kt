package com.example.catalogodigital

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.ImageView
import android.widget.Toast
import com.google.android.material.appbar.MaterialToolbar

class Fde_300w_Page : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_fde300w_page)

        val mainToolBar = findViewById<MaterialToolbar>(R.id.mainToolBar)
        mainToolBar.setNavigationOnClickListener{
            Toast.makeText(this, "Hamburger Pressionado!!!", Toast.LENGTH_SHORT).show()
        }

        mainToolBar.setOnMenuItemClickListener{ menuItem ->
            when (menuItem.itemId){
                R.id.menu_item_notifications -> {
                    Toast.makeText(this,"Ir para a página de notificaões !!!", Toast.LENGTH_SHORT).show()
                    true

                }
                R.id.menu_item_cart -> {
                    Toast.makeText(this,"Ir para a página do carrinho!!!", Toast.LENGTH_SHORT).show()
                    true
                }
                else -> false
            }
        }

        val btnComprar = findViewById<Button>(R.id.botao300w)
        btnComprar.setOnClickListener{
            val toast = Toast.makeText(this,"Ainda não implementado", Toast.LENGTH_LONG)
            toast.show()
        }

        val home = findViewById<ImageView>(R.id.logo_principal);
        home.setOnClickListener{
            startActivity(Intent(this, MainActivity::class.java))
        }

    }
}