altura = float(input("Digite a altura de seu recepiente em centímetro:"))
base = float(input("Digite a base de seu recepiente em centímetro:"))
comprimento = float(input("Digite o comprimento de seu recepiente em centímetro:"))
consumo = int(input("Digite o seu consumo de água diario:"))
capacidade = altura * base * comprimento
litro = capacidade / 1000
classificao =  litro / consumo
print(classificao)
