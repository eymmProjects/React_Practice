import type { Schema, Attribute } from '@strapi/strapi';

export interface BlogArticleHeadline extends Schema.Component {
  collectionName: 'components_blog_article_headlines';
  info: {
    displayName: 'headline';
    description: '';
  };
  attributes: {
    slug: Attribute.String & Attribute.Required & Attribute.Unique;
    headline: Attribute.String & Attribute.Required;
  };
}

export interface BlogArticleLandscapeImage extends Schema.Component {
  collectionName: 'components_blog_article_landscape_images';
  info: {
    displayName: 'landscapeImage';
  };
  attributes: {
    image: Attribute.Media;
    imageCaption: Attribute.String;
  };
}

export interface BlogArticleParagraphWIthImage extends Schema.Component {
  collectionName: 'components_blog_article_paragraph_w_ith_images';
  info: {
    displayName: 'paragraphWIthImage';
  };
  attributes: {
    paragraph: Attribute.RichText & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    isLandscape: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    imageShowsRight: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    imageCaption: Attribute.String;
  };
}

export interface BlogArticleParagraph extends Schema.Component {
  collectionName: 'components_blog_article_paragraphs';
  info: {
    displayName: 'paragraph';
  };
  attributes: {
    paragraph: Attribute.Text;
  };
}

export interface InfoBlockButton extends Schema.Component {
  collectionName: 'components_info_block_buttons';
  info: {
    displayName: 'button';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    color: Attribute.Enumeration<['turquoise', 'orange', 'beige']> &
      Attribute.Required;
    slug: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'blog-article.headline': BlogArticleHeadline;
      'blog-article.landscape-image': BlogArticleLandscapeImage;
      'blog-article.paragraph-w-ith-image': BlogArticleParagraphWIthImage;
      'blog-article.paragraph': BlogArticleParagraph;
      'info-block.button': InfoBlockButton;
    }
  }
}
