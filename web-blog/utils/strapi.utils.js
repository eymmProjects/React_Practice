import axios from "axios";
import Link from "next/link";

const BASE_URL = process.env.STRAPI_URL || "http://127.0.0.1:1337";

export async function fetchDataFromStrapi(route) {
  const url = `${BASE_URL}/api/${route}`;

  try {
    const response = await axios.get(url);
    return response.data.data;
  } catch (err) {
    console.log(err);
    throw new Error(`Could not fetch data from ${url}`);
  }
}

// export function processInfoBlocks(data) {
//   const infoBlocksRaw = data.attributes.info_blocks.data;
//   // console.log(
//   //   infoBlock.attributes?.image?.data.attributes.formats.thumbnail?.url
//   // );

//   // const imageUrl = data.image.data?.attributes.formats.thumbnail.url;

//   return infoBlocksRaw.map((infoBlock) => ({
//     ...infoBlock.attributes,
//     imageSrc: BASE_URL + infoBlock.attributes?.image?.data?.attributes?.url,
//     id: infoBlock.id,
//     // button: createInfoBlockButton(infoBlock.attributes.button),
//   }));
// }

export function processInfoBlocks(data) {
  const infoBlocksRaw = data.attributes.info_blocks.data;

  return infoBlocksRaw.map((infoBlock) => {
    const imageInfo = infoBlock.attributes.image.data[0]?.attributes;
    const imageUrl = imageInfo.url;
    const fullImageUrl = BASE_URL + imageUrl;

    return {
      ...infoBlock.attributes,
      imageSrc: fullImageUrl,
      id: infoBlock.id,
      button: createInfoBlockButton(infoBlock.attributes.button),
    };
  });
}

function createInfoBlockButton(buttonData) {
  if (!buttonData) {
    return null;
  }

  return (
    <Link
      className={`btn btn--medium btn--${buttonData.colour}`}
      href={`/${buttonData.slug}`}
    >
      {buttonData.text}
    </Link>
  );
}

export function formatDate(dateString) {
  const date = new Date(dateString);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  return date.toLocaleDateString("en-US", options);
}
