import type { Schema, Struct } from '@strapi/strapi';

export interface FooterLinkGroup extends Struct.ComponentSchema {
  collectionName: 'components_footer_link_groups';
  info: {
    description: '';
    displayName: 'col_link_group';
  };
  attributes: {
    links: Schema.Attribute.Component<'general.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface FooterRowLinkGroup extends Struct.ComponentSchema {
  collectionName: 'components_footer_row_link_groups';
  info: {
    displayName: 'row_link_group';
  };
  attributes: {
    links: Schema.Attribute.Component<'general.link', true>;
  };
}

export interface GeneralCarouselItem extends Struct.ComponentSchema {
  collectionName: 'components_general_carousel_items';
  info: {
    description: '';
    displayName: 'carousel_item';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface GeneralInputField extends Struct.ComponentSchema {
  collectionName: 'components_general_input_fields';
  info: {
    displayName: 'input_field';
  };
  attributes: {
    label: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
  };
}

export interface GeneralLink extends Struct.ComponentSchema {
  collectionName: 'components_general_links';
  info: {
    description: '';
    displayName: 'link';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
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

export interface HeaderCashierBox extends Struct.ComponentSchema {
  collectionName: 'components_header_cashier_boxes';
  info: {
    description: '';
    displayName: 'cashier_box';
  };
  attributes: {
    currency_option: Schema.Attribute.Component<'header.currency-option', true>;
    currency_text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HeaderCurrencyOption extends Struct.ComponentSchema {
  collectionName: 'components_header_currency_options';
  info: {
    displayName: 'currency_option';
  };
  attributes: {
    option_name: Schema.Attribute.String;
  };
}

export interface HeaderGameDropdown extends Struct.ComponentSchema {
  collectionName: 'components_header_game_dropdowns';
  info: {
    displayName: 'game_dropdown';
  };
  attributes: {
    game_links: Schema.Attribute.Component<'header.game-link-group', true>;
    label: Schema.Attribute.String;
  };
}

export interface HeaderGameLinkGroup extends Struct.ComponentSchema {
  collectionName: 'components_header_game_link_groups';
  info: {
    displayName: 'game_link_group';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SeoSeoMeta extends Struct.ComponentSchema {
  collectionName: 'components_seo_seo_metas';
  info: {
    description: '';
    displayName: 'seo_meta';
  };
  attributes: {
    canonical: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    og_description: Schema.Attribute.Text & Schema.Attribute.Required;
    og_title: Schema.Attribute.String & Schema.Attribute.Required;
    schema: Schema.Attribute.JSON;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    twitter_description: Schema.Attribute.Text & Schema.Attribute.Required;
    twitter_title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'footer.link-group': FooterLinkGroup;
      'footer.row-link-group': FooterRowLinkGroup;
      'general.carousel-item': GeneralCarouselItem;
      'general.input-field': GeneralInputField;
      'general.link': GeneralLink;
      'general.url': GeneralUrl;
      'header.cashier-box': HeaderCashierBox;
      'header.currency-option': HeaderCurrencyOption;
      'header.game-dropdown': HeaderGameDropdown;
      'header.game-link-group': HeaderGameLinkGroup;
      'seo.seo-meta': SeoSeoMeta;
    }
  }
}
