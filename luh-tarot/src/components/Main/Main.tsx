import main from "./assets/modules/Main.module.scss";
import exemplo from "./assets/imgs/exemplo.jpg";
import instagram from "./assets/imgs/instagram.png";
import facebook from "./assets/imgs/facebook.png";
import tiktok from "./assets/imgs/tiktok.png";
import youtube from "./assets/imgs/youtube.png";
import email from "./assets/imgs/email.png";
import whatsapp from "./assets/imgs/whatsapp.png";

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
            <a href="">
              <li>Instagram</li>
            </a>
            <a href="">
              <li>YouTube</li>
            </a>
            <a href="">
              <li>TikTok</li>
            </a>
          </ul>
        </div>
      </section>

      <section id="tarot" className={main["conteudo"]}>
        <div>
          <div className={main["conteudo__h2"]}>
            <h2>Entenda mais sobre meu TAROT</h2>
          </div>

          <h3>QUEM SOU EU</h3>
          <p>
            O meu trabalho no Tarot é ajudar as pessoas, transmutar energias
            negativas, auxiliar nas mudanças, trazer o equilíbrio e a leveza
            para a tua vida. Tarot, é o caminho do autoconhecimento. A sabedoria
            interna, ele busca as energias positivas para que possam te auxiliar
            nas tuas decisões. Jamais, deve ser confundido com adivinhação, mas
            sim, uma projeção de possibilidades futuras.
          </p>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type
          </p>

          <h3>FORMAÇÃO E CURSOS</h3>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum
          </p>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </p>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has beenm has beenm has beenm has beenm has
            beenm has been
          </p>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been of the printing and typesetting
            industry. Lorem Ipsum has been
          </p>
        </div>

        <figure>
          <img src={exemplo} alt="exemplo" />
        </figure>
      </section>

      <section id="atendimentos" className={main["conteudo2"]}>
        <figure>
          <img src={exemplo} alt="exemplo" />
        </figure>

        <div>
          <div className={main["conteudo2__h2"]}>
            <h2>ATENDIMENTOS</h2>
          </div>

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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum
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
            <li>
              <img src={instagram} alt="instagram" /> <a href="">Instagram</a>
            </li>

            <li>
              <img src={facebook} alt="facebook" /> <a href="">Facebook</a>
            </li>

            <li>
              <img src={tiktok} alt="tiktok" /> <a href="">Tiktok</a>
            </li>

            <li>
              <img src={youtube} alt="youtube" /> <a href="">YouTube</a>
            </li>

            <li>
              <img src={whatsapp} alt="whatsapp" /> WhatsApp: 53 99999 9999
            </li>

            <li>
              <img src={email} alt="email" /> E-mail: lucialucia@gmail.com
            </li>
          </ul>
        </div>

        <div>
          <div className={main["conteudo__h2"]}>
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
            ></iframe>
          </div>
        </div>
      </section>

      <div className={main["separador"]}></div>
    </main>
  );
};

export { Main };
