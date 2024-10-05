"use client";

import { deleteProduct } from "@/actions/deleteProduct";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Product } from "@/types/index";
import dayjs from "dayjs";
import { toast } from "sonner";

interface ProductTableProps {
    products: Product[];
}

export function ProductTable({ products }: ProductTableProps) {
    const handleDelete = async (id: string) => {
        const promise = deleteProduct(id);
        toast.promise(promise, {
            success: "Category deleted successfully!",
            error: "Failed to delete category.",
        });
    }
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Id</TableHead>
                    <TableHead>Product Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead className="text-right">Created At</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {products?.map((product) => (
                    <TableRow key={product.id}>
                        <TableCell>{product.id}</TableCell>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.description || 'No description'}</TableCell>
                        <TableCell>${product.price}</TableCell>
                        <TableCell>{product.category?.name || 'No category'}</TableCell>
                        <TableCell className="text-right">
                            {dayjs(product.createdAt).format("MMM D, YYYY")}
                        </TableCell>
                        <TableCell className="text-right">
                            <Button variant="destructive" onClick={() => handleDelete(product.id)}>Delete</Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
