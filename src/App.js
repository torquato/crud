import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Crud from './page/crud';
import Home from './page/home';
import Crudhook from './page/crudhook';


function App() {
  return (
    <div >
      <h1>Exemplo Crud</h1>

      <BrowserRouter>
        <div>
          <nav >
            <ul>
              <li><Link to={"/"}>Home</Link></li>
              <li><Link to={"/crud"}>Crud Manual</Link></li>
              <li><Link to={"/crudhook"}>Crud hook</Link></li>
            </ul>
          </nav>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crud" element={<Crud />} />
          <Route path="/crudhook" element={<Crudhook />} />

          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>URL inválida !</p>
              </main>
            } />
        </Routes>
      </BrowserRouter>

    </div>




  );
}

export default App;
