import "./form.css";
import logo from "../assets/logo.png";

const Form = () => {
  return (
    <div className="body">
      <div>
        <img src={logo} alt="" className="logoForm" />
        <div className="infos">
          <h2>Cadastro de Clientes</h2>
          <p>forneça as informações seguintes:</p>
        </div>
        <form>
          <div className="form-container">
            <div className="form-categories">
              <label htmlFor="">Nome:</label>
              <input type="text" />
            </div>
            <div className="form-categories">
              <label htmlFor="">Email:</label>
              <input type="text" />
            </div>
            <div className="form-categories">
              <label htmlFor="">Senha:</label>
              <input type="text" />
            </div>
            <button type="submit" className="buttonForm">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
