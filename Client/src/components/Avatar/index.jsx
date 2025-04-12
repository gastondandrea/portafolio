import avatar from '../../assets/img/avatar.png';

function Avatar() {
    return (
      <div 
      className="w-72 h-72 border-1 rounded-full" 
      style={{ 
        backgroundImage: `url(${avatar})`,  
        backgroundSize: '250px 250px', // tamaño personalizado
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom'}}
      >
      </div>
    );
  }

  export default Avatar;