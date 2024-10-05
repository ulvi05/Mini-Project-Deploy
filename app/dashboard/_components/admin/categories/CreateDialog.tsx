"use client";

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRef } from "react"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner";
import { createCategory } from "@/actions/createCategory";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
})

export function CreateCategoryDialog(): React.ReactElement {
    const cancelBtn = useRef<HTMLButtonElement>(null);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        const promise = createCategory(data).then(() => {
            form.reset()
            cancelBtn.current?.click();
        })

        toast.promise(promise, {
            loading: "Creating category...",
            success: "Created successfully!",
            error: 'Failed to create category'
        })
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Create Category</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white shadow-lg rounded-lg">
                <DialogHeader>
                    <DialogTitle>Create Category</DialogTitle>
                    <DialogDescription>
                        Create a new category by filling out the form below.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <Label>Category Name</Label>
                                    <FormControl>
                                        <Input placeholder="Enter name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <DialogClose>
                            <Button ref={cancelBtn} variant="ghost">Cancel</Button>
                        </DialogClose>
                        <Button type="submit" className="ml-2">Submit</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
