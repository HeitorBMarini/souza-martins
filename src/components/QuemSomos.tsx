"use client";

import Image from "next/image";

import img1 from "@/components/imgs/quem-1.png";
import img2 from "@/components/imgs/quem-2.png";
import Link from "next/dist/client/link";
import { Button } from "./ui/button";

export default function QuemSomos() {
    return (
        <div className="mx-auto max-w-7xl px-10 py-14">
            <div className="grid grid-cols-1 gap-10 items-center md:grid-cols-2  sm:pt-0">
                {/* Coluna das imagens */}
                <div className="flex pt-30  sm:pt-0 gap-1 sm:gap-4">
                    <Image
                        src={img1}
                        alt="Porta e grade metálica"
                        className="object-cover "
                        width={300}
                        height={400}
                    />
                    <Image
                        src={img2}
                        alt="Portão metálico decorado"
                        className="object-cover relative top-10 sm:top-20 "
                        width={300}
                        height={400}
                    />
                </div>

                {/* Coluna do texto */}
                <div className="sm:pt-46 pt-2">
                    <h4 className="uppercase  w-44 text-center p-2 rounded-full font-medium mb-4 bg-[var(--gradient)]">
                        Sobre nós
                    </h4>
                    <h1 className="text-5xl font-extrabold mb-0 pt-2 text-[var(--dark-text)] ">
                        SOUSA MARTINS
                    </h1>
                    <h3 className="mt-0 mb-6 grey text-2xl fw-bold text-uppercase text-[var(--grey-custom)] tracking-wider">SERRALHERIA E PINTURAS</h3>
                    <p className="text-zinc-600 leading-relaxed">
                        Lorem ipsum dolor sit amet. Et repellat omnis aut dolor aperiam At quibusdam dolor et enim dolore est explicabo aliquam id culpa eveniet? Est impedit voluptatem cum officia nihil est exercitationem repellendus. Et consectetur impedit qui repellendus suscipit et officiis magnam a dolor repellat aut dicta illum hic itaque minus. Sit ipsam deserunt eum dicta voluptates sed minima minima cum corrupti beatae ut quod sunt ea quod adipisci. Eum aspernatur repellat quo corporis laborum eos libero atque est autem aliquam
                    </p>
                    <div className="pt-4">
                        <Link href="/quem-somos">
                            <Button
                                size="lg"
                                className="uppercase rounded-full text-uppercase cursor-pointer text-white bg-secondary tracking-wide font-semibold hover:bg-primary"
                            >
                               saiba mais
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
