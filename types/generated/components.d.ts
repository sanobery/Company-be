import type { Schema, Struct } from '@strapi/strapi';

export interface FooterFooterLinkGroup extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_link_groups';
  info: {
    displayName: 'footer-link-group';
  };
  attributes: {
    groupLabel: Schema.Attribute.String;
    groupLinks: Schema.Attribute.Component<'shared.footer-link', true>;
  };
}

export interface FooterFooterSection extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_sections';
  info: {
    displayName: 'footer-section';
  };
  attributes: {
    address: Schema.Attribute.Blocks;
    copyright: Schema.Attribute.String;
    footerLinkGroup: Schema.Attribute.Component<
      'footer.footer-link-group',
      true
    >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    paragraph: Schema.Attribute.String;
    socialMediaIcon: Schema.Attribute.Component<
      'footer.social-media-icon',
      true
    >;
  };
}

export interface FooterSocialMediaIcon extends Struct.ComponentSchema {
  collectionName: 'components_footer_social_media_icons';
  info: {
    displayName: 'social-media-icon';
  };
  attributes: {
    icons: Schema.Attribute.Enumeration<
      ['FaInstagram', 'FaFacebook', 'FaLinkedin', 'FaBlog', 'FaTwitter']
    >;
    link: Schema.Attribute.String;
  };
}

export interface HeroHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_hero_hero_sections';
  info: {
    displayName: 'hero-section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    paragraph: Schema.Attribute.RichText;
  };
}

export interface ProcessProcess extends Struct.ComponentSchema {
  collectionName: 'components_process_processes';
  info: {
    displayName: 'process';
  };
  attributes: {};
}

export interface ProcessProcessSection extends Struct.ComponentSchema {
  collectionName: 'components_process_process_sections';
  info: {
    displayName: 'process-section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    para1: Schema.Attribute.String;
    para2: Schema.Attribute.String;
    Steps: Schema.Attribute.Component<'process.steps', true>;
  };
}

export interface ProcessSteps extends Struct.ComponentSchema {
  collectionName: 'components_process_steps';
  info: {
    displayName: 'steps';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SharedFooterLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_links';
  info: {
    displayName: 'footer-link';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_sections';
  info: {
    displayName: 'hero-section';
  };
  attributes: {};
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface StepItemStepItem extends Struct.ComponentSchema {
  collectionName: 'components_step_item_step_items';
  info: {
    displayName: 'step-item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Enumeration<['FaPenFancy', ' FaTags', 'FaUser']>;
    title: Schema.Attribute.String;
  };
}

export interface StepsStepsSection extends Struct.ComponentSchema {
  collectionName: 'components_steps_steps_sections';
  info: {
    displayName: 'steps-section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    paragraph: Schema.Attribute.Text;
    stepItem: Schema.Attribute.Component<'step-item.step-item', true>;
  };
}

export interface TestimonialSectionTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_testimonial_section_testimonials';
  info: {
    displayName: 'section-testimonials';
  };
  attributes: {
    company: Schema.Attribute.String;
    country: Schema.Attribute.String;
    name: Schema.Attribute.String;
    project: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
    rating: Schema.Attribute.Decimal;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'footer.footer-link-group': FooterFooterLinkGroup;
      'footer.footer-section': FooterFooterSection;
      'footer.social-media-icon': FooterSocialMediaIcon;
      'hero.hero-section': HeroHeroSection;
      'process.process': ProcessProcess;
      'process.process-section': ProcessProcessSection;
      'process.steps': ProcessSteps;
      'shared.footer-link': SharedFooterLink;
      'shared.hero-section': SharedHeroSection;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'step-item.step-item': StepItemStepItem;
      'steps.steps-section': StepsStepsSection;
      'testimonial.section-testimonials': TestimonialSectionTestimonials;
    }
  }
}
