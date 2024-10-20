import { HiMiniArrowRightOnRectangle } from "react-icons/hi2";
import './LoginStyle.css';
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div className="formLogin">
        <div className="login">
          <div className="login_title">
            <Link to="/" id="voltar"><HiMiniArrowRightOnRectangle/></Link> <br/>
            <h2>Bem-Vindo!</h2>
            
            <span>Entre com sua conta!</span>
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
            <div className="password">
              <label htmlFor="">Senha</label>
              <input
                type="password"
                className="form-input"
                placeholder="Escreva sua Senha"
                required
              />
            </div>
            <div className="remember">
              <div>
                <input type="checkbox" />
                <span style={{ marginLeft: 5 }}>Lembrar-me</span>
              </div>
              <a href="#" id="senha_esquecida">Esqueceu sua senha?</a>
            </div>
            <button type="submit" className="btn">
              Entrar
            </button>
          </form>
          <span>Ou Clique <Link to="/Cadastro" id="criar_Conta"> aqui</Link> Para criar uma conta!</span>
        </div>
        </div>
        
    )
}

export default Login;