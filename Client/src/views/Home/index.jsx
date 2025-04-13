import Space from '../../components/Space';
import Avatar from '../../components/Avatar';
// import Contact from '../../components/Contact';
import Layout from "../../components/Layout";

function Home() {
    return(
        <Layout>
            <Space></Space>
            <div className='w-full px-16 flex flex-col gap-8'>
                <Avatar/>
                <div className='w-full flex flex-col gap-5'>
                    <h1 className='text-5xl font-bold'>¡Hola! Soy Gastón - Desarrollador Web Full Stack</h1>
                    <div>
                        <h3 className='text-[40px] font-extralight'><span className="opacity-70">Me divierto desarrollando aplicaciones</span> <span className='font-bold color text-[#0A66C2]'>seguras</span></h3>
                        <h3 className='text-[40px] font-extralight opacity-70'>Estoy en la búsqueda de nuevas oportunidades donde pueda aportar valor y seguir mejorando!</h3>
                    </div>
                </div>
            </div>
            <Space></Space>
            <div className='w-full px-16 gap-5'>
                <h1 className='text-5xl font-bold'>Portafolio</h1>
                <h3 className='text-[40px] font-extralight opacity-70'>Cada proyecto es una nueva aventura, con desafíos y contratiempos, pero todos tienen un gran final.</h3>
            </div>
            <Space></Space>
        </Layout>
    )
};

export default Home;