import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Cadastro from './pages/cadastro/cadastro';



function App() {
  // Código Typescript


  return (
    // Código TSX => HTML + CSS
    <>

    {/*<h1>A turma JS 05</h1>
    <h2>React é divertido</h2>
    <p>Lorem lorem lorem</p>*/}
    
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>   
            <Route path='/' element={<Home/>} />
            <Route path='/home' element={<Home/>} />
          </Routes>
        </div>

        < Footer />
      </BrowserRouter>

     </>
  );
}

export default App
