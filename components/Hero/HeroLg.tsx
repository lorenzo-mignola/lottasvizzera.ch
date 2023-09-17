import { heroImageJPG } from './HeroImage';
import HeroText from './HeroText';

function HeroLg() {
  return (
    <div className="hidden lg:flex">
      <div className="hero min-h-screen" style={{ backgroundImage: `url(${heroImageJPG.src})` }}>
        <div className="hero-overlay bg-opacity-60 bg-black" />
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <HeroText />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroLg;
