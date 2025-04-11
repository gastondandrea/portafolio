import NavBar from "../../components/navBar/navBar";
import Avatar from "../../components/avatar/avatar";
import Space from "../../components/space/space";
import Contact from "../../components/contact/contact";

function HomePage() {
    return(
        <div>
            <NavBar></NavBar>
            <Space></Space>
            <Avatar></Avatar>
            <div>
                <h1>¡Hola! Soy Gastón - Desarrollador Web Full Stack</h1>
                <p>Me divierto desarrollando aplicaciones <strong>seguras</strong></p>
                <p>Estoy en la búsqueda de nuevas oportunidades donde pueda aportar valor y seguir aprendiendo!</p>
            </div>
            <Space></Space>
            <div>
                <h1>Portafolio</h1>
                <p>Cada proyecto es una nueva aventura, con desafíos y contratiempos, pero todos tienen un gran final.</p>
            </div>
            <Space></Space>
            <Contact></Contact>
        </div>
    )
}

export default HomePage;