"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Plus, X, Package } from "lucide-react"

interface ProductVariant {
  name: string
  value: string
  price: string
  stock: string
  isDefault: boolean
}

interface ProductVariantsProps {
  variants: ProductVariant[]
  onVariantsChange: (variants: ProductVariant[]) => void
}

export function ProductVariants({ variants, onVariantsChange }: ProductVariantsProps) {
  const [showVariants, setShowVariants] = useState(variants.length > 0)

  const addVariant = () => {
    const newVariant: ProductVariant = {
      name: "",
      value: "",
      price: "",
      stock: "",
      isDefault: variants.length === 0,
    }
    onVariantsChange([...variants, newVariant])
  }

  const updateVariant = (index: number, field: keyof ProductVariant, value: any) => {
    const updatedVariants = variants.map((variant, i) => {
      if (i === index) {
        // If setting as default, unset others
        if (field === "isDefault" && value) {
          return { ...variant, [field]: value }
        }
        return { ...variant, [field]: value }
      } else if (field === "isDefault" && value) {
        return { ...variant, isDefault: false }
      }
      return variant
    })
    onVariantsChange(updatedVariants)
  }

  const removeVariant = (index: number) => {
    const updatedVariants = variants.filter((_, i) => i !== index)
    // If we removed the default variant, make the first one default
    if (variants[index].isDefault && updatedVariants.length > 0) {
      updatedVariants[0].isDefault = true
    }
    onVariantsChange(updatedVariants)
  }

  if (!showVariants) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            Product Variants
          </CardTitle>
          <CardDescription>Add variants like different storage sizes, colors, or configurations</CardDescription>
        </CardHeader>
        <CardContent>
          <Button type="button" variant="outline" onClick={() => setShowVariants(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Add Product Variants
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            Product Variants ({variants.length})
          </div>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => {
              setShowVariants(false)
              onVariantsChange([])
            }}
          >
            <X className="h-4 w-4" />
          </Button>
        </CardTitle>
        <CardDescription>Different configurations of the same product (e.g., storage sizes, colors)</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {variants.map((variant, index) => (
          <div key={index} className="p-4 border rounded-lg space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">Variant {index + 1}</h4>
              <Button type="button" variant="ghost" size="sm" onClick={() => removeVariant(index)}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Variant Name</Label>
                <Input
                  value={variant.name}
                  onChange={(e) => updateVariant(index, "name", e.target.value)}
                  placeholder="Storage, Color, Size"
                />
              </div>

              <div className="space-y-2">
                <Label>Variant Value</Label>
                <Input
                  value={variant.value}
                  onChange={(e) => updateVariant(index, "value", e.target.value)}
                  placeholder="128GB, Blue, Large"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Price Difference (R)</Label>
                <Input
                  type="number"
                  step="0.01"
                  value={variant.price}
                  onChange={(e) => updateVariant(index, "price", e.target.value)}
                  placeholder="0.00"
                />
                <p className="text-xs text-muted-foreground">Additional cost (+) or discount (-) from base price</p>
              </div>

              <div className="space-y-2">
                <Label>Stock Quantity</Label>
                <Input
                  type="number"
                  value={variant.stock}
                  onChange={(e) => updateVariant(index, "stock", e.target.value)}
                  placeholder="10"
                  min="0"
                />
              </div>

              <div className="space-y-2">
                <Label>Default Variant</Label>
                <div className="flex items-center space-x-2 pt-2">
                  <Checkbox
                    checked={variant.isDefault}
                    onCheckedChange={(checked) => updateVariant(index, "isDefault", checked)}
                  />
                  <Label className="text-sm">Set as default</Label>
                </div>
              </div>
            </div>
          </div>
        ))}

        <Button type="button" variant="outline" onClick={addVariant} className="w-full bg-transparent">
          <Plus className="mr-2 h-4 w-4" />
          Add Another Variant
        </Button>
      </CardContent>
    </Card>
  )
}
