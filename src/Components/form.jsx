import { useState } from "react";
import "./form.css";
import logo from "../assets/logo.png";

const Form = () => {
  const initilForm = {
    nome: "",
    email: "",
    senha: "",
  };
  const [formState, setFormState] = useState(initilForm);

  const handleINput = (event) => {
    const target = event.currentTarget;

    const { value, name, email, senha } = target;

    setFormState({
      ...formState,
      [name]: value,
      [email]: value,
      [senha]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formState.nome || !formState.email || !formState.senha) {
      alert("Todos os campos devem estar preenchidos.");
      return;
    }

    const namePattern = /^[A-Za-zÀ-ÿ\s]+$/;
    if (!namePattern.test(formState.nome)) {
      alert("O nome deve conter apenas letras.");
      return;
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formState.email)) {
      alert("Por favor, insira um endereço de email válido.");
      return;
    }
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]:;'"|\\,.<>?/~`]).{8,16}$/;
    if (!passwordPattern.test(formState.senha)) {
      alert(
        "A senha deve ter entre 8 e 16 caracteres e incluir pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial."
      );
      return;
    }

    console.log("Nome: " + formState.nome, "Email: " + formState.email, "Senha: " + formState.senha);

    setFormState({ ...initilForm });
  };

  return (
    <div className="body">
      <div>
        <img src={logo} alt="" className="logoForm" />
        <div className="infos">
          <h2>Cadastro de Clientes</h2>
          <p>Forneça as seguintes informações:</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <div className="form-categories">
              <label htmlFor="nome">Nome: </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formState.nome}
                onChange={handleINput}
              />
            </div>
            <div className="form-categories">
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleINput}
              />
            </div>
            <div className="form-categories">
              <label htmlFor="senha">Senha: </label>
              <input
                type="password"
                id="senha"
                name="senha"
                value={formState.senha}
                onChange={handleINput}
              />
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
