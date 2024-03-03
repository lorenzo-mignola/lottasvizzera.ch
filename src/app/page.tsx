import { Hero } from "@components/Hero/hero";
import Script from "next/script";
import { Sections } from "../components/Sections/sections";

export default function Home() {
  return (
    <>
      <Script
        data-blockingmode="auto"
        data-cbid="bed08fbc-ff04-453f-a31c-a5681bd9a7f0"
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        type="text/javascript"
      />
      <div>
        <Hero />
        <Sections />
      </div>
    </>
  );
}
