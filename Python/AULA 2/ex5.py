#Converter F para C
tempF = int(input("Temperatura em graus Farenheit:"))
tempC = ((tempF-32)*(5/9))
print("Temperatura em graus Celsius: %f" %(tempC))
print(f"Temperatura em graus Celsius: {tempC}")
print(tempC)
print(f"Temperatura em graus C°: {tempC:.2f}")
print("Temperatura em graus Celsius: {:.2f}".format(tempC))
print("Temperatura em graus Celsius", tempC)
print(True and not False)