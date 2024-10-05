"use client";

import { deleteCategory } from "@/actions/deleteCategory";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Category } from "@/types/index";
import dayjs from "dayjs";
import { toast } from "sonner";

interface DataTableProps {
    categories?: Category[];
}

export function DataTable({ categories }: DataTableProps) {
    const handleDelete = async (id: string) => {
        const promise = deleteCategory(id)
        toast.promise(promise, {
            success: "Category deleted successfully!",
            error: "Failed to delete category.",
        });
    };
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Id</TableHead>
                    <TableHead>Category Name</TableHead>
                    <TableHead className="text-right">Created At</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {categories?.map((category) => (
                    <TableRow key={category.id}>
                        <TableCell>{category.id}</TableCell>
                        <TableCell>{category.name}</TableCell>
                        <TableCell className="text-right">
                            {dayjs(category.createdAt).format("MMM D, YYYY")}
                        </TableCell>
                        <TableCell className="text-right">
                            <Button variant="destructive" onClick={() => handleDelete(category.id)}>
                                Delete
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
