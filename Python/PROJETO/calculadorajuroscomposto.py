#Calculadora de Juros Compostos
capital = float(input("Insira o valor de seu capital inicial do seu investimento:"))
juros = float(input("Insira a porcentagem da taxa de juros (%):"))
tempo = int(input("Insira o tempo total que ficará seu dinheiro investindo (meses):"))
tempo_mensal = tempo / 12
if (juros == 0 or juros == ""):
    print("Você não adicionou uma taxa de juros.")
    juros = float(input("Por favor insira:"))
    capital_final = capital * ((juros/100)+1)**tempo_mensal
    print(capital_final)
else:
    capital_final = capital * ((juros/100)+1)**tempo_mensal
    print(capital_final)