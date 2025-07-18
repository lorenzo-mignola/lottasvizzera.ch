import Image from "next/image";
import HomeImage from "@/public/images/home.jpg";

export function HeroImage() {
  return <Image alt="Hero image" className="rounded-md" src={HomeImage} />;
}
