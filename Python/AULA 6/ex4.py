#Receber valores dos números reais.
numeroreal1 = float(input("Digite um número real aleatório:"))
numeroreal2 = float(input("Digite um outro número real aleatório:"))
print("Agora, vamos partir para as operações.")
resul_soma = float(input(f"{numeroreal1} + {numeroreal2} ="))
resul_sub = float(input(f"{numeroreal1} - {numeroreal2} ="))
resul_multi = float(input(f"{numeroreal1} * {numeroreal2} ="))
resul_div = float(input(f"{numeroreal1} / {numeroreal2} ="))

if resul_soma == numeroreal1 + numeroreal2:
    print("Soma deu correto!")
else:
    print(f"Deu incorreto. O resultado correto é {numeroreal2 + numeroreal1}")
if resul_sub == numeroreal1 - numeroreal2:
    print("Subtração deu correto!")
else:
    print(f"Deu incorreto. O resultado correto é {numeroreal1 - numeroreal2}")
if resul_multi == numeroreal1 * numeroreal2:
    print("Multiplicação deu correto!")
else:
    print(f"Deu incorreto. O resultado correto é {numeroreal2 * numeroreal1}")
if resul_div == numeroreal1 / numeroreal2:
    print("Divisão deu correto!")
else:
    print(f"Deu incorreto. O resultado correto é {numeroreal1 / numeroreal2}")