nota = float(input("Digite a primeira nota do aluno:"))
nota2 = float(input("Digite a segunda nota do aluno:"))
media = (nota + nota2)/2
if (media >= 6):
    print("Seu aluno, tirou",media ,", por conta disso, foi aprovado")
else: 
    print("Seu aluno, tirou",media ,", por conta disso, foi reprovado")
