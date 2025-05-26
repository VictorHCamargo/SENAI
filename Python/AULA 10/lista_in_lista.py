compra = [10.2,3.35,16.3,["Tomate","Sabonete","Arroz"]]
print(compra)
produtos = compra[3]
print(produtos)
total = compra[0]+compra[1]+compra[2]
print(total)
letra = ["a","b","c"]
num = [2,4,6]
tudo = [letra,num]
print(tudo)
print(f"Letras: {tudo[0]}")
print(f"Numeros: {tudo[1]}")

#Método len e index
letra = ["a","b","c"]
print(f"Tamanho da lista: {len(letra)}")
print(f"Endereço da Letra b: {letra.index('b')}")