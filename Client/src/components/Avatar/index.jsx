import avatar from '../../assets/img/avatar.png';
import { useEffect, useState } from 'react';

function Avatar() {
  const [bgSize, setBgSize] = useState('192px 192px');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 768) {
        setBgSize('220px 220px');
      } else {
        setBgSize('192px 192px');
      }
    };

    handleResize(); // correr al cargar
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className="w-52 h-52 border rounded-full md:w-60 md:h-60"
      style={{
        backgroundImage: `url(${avatar})`,
        backgroundSize: bgSize,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
      }}
    ></div>
  );
}

export default Avatar;