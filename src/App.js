import './App.scss';

function App() {
  return (
    <>
      <h1 className="titulo">Escolha o tópico que deseja estudar!</h1>
      <div className="container-cartaos">
        <div className="cartao" onClick={() => window.location.href = "/cloud"}>
          <div className="face face1">
            <div className="content">
              <i className="fab fa-windows"></i>
              <h3>Conceitos de Cloud</h3>
            </div>
          </div>
        </div>
        <div className="cartao" onClick={() => window.location.href = "/pricing"}>
          <div className="face face1">
            <div className="content">
              <i className="fab fa-android"></i>
              <h3>Precificação e Contas</h3>
            </div>
          </div>
        </div>
        <div className="cartao" onClick={() => window.location.href = "/security"}>
          <div className="face face1">
            <div className="content">
              <i className="fab fa-apple"></i>
              <h3>Segurança</h3>
            </div>
          </div>
        </div>
        <div className="cartao" onClick={() => window.location.href = "/tech"}>
          <div className="face face1">
            <div className="content">
              <i className="fab fa-windows"></i>
              <h3>Tecnologia</h3>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
