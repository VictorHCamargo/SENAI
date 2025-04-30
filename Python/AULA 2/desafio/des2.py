#Calculador de hipotenusa
import math as m
cata = 4
catb = 3
hipotenusa = ((cata**2)+(catb**2))**(1/2)
print(f"A hipotenusa do triangulo cujo os catetos, respectivamente, 4 e 3, é {hipotenusa}")
# Calculadr de hipotenusa alternativo
hipotenusaalt = m.sqrt(cata**2 + catb**2)
print(f"A hipotenusa do triangulo cujo os catetos, respectivamente, 4 e 3, é {hipotenusaalt}")