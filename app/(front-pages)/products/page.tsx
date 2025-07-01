import type { Metadata } from "next"
import { Suspense } from "react"
import { ProductsPageSkeleton } from "@/components/front/products-page/ProductsPageSkeleton"
import ProductsClientPage from '@/components/front/products-page/ProductsClientPage';

export const metadata: Metadata = {
  title: "Quality Second-Hand Devices | Aquatech Computer Repairs",
  description:
    "Browse our selection of quality second-hand phones, computers, tablets, and accessories. All devices tested and guaranteed with warranty.",
  keywords: [
    "second-hand phones",
    "used computers",
    "refurbished devices",
    "affordable phones",
    "quality laptops",
    "South Africa",
    "warranty",
  ],
}

// This would typically come from your database using Prisma
const getProductsData = async () => {
  // Simulated database query - replace with actual Prisma queries
  // const products = await prisma.product.findMany({
  //   include: {
  //     category: true,
  //     brand: true,
  //   },
  //   where: {
  //     isAvailable: true,
  //   },
  //   orderBy: {
  //     createdAt: 'desc',
  //   },
  // })

  return {
    products: [
      {
        id: "1",
        slug: "iphone-13-128gb-blue",
        name: "iPhone 13 128GB - Blue",
        description: "Excellent condition iPhone 13 with original charger and box. Battery health 89%.",
        price: 12500,
        thumbnail: "/iPhone 13 128GB - Blue.jpg",
        images: ["/placeholder.svg?height=600&width=600"],
        stock: 3,
        discount: 15,
        isAvailable: true,
        type: "PHONE",
        category: { id: "1", name: "Smartphones" },
        brand: { id: "1", name: "Apple" },
        createdAt: new Date("2024-01-10"),
      },
      {
        id: "2",
        slug: "samsung-galaxy-s22-256gb",
        name: "Samsung Galaxy S22 256GB",
        description: "Like new Samsung Galaxy S22 with wireless charger included. No scratches or dents.",
        price: 9800,
        thumbnail: "/Samsung Galaxy S22 256GB.jpg",
        images: ["/placeholder.svg?height=600&width=600"],
        stock: 5,
        discount: 20,
        isAvailable: true,
        type: "PHONE",
        category: { id: "1", name: "Smartphones" },
        brand: { id: "2", name: "Samsung" },
        createdAt: new Date("2024-01-08"),
      },
      {
        id: "3",
        slug: "macbook-air-m1-256gb",
        name: "MacBook Air M1 256GB",
        description: "Pristine MacBook Air with M1 chip. Perfect for students and professionals. Includes original charger.",
        price: 18500,
        thumbnail: "/MacBook Air M1 256GB.jpg",
        images: ["/placeholder.svg?height=600&width=600"],
        stock: 2,
        discount: 10,
        isAvailable: true,
        type: "COMPUTER",
        category: { id: "2", name: "Laptops" },
        brand: { id: "1", name: "Apple" },
        createdAt: new Date("2024-01-05"),
      },
      {
        id: "4",
        slug: "dell-xps-13-i7-16gb",
        name: "Dell XPS 13 i7 16GB RAM",
        description: "High-performance Dell XPS 13 with Intel i7 processor and 16GB RAM. Great for development work.",
        price: 15200,
        thumbnail: "/Dell XPS.jpg",
        images: ["/placeholder.svg?height=600&width=600"],
        stock: 1,
        discount: 0,
        isAvailable: true,
        type: "COMPUTER",
        category: { id: "2", name: "Laptops" },
        brand: { id: "3", name: "Dell" },
        createdAt: new Date("2024-01-03"),
      },
      {
        id: "5",
        slug: "ipad-air-64gb-wifi",
        name: "iPad Air 64GB WiFi",
        description: "Excellent condition iPad Air with Apple Pencil compatible screen. Perfect for digital art and notes.",
        price: 7800,
        thumbnail: "/iPad Air 64GB WiFi.jpg",
        images: ["/placeholder.svg?height=600&width=600"],
        stock: 4,
        discount: 12,
        isAvailable: true,
        type: "TABLET",
        category: { id: "3", name: "Tablets" },
        brand: { id: "1", name: "Apple" },
        createdAt: new Date("2024-01-01"),
      },
      {
        id: "6",
        slug: "airpods-pro-2nd-gen",
        name: "AirPods Pro 2nd Generation",
        description: "Like new AirPods Pro with active noise cancellation. Includes charging case and all ear tips.",
        price: 3200,
        thumbnail: "/AirPods.jpg",
        images: ["/placeholder.svg?height=600&width=600"],
        stock: 8,
        discount: 8,
        isAvailable: true,
        type: "ACCESSORY",
        category: { id: "4", name: "Audio" },
        brand: { id: "1", name: "Apple" },
        createdAt: new Date("2023-12-28"),
      },
    ],
    categories: [
      { id: "1", name: "Smartphones" },
      { id: "2", name: "Laptops" },
      { id: "3", name: "Tablets" },
      { id: "4", name: "Audio" },
      { id: "5", name: "Accessories" },
    ],
    brands: [
      { id: "1", name: "Apple" },
      { id: "2", name: "Samsung" },
      { id: "3", name: "Dell" },
      { id: "4", name: "HP" },
      { id: "5", name: "Lenovo" },
    ],
  }
}

export default async function ProductsPage() {
  const data = await getProductsData()

  return (
    <Suspense fallback={<ProductsPageSkeleton />}>
      <ProductsClientPage data={data} />
    </Suspense>
  )
}
