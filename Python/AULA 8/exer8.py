numero = [1]
for number in numero:
    nome = input("Digite um nome de usuário:")
    senha = input("Digite uma senha:")
    if nome == senha:
        print("A senha não pode ser igual o nome de usuário.")
        numero.append(number)
    else:
        print("Acesso liberado.")