"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Save,
  Plus,
  X,
  Eye,
  Package,
  DollarSign,
  Settings,
  ImageIcon,
  Tag,
  Smartphone,
  Laptop,
  Monitor,
  Tablet,
  Watch,
  Router,
  Mouse,
  Headphones,
} from "lucide-react"
import { ProductSpecifications } from "./ProductSpecifications"
import { ProductImageUpload } from "./ProductImageUpload"
import { ProductVariants } from "./ProductVariants"

interface ProductAddFormProps {
  categories: Array<{ id: string; name: string; slug: string; parentId: string | null }>
  brands: Array<{ id: string; name: string; slug: string }>
}

const productTypes = [
  { value: "MOBILE_PHONE", label: "Mobile Phone", icon: Smartphone },
  { value: "TABLET", label: "Tablet", icon: Tablet },
  { value: "LAPTOP", label: "Laptop", icon: Laptop },
  { value: "DESKTOP", label: "Desktop", icon: Monitor },
  { value: "MONITOR", label: "Monitor", icon: Monitor },
  { value: "TV", label: "TV", icon: Monitor },
  { value: "SMARTWATCH", label: "Smartwatch", icon: Watch },
  { value: "ROUTER", label: "Router", icon: Router },
  { value: "MOUSE", label: "Mouse", icon: Mouse },
  { value: "HEADPHONES", label: "Headphones", icon: Headphones },
  { value: "ACCESSORY", label: "Accessory", icon: Package },
  { value: "OTHER", label: "Other", icon: Package },
]

const conditions = [
  { value: "NEW", label: "New" },
  { value: "EXCELLENT", label: "Excellent" },
  { value: "GOOD", label: "Good" },
  { value: "FAIR", label: "Fair" },
  { value: "POOR", label: "Poor" },
]

