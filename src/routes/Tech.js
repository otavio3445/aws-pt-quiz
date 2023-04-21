import React from 'react';
import Quiz from '../components/quiz';

function Tech() {
  const questions = [
    {
      pergunta: "Qual tipo de Elastic Load Balancer melhor te ajudaria a hospedar um website?",
      respostas: [
        {
          name: "Web",
          correct: false
        },
        {
          name: "Clássico",
          correct: false
        },
        {
          name: "Aplicação",
          correct: true
        },
        {
          name: "Rede",
          correct: false
        },
      ]
    },
    {
      pergunta: "Qual das opções abaixo permite que você restrinja acesso a objetos em um Bucket S3?",
      respostas: [
        {
          name: "Listas de controle de acesso",
          correct: true
        },
        {
          name: "Políticas de acesso",
          correct: false
        },
        {
          name: "Listas de acesso a Bucket",
          correct: false
        },
        {
          name: "Listas de controle de Bucket",
          correct: false
        },
      ]
    },
    {
      pergunta: "Qual dos seguintes descreve precisamente um típico caso de uso no qual o serviço AWS CodePipeline pode ser utilizado?",
      respostas: [
        {
          name: "Para compilar e lançar um microsserviço em uma instância Amazon EC2 ou uma função AWS Lambda",
          correct: false
        },
        {
          name: "Para seguramente compartilhar código, colaborar no código fonte, controle de versão e armazenar binários em uma plataforma AWS totalmente gerenciada que escala perfeitamente",
          correct: false
        },
        {
          name: "Para compor um código em um ambiente de desenvolvimento integrado, que permite desenvolvedores rodar, testar e debbugar componentes de um microsserviço dinâmico",
          correct: false
        },
        {
          name: "Para orquestrar e automatizar as várias fases envolvidas na release de atualizações em linha da aplicação com um modelo pré-definido de release",
          correct: true
        },
      ]
    },
    {
      pergunta: "Você acaba de criar um novo bucket e colocar um arquivo nele. Este vai ser automaticamente visível para todos na internet?",
      respostas: [
        {
          name: "Apenas se você tiver uma NAT Gateway",
          correct: false
        },
        {
          name: "Não - Por padrão, buckets e seus conteúdos são privados",
          correct: true
        },
        {
          name: "Sim - por padrão, buckets e seus conteúdos são públicos",
          correct: false
        },
        {
          name: "Apenas se você tiver uma Internet Gateway",
          correct: false
        },
      ]
    },
    {
      pergunta: "Você precisa de um 'Hard Disk Virtual' para sua instância EC2. Qual das seguintes você escolheria?",
      respostas: [
        {
          name: "S3",
          correct: false
        },
        {
          name: "RDS",
          correct: false
        },
        {
          name: "EBS",
          correct: true
        },
        {
          name: "DDB",
          correct: false
        },
      ]
    },
    {
      pergunta: "Você precisa implementar um serviço automatizado que verificará seu ambiente AWS com o objetivo de ambos, melhorar a segurança e reduzir custos. Qual serviço você deveria usar?",
      respostas: [
        {
          name: "CloudTrail",
          correct: false
        },
        {
          name: "Config Rules",
          correct: false
        },
        {
          name: "Service Catalog",
          correct: false
        },
        {
          name: "Trusted Advisor",
          correct: true
        },
      ]
    },
    {
      pergunta: "Você visita um cliente e é pego em uma discussão de corredor. Pedem que você a novA (2019) estrutura de URL para objetos no S3. Qual desses você usa como descrição?",
      respostas: [
        {
          name: "HTTPS, então o endpoint regional da AWS S3, então ponto, então o nome do bucket, barra, então o nome do objeto",
          correct: false
        },
        {
          name: "HTTPS, então o endpoint regional da AWS S3, então barra, então o nome do bucket, então barra, então o nome do objeto",
          correct: true
        },
        {
          name: "HTTPS, então o nome do bucket, então ponto, então o endpoint regional da AWS S3, então barra, então o nome do objeto",
          correct: false
        },
        {
          name: "HTTP, então o nome do objeto, então ponto, então o endpoint regional da AWS S3, então ponto, então o nome do bucket",
          correct: false
        },
      ]
    },
  ]
  return (
    <Quiz title="Tecnologia" questions={questions}/>
  )
}

export default Tech