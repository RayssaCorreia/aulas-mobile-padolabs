package com.example.catalogodigital

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.Toast
import androidx.cardview.widget.CardView
import com.google.android.material.appbar.MaterialToolbar

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

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

        val fde600wCard = findViewById<CardView>(R.id.fde600wCard);
        fde600wCard.setOnClickListener{
            startActivity(Intent(this, Fde_600w_Page::class.java))
        }

        val fde300wCard = findViewById<CardView>(R.id.fde300wCard);
        fde300wCard.setOnClickListener{
            startActivity(Intent(this, Fde_300w_Page::class.java))
        }

        val fde500ProCard = findViewById<CardView>(R.id.fde500ProCard);
        fde500ProCard.setOnClickListener{
            startActivity(Intent(this, fde_500_pro_Page::class.java))
        }

        val fde201rCard = findViewById<CardView>(R.id.fde201RCard);
        fde201rCard.setOnClickListener{
            startActivity(Intent(this, Fde_201R_Page::class.java))
        }

    }
}