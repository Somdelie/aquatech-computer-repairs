"use client"

import type * as React from "react"

import {
  BarChart3,
  Building2,
  Laptop,
  Package,
  Settings2,
  ShoppingCart,
  Smartphone,
  Users,
  Wrench,
  ClipboardList,
  TrendingUp,
  MapPin,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar"

// Aquatech Computer Repairs data
const data = {
  user: {
    name: "Admin User",
    email: "admin@aquatech.co.za",
    avatar: "/aqua-logo.png",
  },
  teams: [
    {
      name: "Main Store",
      logo: Building2,
      plan: "Primary Location",
    },
    {
      name: "Mobile Service",
      logo: MapPin,
      plan: "On-site Repairs",
    },
    {
      name: "Online Store",
      logo: ShoppingCart,
      plan: "E-commerce",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: BarChart3,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "/dashboard",
        },
        {
          title: "Analytics",
          url: "/dashboard/analytics",
        },
        {
          title: "Reports",
          url: "/dashboard/reports",
        },
      ],
    },
    {
      title: "Orders",
      url: "/dashboard/orders",
      icon: ClipboardList,
      items: [
        {
          title: "All Orders",
          url: "/dashboard/orders",
        },
        {
          title: "Pending",
          url: "/dashboard/orders/pending",
        },
        {
          title: "Processing",
          url: "/dashboard/orders/processing",
        },
        {
          title: "Completed",
          url: "/dashboard/orders/completed",
        },
      ],
    },
    {
      title: "Products",
      url: "/dashboard/products",
      icon: Package,
      items: [
        {
          title: "All Products",
          url: "/dashboard/products",
        },
        {
          title: "Phones",
          url: "/dashboard/products/phones",
        },
        {
          title: "Computers",
          url: "/dashboard/products/computers",
        },
        {
          title: "Categories",
          url: "/dashboard/categories",
        },
        {
          title: "Brands",
          url: "/dashboard/brands",
        },
      ],
    },
    {
      title: "Customers",
      url: "/dashboard/customers",
      icon: Users,
      items: [
        {
          title: "All Customers",
          url: "/dashboard/customers",
        },
        {
          title: "Recent Orders",
          url: "/dashboard/customers/recent",
        },
        {
          title: "Wishlists",
          url: "/dashboard/customers/wishlists",
        },
      ],
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "/dashboard/settings",
        },
        {
          title: "Store Info",
          url: "/dashboard/settings/store",
        },
        {
          title: "Users & Roles",
          url: "/dashboard/settings/users",
        },
        {
          title: "Notifications",
          url: "/dashboard/settings/notifications",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Repair Services",
      url: "/services/repairs",
      icon: Wrench,
    },
    {
      name: "Phone Sales",
      url: "/sales/phones",
      icon: Smartphone,
    },
    {
      name: "Computer Sales",
      url: "/sales/computers",
      icon: Laptop,
    },
    {
      name: "Performance",
      url: "/analytics/performance",
      icon: TrendingUp,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
