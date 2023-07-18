import { Icons } from "@/components/icons";
import Link from "next/link";

interface MarketingLayoutProps {
	children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
	return (
		<div className="mx-auto w-full px-4">
			<header>
				<Link href="/" className="flex items-center space-x-2">
					<Icons.logo />
					<span>Taxonomy</span>
				</Link>
				<div>
					<Link href="/login">Login</Link>
				</div>
			</header>
			<main>{children}</main>
		</div>
	);
}
