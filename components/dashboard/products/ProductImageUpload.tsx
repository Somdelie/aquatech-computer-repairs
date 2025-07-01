"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload, X, ImageIcon, Star } from "lucide-react"
import Image from "next/image"

interface ProductImageUploadProps {
  thumbnail: string
  images: string[]
  onThumbnailChange: (thumbnail: string) => void
  onImagesChange: (images: string[]) => void
}

export function ProductImageUpload({ thumbnail, images, onThumbnailChange, onImagesChange }: ProductImageUploadProps) {
  const [dragOver, setDragOver] = useState(false)

  const handleImageAdd = (url: string) => {
    if (!images.includes(url)) {
      onImagesChange([...images, url])
      if (!thumbnail) {
        onThumbnailChange(url)
      }
    }
  }

  const handleImageRemove = (url: string) => {
    const newImages = images.filter((img) => img !== url)
    onImagesChange(newImages)
    if (thumbnail === url) {
      onThumbnailChange(newImages[0] || "")
    }
  }

  const handleSetThumbnail = (url: string) => {
    onThumbnailChange(url)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Product Images</CardTitle>
          <CardDescription>
            Upload high-quality images of your product. First image will be the thumbnail.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* URL Input */}
          <div className="space-y-2">
            <Label>Add Image URL</Label>
            <div className="flex gap-2">
              <Input
                placeholder="https://example.com/image.jpg"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault()
                    const input = e.target as HTMLInputElement
                    if (input.value.trim()) {
                      handleImageAdd(input.value.trim())
                      input.value = ""
                    }
                  }
                }}
              />
              <Button
                type="button"
                variant="outline"
                onClick={(e) => {
                  const input = (e.target as HTMLElement).parentElement?.querySelector("input") as HTMLInputElement
                  if (input?.value.trim()) {
                    handleImageAdd(input.value.trim())
                    input.value = ""
                  }
                }}
              >
                Add
              </Button>
            </div>
          </div>

          {/* Drag & Drop Area */}
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              dragOver ? "border-blue-500 bg-blue-50" : "border-gray-300"
            }`}
            onDragOver={(e) => {
              e.preventDefault()
              setDragOver(true)
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => {
              e.preventDefault()
              setDragOver(false)
              // Handle file drop here
            }}
          >
            <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <p className="text-lg font-medium mb-2">Drag & drop images here</p>
            <p className="text-sm text-muted-foreground mb-4">or click to browse files</p>
            <Button type="button" variant="outline">
              <Upload className="mr-2 h-4 w-4" />
              Choose Files
            </Button>
          </div>

          {/* Image Gallery */}
          {images.length > 0 && (
            <div className="space-y-4">
              <Label>Product Images ({images.length})</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((image, index) => (
                  <div key={index} className="relative group">
                    <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Product image ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>

                    {/* Image Controls */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-2">
                      <Button
                        type="button"
                        size="sm"
                        variant={thumbnail === image ? "default" : "secondary"}
                        onClick={() => handleSetThumbnail(image)}
                      >
                        <Star className={`h-3 w-3 ${thumbnail === image ? "fill-current" : ""}`} />
                      </Button>
                      <Button type="button" size="sm" variant="destructive" onClick={() => handleImageRemove(image)}>
                        <X className="h-3 w-3" />
                      </Button>
                    </div>

                    {/* Thumbnail Badge */}
                    {thumbnail === image && (
                      <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                        Thumbnail
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {images.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <ImageIcon className="mx-auto h-12 w-12 mb-4" />
              <p>No images uploaded yet</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
