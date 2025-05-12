quantidade = int(input("Digite a quantidade de pessoas do grupo:"))
woman = man = idade_woman = idade_man = contador = 0
while contador < quantidade:
    contador += 1
    sexo = str(input(f"Qual e o sexo da pessoa {contador}? (feminino/masculino)"))
    if sexo == "feminino":
        idade = int(input("Digite sua idade:"))
        idade_woman += idade
        woman += 1
    elif sexo == "masculino":
        idade = int(input("Digite sua idade:"))
        idade_man += idade
        man +=1


if man == 0:
    media_woman = idade_woman / woman
    idade_total = idade_man + idade_woman
    media_total = idade_total / quantidade
    print("Não tinha nenhum homem no grupo avaliado")
    print(f"A quantidade de mulheres que inseriram sua idades foram de {woman}, e a média de idade delas foram de {media_woman}.")
    print(f"A quantidade de pessoas do grupo todo foi de {quantidade}, é a media da idade do grupo foi de {media_total}")
else:
    media_man = idade_man / man
    if woman == 0:
        idade_total = idade_man + idade_woman
        media_total = idade_total / quantidade
        print("Não tinha nenhuma mulher no grupo avaliado")
        print(f"A quantidade de homens que inseriram sua idades foram de {man}, e a média de idade deles foram de {media_man}.")
        print(f"A quantidade de pessoas do grupo todo foi de {quantidade}, é a media da idade do grupo foi de {media_total}")
    else:
        media_woman = idade_woman / woman
        idade_total = idade_man + idade_woman
        media_total = idade_total / quantidade
        print(f"A quantidade de mulheres que inseriram sua idades foram de {woman}, e a média de idade delas foram de {media_woman} anos.")
        print(f"A quantidade de homens que inseriram sua idades foram de {man}, e a média de idade deles foram de {media_man} anos.")
        print(f"A quantidade de pessoas do grupo todo foi de {quantidade}, é a media da idade do grupo foi de {media_total} anos.")