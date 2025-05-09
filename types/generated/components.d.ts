import type { Schema, Struct } from '@strapi/strapi';

export interface ChatRainPool extends Struct.ComponentSchema {
  collectionName: 'components_chat_rain_pools';
  info: {
    description: '';
    displayName: 'rain_pool';
  };
  attributes: {
    claim_rain_btn_label: Schema.Attribute.String;
    rain_dialog: Schema.Attribute.Component<'chat.tip-rain-dialog', false>;
    tip_rain_btn_label: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ChatTipRainDialog extends Struct.ComponentSchema {
  collectionName: 'components_chat_tip_rain_dialogs';
  info: {
    displayName: 'tip_rain_dialog';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    disclaimer: Schema.Attribute.Text;
    tip_btn_label: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

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

export interface GeneralBetSection extends Struct.ComponentSchema {
  collectionName: 'components_general_bet_sections';
  info: {
    displayName: 'bet_section';
  };
  attributes: {
    all_tab_label: Schema.Attribute.String;
    bet_table_column: Schema.Attribute.Component<'general.table-column', true>;
    big_wins_tab_label: Schema.Attribute.String;
    lucky_wins_tab_label: Schema.Attribute.String;
    your_bet_tab_label: Schema.Attribute.String;
  };
}

export interface GeneralCarouselGameList extends Struct.ComponentSchema {
  collectionName: 'components_general_carousel_game_lists';
  info: {
    description: '';
    displayName: 'carousel_game_list';
  };
  attributes: {
    item: Schema.Attribute.Component<'general.carousel-item', true>;
    title: Schema.Attribute.String;
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

export interface GeneralLiveStreamCarousel extends Struct.ComponentSchema {
  collectionName: 'components_general_live_stream_carousels';
  info: {
    displayName: 'live_stream_carousel';
  };
  attributes: {
    live_stream_label: Schema.Attribute.String;
    number_watching_label: Schema.Attribute.String;
    stream_live_label: Schema.Attribute.String;
  };
}

export interface GeneralTableColumn extends Struct.ComponentSchema {
  collectionName: 'components_general_table_columns';
  info: {
    displayName: 'table_column';
  };
  attributes: {
    accesor: Schema.Attribute.String;
    label: Schema.Attribute.String;
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
      'chat.rain-pool': ChatRainPool;
      'chat.tip-rain-dialog': ChatTipRainDialog;
      'footer.link-group': FooterLinkGroup;
      'footer.row-link-group': FooterRowLinkGroup;
      'general.bet-section': GeneralBetSection;
      'general.carousel-game-list': GeneralCarouselGameList;
      'general.carousel-item': GeneralCarouselItem;
      'general.input-field': GeneralInputField;
      'general.link': GeneralLink;
      'general.live-stream-carousel': GeneralLiveStreamCarousel;
      'general.table-column': GeneralTableColumn;
      'general.url': GeneralUrl;
      'header.cashier-box': HeaderCashierBox;
      'header.currency-option': HeaderCurrencyOption;
      'header.game-dropdown': HeaderGameDropdown;
      'header.game-link-group': HeaderGameLinkGroup;
      'seo.seo-meta': SeoSeoMeta;
    }
  }
}
