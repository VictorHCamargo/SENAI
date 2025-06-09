paises = "Brasil","Paraguai","Uruguai","México"
pais = paises[0]
print(pais) # Brasil
fatia = paises[1:3]
print(fatia) # ('Paraguai', 'Uruguai')
for pais in paises:
    print(pais)
lista_paises = list(paises)
print(lista_paises)
lista_paises[1] = "Colômbia"
print(lista_paises)