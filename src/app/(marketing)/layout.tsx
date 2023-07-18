import Link from "next/link";

interface MarketingLayoutProps {
	children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
	return (
		<div className="mx-auto w-full px-4">
			<header>
				<Link href="/">
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
