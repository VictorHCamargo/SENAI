numeros = [1,2,5,10,56,18,7,25,12,9]
contador = 0
somador = 0
maior = 0
menor = 2000000000
for numero in numeros:
    somador = somador + numero
    contador = contador + 1
    if numero > maior:
        maior = numero
    if numero < menor:
        menor = numero
media = somador / contador
print(f"A média dentro desses números é {media:.2f}")
print(f"O maior número dentro dessa lista de números é {maior}")
print(f"O menor número dentro dessa lista de números é {menor}")