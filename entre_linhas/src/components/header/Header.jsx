import React from "react";
import styles from "./headerStyle.module.css";


export default function Header(){
    return (
      <header>
        {/* Logo */}
        <div  className={styles.logo}>
          <img 
            src="/logo.png" 
            alt="Logo" 
            style={{ height: '50px' }} // Defina a altura da logo como 50px
          />
        </div>
  
        {/* Barra de Pesquisa */}
        <div className={styles.searchBar}>
          <input 
            type="text" 
            placeholder="Pesquisar no site..." 
            className={styles.searchInput}/>
        </div>
  
        {/* Links do Header */}
        <div className={styles.nav_Links}>
          <a href="/news"  className={styles.link}>News</a>
          <a href="/trending" className={styles.link}>Trending</a>
          <a href="/explorar" className={styles.link}>Explorar</a>
          <a href="/login" className={styles.link}>Login/Cadastrar</a>
        </div>
      </header>
    );
  };

