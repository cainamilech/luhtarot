import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import formulario from "./assets/FormularioEmail.module.scss";

const FormularioEmail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_yh98h1r", "template_p20t00e", form.current, {
        publicKey: "mXlcGlLGIgrwL4Rxs",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className={formulario["container"]}>
      <form ref={form} onSubmit={sendEmail}>
        <label>Nome</label>
        <input type="text" name="user_name" />

        <label>Celular</label>
        <input type="text" name="celular" />

        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />

        <div>
          <p>Quantas perguntas?</p>
          <label>
            1 Pergunta (R$123)
            <input type="radio" name="opcao_radio" value="1pergunta" />
          </label>
          <label>
            2 Perguntas (R$123)
            <input type="radio" name="opcao_radio" value="2perguntas" />
          </label>
          <label>
            3 Perguntas (R$123)
            <input type="radio" name="opcao_radio" value="3perguntas" />
          </label>
        </div>

        <input type="submit" value="Send" />
      </form>
    </section>
  );
};

export default FormularioEmail;
