import HeroImage from './HeroImage';
import HeroText from './HeroText';

function HeroMd() {
  return (
    <div className="hero min-h-screen lg:hidden">
      <div className="hero-content flex-col lg:flex-row">
        <HeroImage />
        <HeroText />
      </div>
    </div>
  );
}

export default HeroMd;
