timeA = int(input("Digite a quantidade de gols que o time A marcou:"))
timeB = int(input("Digite a quantidade de gols que o time B marcou:"))
if (timeA == timeB):
    print("Esse jogo deu empate")
elif (timeA <= timeB):
    print("Time B venceu")
elif (timeA >= timeB):
    print("Time A venceu")