import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import formulario from "./assets/FormularioEmail.module.scss";
import mercadopago from "./imgs/mercado-pago.png";

const FormularioEmail = () => {
  const form = useRef();
  const [mensagem, setMensagem] = useState("");
  const [tipoMensagem, setTipoMensagem] = useState(""); // Novo estado para o tipo de mensagem
  const [opcaoSelecionada, setOpcaoSelecionada] = useState("");
  //const [isLoading, setIsLoading] = useState(false); // Estado para indicar se o formulário está sendo enviado
  const [pagamentoEfetuado, setPagamentoEfetuado] = useState(false);

  useEffect(() => {
    // Função para verificar a hash quando o componente é montado
    const checkHash = () => {
      if (window.location.hash === "#pagamentoefetuado") {
        setPagamentoEfetuado(true);
      }
    };

    checkHash(); // Verificar a hash quando o componente é montado

    // Adiciona um listener para verificar a hash quando ela mudar
    window.addEventListener("hashchange", checkHash);

    // Limpeza do listener quando o componente é desmontado
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  const handleRadioChange = (e) => {
    setOpcaoSelecionada(e.target.value);
    const messageTextArea = form.current.querySelector(
      "textarea[name='message']"
    );
    if (e.target.value === "previsao-anual") {
      messageTextArea.value = "Previsão Anual";
    } else if (e.target.value === "previsao-mensal") {
      messageTextArea.value = "Previsão Mensal";
    } else {
      messageTextArea.value = ""; // Limpa o textarea se outra opção for selecionada
    }
  };

  const closeModal = () => {
    setPagamentoEfetuado(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    //setIsLoading(true); // Marca que o formulário está sendo enviado

    // Verifica se todos os campos obrigatórios estão preenchidos
    const inputs = form.current.querySelectorAll("input");
    const textArea = form.current.querySelector("textarea");
    let isValid = true;
    inputs.forEach((input) => {
      if (!input.value) {
        isValid = false;
      }
    });
    if (!textArea.value) {
      isValid = false;
    }
    if (!isValid) {
      setTipoMensagem("erro");
      setMensagem("Todos os campos precisam estar preenchidos.");
      return;
    }

    // Verifica se uma opção de radio foi selecionada
    if (!opcaoSelecionada) {
      setTipoMensagem("erro");
      setMensagem("Selecione uma opção de tiragem.");
      return;
    }
    setMensagem("Enviando Formulário...");

    emailjs
      .sendForm("service_yh98h1r", "template_p20t00e", form.current, {
        publicKey: "mXlcGlLGIgrwL4Rxs",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          setTipoMensagem("sucesso");
          setMensagem(
            "Formulário enviado. Você será redirecionado para o pagamento em 3 segundos."
          );
          // Redireciona após 3 segundos
          setTimeout(() => {
            console.log("Redirecionando...");
            const linkRedirecionamento = {
              "1pergunta": "https://mpago.la/1y1UFw9",
              "3perguntas": "https://mpago.la/2VyFQQm",
              "pergunta-setor": "https://mpago.la/29vQ5iC",
              "previsao-anual": "https://mpago.la/2mojrZp",
              "previsao-mensal": "https://mpago.la/2mojrZp",
              "pergunta-geral": "https://mpago.la/2xZoYzt",
            }[opcaoSelecionada];
            console.log("Link de redirecionamento:", linkRedirecionamento);
            window.location.href = linkRedirecionamento;
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setTipoMensagem("erro");
          setMensagem(
            "Falha no envio do formulário. Por favor, tente novamente."
          );
        }
      );
  };

  return (
    <section id="formulario" className={formulario["container"]}>
      <div className={formulario["container__texts"]}>
        <h3>Formulário de Atendimento via E-mail</h3>
        <p>
          Neste formulário de atendimento por e-mail, você preenche os
          formulario com suas informações e o tipo de tiragem que deseja,
          preenche a pergunta (ou perguntas) em questão e faz o envio do
          formulário, você será redirecionado para o pagamento via mercado pago.
          Após o pagamento, em um prazo de até 24 horas, será feito uma tiragem,
          conforme sua escolha, seguindo o mesmo procedimento dos outros tipos
          de atendimentos, com abertura de cartas seguindo todo o processo da
          consulta de Tarot. Então você receberá a tiragem solicitada no seu
          e-mail.
        </p>

        <p>
          <strong>Entenda os tipos de tiragem:</strong>
        </p>
        <p>
          <strong>Perguntas Objetivas</strong>: Caso você quiser um
          esclarecimento imediado e sanar dúvida de algum setor da sua vida.
          Exemplos de Perguntas Objetivas sobre alguns assuntos: - Vou conseguir
          um emprego? - Vou mudar de setor? - Vou ganhar a promoção? - Vem amor
          novo? - Meu casamento vai dar certo? - O que ele(a) sente por mim? Tem
          saudade? Vai me procurar? - Vou reconciliar com meu(a) ex? - O
          tratamento com medicamentos vai dar certo? - A pessoa X vai melhorar?
        </p>

        <p>
          <strong>Sobre um setor:</strong> Escolha um setor como amor,
          financeiro, saúde, família, afetivo, ou outro do seu interesse.
        </p>

        <p>
          <strong>Previsão Anual:</strong> Tiragem de assuntos gerais de como
          será seu ano.
        </p>

        <p>
          <strong>Previsão Mensal:</strong> Tiragem de assuntos gerais de como
          será seu mês.
        </p>

        <p>
          <strong>Perguntas gerais, tiragem completa:</strong> Sinta-se a
          vontade para fazer perguntas no geral sobre sua vida, setores que você
          mais gostaria de ter uma resposta.
        </p>

        <p>
          *Em caso de perguntas sobre outra pessoa, citar o primeiro nome da
          mesma, para que seja feito um alinhamento energetico na tiragem.
        </p>

        <p>
          Você será redirecionado para o checkout de pagamento do Mercado Pago e
          poderá escolher o método de pagamento que preferir, entre cartões de
          crédito, débito e pix.
        </p>

        <figure>
          <img src={mercadopago} alt="logo do mercado pago" />
        </figure>
      </div>

      <form
        className={formulario["container__forms"]}
        ref={form}
        onSubmit={sendEmail}
      >
        <label>Nome:</label>
        <input
          className={formulario["container__forms__nome"]}
          type="text"
          name="user_name"
        />
        <label>Data de nascimento:</label>
        <input
          className={formulario["container__forms__data"]}
          type="date"
          name="user_date"
        />
        <label>Celular:</label>
        <input
          className={formulario["container__forms__celular"]}
          placeholder="(99) 999999999"
          type="text"
          name="celular"
        />
        <label>E-mail:</label>
        <input
          className={formulario["container__forms__email"]}
          type="email"
          name="user_email"
        />
        <div className={formulario["container__forms__tiragens"]}>
          <p>Qual tipo de tiragem?</p>

          <label>
            <input
              type="radio"
              name="opcao_radio"
              value="1pergunta"
              onChange={handleRadioChange}
            />
            Uma Pergunta Objetiva (R$ 10,00)
          </label>
          <label>
            <input
              type="radio"
              name="opcao_radio"
              value="3perguntas"
              onChange={handleRadioChange}
            />
            Três Perguntas Objetivas (R$ 25,00)
          </label>

          <label>
            <input
              type="radio"
              name="opcao_radio"
              value="pergunta-setor"
              onChange={handleRadioChange}
            />
            Sobre um setor (R$ 30,00)
          </label>

          <label>
            <input
              type="radio"
              name="opcao_radio"
              value="previsao-anual"
              onChange={handleRadioChange}
            />
            Previsão Anual (R$ 62,00)
          </label>

          <label>
            <input
              type="radio"
              name="opcao_radio"
              value="previsao-mensal"
              onChange={handleRadioChange}
            />
            Previsão Mensal (R$ 62,00)
          </label>

          <label>
            <input
              type="radio"
              name="opcao_radio"
              value="pergunta-geral"
              onChange={handleRadioChange}
            />
            Perguntas gerais, tiragem completa (R$ 70,00)
          </label>
        </div>
        <label>Pergunta(as):</label>
        <textarea
          className={formulario["container__forms__mensagem"]}
          name="message"
        />
        <input
          className={formulario["container__forms__botao"]}
          type="submit"
          value="Enviar Formulário e ir para o Pagamento"
        />

        <span
          style={{
            fontSize: "12px",
            color: tipoMensagem === "sucesso" ? "green" : "red",
          }}
        >
          {mensagem}
        </span>
      </form>

      <div
        className={formulario["modal"]}
        style={{ display: pagamentoEfetuado ? "block" : "none" }}
      >
        <div className={formulario["modal-content"]}>
          <span className={formulario["close"]} onClick={closeModal}>
            &times;
          </span>
          <p>
            <strong>✓</strong> Pagamento efetuado com sucesso! Em até 24 horas,
            você receberá em no e-mail a sua tiragem solicitada.
          </p>
          <figure>
            <img src={mercadopago} alt="logo do mercado pago" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default FormularioEmail;
