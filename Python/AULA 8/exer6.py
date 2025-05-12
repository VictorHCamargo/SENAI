palavra = str(input("Digite uma palavra aleatória para deixá-la de trás para frente:"))
palavra_invertida = []
inversao = ""
for letra in palavra:
    palavra_invertida.append(letra)
palavra_invertida.reverse()
for letra in palavra_invertida:
    inversao += letra
print(inversao)