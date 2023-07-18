import Link from "next/link";

export default function IndexPage() {
	return (
		<section className="mx-auto">
			<div>
				<h1>Publishing Platform for Everyone</h1>
				<p className="">
					A Next.js 13 application built using layouts, server components and everything
					new in React 18.
				</p>
				<Link href="/login">Get Started</Link>
			</div>
		</section>
	);
}
