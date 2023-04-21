import React from 'react'
import Quiz from '../components/quiz'

function Pricing() {
  const questions = [
    {
      pergunta: "Como o recurso de faturamento consolidado do AWS Organizations lida com instâncias reservadas adquiridas por outra conta na organização?",
      respostas: [
        {
          name: "Todas as contas na organização são tratadas como uma conta para descontos por volume, mas não para instâncias reservadas",
          correct: false
        },
        {
          name: "O AWS Organizations não oferece suporte a nenhum volume ou benefícios de instância reservada em contas, é apenas um método de agregação de faturas",
          correct: false
        },
        {
          name: "Todas as contas na organização são tratadas como uma única conta para que qualquer conta possa receber o benefício de custo por hora",
          correct: true
        },
        {
          name: "Somente a conta master pode se beneficiar do custo-benefício por hora das instâncias reservadas",
          correct: false
        },
      ]
    },
    {
      pergunta: "Qual das seguintes afirmações sobre um Grupo de Recursos é verdadeira?",
      respostas: [
        {
          name: "Um Grupo de Recursos é uma coleção de recursos do mesmo tipo (EC2, S3, etc.) que compartilham uma ou mais tags ou partes de tags",
          correct: false
        },
        {
          name: "Um Grupo de Recursos é uma coleção de recursos que compartilham uma ou mais tags (ou partes de tags)",
          correct: true
        },
        {
          name: "Um Grupo de Recursos é uma coleção de recursos que são implantados na mesma Zona de Disponibilidade",
          correct: false
        },
        {
          name: "Um Grupo de Recursos é uma coleção de recursos do mesmo tipo (EC2, S3, etc.) que são implantados na mesma Zona de Disponibilidade",
          correct: false
        },
      ]
    },
    {
      pergunta: "Qual Instância EC2 te economizará até 90% comparado com Instâncias sob demanda?",
      respostas: [
        {
          name: "Host Dedicado",
          correct: false
        },
        {
          name: "Instância Reservada",
          correct: false
        },
        {
          name: "Instância Pontual (Spot Instance)",
          correct: true
        },
        {
          name: "Instância Dedicada",
          correct: false
        },
      ]
    },
    {
      pergunta: "Uma empresa está migrando para a Nuvem AWS e deseja usar algumas licenças usadas vinculadas ao servidor. Qual opção de compra do EC2 permite que esta empresa use licenças usadas?",
      respostas: [
        {
          name: "Agendada",
          correct: false
        },
        {
          name: "Host Dedicado",
          correct: true
        },
        {
          name: "Reservada",
          correct: false
        },
        {
          name: "Sob Demanda",
          correct: false
        },
      ]
    },
    {
      pergunta: "O que uma empresa iniciante com baixo crescimento de receita pode fazer para ser alertada quando sua despesa mensal se aproxima de 2.000?",
      respostas: [
        {
          name: "Configurar o Serviço de Email Simples da Amazon para enviar uma notificação de cobrança SNS para o email",
          correct: false
        },
        {
          name: "Configurar o Serviço Amazon Connect para enviar uma notificação de cobrança SNS para o email",
          correct: false
        },
        {
          name: "Configurar um alarme de cobrança do CloudTrail para enviar uma notificação de cobrança SNS para o email",
          correct: false
        },
        {
          name: "Configurar um alarme de cobrança do Cloudwatch para enviar uma notificação de cobrança SNS para o email",
          correct: true
        },
      ]
    },
    {
      pergunta: "Qual ferramenta você pode usar para comparar o custo de hospedagem de recursos na AWS e em um datacenter tradicional?",
      respostas: [
        {
          name: "Orçamentos AWS",
          correct: false
        },
        {
          name: "Calculador de Preços AWS",
          correct: false
        },
        {
          name: "Calculador de TCO AWS",
          correct: true
        },
        {
          name: "Alarmes de Fatura AWS",
          correct: false
        },
      ]
    },
    {
      pergunta: "Qual plano de suporte é caracterizado pelo acesso ao suporte da AWS via e-mail apenas durante o horário comercial?",
      respostas: [
        {
          name: "Business",
          correct: false
        },
        {
          name: "Básico",
          correct: false
        },
        {
          name: "Enterprise",
          correct: false
        },
        {
          name: "Developer",
          correct: true
        },
      ]
    },
  ]
  return (
    <Quiz title="Precificação" questions={questions}/>
  )
}

export default Pricing