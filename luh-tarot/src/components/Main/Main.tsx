import main from "./assets/modules/Main.module.scss";
import exemplo from "./assets/imgs/exemplo.jpg";

const Main = () => {
  return (
    <main className={main["main"]}>
      <div className={main["separador"]}></div>
      <section className={main["banner"]}>
        <h1>ESPECIALISTA EM TAROT ESPIRITUAL</h1>

        <span>
          X anos de curso do nao sei oque la e nao sei o que mais com
          conhecimentos em nao sei oq la
        </span>

        <p>ATENDIMENTOS ONLINE E PRESENCIAIS</p>

        <span>
          ME ACOMPANHE NAS REDES SOCIAIS PARA ACOMPANHAR LIVES E DICAS
        </span>

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
      </section>

      <section className={main["conteudo"]}>
        <div>
          <div className={main["conteudo__h2"]}>
            <h2>Entenda mais sobre meu TAROT</h2>
          </div>

          <h3>QUEM SOU EU</h3>
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

          <h3>CURSOS E CONHECIMENTOS</h3>

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

      <section className={main["conteudo2"]}>
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

      <section className={main["conteudo3"]}>
        <div>
          <div className={main["conteudo__h2"]}>
            <h2>CONTATO E REDES SOCIAIS</h2>
          </div>

          <h3>E-mail</h3>
          <p>aoremasdasdsdasd@gmail.com</p>

          <h3>Whatsapp</h3>
          <p>aoremasdasdsdasd@gmail.com</p>
        </div>

        <div>
          <div className={main["conteudo__h2"]}>
            <h2>COMO CHEGAR</h2>
          </div>

          <h3>ENDEREÇO</h3>
          <p>Lorem Ipsum is simply dummy text of the</p>
          <p>MAPAAAAAAAAAAAAAAAAA</p>
        </div>
      </section>

      <div className={main["separador"]}></div>
    </main>
  );
};

export { Main };
