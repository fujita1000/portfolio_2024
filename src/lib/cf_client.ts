// lib/contentful.ts
import { createClient } from 'contentful';

// 環境変数の存在を確認し、なければエラーをスローする
const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

if (!SPACE_ID || !ACCESS_TOKEN) {
  throw new Error('Contentfulの環境変数が無い');
}

const client = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});

export async function getBlogPosts() {
  const params: any = {
    content_type: 'portfolioModel',
    order: ['-sys.createdAt']
  };

  const entries = await client.getEntries(params);
  return entries.items;
}