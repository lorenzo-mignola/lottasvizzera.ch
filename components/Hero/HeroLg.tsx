import { heroImageJPG } from './HeroImage';
import HeroText from './HeroText';

function HeroLg() {
  return (
    <div className="hidden lg:flex">
      <div className="hero min-h-screen" style={{ backgroundImage: `url(${heroImageJPG.src})` }}>
        <div className="hero-overlay bg-black/60" />
        <div className="hero-content text-center text-neutral-content">
          <div className="p-10">
            <HeroText />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroLg;
