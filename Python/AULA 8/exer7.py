numero = int(input("Digite um número que deseja fatoriá-lo:"))
fatorial = 1
for i in range(numero,0,-1):
    fatorial *= i
print(fatorial)