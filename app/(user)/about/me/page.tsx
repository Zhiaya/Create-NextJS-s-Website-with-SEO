import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Lyzhia Ecommerce About",
  description:
    "This is Lyzhia",
  openGraph: {
    title: "About us",
    description:
      "Lyzhia Ecommerce Web is a web application for selling products.",
    images: "https://store.istad.co/media/brand_images/8.jpg",
  },
};
export default function page() {
  return (
    <div>About Page</div>
  )
}
