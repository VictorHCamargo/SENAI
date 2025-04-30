idade = int(input("Digite sua idade:"))
if 5 > idade or idade < 7:
    print("Você esta classificado na categoria Infantil A")
elif 8 > idade or idade < 11:
    print("Você esta classificado na categoria Infantil B")
elif 12 > idade or idade < 13:
    print("Você esta classificado na categoria Juvenil A")
elif 14 > idade or idade < 17:
    print("Você esta classificado na categoria Juvenil B")
elif idade >= 18:
    print("Você esta classificado na categoria Adultos")
else:
    print("Você não tem idade suficiente para ser classificado")