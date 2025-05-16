import pyshorteners as ps

url = "https://encycolorpedia.pt/fab97e" #Colocar url que deseja ser encurtada
url_encurtada = ps.Shortener().tinyurl.short(url)
print(url_encurtada)