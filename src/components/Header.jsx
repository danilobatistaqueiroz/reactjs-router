import classes from './Header.module.css'
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  return (
    <div>
      <button className={classes.linkButton} onClick={() => navigate(-1)}>Voltar</button>
      { pathname != '/contact' ?
        <button className={classes.linkButton} onClick={() => navigate("/contact")}>Contato</button>
      : <></> }
      { pathname != '/product' ?
        <button className={classes.linkButton} onClick={() => navigate("/products")}>Produtos</button>
      : <></> }
    </div>
  )
}

export default Header