import type { Schema, Attribute } from '@strapi/strapi';

export interface ShareSeo extends Schema.Component {
  collectionName: 'components_share_seos';
  info: {
    displayName: 'seo';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    keyword: Attribute.Text;
    thumbnail: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharePrice extends Schema.Component {
  collectionName: 'components_share_prices';
  info: {
    displayName: 'Price';
    description: '';
  };
  attributes: {
    category: Attribute.String;
    services: Attribute.Component<'share.box-content', true>;
    description: Attribute.Text;
  };
}

export interface ShareImage extends Schema.Component {
  collectionName: 'components_share_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    alt: Attribute.String;
  };
}

export interface ShareDoctor extends Schema.Component {
  collectionName: 'components_share_doctors';
  info: {
    displayName: 'Doctor';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Attribute.String;
    position: Attribute.String;
    detail: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5video.CKEditor5Video',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface ShareBoxContent extends Schema.Component {
  collectionName: 'components_share_box_contents';
  info: {
    displayName: 'BoxContent';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeDoctors extends Schema.Component {
  collectionName: 'components_home_doctors';
  info: {
    displayName: 'Doctors';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    doctors: Attribute.Component<'share.doctor', true>;
  };
}

export interface HomeAbout extends Schema.Component {
  collectionName: 'components_home_abouts';
  info: {
    displayName: 'about';
  };
  attributes: {
    title: Attribute.String;
    mainDescribe: Attribute.Text;
    subDescribe: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'share.seo': ShareSeo;
      'share.price': SharePrice;
      'share.image': ShareImage;
      'share.doctor': ShareDoctor;
      'share.box-content': ShareBoxContent;
      'home.doctors': HomeDoctors;
      'home.about': HomeAbout;
    }
  }
}