export function ProductAddForm({ categories, brands }: ProductAddFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeTab, setActiveTab] = useState("basic")

  const [formData, setFormData] = useState({
    // Basic Information
    name: "",
    slug: "",
    description: "",
    shortDescription: "",
    type: "",
    categoryId: "",
    brandId: "",

    // Pricing & Inventory
    price: "",
    originalPrice: "",
    costPrice: "",
    stock: "",
    lowStockThreshold: "5",
    discount: "0",

    // Product Details
    condition: "NEW",
    isPreOwned: false,
    isFeatured: false,
    isAvailable: true,
    warrantyMonths: "12",

    // Physical Attributes
    weight: "",
    dimensions: "",
    color: "",

    // SEO
    metaTitle: "",
    metaDescription: "",
    keywords: [] as string[],

    // Media
    thumbnail: "",
    images: [] as string[],

    // Specifications (dynamic based on product type)
    specifications: {} as Record<string, any>,

    // Variants
    variants: [] as Array<{
      name: string
      value: string
      price: string
      stock: string
      isDefault: boolean
    }>,
  })

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    // Auto-generate slug from name
    if (field === "name" && typeof value === "string") {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")
      setFormData((prev) => ({ ...prev, slug }))
    }
  }

  const handleKeywordAdd = (keyword: string) => {
    if (keyword && !formData.keywords.includes(keyword)) {
      setFormData((prev) => ({
        ...prev,
        keywords: [...prev.keywords, keyword],
      }))
    }
  }

  const handleKeywordRemove = (keyword: string) => {
    setFormData((prev) => ({
      ...prev,
      keywords: prev.keywords.filter((k) => k !== keyword),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Here you would submit to your API
      console.log("Submitting product:", formData)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Redirect to products list
      router.push("/dashboard/products")
    } catch (error) {
      console.error("Error creating product:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const selectedProductType = productTypes.find((type) => type.value === formData.type)

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="basic" className="flex items-center gap-2">
            <Package className="h-4 w-4" />
            Basic Info
          </TabsTrigger>
          <TabsTrigger value="pricing" className="flex items-center gap-2">
            <DollarSign className="h-4 w-4" />
            Pricing
          </TabsTrigger>
          <TabsTrigger value="specifications" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Specifications
          </TabsTrigger>
          <TabsTrigger value="media" className="flex items-center gap-2">
            <ImageIcon className="h-4 w-4" />
            Media
          </TabsTrigger>
          <TabsTrigger value="seo" className="flex items-center gap-2">
            <Tag className="h-4 w-4" />
            SEO & Meta
          </TabsTrigger>
        </TabsList>

        {/* Basic Information Tab */}
        <TabsContent value="basic" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Essential product details and categorization</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="iPhone 13 Pro Max 128GB"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="slug">URL Slug *</Label>
                  <Input
                    id="slug"
                    value={formData.slug}
                    onChange={(e) => handleInputChange("slug", e.target.value)}
                    placeholder="iphone-13-pro-max-128gb"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="shortDescription">Short Description</Label>
                <Input
                  id="shortDescription"
                  value={formData.shortDescription}
                  onChange={(e) => handleInputChange("shortDescription", e.target.value)}
                  placeholder="Brief one-line description for listings"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Full Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  placeholder="Detailed product description..."
                  rows={4}
                />
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="type">Product Type *</Label>
                  <Select value={formData.type} onValueChange={(value) => handleInputChange("type", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select product type" />
                    </SelectTrigger>
                    <SelectContent>
                      {productTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          <div className="flex items-center gap-2">
                            <type.icon className="h-4 w-4" />
                            {type.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="categoryId">Category *</Label>
                  <Select value={formData.categoryId} onValueChange={(value) => handleInputChange("categoryId", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.parentId ? "  └ " : ""}
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="brandId">Brand *</Label>
                  <Select value={formData.brandId} onValueChange={(value) => handleInputChange("brandId", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select brand" />
                    </SelectTrigger>
                    <SelectContent>
                      {brands.map((brand) => (
                        <SelectItem key={brand.id} value={brand.id}>
                          {brand.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="condition">Condition</Label>
                  <Select value={formData.condition} onValueChange={(value) => handleInputChange("condition", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {conditions.map((condition) => (
                        <SelectItem key={condition.value} value={condition.value}>
                          {condition.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="color">Color</Label>
                  <Input
                    id="color"
                    value={formData.color}
                    onChange={(e) => handleInputChange("color", e.target.value)}
                    placeholder="Graphite, Blue, etc."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="warrantyMonths">Warranty (Months)</Label>
                  <Input
                    id="warrantyMonths"
                    type="number"
                    value={formData.warrantyMonths}
                    onChange={(e) => handleInputChange("warrantyMonths", e.target.value)}
                    min="0"
                    max="60"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="isPreOwned"
                    checked={formData.isPreOwned}
                    onCheckedChange={(checked) => handleInputChange("isPreOwned", checked)}
                  />
                  <Label htmlFor="isPreOwned">Pre-owned/Used</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="isFeatured"
                    checked={formData.isFeatured}
                    onCheckedChange={(checked) => handleInputChange("isFeatured", checked)}
                  />
                  <Label htmlFor="isFeatured">Featured Product</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="isAvailable"
                    checked={formData.isAvailable}
                    onCheckedChange={(checked) => handleInputChange("isAvailable", checked)}
                  />
                  <Label htmlFor="isAvailable">Available for Sale</Label>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Pricing & Inventory Tab */}
        <TabsContent value="pricing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Pricing & Inventory</CardTitle>
              <CardDescription>Set pricing, stock levels, and inventory management</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Selling Price (R) *</Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    value={formData.price}
                    onChange={(e) => handleInputChange("price", e.target.value)}
                    placeholder="11299.00"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="originalPrice">Original Price (R)</Label>
                  <Input
                    id="originalPrice"
                    type="number"
                    step="0.01"
                    value={formData.originalPrice}
                    onChange={(e) => handleInputChange("originalPrice", e.target.value)}
                    placeholder="18890.00"
                  />
                  <p className="text-xs text-muted-foreground">For showing crossed-out prices</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="costPrice">Cost Price (R)</Label>
                  <Input
                    id="costPrice"
                    type="number"
                    step="0.01"
                    value={formData.costPrice}
                    onChange={(e) => handleInputChange("costPrice", e.target.value)}
                    placeholder="8000.00"
                  />
                  <p className="text-xs text-muted-foreground">For profit calculations</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="stock">Stock Quantity *</Label>
                  <Input
                    id="stock"
                    type="number"
                    value={formData.stock}
                    onChange={(e) => handleInputChange("stock", e.target.value)}
                    placeholder="10"
                    min="0"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lowStockThreshold">Low Stock Alert</Label>
                  <Input
                    id="lowStockThreshold"
                    type="number"
                    value={formData.lowStockThreshold}
                    onChange={(e) => handleInputChange("lowStockThreshold", e.target.value)}
                    placeholder="5"
                    min="0"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="discount">Discount (%)</Label>
                  <Input
                    id="discount"
                    type="number"
                    step="0.01"
                    value={formData.discount}
                    onChange={(e) => handleInputChange("discount", e.target.value)}
                    placeholder="0"
                    min="0"
                    max="100"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <Input
                    id="weight"
                    type="number"
                    step="0.001"
                    value={formData.weight}
                    onChange={(e) => handleInputChange("weight", e.target.value)}
                    placeholder="0.240"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dimensions">Dimensions (L x W x H cm)</Label>
                  <Input
                    id="dimensions"
                    value={formData.dimensions}
                    onChange={(e) => handleInputChange("dimensions", e.target.value)}
                    placeholder="16.0 x 7.8 x 0.78"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <ProductVariants
            variants={formData.variants}
            onVariantsChange={(variants) => handleInputChange("variants", variants)}
          />
        </TabsContent>

        {/* Specifications Tab */}
        <TabsContent value="specifications" className="space-y-6">
          <ProductSpecifications
            productType={formData.type}
            specifications={formData.specifications}
            onSpecificationsChange={(specs) => handleInputChange("specifications", specs)}
          />
        </TabsContent>

        {/* Media Tab */}
        <TabsContent value="media" className="space-y-6">
          <ProductImageUpload
            thumbnail={formData.thumbnail}
            images={formData.images}
            onThumbnailChange={(thumbnail) => handleInputChange("thumbnail", thumbnail)}
            onImagesChange={(images) => handleInputChange("images", images)}
          />
        </TabsContent>

        {/* SEO Tab */}
        <TabsContent value="seo" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>SEO & Metadata</CardTitle>
              <CardDescription>Optimize your product for search engines</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="metaTitle">Meta Title</Label>
                <Input
                  id="metaTitle"
                  value={formData.metaTitle}
                  onChange={(e) => handleInputChange("metaTitle", e.target.value)}
                  placeholder="iPhone 13 Pro Max 128GB - Graphite | Aquatech"
                  maxLength={60}
                />
                <p className="text-xs text-muted-foreground">{formData.metaTitle.length}/60 characters (recommended)</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="metaDescription">Meta Description</Label>
                <Textarea
                  id="metaDescription"
                  value={formData.metaDescription}
                  onChange={(e) => handleInputChange("metaDescription", e.target.value)}
                  placeholder="High-quality pre-owned iPhone 13 Pro Max in excellent condition. 12 months warranty, unlocked, and ready to use."
                  maxLength={160}
                  rows={3}
                />
                <p className="text-xs text-muted-foreground">
                  {formData.metaDescription.length}/160 characters (recommended)
                </p>
              </div>

              <div className="space-y-2">
                <Label>Keywords</Label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {formData.keywords.map((keyword) => (
                    <Badge key={keyword} variant="secondary" className="flex items-center gap-1">
                      {keyword}
                      <X className="h-3 w-3 cursor-pointer" onClick={() => handleKeywordRemove(keyword)} />
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Add keyword and press Enter"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault()
                        const input = e.target as HTMLInputElement
                        handleKeywordAdd(input.value.trim())
                        input.value = ""
                      }
                    }}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={(e) => {
                      const input = (e.target as HTMLElement).previousElementSibling as HTMLInputElement
                      handleKeywordAdd(input.value.trim())
                      input.value = ""
                    }}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Form Actions */}
      <div className="flex items-center justify-between pt-6 border-t">
        <Button type="button" variant="outline" onClick={() => router.back()}>
          Cancel
        </Button>

        <div className="flex gap-2">
          <Button type="button" variant="outline">
            <Eye className="mr-2 h-4 w-4" />
            Preview
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Creating...
              </>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Create Product
              </>
            )}
          </Button>
        </div>
      </div>
    </form>
  )
}
