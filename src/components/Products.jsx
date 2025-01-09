import React from 'react'
import axios from 'axios'
import classes from './Products.module.css'
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = React.useState(null);
  let error_msg = ""
  const navigate = useNavigate();

  React.useEffect(()=>{
    async function getProducts(){
      try{
        const r = await axios.get('http://localhost:8000/products')
        setProducts(r?.data)
      } catch (e) {
        error_msg = "ocorreu um incoveniente ao listar os produtos"
        console.error(e)
      }
    }
    getProducts();
  },[])

  if (!products) return null;

  return (
    <div style={{display:'flex',flexDirection:'column',alignContent:'center',flexWrap:'wrap'}}>
      <div>
        <button className={classes.linkButton} onClick={() => navigate(-1)}>Voltar</button>
        <button className={classes.linkButton} onClick={() => navigate("/contact")}>Contato</button>
      </div>
      <div style={{display:'grid',alignItems:'center',alignContent:'center'}}>
      {
        products.map((p) => (
          <div key={p.id} style={{display:'flex',flexDirection:'column',alignContent:'center',flexWrap:'wrap'}}>
            <img style={{width:'200px'}} src={"/products/"+p.image} className={classes.product} onClick={()=> navigate(`/product/${p.id}`)}></img>
            <h2 style={{paddingTop:0,marginTop:0,textAlign:'center'}}>{p.title}</h2>
          </div>
        ))
      }
      {
        error_msg && <p style="color:red">{error_msg}</p>
      }
      </div>
    </div>
  )
}

export default Products