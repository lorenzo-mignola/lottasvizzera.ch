import HomeImage from '@/public/images/home.jpg';
import Image from 'next/image';

function HeroImage() {
  return <Image src={HomeImage} alt="Hero image" className="rounded-md" />;
}

export const heroImageJPG = HomeImage;

export default HeroImage;
