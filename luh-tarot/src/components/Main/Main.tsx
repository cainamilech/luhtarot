import main from "./assets/modules/Main.module.scss";

import instagram from "./assets/imgs/instagram.png";
import facebook from "./assets/imgs/facebook.png";
import tiktok from "./assets/imgs/tiktok.png";
import youtube from "./assets/imgs/youtube.png";
import email from "./assets/imgs/email.png";
import whatsapp from "./assets/imgs/whatsapp.png";
import kwai from "./assets/imgs/kwai.png";
import bola from "./assets/imgs/bola-de-cristal.png";
import online from "./assets/imgs/online.png";
import presencial from "./assets/imgs/presencial.png";

import whats from "./assets/imgs/whatsapp.svg";

import lu1 from "./assets/imgs/lu1.jpg";
import lu5 from "./assets/imgs/lu5.jpg";

import Carousel from "../Carousel/Carousel";

import Formulario from "../Formulario/Formulario";

const Main = () => {
  return (
    <main className={main["main"]}>
      <div className={main["separador"]}></div>
      <section className={main["banner"]}>
        <h1>ESPECIALISTA EM TAROT ESPIRITUAL</h1>

        <p>ATENDIMENTOS ONLINE E PRESENCIAIS</p>

        <div className={main["banner__redes"]}>
          <small>ACOMPANHE AS REDES SOCIAIS PARA LIVES E DICAS</small>

          <ul>
            <a
              href="https://www.instagram.com/luhtarot/"
              target="_blank"
              rel="noreferrer"
            >
              <li>
                <img src={instagram} alt="instagram" />
              </li>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100078378574735"
              target="_blank"
              rel="noreferrer"
            >
              <li>
                <img src={facebook} alt="facebook" />
              </li>
            </a>

            <a
              href="https://www.tiktok.com/@luhtarot7"
              target="_blank"
              rel="noreferrer"
            >
              <li>
                <img src={tiktok} alt="tiktok" />
              </li>
            </a>

            <a
              href="https://kwai-video.com/u/@luhtarot/CdclSaZT"
              target="_blank"
              rel="noreferrer"
            >
              <li>
                <img src={kwai} alt="kwai" />
              </li>
            </a>

            <a
              href="https://www.youtube.com/@luhtarot"
              target="_blank"
              rel="noreferrer"
            >
              <li>
                <img src={youtube} alt="youtube" />
              </li>
            </a>
          </ul>
        </div>
      </section>

      <div className={main["descricao"]}>
        <h2>
          Tarot Terapêutico • Diálogo fraterno • Passes de Fluidoterapia •
          Alinhamento de Chakras
        </h2>

        <h2 className={main["descricao__inferior"]}>
          Passeio Energético para Elevação da Frequência • Magia Natural •
          Limpeza Espiritual • Banhos com Ervas Naturais
        </h2>

        <div className={main["separador-pequeno"]}></div>
      </div>

      <section id="sobre-mim" className={main["conteudo"]}>
        <div>
          <div className={main["conteudo__h3"]}>
            <h3>Sobre mim</h3>
          </div>

          <p>
            Luh, taróloga e cartomante, apreciadora das ervas para a cura do
            corpo e da alma. Apaixonada pelo mundo da cartomancia. Utilizo no
            meu trabalho ferramentas como ervas, pedras, estas encontradas na
            grande mãe natureza, somado aos elementos como: água, fogo, ar e
            terra, onde desfruto com eficiência e com mais sabedoria a minha
            intuição, para a elevar minhas vibrações e realizar um bom trabalho
            nas previsões e nos direcionamentos. O meu trabalho no Tarot é
            ajudar as pessoas, transmutar energias negativas, auxiliar nas
            mudanças, trazer o equilíbrio e a leveza para a tua vida.
          </p>

          <p>
            O tarot mudou minha vida, passei a acreditar que a cartomancia é
            minha vida e a seguir direções e descobrir caminhos prósperos neste
            mundo das cartas. Meu objetivo hoje é mostrar às pessoas o quanto
            divinatório e eficaz são as cartas, pois direcionam e mostram
            tendências futuras, trazendo a resolução de onde há dúvidas, ao
            qual, o consulente não sabe como agir, muitas vezes é necessário
            tomar medidas sobre nossas vidas, e que, dificilmente conseguimos.
            Trago essas respostas com muita confiança, pois meu principal
            objetivo é ajudar pessoas em tomadas de decisões e direcionamento na
            sua vida.
          </p>

          <p>
            Minha atuação principal é na Cartomancia, Tarot, Baralho Cigano,
            Guardiões, Osho, são meus instrumento de trabalho, onde ofereço
            orientações sobre vários setores: sentimentais, financeiro, desta
            forma revelando ao meu consulente quais as melhorias necessárias em
            seu comportamento para as resoluções de suas dificuldades
            encontradas na sua vida atual, podendo assim, modificá-la, trazendo
            um futuro mais próspero.
          </p>
        </div>

        <figure>
          <img src={lu5} alt="luh tarot" />
        </figure>
      </section>

      <section className={main["conteudoformacao"]}>
        <div>
          <div className={main["conteudoformacao__h3"]}>
            <h3>FORMAÇÃO E CURSOS</h3>
          </div>

          <p>Graduada em Artes Visuais;</p>
          <p>
            Tarologia Cartomancia: Baralho Cigano, Guardiões, Osho. Loções Ervas
            e Banhos ;
          </p>
          <p>Magias de Limpeza Espiritual e Abertura de Caminho;</p>
          <p>Doutrina de Alan Kardec (FEB- Federação Espirita Brasileira);</p>
          <p>
            ESDE (Estudo Sistematizado da Doutrina Espírita: FUNDAMENTAL, TOMO
            II TOMO III);
          </p>
          <p>EADE (Estudo Aprofundado da Doutrina Espirita);</p>
          <p>TPEM (Trabalho espirita Mediúnico);</p>
          <p>Fluidoterapia (Passista);</p>
          <p>Diálogo Fraterno (Terapeuta Espiritual)</p>
        </div>
      </section>

      <section id="tarot" className={main["conteudotarot"]}>
        <figure>
          <img src={lu1} alt="luh tarot" />
        </figure>

        <div>
          <div className={main["conteudotarot__h3"]}>
            <h3>TAROT</h3>
          </div>

          <p>
            Tarot, é o caminho do autoconhecimento. A sabedoria interna, ele
            busca as energias positivas para que possam te auxiliar nas tuas
            decisões. Jamais, deve ser confundido com adivinhação, mas sim, uma
            projeção de possibilidades futuras.
          </p>

          <p>
            O autoconhecimento que o Tarot revela, é a grande virada de chave
            para a solução de muitos caminhos para alcançar melhorias, realizar
            ações, conquistar desejos e sem dúvida alcançar a tão almejada
            prosperidade em nossas vidas.
          </p>

          <p>
            Convido todos a quebrar paradigmas negativos dados aos tarólogos e
            cartomantes, pois utilizamos destas forças: da mãe natureza, do
            Universo e da espiritualidade para a cura e a felicidade próspera
            para a vida de todos.
          </p>
        </div>
      </section>

      <section id="atendimentos" className={main["conteudo2"]}>
        <div>
          <div className={main["conteudo2__h3"]}>
            <h3>Atendimentos</h3>
          </div>

          <h4>Como funciona uma consulta das cartas?</h4>

          <p className={main["conteudo2__paragrafo"]}>
            Nas consultas, tanto online como presencial, eu faço presente na
            minha mesa representantes dos 4 elementos, fogo, terra, ar e água.
            Exemplo: Cristais, velas, incensos, água, que servem para equilibrar
            e transmutar as energias de ansiedade, ou até, negativas, devido as
            suas propriedades químicas e físicas que trazem para o campo
            eletromagnético a elevação positiva e a harmonização.
          </p>

          <p className={main["conteudo2__paragrafo"]}>
            As consultas tem duração de aproximadamente 30 minutos á 1h30,
            dependendo da tiragem contratada e do tempo necessário para a
            orientação. Devem ser agendadas, mediante pagamento comprovado.
          </p>

          <div className={main["conteudo2__agendar"]}>
            <a
              href="https://wa.me/5553984279393"
              target="_blank"
              rel="noreferrer"
            >
              Clique aqui para Agendar
            </a>
          </div>

          <div className={main["conteudo2__fundo"]}>
            <p className={main["conteudo2__tiragem"]}>
              <strong>
                <img src={bola} alt="bola de cristal" />
                Tiragem completa - Tempo médio: 1h | R$90,00
              </strong>
              <br />
              <br />
              Abertura com oração ao Divino Deus, respiração de alinhamento de
              chakras e passeio energético. À seguir, começamos nosso jogo,
              começo com a carta da tua energia, com os Arcanos maiores do
              Tarot, depois com os 78 Arcanos identifico em 11 casas, setores da
              tua vida (saude, amor, espiritualidade...), trazendo
              respectivamente as respostas e as projeções futuras para os
              direcionamentos a estes setores mencionados. Abro livremente para
              perguntas, encerrando nosso jogo de cartas com mensagem de
              conselho. Respiração, oração de encerramento em agradecimento a
              Deus e aos mentores espirituais. Esta tiragem é recomendada de 3 a
              6 meses.
            </p>
          </div>

          {/* <div className={main["conteudo2__fundo"]}>
            <p className={main["conteudo2__tiragem"]}>
              <strong>Tiragem Completa - Tempo médio: 1 hora | R$70,00</strong>
              <br />
              Abertura com oração ao Divino Deus. Respiração de Alinhamento de
              Chakras, Indução de imagem e cores para concentração. Jogo a
              energia atual, logo, abertura de cartas. Respiração, oração de
              encerramento em agradecimento a Deus e aos mentores espirituais.
            </p>
          </div> */}

          <div className={main["conteudo2__fundo"]}>
            <p className={main["conteudo2__tiragem"]}>
              <strong>
                <img src={bola} alt="bola de cristal" />
                Tiragem sobre um setor (Exemplo: Amor, Financeiro, Afetivo) -
                Tempo médio: 30 minutos | R$50,00
              </strong>
              <br />
              <br /> Abertura com oração ao Divino Deus. Respiração, cor e
              imagem. Abertura das cartas. Respiração, oração de encerramento em
              agradecimento a Deus e aos mentores espirituais.
            </p>
          </div>

          <div className={main["conteudo2__fundo"]}>
            <p className={main["conteudo2__tiragem"]}>
              <strong>
                <img src={bola} alt="bola de cristal" />
                Tiragem de perguntas:{" "}
              </strong>
              <br />
              <br /> Podem ser: 1, 2 ou 3 perguntas (pacotes de valores
              promocionais) Perguntas somente objetivas, caso você quiser um
              esclarecimento imediado e sanar dúvidade algum setor da sua vida.
              Não respondo setor nessa tiragem, caso quiser, contratar tiragem
              30 min e/ou 1h.
              <br />
              <br />
              Respostas por áudio pós 20h (diariamente).
              <br />
              <br />
              <strong>Roteiro:</strong> Elevação de frequência (respiração,
              imagem e cor), logo abertura das cartas para as respostas
              objetivas.
              <br />
              <br />
              <strong>
                Alguns exemplos de Perguntas Objetivas sobre alguns assuntos:
              </strong>
              <br />
              <br />
              <div className={main["conteudo2__tiragem__exemplos"]}>
                <div>
                  <img src={bola} alt="bola de cristal" />
                  Trabalho
                  <br />
                  - Vou conseguir um emprego?
                  <br />
                  - Vou mudar de setor?
                  <br />
                  - Vou ganhar a promoção?
                  <br />
                  <br />
                </div>
                <div>
                  <img src={bola} alt="bola de cristal" />
                  Financeiro
                  <br />
                  - Tem aumento de salário previsto para mês (ou ano) que vem?
                  <br />
                  - Vou conseguir ganhar o processo esperado na justiça?
                  <br />
                  - Vou alcançar as metas exigidas da empresa?
                  <br />
                  <br />
                </div>
                <div>
                  <img src={bola} alt="bola de cristal" />
                  Amor
                  <br />
                  - Vem amor novo?
                  <br />
                  - Meu casamento vai dar certo?
                  <br />
                  - O que ele(a) sente por mim? Tem saudade? Vai me procurar?
                  <br />
                  - Vou reconciliar com meu(a) ex?
                  <br />
                  - Tem trabalho espiritual?
                  <br />
                  <br />
                </div>
                <div>
                  <img src={bola} alt="bola de cristal" />
                  Saúde
                  <br />
                  - O tratamento com medicamentos vai dar certo?
                  <br />
                  - A pessoa X vai melhorar?
                  <br />
                </div>
              </div>
            </p>
          </div>

          <p>*Toda e qualquer consulta extremamente SIGILOSA.</p>

          <div className={main["conteudo2__opcoes"]}>
            <div className={main["conteudo2__opcoes__online"]}>
              <img src={online} alt="atendimento online" />
              <h5>Atendimento Online</h5>

              <p>
                A energia e a vibração ultrapassam qualquer barreira de
                distância, pois o que vale é a FÉ, concentração e a intenção. No
                ato do agendamento, mediante pagamento comprovado, será enviado
                pré-requisitos que devem ser seguidos para o atendimento online.
                A consulta é feita por chamada de vídeo no WhatsApp.
              </p>
            </div>

            <div className={main["conteudo2__opcoes__presencial"]}>
              <img src={presencial} alt="atendimento presencial" />
              <h5>Atendimento Presencial</h5>

              <p>
                No ato do agendamento será dado as devidas explicações e tirada
                de possíveis dúvidas. Minha sala para atendimentos presenciais
                fica situado em Pelotas - RS fica na Avenida Ernani Osmar Blass
                222 Apto 4, no Cohab Lindóia, Três Vendas. Conto com um ambiente
                confortável para que possa ter uma boa experiência na consulta.
                O pagamento pode ser realizado no dia da consulta, anterior ao
                atendimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={main["conteudovendas"]}>
        <h3>Agende sua consulta!</h3>

        <a href="https://wa.me/5553984279393" target="_blank" rel="noreferrer">
          <div className={main["conteudovendas__whats"]}>
            Clique aqui e me chame no WhatsApp
            <img src={whats} alt="icone do whatsapp" />
          </div>
        </a>

        <p className={main["conteudovendas__subtitulo"]}>
          Além das consultas de tiragens completas, podemos fazer consultas mais
          rápidas por perguntas objetivas...
        </p>

        <div className={main["conteudovendas__valores"]}>
          <a
            href="https://wa.me/5553984279393"
            target="_blank"
            rel="noreferrer"
          >
            <div className={main["conteudovendas__valor"]}>
              <span className={main["conteudovendas__valor__texto"]}>
                1 pergunta
              </span>
              <span className={main["conteudovendas__valor__preco"]}>
                R$ 10,00
              </span>
            </div>
          </a>

          <a
            href="https://wa.me/5553984279393"
            target="_blank"
            rel="noreferrer"
          >
            <div className={main["conteudovendas__valor"]}>
              <span className={main["conteudovendas__valor__texto"]}>
                3 perguntas
              </span>
              <span className={main["conteudovendas__valor__preco"]}>
                R$ 20,00
              </span>
            </div>
          </a>
        </div>
      </section>

      {/*<section>
        <Formulario />
              </section>*/}

      <section id="feedbacks">
        <Carousel />
      </section>

      <section id="contato" className={main["conteudo3"]}>
        <div>
          <div className={main["conteudo3__h3"]}>
            <h3>CONTATO E REDES SOCIAIS</h3>
          </div>

          <ul>
            <a
              href="https://www.instagram.com/luhtarot/"
              target="_blank"
              rel="noreferrer"
            >
              <li>
                <img src={instagram} alt="instagram" /> Instagram
              </li>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100078378574735"
              target="_blank"
              rel="noreferrer"
            >
              <li>
                <img src={facebook} alt="facebook" /> Facebook
              </li>
            </a>

            <a
              href="https://www.tiktok.com/@luhtarot7"
              target="_blank"
              rel="noreferrer"
            >
              <li>
                <img src={tiktok} alt="tiktok" /> Tiktok
              </li>
            </a>

            <a
              href="https://kwai-video.com/u/@luhtarot/CdclSaZT"
              target="_blank"
              rel="noreferrer"
            >
              <li>
                <img src={kwai} alt="kwai" /> Kwai
              </li>
            </a>

            <a
              href="https://www.youtube.com/@luhtarot"
              target="_blank"
              rel="noreferrer"
            >
              <li>
                <img src={youtube} alt="youtube" /> YouTube
              </li>
            </a>

            <li>
              <img src={whatsapp} alt="whatsapp" /> WhatsApp: 53 98427-9393
            </li>

            <li>
              <img src={email} alt="email" /> E-mail: luprietto@hotmail.com
            </li>
          </ul>
        </div>

        <div>
          <div className={main["conteudo3__h3"]}>
            <h3>COMO CHEGAR</h3>
          </div>

          <h4>ENDEREÇO</h4>
          <span>Avenida Ernani Osmar Blass 222 Apto 4</span>
          <br></br>
          <span>Pelotas - RS | Três vendas - Cohab Lindóia</span>
          <div className={main["conteudo3__mapa"]}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13576.67715636703!2d-52.3463599!3d-31.7112703!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x56456e845eceb1c!2sLuh%20Tarot!5e0!3m2!1spt-BR!2sbr!4v1677865839032!5m2!1spt-BR!2sbr"
              width="300"
              height="200"
              loading="lazy"
              title="mapa"
            ></iframe>
          </div>
        </div>
      </section>

      <div className={main["separador"]}></div>
    </main>
  );
};

export { Main };
