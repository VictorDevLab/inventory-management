import { prisma } from "@/lib/prisma";
import Sidebar from "../components/sidebar";
import { getCurrentUser } from "@/lib/auth";

export default async function Page() {
    const user = await getCurrentUser();
    const userId = user.id;

    const totalProducts = await prisma.products.count({where: {userId}});
    const lowStock = await prisma.product.count({where: {userId}});
    const recent = await prisma.product.findMany({
        where: {userId},
        orderBy: {createdAt: "desc"},
        take: 5,
    })
    console.log("total products", totalProducts)
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="min-h-screen bg-gra-50">
             <Sidebar currentPath="/dashboard"/>
             <main className="ml-64 p-8">
                {/* Header */}
                <div className="mb-8">
                   <div className="flex items-center justify-between">
                    <div className="text-2xl font-semibold text-gray-900">
                        <h1>Dashboard</h1>
                        <p className="text-sm text-gray-500">Welcome back! Here is an overview of your inventory</p>
                    </div>
                   </div>
                </div>
                {/* key metrics */}


             </main>
            </div>
        </div>
    )
}