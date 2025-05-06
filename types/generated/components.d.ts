import type { Schema, Struct } from '@strapi/strapi';

export interface GeneralCarouselItem extends Struct.ComponentSchema {
  collectionName: 'components_general_carousel_items';
  info: {
    displayName: 'Carousel Item';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    url: Schema.Attribute.Component<'general.url', false>;
  };
}

export interface GeneralUrl extends Struct.ComponentSchema {
  collectionName: 'components_general_urls';
  info: {
    description: '';
    displayName: 'URL';
  };
  attributes: {
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SeoOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_seo_open_graphs';
  info: {
    description: '';
    displayName: 'OpenGraph';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SeoSeoMeta extends Struct.ComponentSchema {
  collectionName: 'components_seo_seo_metas';
  info: {
    description: '';
    displayName: 'SEO Meta';
  };
  attributes: {
    canonical: Schema.Attribute.Component<'general.url', false> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    opengraph: Schema.Attribute.Component<'seo.open-graph', false> &
      Schema.Attribute.Required;
    schema: Schema.Attribute.JSON;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    twitter: Schema.Attribute.Component<'seo.twitter', false> &
      Schema.Attribute.Required;
  };
}

export interface SeoTwitter extends Struct.ComponentSchema {
  collectionName: 'components_seo_twitters';
  info: {
    description: '';
    displayName: 'Twitter';
    icon: 'twitter';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'general.carousel-item': GeneralCarouselItem;
      'general.url': GeneralUrl;
      'seo.open-graph': SeoOpenGraph;
      'seo.seo-meta': SeoSeoMeta;
      'seo.twitter': SeoTwitter;
    }
  }
}
