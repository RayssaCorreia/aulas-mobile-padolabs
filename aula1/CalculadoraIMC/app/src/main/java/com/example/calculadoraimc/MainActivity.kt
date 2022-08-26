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
            val Idade = idade.text.toString().toDouble()

            val imc = (Peso/(Altura*Altura))

            if(Idade <=24){
                if (imc < 19 ){
                    resultado.setText("Peso Baixo")
                } else if (imc >= 19 && imc <= 24.9){
                    resultado.setText("Peso normal")
                } else if(imc >= 25 && imc <= 29.9){
                    resultado.setText("Pré obesidade")
                } else if(imc >= 30 && imc <= 34.9){
                    resultado.setText("Obesidade")
                } else if(imc >= 35 && imc <= 39.9) {
                    resultado.setText("Obesidade grave")
                }

            }else if(Idade >= 25 && Idade <=34){
                if (imc < 20){
                    resultado.setText("Peso Baixo")
                } else if (imc >= 20 && imc < 25){
                    resultado.setText("Peso normal")
                } else if(imc >= 25 && imc <= 30){
                    resultado.setText("Pré obesidade")
                } else if(imc >= 30 && imc <= 40){
                    resultado.setText("Obesidade")
                } else if(imc > 40) {
                    resultado.setText("Obesidade grave")
                }

            }else if (Idade >= 35 && Idade <=44){
                if (imc < 21){
                    resultado.setText("Peso Baixo")
                } else if (imc >= 21 && imc < 26){
                    resultado.setText("Peso normal")
                } else if(imc >= 26 && imc <= 31){
                    resultado.setText("Pré obesidade")
                } else if(imc >= 31 && imc <= 41){
                    resultado.setText("Obesidade")
                } else if(imc > 41) {
                    resultado.setText("Obesidade grave")
                }

            }else if (Idade >= 45 && Idade <=54){
                if (imc < 22){
                    resultado.setText("Peso Baixo")
                } else if (imc >= 22 && imc < 27){
                    resultado.setText("Peso normal")
                } else if(imc >= 27 && imc <= 32){
                    resultado.setText("Pré obesidade")
                } else if(imc >= 32 && imc <= 42){
                    resultado.setText("Obesidade")
                } else if(imc > 42) {
                    resultado.setText("Obesidade grave")
                }

            }else if (Idade >= 55 && Idade <=64){
                if (imc < 23){
                    resultado.setText("Peso Baixo")
                } else if (imc >= 23 && imc < 28){
                    resultado.setText("Peso normal")
                } else if(imc >= 28 && imc <= 33){
                    resultado.setText("Pré obesidade")
                } else if(imc >= 33 && imc <= 43){
                    resultado.setText("Obesidade")
                } else if(imc > 43) {
                    resultado.setText("Obesidade grave")
                }

            }else if(Idade >65){
                if (imc < 24){
                    resultado.setText("Peso Baixo")
                } else if (imc >= 24 && imc < 29){
                    resultado.setText("Peso normal")
                } else if(imc >= 29 && imc <= 34){
                    resultado.setText("Pré obesidade")
                } else if(imc >= 34 && imc <= 44){
                    resultado.setText("Obesidade")
                } else if(imc > 44) {
                    resultado.setText("Obesidade grave")
                }
            }

        }
    }
}

