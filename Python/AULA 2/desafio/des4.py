#Calculador de volume
pi = 3.1416
raio = float(input("Digite o raio de seu objeto:"))
altura = float(input("Digite a altura de seu objeto:"))
volume = pi * (raio**2) * altura
print(f"O volume de seu objeto é {volume:.2f}")