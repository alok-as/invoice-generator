import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Hero = () => (
	<section id="hero" className="flex flex-col items-center gap-6">
		<h1 className="text-5xl font-bold">Invoicopedia</h1>
		<Button asChild>
			<Link href="/dashboard">Sign In</Link>
		</Button>
	</section>
);
