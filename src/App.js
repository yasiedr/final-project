import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import router from './router';
import { useRoutes } from "react-router-dom";


function App() {
  const routers = useRoutes(router)

  return (
    <>
      <Header />
      {routers}
      <Footer />
    
    </>
  );
}


export default App;
