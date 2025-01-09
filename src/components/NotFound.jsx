import Header from './Header'
import Footer from './Footer'

const NotFound = () => {
  return (
    <div style={{display:'flex'}}>
      <Header/>
      <div style={{flex:'1',display:'flex',marginTop:'20px'}}>NotFound</div>
      <Footer/>
    </div>
  )
}

export default NotFound