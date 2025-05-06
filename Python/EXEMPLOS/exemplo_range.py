início = int(input("Informe o primeiro número:"))
fim = int(input("Informe o número final:"))
salto = int(input("Informe o salto:"))
texto = "Cálculo:"
soma = 0
for numero in range(início, fim, salto):
    soma = soma + numero
    texto = texto + str(numero)
    if numero > 50:
        texto = texto + "\n Passou de 50"
        break
    if numero != fim-1:
        texto = texto + "+"
print(f"{texto}")
print(f"Soma: {soma}")