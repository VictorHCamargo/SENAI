quantidade = int(input("Insire a quantidade de pessoas que realizaram o teste:"))
temperaturas = []
contadora = 0
soma = 0
while contadora < quantidade:
    print(f"Paciente {contadora+1}")
    temperatura = float(input("Insire a temperatura registrada no termômetro:"))
    if temperatura <= 37.2:
        print("Você está com a temperatura normal.")
    elif temperatura > 37.2 and temperatura <= 38:
        print("Você está com estado febril")
    elif temperatura > 38 and temperatura <= 39:
        print("Você está com febre")
    elif temperatura > 39:
        print("Você está com febre alta")
    contadora = contadora + 1
    temperaturas.extend({temperatura})
for temperatu in temperaturas:
    soma = soma + temperatu
media = soma / contadora
print("O relatório de hoje:")
print(f"A quantidade de pessoas analisadas foi: {contadora}")
print(f"É a media das temperaturas hoje foi de: {media:.2f}ºC")