import { Hero } from "@components/Hero/hero";
import { Sections } from "../components/Sections/sections";
import { AlertNew } from "../components/AlertNew/alert-new";

export default function Home() {
  return (
    <div>
      <AlertNew />
      <Hero />
      <Sections />
    </div>
  );
}
