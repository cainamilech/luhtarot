import header from "./assets/modules/Header.module.scss";
import logo from "./assets/imgs/logo.png";
import imglogo from "./assets/imgs/imglogo.png";

const Header = () => {
  return (
    <header className={header["header"]}>
      <div className={header["header__logos"]}>
        <figure className={header["header__logo"]}>
          <img src={logo} alt="logo luh tarot" />
        </figure>

        <figure className={header["header__img"]}>
          <img src={imglogo} alt="logo luh tarot" />
        </figure>
      </div>

      <nav>
        <ul>
          <a href="">
            <li>Tarot</li>
          </a>

          <a href="">
            <li>Atendimentos</li>
          </a>

          <a href="">
            <li>Contato</li>
          </a>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
