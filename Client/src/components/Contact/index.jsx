import linkedin from "../../assets/img/linkedin.svg";
import github from "../../assets/img/github.svg";

function Contact() {
    return(
        <div className='contact-container'>
            <div className='contact-content'>
                <h1>Contacto</h1>
                <p>Contáctame en caso de cualquier duda u oportunidad.</p>
                <p>gastondandrea@hotmail.com</p>
                <div className='contact-links'>
                    <a href="https://linkedin.com/in/gastondandrea" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="linkedin"/>
                    </a>
                    <a href="https://github.com/gastondandrea" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="github"/>
                    </a>
                </div>
            </div>
            
        </div>
    )
}

export default Contact;