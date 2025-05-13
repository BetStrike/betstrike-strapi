import type { Schema, Struct } from '@strapi/strapi';

export interface EeatAbout extends Struct.ComponentSchema {
  collectionName: 'components_eeat_abouts';
  info: {
    description: '';
    displayName: 'about';
  };
  attributes: {
    last_updated: Schema.Attribute.Date;
    title: Schema.Attribute.String;
    topics: Schema.Attribute.Component<'general.topic', true>;
  };
}

export interface EeatAccessibility extends Struct.ComponentSchema {
  collectionName: 'components_eeat_accessibilities';
  info: {
    displayName: 'Accessibility';
  };
  attributes: {
    last_updated: Schema.Attribute.Date;
    title: Schema.Attribute.String;
    topics: Schema.Attribute.Component<'general.topic', true>;
  };
}

export interface EeatCodeOfEthics extends Struct.ComponentSchema {
  collectionName: 'components_eeat_code_of_ethics';
  info: {
    displayName: 'Code of Ethics';
  };
  attributes: {
    last_updated: Schema.Attribute.Date;
    title: Schema.Attribute.String;
    topics: Schema.Attribute.Component<'general.topic', true>;
  };
}

export interface EeatDisclaimer extends Struct.ComponentSchema {
  collectionName: 'components_eeat_disclaimers';
  info: {
    displayName: 'Disclaimer';
  };
  attributes: {
    last_updated: Schema.Attribute.Date;
    title: Schema.Attribute.String;
    topics: Schema.Attribute.Component<'general.topic', true>;
  };
}

export interface EeatEditorialPolicies extends Struct.ComponentSchema {
  collectionName: 'components_eeat_editorial_policies';
  info: {
    displayName: 'Editorial Policies';
  };
  attributes: {
    last_updated: Schema.Attribute.Date;
    title: Schema.Attribute.String;
    topics: Schema.Attribute.Component<'general.topic', true>;
  };
}

export interface FooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_footer_columns';
  info: {
    description: '';
    displayName: 'column';
  };
  attributes: {
    links: Schema.Attribute.Component<'general.link', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface GeneralBalance extends Struct.ComponentSchema {
  collectionName: 'components_general_balances';
  info: {
    displayName: 'balance';
  };
  attributes: {
    balance_id: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images', true>;
    label: Schema.Attribute.String;
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

export interface GeneralFaq extends Struct.ComponentSchema {
  collectionName: 'components_general_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    answer: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GeneralGame extends Struct.ComponentSchema {
  collectionName: 'components_general_games';
  info: {
    displayName: 'game';
  };
  attributes: {
    description: Schema.Attribute.String;
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
  };
}

export interface GeneralLink extends Struct.ComponentSchema {
  collectionName: 'components_general_links';
  info: {
    description: '';
    displayName: 'link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GeneralNavlink extends Struct.ComponentSchema {
  collectionName: 'components_general_navlinks';
  info: {
    displayName: 'navlink';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GeneralTopic extends Struct.ComponentSchema {
  collectionName: 'components_general_topics';
  info: {
    description: '';
    displayName: 'topic';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    title: Schema.Attribute.String;
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

export interface WelcomeBonusBlock extends Struct.ComponentSchema {
  collectionName: 'components_welcome_bonus_blocks';
  info: {
    description: '';
    displayName: 'block';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    login_btn: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    stepper_direction: Schema.Attribute.Enumeration<['horizontal', 'vertical']>;
    steppers: Schema.Attribute.Component<'welcome-bonus.step', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WelcomeBonusStep extends Struct.ComponentSchema {
  collectionName: 'components_welcome_bonus_steps';
  info: {
    description: '';
    displayName: 'step';
  };
  attributes: {
    bonus: Schema.Attribute.Component<'welcome-bonus.step-description', true> &
      Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WelcomeBonusStepDescription extends Struct.ComponentSchema {
  collectionName: 'components_welcome_bonus_step_descriptions';
  info: {
    description: '';
    displayName: 'step_bonus';
  };
  attributes: {
    content: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'eeat.about': EeatAbout;
      'eeat.accessibility': EeatAccessibility;
      'eeat.code-of-ethics': EeatCodeOfEthics;
      'eeat.disclaimer': EeatDisclaimer;
      'eeat.editorial-policies': EeatEditorialPolicies;
      'footer.column': FooterColumn;
      'general.balance': GeneralBalance;
      'general.carousel-item': GeneralCarouselItem;
      'general.faq': GeneralFaq;
      'general.game': GeneralGame;
      'general.link': GeneralLink;
      'general.navlink': GeneralNavlink;
      'general.topic': GeneralTopic;
      'general.url': GeneralUrl;
      'seo.seo-meta': SeoSeoMeta;
      'welcome-bonus.block': WelcomeBonusBlock;
      'welcome-bonus.step': WelcomeBonusStep;
      'welcome-bonus.step-description': WelcomeBonusStepDescription;
    }
  }
}
