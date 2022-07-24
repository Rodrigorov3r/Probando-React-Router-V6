import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//debo importar los componentes: ppal (navbar) + 2darios
import About from '../src/components/About';
import Contact from '../src/components/Contact';
import Home from '../src/components/Home';
import SuperNav from './layout/SuperNav';

function App() {
  return (
    <>
      {/*lo primero al enrutar es conectar la app a la url del navegador*/}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SuperNav />}>
            {/* elemento principal */}
            <Route index path="/" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Contact" element={<Contact />} />
            {/* en caso de que el user tipee y le pifie RR me da la op de redirigirlo a donde quiera con replace */}
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
