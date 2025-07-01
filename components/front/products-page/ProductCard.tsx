"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Eye, Star, Smartphone, Laptop, Tablet, Headphones } from "lucide-react"
import Image from "next/image"

interface Product {
  id: string
  slug: string
  name: string
  description: string
  price: number
  thumbnail: string
  stock: number
  discount: number
  isAvailable: boolean
  type: string
  category: { id: string; name: string }
  brand: { id: string; name: string }
}

interface ProductCardProps {
  product: Product
}

const getProductIcon = (type: string) => {
  switch (type) {
    case "PHONE":
      return Smartphone
    case "COMPUTER":
      return Laptop
    case "TABLET":
      return Tablet
    case "ACCESSORY":
      return Headphones
    default:
      return Smartphone
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const IconComponent = getProductIcon(product.type)
  const discountedPrice = product.discount > 0 ? product.price * (1 - product.discount / 100) : product.price
  const savings = product.price - discountedPrice

  const handleAddToCart = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    // Add to cart logic here
  }

  const handleToggleWishlist = () => {
    setIsWishlisted(!isWishlisted)
    // Add to wishlist logic here
  }

  return (
    <motion.div variants={cardVariants} whileHover={{ scale: 1.02 }} className="relative">
      <Card className="h-full border-0 py-0 shadow hover:shadow-lg transition-all duration-300 bg-white backdrop-blur-sm overflow-hidden">
        {/* Discount Badge */}
        {product.discount > 0 && (
          <div className="absolute top-3 left-3 z-10">
            <Badge className="bg-red-500 text-white">-{product.discount}%</Badge>
          </div>
        )}

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-3 right-3 z-10 bg-white/80 hover:bg-white"
          onClick={handleToggleWishlist}
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
        </Button>

        {/* Product Image */}
        <div className="relative aspect-[4/3] bg-gradient-to-br flex items-center justify-center">
          <Image
            src={product.thumbnail || "/placeholder.jpg"}
            alt={product.name}
            fill
            className="object-contain"
            // sizes="(max-width: 700px) 100vw, (max-width: 1000px) 40vw, 23vw"
            sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/5" />

          {/* Product Type Icon */}
          <div className="absolute bottom-3 left-3 p-2 bg-white/90 rounded-full">
            <IconComponent className="h-4 w-4 text-gray-600" />
          </div>

          {/* Quick View Button */}
          <Button
            variant="secondary"
            size="sm"
            className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>

        <CardContent className="px-3">
          {/* Brand & Category */}
          <div className="flex items-center justify-between mb-1">
            <Badge variant="outline" className="text-xs">
              {product.brand.name}
            </Badge>
            <Badge variant="secondary" className="text-xs">
              {product.category.name}
            </Badge>
          </div>

          {/* Product Name */}
          <h3 className="font-semibold text-base mb-1 line-clamp-1">{product.name}</h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-2 line-clamp-1">{product.description}</p>

          {/* Price */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl font-bold text-green-600">R{discountedPrice.toLocaleString()}</span>
            {product.discount > 0 && (
              <>
                <span className="text-xs text-muted-foreground line-through">R{product.price.toLocaleString()}</span>
                <span className="text-xs text-green-600 font-medium">Save R{savings.toLocaleString()}</span>
              </>
            )}
          </div>

          {/* Stock Status */}
          <div className="flex items-center gap-2 mb-2">
            <div
              className={`w-2 h-2 rounded-full ${product.stock > 5 ? "bg-green-500" : product.stock > 0 ? "bg-yellow-500" : "bg-red-500"}`}
            />
            <span className="text-xs text-muted-foreground">
              {product.stock > 5 ? "In Stock" : product.stock > 0 ? `Only ${product.stock} left` : "Out of Stock"}
            </span>
          </div>

          {/* Rating (placeholder) */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-xs text-muted-foreground ml-1">(4.8)</span>
          </div>
        </CardContent>

        <CardFooter className="p-3 pt-0">
          <div className="flex gap-2 w-full">
            <Button
              size="sm"
              className="flex-1"
              onClick={handleAddToCart}
              disabled={!product.isAvailable || product.stock === 0 || isLoading}
            >
              <ShoppingCart className="mr-1 h-3 w-3" />
              {isLoading ? "Adding..." : "Add to Cart"}
            </Button>
            <Button variant="outline" size="sm">
              <Eye className="h-3 w-3" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
