a = int(input("Digite um valor aleátorio:"))
b = int(input("Digite outro valor aleátorio:"))
print(f"Seu primeiro valor antes da troca: {a}")
print(f"Seu segundo valor antes da troca: {b}")

a += b
b -= a
a += b
b *= -1
print(f"Seu primeiro valor depois da troca: {a}")
print(f"Seu segundo valor depois da troca: {b}")