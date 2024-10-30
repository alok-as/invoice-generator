import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Invoice Generator App",
	description: "Generated by create next app",
};

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => (
	<html lang="en">
		<body className={inter.className}>
			<header>Header</header>
			<main className="min-h-screen p-10">{children}</main>
			<footer>Footer</footer>
		</body>
	</html>
);

export default RootLayout;
