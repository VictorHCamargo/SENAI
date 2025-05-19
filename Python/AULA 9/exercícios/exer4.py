idade_h = idade_m = idade_g = media_h = media_m = media_g = soma_h = soma_w = qnt_pessoas = 0
while True:
    qnt_pessoas = qnt_pessoas + 1
    sexo = input(f"A pessoa[{qnt_pessoas}] qual é o sexo dela: (homem/mulher)(Para sair digite sair.)").upper()
    if sexo == "MULHER":
        idade = int(input(f"{sexo} digite sua idade:"))
        idade_m = idade_m + idade
        soma_w = soma_w + 1
    elif sexo == "HOMEM":
        idade = int(input(f"{sexo} digite sua idade:"))
        idade_h = idade_h + idade
        soma_h = soma_h + 1
    elif sexo == "SAIR":
        break
    else:
        print("Resposta incorreta!!")
        qnt_pessoas = qnt_pessoas - 1
idade_g = idade_h + idade_m
media_h = idade_h/soma_h
media_m = idade_m/soma_w
media_g = idade_g/(soma_h + soma_w)
print(f'''
      A idade média do grupo é de {media_g:.2f} anos;
      A idade média das mulheres foram de {media_m:.2f} anos;
      A idade média dos homens foram de {media_h:.2f} anos;
      ''')
