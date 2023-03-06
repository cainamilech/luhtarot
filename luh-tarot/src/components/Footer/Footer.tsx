import footer from "./assets/modules/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={footer["footer"]}>
      <small>Luh Tarot &copy; Copyright 2023. All Rights Reserved.</small>
      <small>
        Desenvolvido por{" "}
        <a
          href="https://cainamilech.github.io/portfolio/"
          target="_blank"
          rel="noreferrer"
        >
          Cainã Milech
        </a>
      </small>
    </footer>
  );
};

export { Footer };
