interface MarketingLayoutProps {
	children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
	return <div className="mx-auto w-full px-4">{children}</div>;
}
