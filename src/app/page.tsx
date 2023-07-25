import Link from "next/link"
import { Instagram, Mail } from "lucide-react"
import { Image } from "@/components/Image"

const images = [
  {
    id: "PTytTD1",
    url: "https://i.ibb.co/PTytTD1/Air-Brush-20230722202920.jpg",
  },
  {
    id: "BV1RwrM",
    url: "https://i.ibb.co/BV1RwrM/Air-Brush-20230722205004-01.jpg",
  },
  {
    id: "nMXcPS9",
    url: "https://i.ibb.co/nMXcPS9/Air-Brush-20230722202832.jpg",
  },
  {
    id: "9wLB7Ym",
    url: "https://i.ibb.co/9wLB7Ym/20230722-145541.jpg",
  },
  {
    id: "ckZdnDK",
    url: "https://i.ibb.co/ckZdnDK/Air-Brush-20230722211855-01.jpg",
  },
  {
    id: "gTQ5XPd",
    url: "https://i.ibb.co/gTQ5XPd/Air-Brush-20230722213539.jpg",
  },
  {
    id: "BNvXzQ5",
    url: "https://i.ibb.co/BNvXzQ5/jpg-20230722-215714-0000.jpg",
  },
]

export default function Home() {
  return (
    <main className="">
      <section className="h-screen sticky bg-tina-banner-01 bg-[50%_35%] bg-no-repeat bg-cover top-0 overflow-hidden">
        <div className="absolute top-0 h-screen w-screen bg-gradient-to-r from-gray-900 to-transparent -z-10"></div>
        <div className="p-20 flex flex-col justify-between h-full">
          <h1 className="text-5xl md:text-8xl text-white">Martina</h1>
          <div className="flex flex-col gap-6">
            {/* <Link href="" className="w-min" passHref>
              <span className="text-xl text-white">Fotos</span>
            </Link> */}

            <div className="text-xl text-white flex gap-4">
              <Link href="https://instagram.com/martina.dn" target="_blank">
                <Instagram />
              </Link>
              <Link href="mailto:martina.dn@hotmail.com" target="_blank">
                <Mail />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="sticky top-0 h-screen bg-gray-900 p-6">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-x-4">
          {images.map((image) => (
            <Image key={image.id} url={image.url} />
          ))}
        </div>
      </section>
    </main>
  )
}
