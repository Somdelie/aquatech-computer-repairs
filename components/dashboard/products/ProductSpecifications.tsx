"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

interface ProductSpecificationsProps {
  productType: string
  specifications: Record<string, any>
  onSpecificationsChange: (specs: Record<string, any>) => void
}

export function ProductSpecifications({
  productType,
  specifications,
  onSpecificationsChange,
}: ProductSpecificationsProps) {
  const handleSpecChange = (key: string, value: any) => {
    onSpecificationsChange({
      ...specifications,
      [key]: value,
    })
  }

  const renderMobilePhoneSpecs = () => (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label>Storage Capacity</Label>
        <Select value={specifications.storage || ""} onValueChange={(value) => handleSpecChange("storage", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select storage" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="64GB">64GB</SelectItem>
            <SelectItem value="128GB">128GB</SelectItem>
            <SelectItem value="256GB">256GB</SelectItem>
            <SelectItem value="512GB">512GB</SelectItem>
            <SelectItem value="1TB">1TB</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>RAM</Label>
        <Select value={specifications.ram || ""} onValueChange={(value) => handleSpecChange("ram", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select RAM" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="4GB">4GB</SelectItem>
            <SelectItem value="6GB">6GB</SelectItem>
            <SelectItem value="8GB">8GB</SelectItem>
            <SelectItem value="12GB">12GB</SelectItem>
            <SelectItem value="16GB">16GB</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Screen Size</Label>
        <Input
          value={specifications.screenSize || ""}
          onChange={(e) => handleSpecChange("screenSize", e.target.value)}
          placeholder="6.7 inches"
        />
      </div>

      <div className="space-y-2">
        <Label>Battery Capacity</Label>
        <Input
          value={specifications.batteryCapacity || ""}
          onChange={(e) => handleSpecChange("batteryCapacity", e.target.value)}
          placeholder="4352 mAh"
        />
      </div>

      <div className="space-y-2">
        <Label>Operating System</Label>
        <Input
          value={specifications.operatingSystem || ""}
          onChange={(e) => handleSpecChange("operatingSystem", e.target.value)}
          placeholder="iOS 15"
        />
      </div>

      <div className="space-y-2">
        <Label>Camera</Label>
        <Input
          value={specifications.camera || ""}
          onChange={(e) => handleSpecChange("camera", e.target.value)}
          placeholder="Triple 12MP system"
        />
      </div>

      <div className="space-y-2">
        <Label>Network</Label>
        <Select value={specifications.network || ""} onValueChange={(value) => handleSpecChange("network", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select network" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="4G LTE">4G LTE</SelectItem>
            <SelectItem value="5G">5G</SelectItem>
            <SelectItem value="WiFi Only">WiFi Only</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>SIM Type</Label>
        <Select value={specifications.simType || ""} onValueChange={(value) => handleSpecChange("simType", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select SIM type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Single SIM">Single SIM</SelectItem>
            <SelectItem value="Dual SIM">Dual SIM</SelectItem>
            <SelectItem value="eSIM">eSIM</SelectItem>
            <SelectItem value="Dual SIM + eSIM">Dual SIM + eSIM</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )

  const renderLaptopSpecs = () => (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label>Processor</Label>
        <Input
          value={specifications.processor || ""}
          onChange={(e) => handleSpecChange("processor", e.target.value)}
          placeholder="Apple M1 Pro"
        />
      </div>

      <div className="space-y-2">
        <Label>RAM</Label>
        <Select value={specifications.ram || ""} onValueChange={(value) => handleSpecChange("ram", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select RAM" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="8GB">8GB</SelectItem>
            <SelectItem value="16GB">16GB</SelectItem>
            <SelectItem value="32GB">32GB</SelectItem>
            <SelectItem value="64GB">64GB</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Storage</Label>
        <Select value={specifications.storage || ""} onValueChange={(value) => handleSpecChange("storage", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select storage" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="256GB SSD">256GB SSD</SelectItem>
            <SelectItem value="512GB SSD">512GB SSD</SelectItem>
            <SelectItem value="1TB SSD">1TB SSD</SelectItem>
            <SelectItem value="2TB SSD">2TB SSD</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Screen Size</Label>
        <Input
          value={specifications.screenSize || ""}
          onChange={(e) => handleSpecChange("screenSize", e.target.value)}
          placeholder="13.3 inches"
        />
      </div>

      <div className="space-y-2">
        <Label>Graphics</Label>
        <Input
          value={specifications.graphics || ""}
          onChange={(e) => handleSpecChange("graphics", e.target.value)}
          placeholder="Integrated / Dedicated GPU"
        />
      </div>

      <div className="space-y-2">
        <Label>Operating System</Label>
        <Select
          value={specifications.operatingSystem || ""}
          onValueChange={(value) => handleSpecChange("operatingSystem", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select OS" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="macOS">macOS</SelectItem>
            <SelectItem value="Windows 11">Windows 11</SelectItem>
            <SelectItem value="Windows 10">Windows 10</SelectItem>
            <SelectItem value="Linux">Linux</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Battery Life</Label>
        <Input
          value={specifications.batteryLife || ""}
          onChange={(e) => handleSpecChange("batteryLife", e.target.value)}
          placeholder="Up to 10 hours"
        />
      </div>

      <div className="space-y-2">
        <Label>Ports</Label>
        <Input
          value={specifications.ports || ""}
          onChange={(e) => handleSpecChange("ports", e.target.value)}
          placeholder="2x USB-C, 1x HDMI, 1x Audio"
        />
      </div>
    </div>
  )

  const renderGenericSpecs = () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Technical Specifications</Label>
        <Textarea
          value={specifications.general || ""}
          onChange={(e) => handleSpecChange("general", e.target.value)}
          placeholder="Enter product specifications..."
          rows={6}
        />
      </div>
    </div>
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Specifications</CardTitle>
        <CardDescription>
          {productType
            ? `Specific details for ${productType.replace("_", " ").toLowerCase()}`
            : "Add technical specifications"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {productType === "MOBILE_PHONE" && renderMobilePhoneSpecs()}
        {(productType === "LAPTOP" || productType === "DESKTOP") && renderLaptopSpecs()}
        {(!productType || !["MOBILE_PHONE", "LAPTOP", "DESKTOP"].includes(productType)) && renderGenericSpecs()}
      </CardContent>
    </Card>
  )
}
