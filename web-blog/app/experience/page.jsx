import Image from "next/image";
import styles from "../../sass/main.scss";
import Header from ".././_components/Header";
import HeroSection from ".././_components/HeroSection";
import InfoBlock from "../_components/InfoBlock";
// import InfoBlock from "./_components/InfoBlock";
// import { fetchDataFromStrapi, processInfoBlocks } from "@/utils/strapi.utils";

const infoBlockData = {
  headline: "The experience",
  text: (
    <p className="copy">
      The experience quia et suscipit\nsuscipit recusandae consequuntur expedita
      et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem
      sunt rem eveniet architecto
    </p>
  ),
  button: <button className="btn btn--orange">Book now</button>,
  reversed: false,
};

export default function Home() {
  // const infoBlockData = processInfoBlock(data);

  const heroHeadline = (
    // const data = await fetchData
    <>
      <h1>barrel 1.</h1>
      <h1>barrel 1.</h1>
      <h1>barrel 1.</h1>
    </>
  );

  return (
    <main>
      <HeroSection
        imgSrc="/assets/hero-experience.png"
        headline={heroHeadline}
      />
      {/* {infoBlockData.map((data) => (
        <InfoBlock key={data.id} data={data} />
      ))} */}
      <InfoBlock data={infoBlockData} />
    </main>
  );
}
