import Link from "next/link";

const HighlightArticle = ({ data }) => {
  const { headline, excerpt, slug, featuredImage } = data;
  return (
    <article className="highlight-article">
      <div className="highlight-article__info">
        <h3>{headline}</h3>
        <p className="copy">{excerpt}</p>
        <Link className="btn btn--turquoise btn--medium" href={`/blog/${slug}`}>
          Read more
        </Link>
      </div>

      {/* src={imageSrc || "/info-blocks/rectangle.png"} */}
      <img
        className="highlight-article__image"
        src={featuredImage || "/info-blocks/rectangle.png"}
        alt=""
      />
    </article>
  );
};

export default HighlightArticle;
