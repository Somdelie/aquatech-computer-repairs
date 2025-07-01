import React from 'react'

const brands = [
    {
        id: "1",
        name: "Apple",
        slug: "apple",
        image: "/lenovo-logo.jpg",
    },
    {
        id: "2",
        name: "Samsung",
        slug: "samsung",
        image: "/samsung-log.jpg",
    },
    {
        id: "3",
        name: "Dell",
        slug: "dell",
        image: "/dell-logo.jpg",
    },
    {
        id: "4",
        name: "Logitech",
        slug: "logitech",
        image: "/lenovo-logo.jpg",
    },
    {
        id: "5",
        name: "HP",
        slug: "hp",
        image: "/lenovo-logo.jpg",
    },
    {
        id: "6",
        name: "Lenovo",
        slug: "lenovo",
        image: "/lenovo-logo.jpg",
    },
    {
        id: "7",
        name: "Microsoft",
        slug: "microsoft",
        image: "/lenovo-logo.jpg",
    },
    {
        id: "8",
        name: "Sony",
        slug: "sony",
        image: "/lenovo-logo.jpg",
    },
]

export default function BrandsPage() {
  return (
    <div>
        <h1 className="text-2xl font-bold mb-4">Brands Management</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {brands.map((brand) => (
            <div key={brand.id} className="border p-4 rounded shadow">
                <img src={brand.image} alt={brand.name} className="w-full h-16 object-cover mb-2 shadow" />
                <h2 className="text-lg font-semibold">{brand.name}</h2>
            </div>
            ))}
        </div>
    </div>
  )
}
