import Space from '../../components/Space';
import Avatar from '../../components/Avatar';
// import Contact from '../../components/Contact';
import Layout from "../../components/Layout";
import UserList from '../../components/UserList';

function Home() {
    return(
        <Layout>
            <Space height="50"/>
            <div className='w-full px-4 flex flex-col gap-8'>
                <Avatar/>
                <div className='w-full flex flex-col gap-5'>
                    <h1 className='text-3xl font-bold'>¡Hola! Soy Gastón - Desarrollador Web Full Stack</h1>
                    <div>
                        <h3 className='text-2xl font-extralight'><span className="text-[#4F5E69]">Me divierto desarrollando aplicaciones</span> <span className='font-medium color text-[#0A66C2]'>seguras</span></h3>
                        <h3 className='text-2xl font-extralight text-[#4F5E69]'>Estoy en la búsqueda de nuevas oportunidades donde pueda aportar valor y seguir mejorando!</h3>
                    </div>
                </div>
            </div>
            <Space height="50"/>
            <div className='w-full flex flex-col gap-5 px-4'>
                <h1 className='text-3xl font-bold'>Portafolio</h1>
                <h3 className='text-2xl font-extralight text-[#4F5E69]'>Cada proyecto es una nueva aventura, con desafíos y contratiempos, pero todos tienen un gran final.</h3>
            </div>
            <Space height="50"/>
        </Layout>
    )
};

export default Home;