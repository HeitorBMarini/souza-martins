// por exemplo em app/blog/layout.tsx
import type { ReactNode } from "react";
import HeaderSecondary from "@/components/HeaderSecondary";
import BlogRail from "@/components/BlogRail";
import BreadcrumbBlog from "./BreadCrumbClient";
import TitleBlog from "./TitleBread";

export default function BlogLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <HeaderSecondary />
            <BlogRail />
            <div className="w-full bg-white pt-50 md:pt-40">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                    <BreadcrumbBlog />
                    <TitleBlog />
                </div>
            </div>
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">{children}</main>
        </>
    );
}
