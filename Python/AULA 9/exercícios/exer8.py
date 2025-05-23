while True:
    nome = input("Insira seu nome:")
    senha = input("Insira uma senha:")
    if nome == senha:
        print("A senha não pode ser igual ao nome.")
        continue
    else:
        print("Acesso Liberado!!")
        break