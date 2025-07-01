import type { Metadata } from "next"
import { Suspense } from "react"
import AddProductClientPage from '@/components/dashboard/products/AddProductClientPage';

export const metadata: Metadata = {
  title: "Add New Product | Aquatech Dashboard",
  description: "Add a new product to your inventory with detailed specifications and pricing.",
}

// This would typically come from your database
const getFormData = async () => {
  // const categories = await prisma.productCategory.findMany({
  //   include: { parent: true, children: true }
  // })
  // const brands = await prisma.brand.findMany()

  return {
    categories: [
      { id: "1", name: "Mobile Phones", slug: "mobile-phones", parentId: null },
      { id: "2", name: "Smartphones", slug: "smartphones", parentId: "1" },
      { id: "3", name: "Feature Phones", slug: "feature-phones", parentId: "1" },
      { id: "4", name: "Computers", slug: "computers", parentId: null },
      { id: "5", name: "Laptops", slug: "laptops", parentId: "4" },
      { id: "6", name: "Desktops", slug: "desktops", parentId: "4" },
      { id: "7", name: "Tablets", slug: "tablets", parentId: null },
      { id: "8", name: "Accessories", slug: "accessories", parentId: null },
      { id: "9", name: "Chargers", slug: "chargers", parentId: "8" },
      { id: "10", name: "Cases", slug: "cases", parentId: "8" },
    ],
    brands: [
      { id: "1", name: "Apple", slug: "apple" },
      { id: "2", name: "Samsung", slug: "samsung" },
      { id: "3", name: "Dell", slug: "dell" },
      { id: "4", name: "HP", slug: "hp" },
      { id: "5", name: "Lenovo", slug: "lenovo" },
      { id: "6", name: "Huawei", slug: "huawei" },
      { id: "7", name: "Xiaomi", slug: "xiaomi" },
    ],
  }
}

export default async function AddProductPage() {
  const data = await getFormData()

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AddProductClientPage data={data} />
    </Suspense>
  )
}
