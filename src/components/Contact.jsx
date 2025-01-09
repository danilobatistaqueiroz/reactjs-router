import classes from './Contact.module.css'
import Header from './Header'
import Footer from './Footer'

const Contact = () => {
  return (
    <div style={{diplay:'flex'}}>
      <Header/>
      <div style={{flex:1,display:'flex',marginTop:'20px'}}>
        <img src={"/contact-big.png"} className={classes.contact}></img>
        <div style={{display:'flex',flexDirection:'column',gap:'10px',marginLeft:'20px',marginTop:'20px'}}>
          <div style={{display:'flex'}}>
            <h3>Entre em contato</h3>
          </div>
          <div style={{display:'flex'}}>
            <ion-icon name="at-circle-outline" class={classes.icons}></ion-icon>
            <p className={classes.text}>danilo@email.com</p>
          </div>
          <div style={{display:'flex'}}>
            <ion-icon name="call-outline" class={classes.icons}></ion-icon>
            <p className={classes.text}>(01) 91111-1111</p>
          </div>
          <div style={{display:'flex'}}>
            <ion-icon name="mail-outline"  class={classes.icons}></ion-icon>
            <p className={classes.text}>Rua Próxima da tua, 01</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact