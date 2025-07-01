"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import {
  Plus,
  Search,
  MoreHorizontal,
  Edit,
  Eye,
  Trash2,
  Download,
  Upload,
  Settings2,
  Star,
  Package,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Smartphone,
  Laptop,
  Monitor,
  Tablet,
  Watch,
  Mouse,
  Headphones,
  ArrowUpDown,
  ChevronDown,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Product {
  id: string
  name: string
  slug: string
  type: string
  condition: string
  price: number
  originalPrice: number | null
  stock: number
  lowStockThreshold: number
  isAvailable: boolean
  isFeatured: boolean
  isPreOwned: boolean
  discount: number
  thumbnail: string
  category: { id: string; name: string }
  brand: { id: string; name: string }
  createdAt: Date
  updatedAt: Date
  reviews: Array<{ rating: number }>
  orderItems: Array<{ quantity: number }>
}

interface ProductsDataTableProps {
  products: Product[]
  categories: Array<{ id: string; name: string }>
  brands: Array<{ id: string; name: string }>
}

const getProductTypeIcon = (type: string) => {
  switch (type) {
    case "MOBILE_PHONE":
      return Smartphone
    case "LAPTOP":
      return Laptop
    case "DESKTOP":
    case "MONITOR":
      return Monitor
    case "TABLET":
      return Tablet
    case "SMARTWATCH":
      return Watch
    case "MOUSE":
      return Mouse
    case "HEADPHONES":
      return Headphones
    default:
      return Package
  }
}

const getConditionColor = (condition: string) => {
  switch (condition) {
    case "NEW":
      return "bg-green-100 text-green-800"
    case "EXCELLENT":
      return "bg-blue-100 text-blue-800"
    case "GOOD":
      return "bg-yellow-100 text-yellow-800"
    case "FAIR":
      return "bg-orange-100 text-orange-800"
    case "POOR":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

const getStockStatus = (stock: number, threshold: number) => {
  if (stock === 0) return { label: "Out of Stock", color: "bg-red-100 text-red-800", icon: XCircle }
  if (stock <= threshold) return { label: "Low Stock", color: "bg-yellow-100 text-yellow-800", icon: AlertTriangle }
  return { label: "In Stock", color: "bg-green-100 text-green-800", icon: CheckCircle }
}

export function ProductsDataTable({ products, categories, brands }: ProductsDataTableProps) {
  const router = useRouter()
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})
  const [globalFilter, setGlobalFilter] = useState("")
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [productToDelete, setProductToDelete] = useState<string | null>(null)

  const columns: ColumnDef<Product>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "name",
      header: ({ column }) => (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Product
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => {
        const product = row.original
        const TypeIcon = getProductTypeIcon(product.type)
        const averageRating =
          product.reviews.length > 0
            ? product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.reviews.length
            : 0

        return (
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative flex-shrink-0">
              <Image
                src={product.thumbnail || "/placeholder.svg"}
                alt={product.name}
                width={48}
                height={48}
                className="rounded-lg object-cover"
              />
              <div className="absolute -bottom-1 -right-1 p-1 bg-white rounded-full shadow-sm">
                <TypeIcon className="h-3 w-3 text-gray-600" />
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 mb-1">
                <p className="font-medium truncate">{product.name.slice(0,15)}</p>
                {product.isFeatured && <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 flex-shrink-0" />}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{product.brand.name}</span>
                <span>•</span>
                <span>{product.category.name}</span>
                {averageRating > 0 && (
                  <>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span>{averageRating.toFixed(1)}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )
      },
    },
    {
      accessorKey: "condition",
      header: "Condition",
      cell: ({ row }) => {
        const condition = row.getValue("condition") as string
        return <Badge className={getConditionColor(condition)}>{condition}</Badge>
      },
    },
    {
      accessorKey: "price",
      header: ({ column }) => (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => {
        const product = row.original
        const discountedPrice = product.discount > 0 ? product.price * (1 - product.discount / 100) : product.price

        return (
          <div className="text-right">
            <div className="font-medium">R{discountedPrice.toLocaleString()}</div>
            {product.originalPrice && (
              <div className="text-xs text-muted-foreground line-through">
                R{product.originalPrice.toLocaleString()}
              </div>
            )}
            {product.discount > 0 && (
              <Badge variant="secondary" className="text-xs">
                -{product.discount}%
              </Badge>
            )}
          </div>
        )
      },
    },
    {
      accessorKey: "stock",
      header: ({ column }) => (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Stock
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => {
        const product = row.original
        const stockStatus = getStockStatus(product.stock, product.lowStockThreshold)
        const StatusIcon = stockStatus.icon

        return (
          <div className="text-center">
            <div className="font-medium mb-1">{product.stock}</div>
            <Badge className={`${stockStatus.color} text-xs`}>
              <StatusIcon className="mr-1 h-3 w-3" />
              {stockStatus.label}
            </Badge>
          </div>
        )
      },
    },
    {
      accessorKey: "isAvailable",
      header: "Status",
      cell: ({ row }) => {
        const isAvailable = row.getValue("isAvailable") as boolean
        const product = row.original

        return (
          <div className="flex flex-col gap-1">
            <Badge className={isAvailable ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
              {isAvailable ? "Available" : "Unavailable"}
            </Badge>
            {product.isPreOwned && (
              <Badge variant="outline" className="text-xs">
                Pre-owned
              </Badge>
            )}
          </div>
        )
      },
    },
    {
      accessorKey: "createdAt",
      header: ({ column }) => (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Created
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => {
        const date = row.getValue("createdAt") as Date
        return <div className="text-sm">{date.toLocaleDateString()}</div>
      },
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const product = row.original

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => navigator.clipboard.writeText(product.id)}>
                Copy product ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href={`/products/${product.slug}`}>
                  <Eye className="mr-2 h-4 w-4" />
                  View product
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={`/dashboard/products/edit/${product.id}`}>
                  <Edit className="mr-2 h-4 w-4" />
                  Edit product
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="text-red-600"
                onClick={() => {
                  setProductToDelete(product.id)
                  setDeleteDialogOpen(true)
                }}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Delete product
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]

  const table = useReactTable({
    data: products,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: "includesString",
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter,
    },
  })

  const selectedRows = table.getFilteredSelectedRowModel().rows
  const selectedProducts = selectedRows.map((row) => row.original)

  const handleBulkDelete = () => {
    console.log(
      "Bulk delete:",
      selectedProducts.map((p) => p.id),
    )
    setRowSelection({})
  }

  const handleBulkToggleAvailability = () => {
    console.log(
      "Bulk toggle availability:",
      selectedProducts.map((p) => p.id),
    )
    setRowSelection({})
  }

  const handleDeleteProduct = () => {
    if (productToDelete) {
      console.log("Delete product:", productToDelete)
      setProductToDelete(null)
      setDeleteDialogOpen(false)
    }
  }

  return (
    <div className="space-y-4">
      {/* Header Actions */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Products ({products.length})
            </CardTitle>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
              <Button variant="outline" size="sm">
                <Upload className="mr-2 h-4 w-4" />
                Import
              </Button>
              <Button size="sm" asChild>
                <Link href="/dashboard/products/new">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Product
                </Link>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={globalFilter}
                onChange={(e) => setGlobalFilter(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Select
                value={(table.getColumn("category")?.getFilterValue() as string) ?? ""}
                onValueChange={(value) => table.getColumn("category")?.setFilterValue(value === "all" ? "" : value)}
              >
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.name}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={(table.getColumn("brand")?.getFilterValue() as string) ?? ""}
                onValueChange={(value) => table.getColumn("brand")?.setFilterValue(value === "all" ? "" : value)}
              >
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Brand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Brands</SelectItem>
                  {brands.map((brand) => (
                    <SelectItem key={brand.id} value={brand.name}>
                      {brand.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Settings2 className="mr-2 h-4 w-4" />
                    View
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {table
                    .getAllColumns()
                    .filter((column) => column.getCanHide())
                    .map((column) => {
                      return (
                        <DropdownMenuCheckboxItem
                          key={column.id}
                          className="capitalize"
                          checked={column.getIsVisible()}
                          onCheckedChange={(value) => column.toggleVisibility(!!value)}
                        >
                          {column.id}
                        </DropdownMenuCheckboxItem>
                      )
                    })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Bulk Actions */}
          {selectedRows.length > 0 && (
            <div className="flex items-center gap-2 mb-4 p-3 bg-blue-50 rounded-lg">
              <span className="text-sm font-medium">
                {selectedRows.length} product{selectedRows.length > 1 ? "s" : ""} selected
              </span>
              <div className="flex gap-2 ml-auto">
                <Button size="sm" variant="outline" onClick={handleBulkToggleAvailability}>
                  Toggle Availability
                </Button>
                <Button size="sm" variant="destructive" onClick={handleBulkDelete}>
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete Selected
                </Button>
              </div>
            </div>
          )}

          {/* Data Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(header.column.columnDef.header, header.getContext())}
                        </TableHead>
                      )
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={columns.length} className="h-24 text-center">
                      No products found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between space-x-2 py-4">
            <div className="flex-1 text-sm text-muted-foreground">
              {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s)
              selected.
            </div>
            <div className="flex items-center space-x-2">
              <p className="text-sm font-medium">Rows per page</p>
              <Select
                value={`${table.getState().pagination.pageSize}`}
                onValueChange={(value) => {
                  table.setPageSize(Number(value))
                }}
              >
                <SelectTrigger className="h-8 w-[70px]">
                  <SelectValue placeholder={table.getState().pagination.pageSize} />
                </SelectTrigger>
                <SelectContent side="top">
                  {[10, 20, 30, 40, 50].map((pageSize) => (
                    <SelectItem key={pageSize} value={`${pageSize}`}>
                      {pageSize}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Previous
              </Button>
              <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the product and remove it from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteProduct} className="bg-red-600 hover:bg-red-700">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
