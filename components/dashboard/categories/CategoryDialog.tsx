"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Loader2, FolderTree } from "lucide-react"

const categorySchema = z.object({
  name: z.string().min(1, "Category name is required").max(100, "Name must be less than 100 characters"),
  slug: z.string().min(1, "Slug is required").max(100, "Slug must be less than 100 characters"),
  description: z.string().max(500, "Description must be less than 500 characters").optional(),
  parentId: z.string().optional(),
  isActive: z.boolean(),
  sortOrder: z.number().min(0, "Sort order must be 0 or greater"),
})

type CategoryFormData = z.infer<typeof categorySchema>

interface Category {
  id: string
  name: string
  slug: string
  description: string
  parentId: string | null
  isActive: boolean
  sortOrder: number
  createdAt: Date
  updatedAt: Date
  parent: { id: string; name: string } | null
  children: Array<{ id: string; name: string }>
  _count: { products: number }
}

interface CategoryDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  category?: Category | null
  categories: Category[]
  onSubmit: (data: CategoryFormData) => void
}

export function CategoryDialog({ open, onOpenChange, category, categories, onSubmit }: CategoryDialogProps) {
  const [isLoading, setIsLoading] = useState(false)
  const isEditing = !!category

  const form = useForm<CategoryFormData>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: "",
      slug: "",
      description: "",
      parentId: "none", // Updated default value to be a non-empty string
      isActive: true,
      sortOrder: 0,
    },
  })

  // Generate slug from name
  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  }

  // Watch name field to auto-generate slug
  const watchedName = form.watch("name")
  useEffect(() => {
    if (watchedName && !isEditing) {
      const slug = generateSlug(watchedName)
      form.setValue("slug", slug)
    }
  }, [watchedName, form, isEditing])

  // Reset form when dialog opens/closes or category changes
  useEffect(() => {
    if (open) {
      if (category) {
        form.reset({
          name: category.name,
          slug: category.slug,
          description: category.description || "",
          parentId: category.parentId || "none", // Updated default value to be a non-empty string
          isActive: category.isActive,
          sortOrder: category.sortOrder,
        })
      } else {
        form.reset({
          name: "",
          slug: "",
          description: "",
          parentId: "none", // Updated default value to be a non-empty string
          isActive: true,
          sortOrder: 0,
        })
      }
    }
  }, [open, category, form])

  const handleSubmit = async (data: CategoryFormData) => {
    setIsLoading(true)
    try {
      // Convert empty string to undefined for parentId
      const submitData = {
        ...data,
        parentId: data.parentId === "none" ? undefined : data.parentId, // Updated to handle "none" value
      }
      await onSubmit(submitData)
      onOpenChange(false)
    } catch (error) {
      console.error("Error submitting category:", error)
    } finally {
      setIsLoading(false)
    }
  }

  // Get available parent categories (exclude current category and its children)
  const availableParentCategories = categories.filter((cat) => {
    if (isEditing && category) {
      // Exclude self and children
      return cat.id !== category.id && !category.children.some((child) => child.id === cat.id)
    }
    return true
  })

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FolderTree className="h-5 w-5" />
            {isEditing ? "Edit Category" : "Add New Category"}
          </DialogTitle>
          <DialogDescription>
            {isEditing
              ? "Update the category information below."
              : "Create a new category for organizing your products."}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Electronics" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>URL Slug *</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., electronics" {...field} />
                    </FormControl>
                    <FormDescription>Used in URLs. Auto-generated from name.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Brief description of this category..."
                      className="resize-none"
                      rows={3}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Optional description for this category.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="parentId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Parent Category</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select parent category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="none">No Parent (Top Level)</SelectItem> {/* Updated value prop */}
                        {availableParentCategories
                          .filter((cat) => !cat.parentId) // Only show top-level categories as parents
                          .map((cat) => (
                            <SelectItem key={cat.id} value={cat.id}>
                              {cat.name}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>Leave empty for top-level category.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="sortOrder"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sort Order</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min="0"
                        placeholder="0"
                        {...field}
                        onChange={(e) => field.onChange(Number.parseInt(e.target.value) || 0)}
                      />
                    </FormControl>
                    <FormDescription>Lower numbers appear first.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="isActive"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Active Status</FormLabel>
                    <FormDescription>Enable this category to make it visible to customers.</FormDescription>
                  </div>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)} disabled={isLoading}>
                Cancel
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isEditing ? "Update Category" : "Create Category"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
