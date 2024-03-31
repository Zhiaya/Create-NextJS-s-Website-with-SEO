import { Metadata } from "next";
export const metadata: Metadata = {
	title: "ISTAD Ecommerce Web",
	description: "ISTAD Ecommerce Web is a web application for selling products.",
	openGraph: {
		title: "ISTAD Ecommerce Web",
		description: "ISTAD Ecommerce Web is a web application for selling products.",
		images: 'https://store.istad.co/media/brand_images/8.jpg'
	}
}

export default function Setting() {
  
    return (
      <div className='h-screen grid place-content-center text-6xl'>Setting</div>
    )
  }
  