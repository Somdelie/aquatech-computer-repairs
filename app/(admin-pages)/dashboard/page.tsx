"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts"
import { Package, ShoppingCart, TrendingUp, Clock, CheckCircle, Plus, Eye, Smartphone, Laptop } from "lucide-react"

// Mock data - in real app, this would come from your database
const orderStats = {
  total: 156,
  pending: 23,
  processing: 45,
  completed: 88,
  revenue: 125000,
  monthlyGrowth: 12.5,
}

const recentOrders = [
  {
    id: "ORD-001",
    customer: "John Smith",
    device: "iPhone 14 Pro",
    issue: "Screen Replacement",
    status: "processing",
    amount: 2500,
    date: "2024-01-15",
  },
  {
    id: "ORD-002",
    customer: "Sarah Johnson",
    device: "MacBook Air M2",
    issue: "Battery Replacement",
    status: "pending",
    amount: 3200,
    date: "2024-01-15",
  },
  {
    id: "ORD-003",
    customer: "Mike Wilson",
    device: "Samsung Galaxy S23",
    issue: "Water Damage Repair",
    status: "completed",
    amount: 1800,
    date: "2024-01-14",
  },
  {
    id: "ORD-004",
    customer: "Lisa Brown",
    device: "Dell XPS 13",
    issue: "Motherboard Repair",
    status: "processing",
    amount: 4500,
    date: "2024-01-14",
  },
]

const orderStatusData = [
  { name: "Pending", value: 23, color: "#f59e0b" },
  { name: "Processing", value: 45, color: "#3b82f6" },
  { name: "Completed", value: 88, color: "#10b981" },
]

const revenueData = [
  { month: "Jul", revenue: 85000 },
  { month: "Aug", revenue: 92000 },
  { month: "Sep", revenue: 78000 },
  { month: "Oct", revenue: 105000 },
  { month: "Nov", revenue: 118000 },
  { month: "Dec", revenue: 125000 },
]

const productSalesData = [
  { category: "Phone Repairs", sales: 45 },
  { category: "Computer Repairs", sales: 32 },
  { category: "Phone Sales", sales: 28 },
  { category: "Computer Sales", sales: 15 },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "pending":
      return "bg-yellow-100 text-yellow-800"
    case "processing":
      return "bg-blue-100 text-blue-800"
    case "completed":
      return "bg-green-100 text-green-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function DashboardOverview() {
  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard Overview</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening at Aquatech today.</p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            New Order
          </Button>
          <Button variant="outline" size="sm">
            <Package className="mr-2 h-4 w-4" />
            Add Product
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 w-full">
        <Card className="bg-blue-900 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{orderStats.total}</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{orderStats.pending}</div>
            <p className="text-xs text-muted-foreground">Requires attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R{orderStats.revenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+{orderStats.monthlyGrowth}% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Orders</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{orderStats.completed}</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid gap-6 xl:grid-cols-3 w-full">
        {/* Revenue Chart */}
        <Card className="xl:col-span-2 w-full">
          <CardHeader>
            <CardTitle>Revenue Trend</CardTitle>
            <CardDescription>Monthly revenue over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                revenue: {
                  label: "Revenue",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-[300px] w-full"
            >
              <ResponsiveContainer width="99%" height="99%">
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="revenue" stroke="var(--color-revenue)" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Order Status Distribution */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Order Status</CardTitle>
            <CardDescription>Current distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                pending: { label: "Pending", color: "#f59e0b" },
                processing: { label: "Processing", color: "#3b82f6" },
                completed: { label: "Completed", color: "#10b981" },
              }}
              className="h-[200px] w-full"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={orderStatusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {orderStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="flex flex-wrap justify-center gap-3 mt-3">
              {orderStatusData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-xs">
                    {item.name}: {item.value}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Row */}
      <div className="grid gap-6 xl:grid-cols-3">
        {/* Recent Orders */}
        <Card className="xl:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>Latest repair and sales orders</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <Eye className="mr-2 h-4 w-4" />
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div className="p-2 bg-muted rounded-lg flex-shrink-0">
                      {order.device.includes("iPhone") || order.device.includes("Samsung") ? (
                        <Smartphone className="h-4 w-4" />
                      ) : (
                        <Laptop className="h-4 w-4" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium truncate">{order.customer}</p>
                      <p className="text-sm text-muted-foreground truncate">
                        {order.device} - {order.issue}
                      </p>
                      <p className="text-xs text-muted-foreground">{order.date}</p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 ml-4">
                    <p className="font-medium">R{order.amount.toLocaleString()}</p>
                    <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Product Sales Performance */}
        <Card className="">
          <CardHeader>
            <CardTitle>Sales by Category</CardTitle>
            <CardDescription>Performance across services</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                sales: {
                  label: "Sales",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="h-[300px] w-full "
            >
              <ResponsiveContainer width="99%" height="99%">
                <BarChart data={productSalesData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="category" type="category" width={80} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="sales" fill="var(--color-sales)" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
