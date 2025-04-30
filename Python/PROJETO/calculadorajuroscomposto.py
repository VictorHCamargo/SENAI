#Calculadora de Juros Compostos

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
        options = {
            1: mensal_simples,
            2: anual_simples
        }
    else:
        opcao_tempo = int(input('''
    Escolha o tipo de periódo que você irá realizar:
    1 - mensal;
    2 - anual;
                                '''))
        options = {
            1: mensal_simples,
            2: anual_simples
        }
def mensal_simples():
    capital = float(input("Insira o valor de seu capital inicial do seu investimento:"))
    juros = float(input("Insira a porcentagem da taxa de juros (%):"))
    tempo = int(input("Insira o tempo total que ficará seu dinheiro investindo (meses):"))
    tempo_mensal = tempo / 12
    capital_final = capital * ((juros/100)+1)**tempo_mensal
    print(f"Seu investimento/empréstimo com uma taxa de juros de {juros}% \n Em um tempo de {tempo} meses, deu R${capital_final}")
    return
def anual_simples():
    capital = float(input("Insira o valor de seu capital inicial do seu investimento:"))
    juros = float(input("Insira a porcentagem da taxa de juros (%):"))
    tempo = int(input("Insira o tempo total que ficará seu dinheiro investindo (meses):"))
    capital_final = capital * ((juros/100)+1)**tempo
    print(f"Seu investimento/empréstimo com uma taxa de juros de {juros}% \n Em um tempo de {tempo} ano(s), deu R${capital_final}")
    return
def juros_compostos():
    print("Você foi enganado hehehe")
options = {
    1: juros_simples,
    2: juros_compostos
}
def menu():
    opcao = int(input('''
    Escolha dentre as opções abaixo:
    1- Calcular juros simples;
    2- Calcular juros compostos;
                      '''))
    acao = options.get(opcao)
    if acao:
        acao()
    else:
        print("opção inválida")
menu()