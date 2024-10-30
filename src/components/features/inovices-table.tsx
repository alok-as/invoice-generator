import Link from "next/link";
import { CirclePlus } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import { amountFormatter } from "@/utils/currency";

export const InvoicesTable = () => (
	<section className="container" id="invoices-table">
		<div className="flex items-center justify-between mb-8">
			<h1 className="text-3xl font-bold">Invoices</h1>
			<Button className="inline-flex gap-2" variant="ghost" asChild>
				<Link href="/invoices/new">
					<CirclePlus className="h-4 w-4" />
					<span>Create Invoice</span>
				</Link>
			</Button>
		</div>
		<Table>
			<TableCaption>A list of your recent invoices.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className="text-left p-4">Date</TableHead>
					<TableHead className="text-left p-4">Customer</TableHead>
					<TableHead className="text-left p-4">Email</TableHead>
					<TableHead className="text-center p-4">Status</TableHead>
					<TableHead className="text-right p-4">Amount</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell className="text-left font-semibold p-4">
						30th October 2024
					</TableCell>
					<TableCell className="text-left font-semibold p-4">
						Alok Sharma
					</TableCell>
					<TableCell className="text-left p-4">
						alok.sharma61630@gmail.com
					</TableCell>
					<TableCell className="text-center p-4">
						<Badge className="rounded-full">Open</Badge>
					</TableCell>
					<TableCell className="text-right p-4">
						{amountFormatter.format(250)}
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	</section>
);
