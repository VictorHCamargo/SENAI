salario = float(input("Digite seu salário antigo:"))
aumentopercentual = float(input("Digite o aumento percentual de seu salário:"))
aumentodosalario = salario * (aumentopercentual/100)
salarioatual = aumentodosalario + salario
print(f"Seu salário atual é {salarioatual:.2f}")