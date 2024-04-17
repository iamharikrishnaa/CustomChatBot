import { Card } from '@mui/material';
import Header from './Header';
import MessageContainer from './MessageContainer';
import Footer from './Footer';



const Container = () => {
  return (
    <div>
  <Card variant="outlined" className="card" sx={{ borderRadius: 5 }}>
    <Header/>
    <MessageContainer/>
    <Footer/>
  </Card>
    </div>
  )
}

export default Container
