import './App.css';
import Choose from './components/Choose/Choose';
import Clients from './components/Clients/Clients';
import Footer from './components/Footer/Footer';
import Global from './components/Global/Global';
import Head from './components/Head/Head';
import Provider from './components/Provide/Provider';
import Testimonials from './components/Swipe/Certificates';

function App() {
  return (
    <div className="App">
      <Head />
      <Provider />
      <Choose />
      <Global />
      <Clients />
      <Testimonials />
      <Footer />
     
    </div>
  );
}

export default App;
