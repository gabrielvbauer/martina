"use client"

import * as Dialog from "@radix-ui/react-dialog"
import { ViewImageModal } from "./ViewImageModal"
import NextImage from "next/image"

interface ImageProps {
  url: string
}

export function Image({ url }: ImageProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <figure>
          <NextImage
            src={url}
            className="w-full mb-4"
            alt=""
            width={1080}
            height={1080}
          />
        </figure>
      </Dialog.Trigger>

      <ViewImageModal imageUrl={url} />
    </Dialog.Root>
  )
}
