// src/pages/index.tsx
import Aside from "@/components/Aside";
import PostCard from "@/components/Post/PostCard";
import { getBlogPosts } from "@/lib/cf_client";
import { BlogPost } from "@/lib/types";
import SelectBox from "@/components/Post/SelectBox";
import { useState } from 'react';
import { multipleSearch } from "@/lib/logic";
import Skills from "@/components/Skills/Skills";

type Props = {
    Posts: BlogPost[];
  };
  
  const Page = ({ Posts }: Props) => {
    const [languages, setLanguages] = useState('');
    const [database, setDatabase] = useState('');
    const [cms, setCms] = useState('');
    const filtered = multipleSearch(Posts, languages, database, cms);
  
    return (
      <>
        <main className="min-h-screen flex">
          <Aside />
          <div className="w-full md:w-[65%]">
            <div className="w-[98%] m-auto">
              <div className="mt-[10px]">
              <SelectBox
                languages={languages}
                database={database}
                cms={cms}
                onChangeLanguages={(e) => { setLanguages(e.target.value); }}
                onChangeDatabase={(e) => { setDatabase(e.target.value); }}
                onChangeCms={(e) => { setCms(e.target.value); }}
              />
              </div>
              <div className="xl:grid xl:gap-4 2xl:gap-6 3xl:gap-8 xl:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4">
                {filtered.map((post: any) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            </div>

          <div className="lg:hidden">
          <Skills/>
          </div>

          </div>
        </main>
      </>
    );
  };

export default Page;

export async function getStaticProps() {
    const Posts = await getBlogPosts();
    console.log(Posts)
    return {
      props: {
        Posts: Posts,
      },
    };
  }