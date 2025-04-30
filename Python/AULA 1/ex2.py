num = float(input("Digite um número aleátorio:"))
num2 = float(input("Digite outro número aleátorio:"))
if (num > num2):
    print("O número", num,"é o maior")
    print("O número", num2,"é o menor")
else: 
    if (num == num2):
        print("Os números são iguais.")
    else: 
        if (num < num2):
            print("O número", num2,"é o maior")
            print("O número", num,"é o menor")