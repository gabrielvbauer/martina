"use client"

import * as Dialog from "@radix-ui/react-dialog"
import Image from "next/image"
import Link from "next/link"
import { X } from "lucide-react"

interface ViewImageModal {
  imageUrl: string
}

export function ViewImageModal({ imageUrl }: ViewImageModal) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-gray-950 opacity-80 fixed inset-0 animate-overlayShow" />
      <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 outline-none animate-contentShow">
        <div className="w-screen md:w-auto relative bg-gray-950">
          <Image
            src={imageUrl}
            width={1080}
            height={720}
            alt=""
            quality={100}
            className="w-full md:h-[calc(100vh-40px)]"
          />
          <div className="p-2 flex justify-between items-center">
            <Dialog.Close
              asChild
              className="hover:cursor-pointer hover:text-gray-50"
            >
              <X className="w-8 h-8" />
            </Dialog.Close>
            <Link
              href={imageUrl}
              target="_blank"
              className="hover:text-gray-50"
            >
              <span>Ver original</span>
            </Link>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
