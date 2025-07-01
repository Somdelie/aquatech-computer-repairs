"use client"

import { useState, useEffect } from "react"
import { CategoriesTableSkeleton } from './CategoriesTableSkeleton';
import { CategoriesDataTable } from './CategoriesDataTable';

// Mock data - replace with actual API call
const mockCategories = [
  {
    id: "1",
    name: "Electronics",
    slug: "electronics",
    description: "Electronic devices and gadgets",
    parentId: null,
    isActive: true,
    sortOrder: 1,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
    parent: null,
    children: [
      { id: "2", name: "Mobile Phones" },
      { id: "3", name: "Laptops" },
    ],
    _count: { products: 45 },
  },
  {
    id: "2",
    name: "Mobile Phones",
    slug: "mobile-phones",
    description: "Smartphones and feature phones",
    parentId: "1",
    isActive: true,
    sortOrder: 1,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
    parent: { id: "1", name: "Electronics" },
    children: [
      { id: "4", name: "Smartphones" },
      { id: "5", name: "Feature Phones" },
    ],
    _count: { products: 38 },
  },
  {
    id: "3",
    name: "Laptops",
    slug: "laptops",
    description: "Portable computers and notebooks",
    parentId: "1",
    isActive: true,
    sortOrder: 2,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
    parent: { id: "1", name: "Electronics" },
    children: [],
    _count: { products: 22 },
  },
  {
    id: "4",
    name: "Smartphones",
    slug: "smartphones",
    description: "Modern touch screen phones",
    parentId: "2",
    isActive: true,
    sortOrder: 1,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
    parent: { id: "2", name: "Mobile Phones" },
    children: [],
    _count: { products: 28 },
  },
  {
    id: "5",
    name: "Feature Phones",
    slug: "feature-phones",
    description: "Basic phones with limited features",
    parentId: "2",
    isActive: false,
    sortOrder: 2,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
    parent: { id: "2", name: "Mobile Phones" },
    children: [],
    _count: { products: 10 },
  },
  {
    id: "6",
    name: "Home & Garden",
    slug: "home-garden",
    description: "Home improvement and garden supplies",
    parentId: null,
    isActive: true,
    sortOrder: 2,
    createdAt: new Date("2024-01-02"),
    updatedAt: new Date("2024-01-02"),
    parent: null,
    children: [
      { id: "7", name: "Furniture" },
      { id: "8", name: "Garden Tools" },
    ],
    _count: { products: 67 },
  },
]

const CategoriesManagementPage = () => {
  const [categories, setCategories] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setCategories(mockCategories)
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <CategoriesTableSkeleton />
  }

  return <div className="overflow-x-hidden"><CategoriesDataTable categories={categories} /></div>
}

export default CategoriesManagementPage
