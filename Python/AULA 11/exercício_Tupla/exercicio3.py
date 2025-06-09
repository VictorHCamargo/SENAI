lista_1 = [1,3,5,7,9,11,13]
lista_2 = [2,4,6,8,10,12,14]
lista_3 = []
while True:
    for numero in lista_1:
        lista_3.append(numero)
        break
    for numero in lista_2:
        lista_3.append(numero)
        break
    if len(lista_3) == len(lista_1) + len(lista_2):
        break
    del lista_1[0]
    lista_1.append(1)
    del lista_2[0]
    lista_1.append(1)
print(lista_3)
lista_3.reverse()
print(lista_3)