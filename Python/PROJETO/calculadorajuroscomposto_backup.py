#Calculadora de Juros Compostos
#Definição das variaveis globais sobre impostos
global imposto_de_renda
global imposto_operacaofinanceira
#Algumas aplicações do juros compostos
def cdb():
    capital = float(input("Insira o valor de seu capital inicial do seu investimento:"))
    juros = float(input("Insira a porcentagem da taxa de juros(anual)(%):"))
    tempo = int(input("Insira o tempo total que ficará seu dinheiro investindo (meses):"))
    aporte = float(input("Insira o valor do aporte mensal:"))
    tempo_dias = tempo * 30
    if (tempo_dias <= 30):
        imposto_operacaofinanceira = 99 - (tempo_dias * 3)
    elif (tempo_dias <= 180):
        imposto_de_renda = 22.5
    elif (tempo_dias >= 181 and tempo_dias <= 360):
        imposto_de_renda = 20
    elif (tempo_dias >= 361 and tempo_dias <= 720):
        imposto_de_renda = 17.5
    else:
        imposto_de_renda = 15
    juros_mensais = ((1+juros)**(1/12))-1
    capital_final = (capital * (1+(juros_mensais/100))**tempo) + ((aporte * (((juros_mensais/100)+1)**tempo-1))/(juros_mensais/100))
    valor_rendido = capital - capital_final
    impostos = valor_rendido
    print(f"Seu investimento/empréstimo com uma taxa de juros de {juros}% por ano \n Em um tempo de {tempo} meses, deu R${capital_final:.2f}")
    escolha = int(input('''
    Deseja continuar calculando:
    1 - Sim, voltar ao menu;
    2 - Não, sair;
    '''))
    if (escolha == 1):
        menu()
    else:
        pass
#Algumas aplicações do juros compostos
def lci():
    capital = float(input("Insira o valor de seu capital inicial do seu investimento:"))
    juros = float(input("Insira a porcentagem da taxa de juros(anual)(%):"))
    tempo = int(input("Insira o tempo total que ficará seu dinheiro investindo (meses):"))
    aporte = float(input("Insira o valor do aporte mensal:"))
    juros_mensais = ((1+juros)**(1/12))-1
    capital_final = (capital * (1+(juros_mensais/100))**tempo) + ((aporte * (((juros_mensais/100)+1)**tempo-1))/(juros_mensais/100))
    print(f"Seu investimento/empréstimo com uma taxa de juros de {juros}% por ano \n Em um tempo de {tempo} meses, deu R${capital_final:.2f}")
    escolha = int(input('''
    Deseja continuar calculando:
    1 - Sim, voltar ao menu;
    2 - Não, sair;
    '''))
    if (escolha == 1):
        menu()
    else:
        pass
#Algumas aplicações do juros compostos
def tesouro():
    capital = float(input("Insira o valor de seu capital inicial do seu investimento:"))
    juros = float(input("Insira a porcentagem da taxa de juros(anual)(%):"))
    tempo = int(input("Insira o tempo total que ficará seu dinheiro investindo (meses):"))
    aporte = float(input("Insira o valor do aporte mensal:"))
    juros_mensais = ((1+juros)**(1/12))-1
    capital_final = (capital * (1+(juros_mensais/100))**tempo) + ((aporte * (((juros_mensais/100)+1)**tempo-1))/(juros_mensais/100))
    print(f"Seu investimento/empréstimo com uma taxa de juros de {juros}% por ano \n Em um tempo de {tempo} meses, deu R${capital_final:.2f}")
    escolha = int(input('''
    Deseja continuar calculando:
    1 - Sim, voltar ao menu;
    2 - Não, sair;
    '''))
    if (escolha == 1):
        menu()
    else:
        pass
#Definição da formula para escolha de periódo mensal
def mensal_simples():
    capital = float(input("Insira o valor de seu capital inicial do seu investimento:"))
    juros = float(input("Insira a porcentagem da taxa de juros (%):"))
    tempo = int(input("Insira o tempo total que ficará seu dinheiro investindo (meses):"))
    tempo_mensal = tempo / 12
    capital_final = capital * ((juros/100)+1)**tempo_mensal
    print(f"Seu investimento/empréstimo com uma taxa de juros de {juros}% \n Em um tempo de {tempo} meses, deu R${capital_final:.2f}")
    escolha = int(input('''
    Deseja continuar calculando:
    1 - Sim, voltar ao menu;
    2 - Não, sair;
    '''))
    if (escolha == 1):
        menu()
    else:
        pass
#Definição da formula para escolha de periódo anual
def anual_simples():
    capital = float(input("Insira o valor de seu capital inicial do seu investimento:"))
    juros = float(input("Insira a porcentagem da taxa de juros (%):"))
    tempo = int(input("Insira o tempo total que ficará seu dinheiro investindo (meses):"))
    capital_final = capital * ((juros/100)+1)**tempo
    print(f"Seu investimento/empréstimo com uma taxa de juros de {juros}% \n Em um tempo de {tempo} ano(s), deu R${capital_final:.2f}")
    escolha = int(input('''
    Deseja continuar calculando:
    1 - Sim, voltar ao menu;
    2 - Não, sair;
    '''))
    if (escolha == 1):
        menu()
    else:
        pass
#Dicionario definindo a puxação das funçoes para seleção de periodos
options = {
            1: mensal_simples,
            2: anual_simples
}
#Tipos de aplicações de juros simples
def juros_simples():
    opcao = int(input('''
    Escolha dentre as opções abaixo:
    1 - Empréstimo de curto-prazo;
    2 - Investimentos em renda fixa de curto-prazo;
    '''))
    if (opcao == 1):
        opcao_tempo = int(input('''
    Escolha o tipo de periódo que você irá realizar:
    1 - mensal;
    2 - anual;
    '''))
#Variavel que puxa o dicionario, para leva-la as funçoes escolhidas
        acao = options.get(opcao_tempo)
        if acao:
            acao()
        else:
            print("Opção inválida")
    else:
        opcao_tempo = int(input('''
    Escolha o tipo de periódo que você irá realizar:
    1 - mensal;
    2 - anual;
    '''))
        acao = options.get(opcao_tempo)
        if acao:
            acao()
        else:
            print("Opção inválida")
#Dicionário para chamar as funções de tipo de investimento de juros compostos
optio = {
    1: cdb,
    2: lci,
    3: tesouro
}
#Tipos de aplicações de juros compostos
def juros_compostos():
    opcao_composto = int(input('''
    Escolha o tipo de investimento que deseja realizar:
    1 - CDB;
    2 - LCIsLCAs;
    3 - Tesouro Direto;
    '''))
    acao = optio.get(opcao_composto)
    if acao:
        acao()
    else:
        print("Opção inválida")
#Dicionario que puxa as funções principais
option = {
    1: juros_simples,
    2: juros_compostos
}
#Função que demonstra leva paras demais funções
def menu():
    opcao = int(input('''
    Escolha dentre as opções abaixo:
    1- Calcular juros simples;
    2- Calcular juros compostos;
    '''))
    acao = option.get(opcao)
    if acao:
        acao()
    else:
        print("opção inválida")
#Chamada da função que demonstra as opções
menu()