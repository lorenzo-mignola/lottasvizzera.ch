import { HeroImage } from "./hero-image";
import { HeroText } from "./hero-text";

export function HeroMd() {
  return (
    <div className="hero min-h-screen lg:hidden">
      <div className="hero-content flex-col lg:flex-row">
        <HeroImage />
        <HeroText />
      </div>
    </div>
  );
}
