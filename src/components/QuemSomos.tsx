"use client";

import Image from "next/image";

import img1 from "@/components/imgs/quem-1.png";
import img2 from "@/components/imgs/quem-2.png";
import Link from "next/dist/client/link";
import { Button } from "./ui/button";

export default function QuemSomos() {
    return (
        <div className="mx-auto max-w-7xl px-3  md:px-10 pb-20">
            <div className="grid grid-cols-1 gap-10 items-center md:grid-cols-2  md:pt-10">
                {/* Coluna das imagens */}
                <div className="flex pt-30 md:pt-10   gap-1 sm:gap-4">
                    <Image
                        src={img1}
                        alt="Porta e grade metálica"
                        className="object-cover"
                        width={300}
                        height={400}
                    />
                    <Image
                        src={img2}
                        alt="Portão metálico decorado"
                        className="object-cover relative top-10 sm:top-20"
                        width={300}
                        height={400}
                    />
                </div>

                {/* Coluna do texto */}
                <div className="sm:pt-46 pt-10">
                    <h4 className="uppercase  w-44 text-center p-2 rounded-full font-medium mb-4 bg-[var(--gradient)]">
                        Sobre nós
                    </h4>
                    <h1 className="text-5xl font-extrabold mb-0 pt-2 text-[var(--dark-text)] ">
                        SOUSA MARTINS
                    </h1>
                    <h3 className="mt-0 mb-6 grey text-2xl fw-bold text-uppercase text-[var(--grey-custom)] tracking-wider">SERRALHERIA E PINTURAS</h3>
                    <p className="text-zinc-600 leading-relaxed">
                        A SM Sousa Martins nasceu da tradição e da experiência no ramo da serralheria. Fundada  pelo Sr. Alencar, um mestre reconhecido por sua dedicação e excelência no ofício, a  empresa carrega em sua essência o valor do trabalho bem-feito e a paixão pelo metal.                      </p>
                    <p className="text-zinc-600 leading-relaxed">
                        Seguindo os passos do pai, seu filho aprendeu desde cedo os segredos da profissão e  decidiu dar continuidade a essa história, fundando sua própria empresa.           </p>
                    <div className="pt-4">
                        <Link href="/sobre-nos">
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
