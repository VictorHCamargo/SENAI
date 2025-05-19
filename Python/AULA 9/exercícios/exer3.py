qnt_analisadas = media = soma = 0
while True:
    qnt_analisadas = qnt_analisadas + 1
    pessoa = float(input(f"Insira a temperatura registrada da pessoa[{qnt_analisadas}] (Para sair digite -1):"))
    if pessoa == -1:
        break
    elif pessoa <= 37.2:
        soma = soma + pessoa
        print(f"A pessoa[{qnt_analisadas}] está no estado normal.")
    elif pessoa > 37.2 and pessoa <= 38:
        soma = soma + pessoa
        print(f"A pessoa[{qnt_analisadas}] está no estado febril.")
    elif pessoa > 38 and pessoa <= 39:
        soma = soma + pessoa
        print(f"A pessoa[{qnt_analisadas}] está com febre.")
    elif pessoa > 39:
        soma = soma + pessoa
        print(f"A pessoa[{qnt_analisadas}] está com febre alta.)")
media = soma/(qnt_analisadas-1)
print(f"A quantidade de pessoas analisadas foi {qnt_analisadas-1}, é a média deles foi {media:.2f}")