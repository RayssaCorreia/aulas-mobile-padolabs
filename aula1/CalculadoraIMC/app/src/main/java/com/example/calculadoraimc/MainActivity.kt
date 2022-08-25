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

        val idade = findViewById<EditText>(R.id.cmpIdade)
        val peso = findViewById<EditText>(R.id.cmpPeso)
        val altura = findViewById<EditText>(R.id.cmpAltura)

        val mulher = findViewById<Button>(R.id.btnMulher)
        val homem = findViewById<Button>(R.id.btnHomen)
        val calcular = findViewById<Button>(R.id.btnCalcular)

        val resultado = findViewById<TextView>(R.id.campResultado)


        calcular.setOnClickListener {
            val Altura = altura.text.toString().toDouble()
            val Peso = peso.text.toString().toDouble()

            val imc = (Peso/(Altura*Altura))

            if (imc < 18.5 ){
                resultado.setText("Abaixo do peso")
            } else if (imc >= 18.5 && imc <= 24.9){
                resultado.setText("Peso normal")
            } else if(imc >= 25 && imc <= 29.9){
                resultado.setText("Exesso de Peso")
            } else if(imc >= 30 && imc <= 34.9){
                resultado.setText("Obsidade grau 1")
            } else if(imc >= 35 && imc <= 39.9) {
                resultado.setText("Obsidade grau 2")
            } else if(imc >= 40) {
                resultado.setText("Obsidade grau 3")
            }
        }
    }
}

