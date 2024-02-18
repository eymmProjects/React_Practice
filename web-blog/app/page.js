import Image from "next/image";
import styles from "./page.module.css";
import Header from "./_components/Header";
import HeroSection from "./_components/HeroSection";
import InfoBlock from "./_components/InfoBlock";
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
  button: <button className="btn btn--turquoise">Book now</button>,
  reversed: false,
};

export default function Home() {
  // const infoBlockData = processInfoBlock(data);

  const heroHeadline = (
    // const data = await fetchData
    <>
      <h1>barrel.</h1>
      <h1>barrel.</h1>
      <h1>barrel.</h1>
    </>
  );

  return (
    <main>
      <HeroSection headline={heroHeadline} />
      {/* {infoBlockData.map((data) => (
        <InfoBlock key={data.id} data={data} />
      ))} */}
      <InfoBlock data={infoBlockData} />
    </main>
  );
}