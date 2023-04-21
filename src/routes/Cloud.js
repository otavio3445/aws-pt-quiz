import React from 'react'
import Quiz from '../components/quiz'

function Cloud() {
  const questions = [
    {
      pergunta: "A Cosmo Property precisa fazer upload de vídeos de inspeção de grandes propriedades para buckets S3 usando o upload de várias partes. Que tipo de princípio de projeto esse método segue?",
      respostas: [
        {
          name: "Pense Paralelo",
          correct: true
        },
        {
          name: "Design Escalável",
          correct: false
        },
        {
          name: "Componentes Desacoplados",
          correct: false
        },
        {
          name: "Elasticidade",
          correct: false
        },
      ]
    },
    {
      pergunta: "A Cosmo Property deseja que seus sistemas resistam a falhas. Que tipo de sistema eles devem projetar para conseguir isso?",
      respostas: [
        {
          name: "Altamente disponível",
          correct: true
        },
        {
          name: "Resiliente",
          correct: false
        },
        {
          name: "Elástico",
          correct: false
        },
        {
          name: "Confiável",
          correct: false
        },
      ]
    },
    {
      pergunta: "Implantar suas Instâcias EC2 em múltiplas Zonas de Disponibilidade ajudará a atingir qual conceito de Núvem?",
      respostas: [
        {
          name: "Escalabilidade",
          correct: false
        },
        {
          name: "Alta Disponibilidade",
          correct: true
        },
        {
          name: "Automação",
          correct: false
        },
        {
          name: "Elasticidade",
          correct: false
        },
      ]
    },
    {
      pergunta: "Garantir que você tenha rastreabilidade é fundamental na AWS. A rastreabilidade normalmente se enquadra em qual pilar de design da AWS?",
      respostas: [
        {
          name: "Eficiência de Performance",
          correct: false
        },
        {
          name: "Excelência Operacional",
          correct: false
        },
        {
          name: "Otimização de Custos",
          correct: false
        },
        {
          name: "Segurança",
          correct: true
        },
      ]
    },
    {
      pergunta: "Como você pode garantir um sistema altamente disponível ao configurar um balanceador de carga?",
      respostas: [
        {
          name: "Configure o balanceador de carga para rotear o tráfego em várias Regiões",
          correct: false
        },
        {
          name: "Configure o balanceador de carga para rotear o tráfego em vários Locais de Borda",
          correct: false
        },
        {
          name: "Configure mais de um ALB",
          correct: false
        },
        {
          name: "Configure o balanceador de carga para rotear o tráfego em várias Zonas de Disponibilidade",
          correct: true
        },
      ]
    },
    {
      pergunta: "Se você quiser um backup de um Volume EBS, o que você deveria fazer?",
      respostas: [
        {
          name: "Criar um EBS Instântaneo (Snapshot)",
          correct: true
        },
        {
          name: "Armazenar o Volume EBS em um DynamoDB",
          correct: false
        },
        {
          name: "Armazenar o Volume EBS em um S3",
          correct: false
        },
        {
          name: "Armazenar o Volume EBS em um Banco de Dados RDS",
          correct: false
        },
      ]
    },
    {
      pergunta: "No AWS Well-Architected Framework, qual das opções a seguir NÃO é um princípio de design de segurança para projetar soluções na AWS?",
      respostas: [
        {
          name: "Aplicar segurança apenas na borda da rede",
          correct: true
        },
        {
          name: "Proteja os dados em repouso & trânsito",
          correct: false
        },
        {
          name: "Ativar Rastreabilidade",
          correct: false
        },
        {
          name: "Implemente uma base de identidade forte",
          correct: false
        },
      ]
    },
    {
      pergunta: "A Sun Solar possui um balanceador de carga para rotear seu tráfego para diferentes instâncias do EC2. Eles precisam ser capazes de aumentar ou diminuir automaticamente com base nas demandas de mudança da carga de trabalho. Qual das opções a seguir descreve essa abordagem?",
      respostas: [
        {
          name: "Resiliência",
          correct: false
        },
        {
          name: "Escalabilidade",
          correct: false
        },
        {
          name: "Elasticidade",
          correct: true
        },
        {
          name: "Segurança",
          correct: false
        },
      ]
    },
  ]
  return (
    <Quiz title="Conceitos de Núvem" questions={questions}/>
  )
}

export default Cloud