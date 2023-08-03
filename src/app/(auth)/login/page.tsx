import Link from "next/link";

import { Icons } from "@/components/icons";

export default function LoginPage() {
	return (
		<div className="">
			<p className="px-8 text-center text-sm text-slate-500">
				<Link href="/register" className="underline hover:text-brand">
					Don&apos;t have an account? Sign Up
				</Link>
			</p>
		</div>
	);
}
