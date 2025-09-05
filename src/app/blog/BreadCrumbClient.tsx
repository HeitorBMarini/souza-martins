// app/blog/BreadcrumbClient.tsx
"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Home as HomeIcon, ChevronRight } from "lucide-react";
import { getPost } from "@/data/blog"; // 👈 pega os posts

export default function BreadcrumbBlog() {
  // no blog: { slug?: string }
  const params = useParams() as { slug?: string };
  const { slug } = params ?? {};

  const post = slug ? getPost(slug) : undefined;

  return (
    <Breadcrumb>
      <BreadcrumbList className="flex items-center gap-2 text-sm text-black">
        {/* Home */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/" className="flex items-center gap-1">
              <HomeIcon size={16} /> Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator>
          <ChevronRight size={14} className="text-black" />
        </BreadcrumbSeparator>

        {/* Página de lista de posts */}
        {!slug && (
          <BreadcrumbItem>
            <BreadcrumbPage className="font-bold">Blog</BreadcrumbPage>
          </BreadcrumbItem>
        )}

        {/* Página de detalhe do post */}
        {slug && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/blog">Blog</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight size={14} className="text-black" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="font-bold">
                {post?.title ?? slug}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
