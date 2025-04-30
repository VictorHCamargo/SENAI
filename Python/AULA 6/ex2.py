produto = float(input("Digite o valor de sua compra:"))
prestacao = int(input("Digite em quantas pretações foi dividida sua compra:"))
print(f"Sua compra parcelada em {prestacao} meses," 
      f"está com um valor por parcela de R${produto/prestacao:.2f}")