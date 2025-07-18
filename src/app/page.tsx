import { Hero } from "@components/Hero/hero";
import { Sections } from "../components/Sections/sections";
import { FCTLS2025 } from "../components/fctls2025/fctls2025";

export default function Home() {
  return (
    <div>
      <Hero />
      <FCTLS2025 />
      <Sections />
    </div>
  );
}
