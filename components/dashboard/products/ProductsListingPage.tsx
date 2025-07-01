"use client"

import { ProductsDataTable } from "@/components/dashboard/products/ProductsDataTable"

interface Product {
  id: string
  name: string
  slug: string
  type: string
  condition: string
  price: number
  originalPrice: number | null
  stock: number
  lowStockThreshold: number
  isAvailable: boolean
  isFeatured: boolean
  isPreOwned: boolean
  discount: number
  thumbnail: string
  category: { id: string; name: string }
  brand: { id: string; name: string }
  createdAt: Date
  updatedAt: Date
  reviews: Array<{ rating: number }>
  orderItems: Array<{ quantity: number }>
}

interface ProductsListingPageProps {
  data: {
    products: Product[]
    categories: Array<{ id: string; name: string }>
    brands: Array<{ id: string; name: string }>
  }
}

export default function ProductsListingPage({ data }: ProductsListingPageProps) {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Products & Inventory</h1>
          <p className="text-muted-foreground">Manage your product catalog, pricing, and stock levels</p>
        </div>
      </div>

      <ProductsDataTable products={data.products} categories={data.categories} brands={data.brands} />
    </div>
  )
}
