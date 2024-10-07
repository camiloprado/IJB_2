import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PrivateRouter from "./components/PrivateRouter";

const ToastOptions = {
  style: {
    fontSize: "16px",
  },
  success: {
    duration: 3000, // Duram 3 segundos
  },
  error: {
    duration: 3000,
  },
};

//Principais rotas
import LandingPage from "./Screens/PublicScreens/LandingPage";
import DashboardPage from "./Screens/PrivateScreens/Dashboard";

//Telas publicas
import { Main } from "./components/Main";
import { Contact } from "./Screens/PublicScreens/Contact";
import { About } from "./Screens/PublicScreens/About";
import { Beneficiarios } from "./Screens/PublicScreens/Beneficiarios";

//Login
import { Login } from "./Screens/Login";

//Telas privadas
import { Home } from "./Screens/PrivateScreens/Home";
import { Noticias } from "./Screens/PrivateScreens/Noticias";
import { Perfil } from "./Screens/PrivateScreens/Perfil";
import { Test } from "./Screens/PublicScreens/test/index.tsx";
import { Voluntarios } from "./Screens/PublicScreens/Voluntarios/index.tsx";
import { ColaboradorForm } from "./Screens/PublicScreens/Colaborador/Form/colaboradorForm.tsx";
import { Colaborador } from "./Screens/PublicScreens/Colaborador/index.tsx";
import { Apoiador } from "./Screens/PublicScreens/Apoiador/index.tsx";

function App() {
  return (
    <Router>
      <Toaster position="top-right" toastOptions={ToastOptions} />
      <Routes>
        {/* Rotas Públicas */}
        <Route path="/" element={<LandingPage />}>
          <Route index element={<Main />} />
          <Route path="contatos" element={<Contact />} />
          <Route path="sobre" element={<About />} />
          <Route path="beneficiarios" element={<Beneficiarios />} />
          {/* TODO: adicionar as telas corretas */}
          <Route path="voluntarios" element={<Voluntarios /> }/>
          <Route path="voluntarios/form" element/>
          <Route path="colaborador" element={<Colaborador />}/>
          <Route path="colaborador/form" element={<ColaboradorForm />}/>
          <Route path="apoiador" element={<Apoiador />}/>
          <Route path="apoiador/form" element/>
          <Route path="test" element={<Test />} />
        </Route>

        {/* Rota de Login */}
        <Route path="/login" element={<Login />} />

        {/* Rotas Privadas - Dashboard */}
        <Route element={<PrivateRouter />}>
          <Route path="/dashboard" element={<DashboardPage />}>
            <Route index element={<Home />} />
            <Route path="noticias" element={<Noticias />} />
            <Route path="perfil" element={<Perfil />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
