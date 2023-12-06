import { Document } from '@contentful/rich-text-types';
import { ReactNode } from 'react';

// Layoutコンポーネント用の型宣言
export type LayoutProps = {
    children: ReactNode;
};

export type BlogPost = {
  sys: SimpleSys;
  fields: {
    title: string;
    body: Document;
    slug: string;
    category?: string;
    mainImage: Asset[];
    date: string;
    metaDescription: string;
  };
};

type Asset = {
  sys: SimpleSys;
  fields: AssetFields;
  secure_url: string; // Cloudinaryのsecure_url
  format: string;     // 例: 'jpg'
  resource_type: string; // 例: 'image'
  type: string;      // 例: 'upload'
  public_id: string; // Cloudinaryのpublic_id
};

type AssetFields = {
  title: string;
  description?: string;
  file: {
    url: string;
    details: {
      image?: {
        width: number;
        height: number;
      };
    };
  };
};

type SimpleSys = {
  id: string;
  createdAt: string;
  updatedAt: string;
};


//目次の型宣言//
//目次の型宣言//
export type TextBlock = {
  value: string;
};

export type ContentBlock = {
  nodeType: string;
  content: (TextBlock | {})[];
};

export type Content = {
  content: ContentBlock[];
};

export type Header = {
  type: string;
  value: string;
};
//目次の型宣言//
//目次の型宣言//
