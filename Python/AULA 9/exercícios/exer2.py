num = [10,12,67,20,90,64,10,8,9,1]
maior = media = indice = soma = 0
menor = 10000000000000000000000000
while indice < 10:
    soma = soma + num[indice]
    if num[indice] >=maior:
        maior = num[indice]
    if num[indice] <= menor:
        menor = num[indice]
    indice = indice + 1
media = soma/indice
print(f"O maior valor é {maior}, e o menor valor é {menor}, a média é {media:.2f}")
