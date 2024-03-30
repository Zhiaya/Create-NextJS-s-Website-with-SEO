import { Suspense } from "react";
import "@/app/globals.css";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import Loading from "./loading";
import Error from "./error";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

import { inter, suwannaphum, localCustomFont } from "./fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Lyzhia Ecommerce Web",
	description: "Lyzhia Ecommerce Web is a web application for selling products.",
	openGraph: {
		title: "Lyzhia Ecommerce Web",
		description: "Lyzhia Ecommerce Web is a web application for selling products.",
		images: 'https://store.istad.co/media/brand_images/'
	}
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${suwannaphum.variable} ${localCustomFont.variable}`}>
				<header>
					<NavbarComponent />
				</header>
				<ErrorBoundary errorComponent={Error}>
					<Suspense fallback={<Loading />}>{children}</Suspense>
				</ErrorBoundary>
			</body>
		</html>
	);
}
