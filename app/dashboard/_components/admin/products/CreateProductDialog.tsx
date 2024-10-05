"use client";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Category } from "@/types";
import { UploadButton } from "@/utils/uploadthing";
import Image from "next/image";
import { createProduct } from "@/actions/createProduct";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    description: z.string(),
    price: z.number({
        required_error: "Price required!",
        invalid_type_error: "Price must be number",
    }).positive("Price must be a positive number."),
    categoryId: z.string().min(3, "Category is required."),
    imageUrl: z.string().url("Upload must be Image")
});

export function CreateProductDialog({ categories }: { categories: Category[] }): React.ReactElement {
    const cancelBtn = useRef<HTMLButtonElement>(null);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: "",
            price: 0,
            categoryId: "",
            imageUrl: "",
        },
    });

    function onSubmit(data: z.infer<typeof formSchema>) {
        const promise = createProduct(data).then(() => {
            form.reset();
            cancelBtn.current?.click();
        });

        toast.promise(promise, {
            loading: "Creating product...",
            success: "Product created successfully!",
            error: "Failed to create product.",
        });
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Create Product</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] overflow-auto bg-white shadow-lg rounded-lg">
                <DialogHeader>
                    <DialogTitle>Create Product</DialogTitle>
                    <DialogDescription>
                        Create a new product by filling out the form below.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <Label>Product Name</Label>
                                    <FormControl>
                                        <Input placeholder="Enter product name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="price"
                            render={({ field }) => (
                                <FormItem>
                                    <Label>Price</Label>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="Enter product price"
                                            {...field}
                                            onChange={(e) => {
                                                field.onChange(parseFloat(e.target.value) || 0);
                                            }}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <Label>Description</Label>
                                    <FormControl>
                                        <Textarea placeholder="Enter product description" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="categoryId"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Category</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select category" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {categories.map((category) => (
                                                <SelectItem value={category.id} key={category.id}>
                                                    {category.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="imageUrl"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Product Image</FormLabel>
                                    {field.value ? (
                                        <FormItem>
                                            <Image src={field.value} width={100} height={100} alt="image" className="rounded-lg mb-4" />
                                            <Button
                                                onClick={() => field.onChange({ target: { value: "" } })}
                                                variant="destructive"
                                                className="mt-2 px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-md shadow-md transition duration-200 ease-in-out"
                                            >
                                                Remove Image
                                            </Button>
                                        </FormItem>
                                    ) : (
                                        <UploadButton
                                            endpoint="imageUploader"
                                            onClientUploadComplete={(res) => {
                                                const { url } = res[0];
                                                field.onChange({ target: { value: url } })
                                            }}
                                        />
                                    )}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <DialogClose asChild>
                            <Button ref={cancelBtn} variant="ghost">Cancel</Button>
                        </DialogClose>
                        <Button type="submit" className="ml-2">Submit</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
