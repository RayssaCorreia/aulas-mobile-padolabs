package com.example.calculadoraimc

import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

    val Idade = findViewById<EditText>(R.id.cmpIdade)
    val Peso = findViewById<EditText>(R.id.cmpPeso)
    val Altura = findViewById<EditText>(R.id.cmpAltura)

    val Mulher = findViewById<Button>(R.id.btnMulher)
    val Homem = findViewById<Button>(R.id.btnHomen)
    val Calcular = findViewById<Button>(R.id.btnCalcular)

    val Resultado = findViewById<TextView>(R.id.campResultado)


    Calcular.setOnClickListener {
        val imc;

    if (imc < 1.85 ){
        Resultado.setText("Abaixo do peso")
    }if (imc > 1.85 && imc < 24.9){
        Resultado.setText("Peso normal")
    }if(imc > 1.85 && imc < 24.9){
        Resultado.setText("Exesso de Peso")
    }



    }
}

