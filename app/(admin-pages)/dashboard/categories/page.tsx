import type { Metadata } from "next"
import { Suspense } from "react"
import CategoriesManagementPage from "@/components/dashboard/categories/CategoriesManagementPage"

export const metadata: Metadata = {
  title: "Categories Management | Aquatech Dashboard",
  description: "Manage product categories and subcategories.",
}

// This would typically come from your database
const getCategoriesData = async () => {
  // const categories = await prisma.productCategory.findMany({
  //   include: {
  //     parent: true,
  //     children: true,
  //     _count: { select: { products: true } }
  //   },
  //   orderBy: { name: 'asc' }
  // })

  return {
    categories: [
      {
        id: "1",
        name: "Mobile Phones",
        slug: "mobile-phones",
        description: "All types of mobile phones and smartphones",
        parentId: null,
        isActive: true,
        sortOrder: 1,
        createdAt: new Date("2024-01-01"),
        updatedAt: new Date("2024-01-15"),
        parent: null,
        children: [
          { id: "2", name: "Smartphones" },
          { id: "3", name: "Feature Phones" },
        ],
        _count: { products: 45 },
      },
      {
        id: "2",
        name: "Smartphones",
        slug: "smartphones",
        description: "Modern smartphones with advanced features",
        parentId: "1",
        isActive: true,
        sortOrder: 1,
        createdAt: new Date("2024-01-01"),
        updatedAt: new Date("2024-01-10"),
        parent: { id: "1", name: "Mobile Phones" },
        children: [],
        _count: { products: 38 },
      },
      {
        id: "3",
        name: "Feature Phones",
        slug: "feature-phones",
        description: "Basic phones with essential features",
        parentId: "1",
        isActive: true,
        sortOrder: 2,
        createdAt: new Date("2024-01-01"),
        updatedAt: new Date("2024-01-08"),
        parent: { id: "1", name: "Mobile Phones" },
        children: [],
        _count: { products: 7 },
      },
      {
        id: "4",
        name: "Computers",
        slug: "computers",
        description: "Desktop and laptop computers",
        parentId: null,
        isActive: true,
        sortOrder: 2,
        createdAt: new Date("2024-01-02"),
        updatedAt: new Date("2024-01-12"),
        parent: null,
        children: [
          { id: "5", name: "Laptops" },
          { id: "6", name: "Desktops" },
        ],
        _count: { products: 28 },
      },
      {
        id: "5",
        name: "Laptops",
        slug: "laptops",
        description: "Portable computers and notebooks",
        parentId: "4",
        isActive: true,
        sortOrder: 1,
        createdAt: new Date("2024-01-02"),
        updatedAt: new Date("2024-01-14"),
        parent: { id: "4", name: "Computers" },
        children: [],
        _count: { products: 22 },
      },
      {
        id: "6",
        name: "Desktops",
        slug: "desktops",
        description: "Desktop computers and workstations",
        parentId: "4",
        isActive: true,
        sortOrder: 2,
        createdAt: new Date("2024-01-02"),
        updatedAt: new Date("2024-01-11"),
        parent: { id: "4", name: "Computers" },
        children: [],
        _count: { products: 6 },
      },
      {
        id: "7",
        name: "Tablets",
        slug: "tablets",
        description: "Tablet computers and e-readers",
        parentId: null,
        isActive: true,
        sortOrder: 3,
        createdAt: new Date("2024-01-03"),
        updatedAt: new Date("2024-01-13"),
        parent: null,
        children: [],
        _count: { products: 15 },
      },
      {
        id: "8",
        name: "Accessories",
        slug: "accessories",
        description: "Phone and computer accessories",
        parentId: null,
        isActive: true,
        sortOrder: 4,
        createdAt: new Date("2024-01-04"),
        updatedAt: new Date("2024-01-16"),
        parent: null,
        children: [
          { id: "9", name: "Chargers" },
          { id: "10", name: "Cases" },
          { id: "11", name: "Audio" },
        ],
        _count: { products: 67 },
      },
      {
        id: "9",
        name: "Chargers",
        slug: "chargers",
        description: "Phone and laptop chargers",
        parentId: "8",
        isActive: true,
        sortOrder: 1,
        createdAt: new Date("2024-01-04"),
        updatedAt: new Date("2024-01-09"),
        parent: { id: "8", name: "Accessories" },
        children: [],
        _count: { products: 23 },
      },
      {
        id: "10",
        name: "Cases",
        slug: "cases",
        description: "Protective cases and covers",
        parentId: "8",
        isActive: true,
        sortOrder: 2,
        createdAt: new Date("2024-01-04"),
        updatedAt: new Date("2024-01-07"),
        parent: { id: "8", name: "Accessories" },
        children: [],
        _count: { products: 31 },
      },
      {
        id: "11",
        name: "Audio",
        slug: "audio",
        description: "Headphones, speakers, and audio accessories",
        parentId: "8",
        isActive: false,
        sortOrder: 3,
        createdAt: new Date("2024-01-04"),
        updatedAt: new Date("2024-01-06"),
        parent: { id: "8", name: "Accessories" },
        children: [],
        _count: { products: 13 },
      },
    ],
  }
}

export default function CategoriesPage() {
  return (
    <div className="flex-1 space-y-4 w-full">
      <Suspense fallback={<div>Loading...</div>}>
        <CategoriesManagementPage />
      </Suspense>
    </div>
  )
}
