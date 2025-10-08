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
      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-4">
        <article className="prose prose-zinc max-w-none">
          {post.cover && (
            <div className="relative w-9/12 aspect-[1/1] h-full mb-6 overflow-hidden">
              <Image
                src={post.cover}
                alt={post.title}
                fill
                className="object-contain"
              />
            </div>
          )}

          <div dangerouslySetInnerHTML={{ __html: post.content }} />

          
          <div className="mb-8">
            {(() => {
              const phone = "5511976159174"; 
              const message = "Olá! Gostaria de solicitar um orçamento."; 
              const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

              return (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-green-500 hover:bg-green-600 text-white font-semibold shadow-md transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M20.52 3.48A11.84 11.84 0 0012 0C5.37 0 0 5.37 0 12a11.88 11.88 0 001.64 6L0 24l6.27-1.63A11.88 11.88 0 0012 24c6.63 0 12-5.37 12-12a11.84 11.84 0 00-3.48-8.52zM12 22a9.92 9.92 0 01-5.05-1.38l-.36-.21-3.72.97.99-3.62-.24-.37A9.9 9.9 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.45-7.09c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15s-.77.97-.95 1.17-.35.22-.65.07c-.3-.15-1.26-.46-2.4-1.48-.89-.8-1.48-1.77-1.65-2.07s-.02-.46.13-.61c.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37s-1.05 1.02-1.05 2.47 1.08 2.87 1.23 3.07c.15.2 2.13 3.25 5.17 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.73 2.02-1.43.25-.7.25-1.3.17-1.43-.07-.12-.27-.2-.57-.35z" />
                  </svg>
                  Solicite seu orçamento
                </a>
              );
            })()}
          </div>
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
