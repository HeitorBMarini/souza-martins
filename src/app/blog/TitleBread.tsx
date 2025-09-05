// app/blog/TitleClient.tsx
"use client";

import { useParams } from "next/navigation";
import { getPost } from "@/data/blog";

export default function TitleBlog() {
  const params = useParams() as { slug?: string };
  const { slug } = params ?? {};

  const post = slug ? getPost(slug) : undefined;

  const title = post?.title ?? "Blog";

  return (
    <h1
      className="relative mt-6 text-3xl font-bold text-[var(--dark-text)] pb-1
                 after:content-[''] after:block after:h-[3px] after:w-16 
                 after:bg-[var(--primary)] after:mt-2"
    >
      {title}
    </h1>
  );
}
