import webbrowser
#Informe a URL do vídeo aqui:
url = "https://www.youtube.com/watch?v=8UjWwMtrETk"
download = url[:12] + "ss" + url[12:]
webbrowser.open(download)