import {useRoutes} from "react-router-dom";
import Home from '../Home';
import NavBar from "../../components/NavBar";

function App() {
  // rutas
  const AppRoutes = () => {
    let routes = useRoutes([
      { path: '/', element: <Home /> }
    ])
    return routes;
  };

  return (
    <>
      <AppRoutes/>
      <NavBar/>
    </>
  )
};

export default App;