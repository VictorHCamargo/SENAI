# selecionador de filas
normal = []
preferencial = []
lista_idade = [55,11,2,1,67,89,100]
for idade in lista_idade:
    if (idade >= 60):
        preferencial.extend([idade])
    else:
        normal.extend([idade])
print("Esses são da fila preferencial:")
for idade in preferencial:
    print(idade)
print("Acabou da fila preferencial.")
print("Esses são da fila normal:")
for idade in normal:
    print(idade)
print("Acabou todas as pessoas.")

    