"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, X } from "lucide-react"

interface ProductFiltersProps {
  categories: Array<{ id: string; name: string }>
  brands: Array<{ id: string; name: string }>
  onFilterChange: (filters: {
    search: string
    category: string | null
    brand: string | null
    priceRange: [number, number]
    sortBy: string
  }) => void
  totalProducts: number
  initialFilters: {
    search: string
    category: string | null
    brand: string | null
    priceRange: [number, number]
    sortBy: string
  }
}

export function ProductFilters({
  categories,
  brands,
  onFilterChange,
  totalProducts,
  initialFilters,
}: ProductFiltersProps) {
  const [localFilters, setLocalFilters] = useState(initialFilters)

  const updateFilter = (key: string, value: any) => {
    const newFilters = { ...localFilters, [key]: value }
    setLocalFilters(newFilters)
    onFilterChange(newFilters)
  }

  const clearFilters = () => {
    const clearedFilters = {
      search: "",
      category: null,
      brand: null,
      priceRange: [0, 50000] as [number, number],
      sortBy: "newest",
    }
    setLocalFilters(clearedFilters)
    onFilterChange(clearedFilters)
  }

  const hasActiveFilters =
    localFilters.search ||
    localFilters.category ||
    localFilters.brand ||
    localFilters.priceRange[0] > 0 ||
    localFilters.priceRange[1] < 50000

  return (
    <div className="space-y-6">
      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Search Products
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="Search devices..."
            value={localFilters.search}
            onChange={(e) => updateFilter("search", e.target.value)}
            className="w-full"
          />
        </CardContent>
      </Card>

      {/* Sort */}
      <Card>
        <CardHeader>
          <CardTitle>Sort By</CardTitle>
        </CardHeader>
        <CardContent>
          <Select value={localFilters.sortBy} onValueChange={(value) => updateFilter("sortBy", value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="name">Name A-Z</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={localFilters.category === category.id ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => updateFilter("category", localFilters.category === category.id ? null : category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Brands */}
      <Card>
        <CardHeader>
          <CardTitle>Brands</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {brands.map((brand) => (
              <Button
                key={brand.id}
                variant={localFilters.brand === brand.id ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => updateFilter("brand", localFilters.brand === brand.id ? null : brand.id)}
              >
                {brand.name}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle>Price Range</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Slider
              value={localFilters.priceRange}
              onValueChange={(value) => updateFilter("priceRange", value as [number, number])}
              max={50000}
              min={0}
              step={500}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>R{localFilters.priceRange[0].toLocaleString()}</span>
              <span>R{localFilters.priceRange[1].toLocaleString()}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Active Filters */}
      {hasActiveFilters && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Active Filters
              </span>
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                <X className="h-4 w-4" />
                Clear All
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {localFilters.search && (
                <Badge variant="secondary">
                  Search: {localFilters.search}
                  <X className="h-3 w-3 ml-1 cursor-pointer" onClick={() => updateFilter("search", "")} />
                </Badge>
              )}
              {localFilters.category && (
                <Badge variant="secondary">
                  {categories.find((c) => c.id === localFilters.category)?.name}
                  <X className="h-3 w-3 ml-1 cursor-pointer" onClick={() => updateFilter("category", null)} />
                </Badge>
              )}
              {localFilters.brand && (
                <Badge variant="secondary">
                  {brands.find((b) => b.id === localFilters.brand)?.name}
                  <X className="h-3 w-3 ml-1 cursor-pointer" onClick={() => updateFilter("brand", null)} />
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Results Count */}
      <Card>
        <CardContent className="pt-6">
          <p className="text-center text-muted-foreground">
            <span className="font-semibold text-foreground">{totalProducts}</span> products found
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
