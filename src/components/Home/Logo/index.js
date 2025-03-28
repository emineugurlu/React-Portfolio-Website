import './index.scss'; // SCSS dosyasını import ediyoruz
import Logo1 from '../../../assets/images/logo1.png';
import Logo2 from '../../../assets/images/logo2.png';
import Logo3 from '../../../assets/images/logo3.png';
import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';

const Logo = () => {
  const bgRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);
  }, []);  // useEffect'in içindeki kod bir kez çalışacak şekilde ayarlandı

  return (
    <div className="banner">
      <div className="slider" style={{ '--quantity': 3 }}>
        {/* Logo1, Logo2 ve Logo3'ün doğru şekilde kullanılması */}
        <div className="item" style={{ '--position': 1 }}>
          <img src={Logo1} alt="Logo 1" />
        </div>
        <div className="item" style={{ '--position': 2 }}>
          <img src={Logo2} alt="Logo 2" />
        </div>
        <div className="item" style={{ '--position': 3 }}>
          <img src={Logo3} alt="Logo 3" />
        </div>
      </div>
    </div>
  );
};

export default Logo;
