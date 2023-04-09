import main from "./assets/modules/Main.module.scss";

import lu from "./assets/imgs/lu.jpg";
import lu2 from "./assets/imgs/lu2.png";
import instagram from "./assets/imgs/instagram.png";
import facebook from "./assets/imgs/facebook.png";
import tiktok from "./assets/imgs/tiktok.png";
import youtube from "./assets/imgs/youtube.png";
import email from "./assets/imgs/email.png";
import whatsapp from "./assets/imgs/whatsapp.png";
import kwai from "./assets/imgs/kwai.png";

const Main = () => {
  return (
    <main className={main["main"]}>
      <div className={main["separador"]}></div>
      <section className={main["banner"]}>
        <h1>ESPECIALISTA EM TAROT ESPIRITUAL</h1>

        <span>
          Taróloga em Pelotas | DIÁLOGO FRATERNO | FLUIDOTERAPIA | Tarot
          Terapêutico | Autoconhecimento | Alinhamento Energético
        </span>

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
          Tarot Terapêutico - Diálogo fraterno - Fluidoterapia - Alinhamento de
          Chakras
        </h2>

        <h2>
          Passeio Energético - Magia com Loções - Limpeza Espiritual - Banhos
          com Ervas Naturais
        </h2>

        <div className={main["separador-pequeno"]}></div>
      </div>

      <section id="tarot" className={main["conteudo"]}>
        <div>
          <div className={main["conteudo__h2"]}>
            <h2>QUEM SOU EU</h2>
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
            minha vida, passei a seguir direções e descobri caminhos prósperos
            neste mundo das cartas. Meu objetivo hoje, é mostrar às pessoas o
            quanto é divinatório e eficaz são as carta, pois direcionam e
            mostram tendências futuras, trazendo a resolução de onde há dúvidas,
            ao qual, o consulente não sabe como agir, muitas vezes é necessário
            tomar medidas sobre nossas vidas, e que, dificilmente conseguimos.
            Trago essas respostas com muita confiança, pois meu principal
            objetivo é ajudar pessoas em tomadas de decisões e direcionamento na
            sua vida.
          </p>

          <p>
            Minha atuação principal é na cartomancia, tarot, Baralho Cigano,
            Guardiões, Osho, são meus instrumento de trabalho, onde ofereço
            orientações sobre vários setores: sentimentais, financeiro, desta
            forma revelando ao meu consulente qual as melhorias necessárias em
            seu comportamento para as resoluções de suas dificuldades
            encontradas na sua vida atual, podendo assim, modificá-la, trazendo
            um futuro mais próspero.
          </p>

          <p>
            Convido todos a quebrar paradigmas negativos dados aos tarólogos e
            cartomantes, pois utilizamos destas forças: da mãe natureza, do
            Universo e da espiritualidade para a cura e a felicidade próspera
            para a vida de todos.
          </p>
        </div>

        <figure>
          <img src={lu} alt="luh tarot" />
        </figure>
      </section>

      <section id="formacao" className={main["conteudoformacao"]}>
        <div>
          <div className={main["conteudoformacao__h2"]}>
            <h2>FORMAÇÃO E CURSOS</h2>
          </div>

          <p>Graduada em artes Visuais;</p>
          <p>
            Tarologia Cartomancia: Baralho Cigano, Guardiões, Osho. Loções Ervas
            e Banhos ;
          </p>
          <p>Magias de LIMPEZA ESPIRITUAL E ABERTURA DE CAMINHO;</p>
          <p>Doutrina de Alan Kardec (FEB- Federação Espirita Brasileira);</p>
          <p>
            ESDE (Estudo Sistematizado da Doutrina Espírita: FUNDAMENTAL, TOMO
            II TOMO III);
          </p>
          <p>EADE (Estudo Aprofundado da Doutrina Espirita);</p>
          <p>TPEM (Trabalho espirita Mediúnico);</p>
          <p>Fluidoterapia (passista);</p>
          <p>Diálogo Fraterno (terapeuta Espiritual)</p>
        </div>
      </section>

      <section id="atendimentos" className={main["conteudotarot"]}>
        <figure>
          <img src={lu2} alt="luh tarot" />
        </figure>

        <div>
          <div className={main["conteudotarot__h2"]}>
            <h2>TAROT</h2>
          </div>

          <p>
            Tarot, é o caminho do autoconhecimento. A sabedoria interna, ele
            busca as energias positivas para que possam te auxiliar nas tuas
            decisões. Jamais, deve ser confundido com adivinhação, mas sim, uma
            projeção de possibilidades futuras. O autoconhecimento que o Tarot
            revela, é a grande virada de chave para a solução de muitos caminhos
            para alcançar melhorias, realizar ações, conquistar desejos e sem
            dúvida alcançar a tão almejada prosperidade em nossas vidas.
          </p>
        </div>
      </section>

      <section id="atendimentos" className={main["conteudo2"]}>
        <div>
          <div className={main["conteudo2__h2"]}>
            <h2>ATENDIMENTOS</h2>
          </div>

          <p>
            Nas consultas, tanto online como presencial, eu faço presente na
            minha mesa representantes dos 4 elementos, fogo, terra, ar e água.
            Exemplo: Cristais, velas, incensos, água, que servem para equilibrar
            e transmutar as energias de ansiedade, ou até, negativas, devido as
            suas propriedades químicas e físicas que trazem para o campo
            eletromagnético a elevação positiva e a harmonização.
          </p>
          <p>Como funciona as consultas de Cartas?</p>

          <p>
            As consultas tem duração de aproximadamente 30 minutos á 1hora e
            meia, dependendo da tiragem contratada. Devem ser agendadas,
            mediante pagamento comprovado.
          </p>

          <p>
            <strong>Tiragem completa (+- 90 minutos): </strong>
            Abertura com oração ao Divino Deus, respiração de alinhamento de
            chakras e passeio energético. À seguir, começamos nosso jogo, começo
            com a carta da tua energia, com os Arcanos maiores do Tarot, depois
            com os 78 Arcanos identifico em 11 casas, setores da tua vida
            (saude, amor, espiritualidade...), trazendo respectivamente as
            respostas e as projeções futuras para os direcionamentos a estes
            setores mencionados. Abro livremente para perguntas, encerrando
            nosso jogo de cartas com mensagem de conselho. Respiração, oração de
            encerramento em agradecimento a Deus e aos mentores espirituais.
            Esta tiragem é recomendada de 3 a 6 meses.
          </p>

          <p>
            <strong>Tiragem Completa (1 hora): </strong>
            Abertura com oração ao Divino Deus. Respiração de Alinhamento de
            Chakras, Indução de imagem e cores para concentração. Jogo a energia
            atual, logo, abertura de cartas. Respiração, oração de encerramento
            em agradecimento a Deus e aos mentores espirituais.
          </p>

          <p>
            {" "}
            <strong>
              Tiragem sobre um setor (amor, financeiro, afetivo...) (30 min):{" "}
            </strong>{" "}
            Abertura com oração ao Divino Deus. Respiração, cor e imagem.
            Abertura das cartas. Respiração, oração de encerramento em
            agradecimento a Deus e aos mentores espirituais.{" "}
          </p>

          <p>
            <strong>Tiragem de perguntas: </strong> Podem ser: 1, 3, 5, 7
            perguntas (valores á consultar) Perguntas somente objetivas, não
            respondo setor, caso quiser, contratar tiragem de 30 min.
            Respiração, imagem e cor, logo abertura das cartas.{" "}
          </p>

          <p>*Toda e qualquer consulta extremamente SIGILOSA.</p>

          <h3>ONLINE</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type een the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type
          </p>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type
          </p>

          <h3>PRESENCIAL</h3>

          <p>
            Tarot em Pelotas com atendimento presencial is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum
          </p>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has beenm has beenm has beenm has beenm has
            beenm has beenLorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been of the printing and
            typesetting industry. Lorem Ipsum has been
          </p>
        </div>
      </section>

      <section id="contato" className={main["conteudo3"]}>
        <div>
          <div className={main["conteudo3__h2"]}>
            <h2>CONTATO E REDES SOCIAIS</h2>
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
              <img src={whatsapp} alt="whatsapp" /> WhatsApp: 53 8427-9393
            </li>

            <li>
              <img src={email} alt="email" /> E-mail: luprietto@hotmail.com
            </li>
          </ul>
        </div>

        <div>
          <div className={main["conteudo3__h2"]}>
            <h2>COMO CHEGAR</h2>
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
