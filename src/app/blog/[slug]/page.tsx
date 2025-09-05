import Image from "next/image";
import HeaderSecondary from "@/components/HeaderSecondary";
import { getPost } from "@/data/blog";

type Params = { slug: string };

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return null;

  return (
    <>
      <HeaderSecondary />
      <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8">
        <article className="prose prose-zinc max-w-none">
          <h1 className="text-3xl font-bold text-[var(--dark-text)] mb-4">{post.title}</h1>
          {post.cover && (
            <div className="relative w-9/12 aspect-[1/1] h-full mb-6 overflow-hidden ">
              <Image src={post.cover} alt={post.title} fill className="object-contain" />
            </div>
          )}
          {/* conteúdo simples em HTML (veio do data/blog.ts) */}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </main>
    </>
  );
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPost(slug);
  return { title: post ? `${post.title} | Blog` : "Blog" };
}
