p1 = 6,6,5,10,2,7,8,9,10,3
p2 = 4,1,10,10,8,5,5,5,10,8
contador_p1 = contador_p2 = media_p1 = media_p2 = soma_p1 = soma_p2 =0
for numero in p1:
    contador_p1 += 1
    soma_p1 += numero
for numero in p2:
    contador_p2 += 1
    soma_p2 += numero
media_p1 = soma_p1/contador_p1
media_p2 = soma_p2/contador_p2
if media_p1 > media_p2:
    print("A turma foi melhor na Prova 1 do que na Prova 2.")
    print(f"A média foi de {media_p1:.2f}")
elif media_p2 == media_p1:
    print("A turma tirou as mesmas notas em ambas as Provas.")
    print(f"No qual a média das duas foi de {media_p1:.2f}")
else:
    print("A turma foi melhor na Prova 2 do que na Prova 1.")
    print(f"A média foi de {media_p2:.2f}")
