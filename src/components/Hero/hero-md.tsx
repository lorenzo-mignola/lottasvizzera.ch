import { HeroImage } from "./hero-image";
import { HeroText } from "./hero-text";

export function HeroMd() {
  return (
    <div className="hero my-16 min-h-full lg:my-0 lg:hidden lg:min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <HeroImage />
        <HeroText />
      </div>
    </div>
  );
}
