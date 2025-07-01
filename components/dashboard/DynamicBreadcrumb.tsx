"use client"

import { usePathname } from "next/navigation"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const routeMap: Record<string, string> = {
    "/dashboard": "Overview",
    "/dashboard/analytics": "Analytics",
    "/dashboard/reports": "Reports",
    "/dashboard/orders": "Orders",
    "/dashboard/orders/pending": "Pending Orders",
    "/dashboard/orders/processing": "Processing Orders",
    "/dashboard/orders/completed": "Completed Orders",
    "/dashboard/products": "Products",
    "/dashboard/products/phones": "Phones",
    "/dashboard/products/computers": "Computers",
    "/dashboard/products/categories": "Categories",
    "/dashboard/products/brands": "Brands",
    "/dashboard/customers": "Customers",
    "/dashboard/customers/recent": "Recent Customers",
    "/dashboard/customers/wishlists": "Wishlists",
    "/dashboard/settings": "Settings",
    "/dashboard/settings/store": "Store Settings",
    "/dashboard/settings/users": "User Management",
    "/dashboard/settings/notifications": "Notifications",
}

export function DynamicBreadcrumb() {
    const pathname = usePathname()
    const pathSegments = pathname.split("/").filter(Boolean)

    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="/dashboard">Aquatech Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                {pathSegments.length > 1 && (
                    <>
                        <BreadcrumbSeparator className="hidden md:block" />
                        <BreadcrumbItem>
                            <BreadcrumbPage>{routeMap[pathname] || pathSegments[pathSegments.length - 1]}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </>
                )}
            </BreadcrumbList>
        </Breadcrumb>
    )
}
