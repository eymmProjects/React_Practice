import HighlightArticle from "../_components/Blog/HighlightArticle";
import SubscribeToNewsletter from "../_components/Blog/SubscribeToNewsletter";
import FeaturedItems from "../_components/FeatureItems/FeaturedItems";

export default async function Page() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`, {
    next: {
      revalidate: 30,
    },
  });

  const highlightArticleData = {
    headline: "3 tips for a super fast takeoff",
    excerpt: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore delectus
        velit illo sit dolorum quod debitis ad! Magni ut mollitia temporibus
        assumenda recusandae hic eveniet itaque, officia ad et nihil aliquam
        laboriosam sint distinctio impedit quis modi accusantium vitae quia!
        Odio at quam quaerat officia cupiditate optio quibusdam facere modi.
      </>
    ),
    slug: "takeoff",
    featuredImage: "/assets/hero-experience.png",
  };

  const featuredArticlesData = [
    {
      headline: "surfbaord shoping let us use proper words",
      slug: "/blog/whatever",
      date: "Monday, 05th of June 2023",
      featuredImage: "/assets/hero-experience.png",
    },
  ];

  const data = await response.json();
  console.log(data);
  return (
    <main className="blog-page">
      <HighlightArticle data={highlightArticleData} />
      <SubscribeToNewsletter />
      <FeaturedItems items={featuredArticlesData} />
    </main>
  );
}
