base = float(input("Digite a base do retângulo:"))
altura = float(input("Digite a altura do retângulo:"))
area = base * altura
perimetro = (base*2) + (altura * 2)
print(f"O retângulo cujo, a base é de {base} \n a altura é de {altura} \n"
      f"possui uma area de {area:.2f} \n e um perímetro de {perimetro:.2f}")