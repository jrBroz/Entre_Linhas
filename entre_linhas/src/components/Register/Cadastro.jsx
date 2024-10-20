import './CadastroStyle.css'
import { CgProfile } from "react-icons/cg";
import { FaGoogle } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { HiMiniArrowRightOnRectangle } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const Cadastro = () => 
    {
    return(
        <div className="formLogin">     
        
        <div className="register">
        <div className="register_title">
          <CgProfile />  <Link to="/" id="voltar"><HiMiniArrowRightOnRectangle/></Link>       
          <h2>Crie Sua Conta!</h2>
        </div>
        <form action="#" method="post">
          <div className="name">
            <label htmlFor="">Nome</label>
            <input
              type="text"
              className="form-input"
              placeholder="Escreva seu Nome"
              required
            />
          </div>
          <div className="email">
            <label htmlFor="">Email</label>
            <input
              type="text"
              className="form-input"
              placeholder="Escreva seu Email"
              required
            />
          </div>
          <div className="password">
            <label htmlFor="">Senha</label>
            <input
              type="password"
              className="form-input"
              placeholder="Escreva sua Senha"
              required
            />
          </div>
          <button type="submit" className="btn">
            Criar Conta
          </button>
        </form>
        <span>Ou crie uma conta usando as redes sociais!</span>
        <div className="social_medias">
          <FaGoogle className="icon" />
          <BsTwitterX className="icon" />
          <FaFacebook className="icon" />
        </div>
      </div>
    </div>
    )
}

export default Cadastro;