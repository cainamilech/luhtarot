import React, { useState } from "react";

import formulario from "./assets/modules/Formulario.module.scss";

interface FormValues {
  nome: string;
  email: string;
  telefone: string;
  texto: string;
  opcaoRadio: string;
}

const Formulario: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    nome: "",
    email: "",
    telefone: "",
    texto: "",
    opcaoRadio: "",
  });

  const [mensagem, setMensagem] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Verifica se todos os campos estão preenchidos
    if (Object.values(formValues).every((value) => value.trim() !== "")) {
      // Aqui você pode adicionar a lógica para lidar com os dados do formulário, como enviar para o servidor, etc.
      setMensagem("Formulário enviado com sucesso!");
    } else {
      setMensagem("Por favor, preencha todos os campos.");
    }
  };

  return (
    <div className={formulario["container"]}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nome:
            <input
              type="text"
              name="nome"
              value={formValues.nome}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Telefone:
            <input
              type="tel"
              name="telefone"
              value={formValues.telefone}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <p>Quantas perguntas?</p>
          <label>
            1 Pergunta (R$123)
            <input
              type="radio"
              name="opcaoRadio"
              value="opcao1"
              onChange={handleChange}
            />
          </label>
          <label>
            2 Perguntas (R$123)
            <input
              type="radio"
              name="opcaoRadio"
              value="opcao2"
              onChange={handleChange}
            />
          </label>
          <label>
            3 Perguntas (R$123)
            <input
              type="radio"
              name="opcaoRadio"
              value="opcao3"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Texto:
            <textarea
              name="texto"
              value={formValues.texto}
              onChange={handleChange}
            />
          </label>
        </div>

        <button type="submit">Enviar</button>
        {mensagem && <span>{mensagem}</span>}
      </form>
    </div>
  );
};

export default Formulario;
