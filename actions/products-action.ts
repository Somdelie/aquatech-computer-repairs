'use server'

import { revalidatePath } from 'next/cache';
import db from '@/prisma/db';


export async function getAllProducts() {

    try {
        const res = await db.product.findMany({
            include: {
                category: true,
                brand: true,
                reviews: true,
                orderItems: true,
            },
            orderBy: { createdAt: 'desc' }
        });

        console.log("Fetched products:", res);
        return res
    } catch (error) {
        console.error("Error fetching products:", error);
        return {
            products: [],
            categories: [],
            brands: []
        }
        
    }
}