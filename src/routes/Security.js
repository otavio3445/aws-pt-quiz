import React from 'react'
import Quiz from '../components/quiz'

function Security() {
  const questions = [
    {
      pergunta: "Qual das seguintes conformidades atesta o fato de que a Plataforma AWS atendeu ao padrão dos EUA para armazenamento seguro de registros médicos?",
      respostas: [
        {
          name: "HIPPA",
          correct: false
        },
        {
          name: "GLBA",
          correct: false
        },
        {
          name: "HIPAA",
          correct: true
        },
        {
          name: "HITECH",
          correct: false
        },
      ]
    },
    {
      pergunta: "O que significa 'Autorização' quando se trata de segurança da AWS?",
      respostas: [
        {
          name: "Avaliando quais permissões um usário tem",
          correct: true
        },
        {
          name: "Logando no console",
          correct: false
        },
        {
          name: "Um usuário que delega acesso a outro usuário temporariamente",
          correct: false
        },
        {
          name: "Identificando quem está acessando o sistema",
          correct: false
        },
      ]
    },
    {
      pergunta: "Para o Console de gerenciamento da AWS, qual das seguintes credenciais é necessária?",
      respostas: [
        {
          name: "Seu token de segurança",
          correct: false
        },
        {
          name: "Seu usuário e senha",
          correct: true
        },
        {
          name: "Sua chave de acesso",
          correct: false
        },
        {
          name: "MFA",
          correct: false
        },
      ]
    },
    {
      pergunta: "Quais princípios afirmam que os usuários devem ter acesso apenas aos recursos de que precisam?",
      respostas: [
        {
          name: "Pincípio IAM",
          correct: false
        },
        {
          name: "Princípio de Acesso a Recursos",
          correct: false
        },
        {
          name: "Princípio de Segurança",
          correct: false
        },
        {
          name: "Princípio do menor privilégio",
          correct: true
        },
      ]
    },
    {
      pergunta: "Qual das opções a seguir é uma camada de segurança opcional para gerenciar o tráfego dentro e fora de uma VPC e está anexada a uma sub-rede dentro dessa VPC?",
      respostas: [
        {
          name: "Network ACL",
          correct: true
        },
        {
          name: "Firewall de Aplicação Web",
          correct: false
        },
        {
          name: "VPC Flow Logs",
          correct: false
        },
        {
          name: "Grupo de Segurança",
          correct: false
        },
      ]
    },
    {
      pergunta: "Na conta da AWS de compras da empresa, um funcionário do departamento de compras é configurado como um usuário da AWS. Para reconciliar os relatórios no final de cada mês, o membro da equipe precisa acessar um aplicativo executado no EC2 na conta de contas a pagar da AWS da empresa. Qual das opções a seguir é o método mais seguro e operacionalmente eficiente de conceder acesso ao aplicativo de contas a pagar a este funcionário?",
      respostas: [
        {
          name: "Invoque uma função do AWS Lambda para executar o aplicativo na conta de contas a pagar da AWS",
          correct: false
        },
        {
          name: "Faça com que o usuário solicite credenciais de segurança temporárias para o aplicativo assumindo uma função",
          correct: true
        },
        {
          name: "Configure a integração do Active Directory para poder federar o acesso do membro da equipe à conta de contas a pagar da AWS.",
          correct: false
        },
        {
          name: "Criar um usuário para o funcionário na contas a pagar da conta AWS",
          correct: false
        },
      ]
    },
    {
      pergunta: "De que maneira o AWS Shield Standard protege seu ambiente?",
      respostas: [
        {
          name: "Analisando o tráfego de aplicativos de entrada em busca de ataques conhecidos",
          correct: false
        },
        {
          name: "Analisando suas Instâncias em busca de vírus",
          correct: false
        },
        {
          name: "Analisando o tráfego de aplicativos de saída em busca de informações confidenciais",
          correct: false
        },
        {
          name: "Bloqueando ataques DDOS",
          correct: true
        },
      ]
    },
  ]
  return (
    <Quiz title="Segurança" questions={questions}/>
  )
}

export default Security