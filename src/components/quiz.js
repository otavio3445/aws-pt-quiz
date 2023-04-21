import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

function Quiz({ questions, title }) {

    const [pergunta, setpergunta] = useState(0)

    function checkPerguntas() {
        if (pergunta < (questions.length - 1)) {
            for (let i = 0; i < questions[pergunta].respostas.length; i++) {
                document.querySelector(`#resp${i}`).style.backgroundColor = 'white'
                document.querySelector(`#resp${i}`).style.borderColor = 'white'
                document.querySelector(`#resp${i}`).checked = false
                document.querySelector(`#quest${i}`).style.color = 'white'
            }
            // let num = Math.floor(Math.random() * (questions.length - 0)) + 0;
            return setpergunta(pergunta + 1)
        }
    }
    function backPerguntas() {
        if (pergunta > 0) {
            return setpergunta(pergunta - 1)
        }
    }

    return (
        <div className="container" style={{height: '100vh'}}>
            <div className="row">
                <div className="col-12">
                    <h1 className='titulo-pagina'>{title}</h1>
                </div>
            </div>
            <div className="row">
                <div className="quiz">
                    <div className='questionBoard'>{questions[pergunta].pergunta}</div>
                    <div className='respostaBoard'>
                        {
                            questions[pergunta].respostas.map((el, index) => {
                                return (
                                    <div key={index} id={`quest${index}`}>
                                        <input className="form-check-input" type="radio" name="resposta" id={`resp${index}`} onChange={(e) => {
                                            for (let i = 0; i < questions[pergunta].respostas.length; i++) {
                                                if (index === i) {
                                                    document.querySelector(`#resp${i}`).style.backgroundColor = el.correct ? 'lightgreen' : 'red'
                                                    document.querySelector(`#resp${i}`).style.borderColor = el.correct ? 'lightgreen' : 'red'
                                                    document.querySelector(`#quest${i}`).style.color = el.correct ? 'lightgreen' : 'red'
                                                } else {
                                                    document.querySelector(`#resp${i}`).style.backgroundColor = 'white'
                                                    document.querySelector(`#resp${i}`).style.borderColor = 'white'
                                                    document.querySelector(`#quest${i}`).style.color = 'white'
                                                }
                                            }
                                        }} />
                                        <label htmlFor={`resp${index}`}>{el.name}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <div className="row adjust-padding">
                <div className="col-6">
                    <Button className='btn btn-warning' onClick={() => backPerguntas()} disabled={pergunta > 0 ? false : true}>Pergunta Anterior</Button>
                    <Button onClick={() => checkPerguntas()} disabled={pergunta < (questions.length - 1) ? false : true}>Próxima Pergunta</Button>
                </div>
                <div className="col-6" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button className='btn btn-secondary' onClick={() => window.location.href = "/"}>Página Inicial</Button>
                </div>
            </div>
        </div>
    )
}

export default Quiz