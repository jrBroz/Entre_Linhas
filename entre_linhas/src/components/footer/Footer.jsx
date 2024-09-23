import React from "react";
import styles from "./footerStyle.module.css";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.box}>
          <h3>Início</h3>
          <nav>
            <ul className={styles.navlinks}>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Section</a>
              </li>
              <li>
                <a href="#">Section</a>
              </li>
            </ul>
          </nav>
        </div>
        
        <div className={styles.box}>
          <h3>Informações</h3>
          <nav>
            <ul className={styles.navlinks}>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Email</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.box}>
          <h3>Suporte</h3>
          <nav>
            <ul className={styles.navlinks}>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Telefone</a>
              </li>
              <li>
                <a href="#">Chat</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.box}>
          <h3>Sobre Nós</h3>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          </span>
        </div>
      </div>
      <div className={styles.posfooter}>
        <div>Logo</div>
        <div className={styles.social_medias}>
          <div>
            <FaFacebook />
          </div>
          <div>
            <AiFillInstagram />
          </div>
          <div>
            <FaYoutube />
          </div>
        </div>

      </div>
    </footer>
  );
}
