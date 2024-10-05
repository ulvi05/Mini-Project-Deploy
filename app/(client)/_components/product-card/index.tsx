import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Product as PrismaProduct } from "@prisma/client"
import Link from "next/link";

export default function ProductCard({ product }: { product: PrismaProduct }) {
    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    }).format(product.price);
    return (
        <Card className="w-full max-w-sm shadow-lg">
            <CardContent className="flex flex-col items-center gap-4 p-4">
                <div className="relative w-full h-64 mb-4">
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-lg font-bold text-gray-500 dark:text-gray-400">{formattedPrice} per week</p>
                <Link className="w-full" href={`/yatchs/${product.id}`}>
                    <Button className="w-full text-white hover:bg-white hover:text-black hover:border-2 hover:border-black">Detail</Button>
                </Link>
            </CardContent>
        </Card>
    )
}