import servicoImg from "@/components/imgs/servicos/servico.png" // importa direto

export type Service = {
  label: string
  href: string
  desc: string
  img: any // pode ser StaticImageData do next/image
}

export const SERVICES: Service[] = [
  {
    label: "Serralheria",
    href: "/servicos/serralheria",
    desc: "Portões, grades, corrimãos e projetos sob medida.",
    img: servicoImg,
  },
  {
    label: "Solda",
    href: "/servicos/solda",
    desc: "Solda MIG/MAG, TIG e eletrodo revestido com precisão.",
    img: servicoImg,
  },
  {
    label: "Estruturas Metálicas",
    href: "/servicos/estruturas",
    desc: "Fabricação e montagem de estruturas metálicas com laudos e ART.",
    img: servicoImg,
  },
]
