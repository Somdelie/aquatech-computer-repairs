"use client"
import { ProductAddForm } from './ProductAddForm';


interface AddProductClientPageProps {
  data: {
    categories: Array<{ id: string; name: string; slug: string; parentId: string | null }>
    brands: Array<{ id: string; name: string; slug: string }>
  }
}

export default function AddProductClientPage({ data }: AddProductClientPageProps) {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0 overflow-x-hidden w-full">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Add New Product</h1>
          <p className="text-muted-foreground">Create a new product listing with detailed specifications</p>
        </div>
      </div>

      <ProductAddForm categories={data.categories} brands={data.brands} />
    </div>
  )
}
