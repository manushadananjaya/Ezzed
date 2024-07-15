import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import HeaderComponent from "../../components/header";
import { FooterComponent } from "../../components/footer";

const ShopPage = () => {
  // Sample data for the shop items. Replace this with actual data fetching logic.
  const items = [
    { id: 1, name: "Casual Shirt", price: 29.99, image: "/placeholder.svg" },
    { id: 2, name: "Skinny Jeans", price: 49.99, image: "/placeholder.svg" },
    { id: 3, name: "Floral Dress", price: 69.99, image: "/placeholder.svg" },
    { id: 4, name: "Leather Jacket", price: 99.99, image: "/placeholder.svg" },
    // Add more items as needed
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <HeaderComponent />
      <main className="flex-grow">
        <section className="py-12 md:py-24 md:px-24 lg:py-32">
          <div className="container space-y-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  All Items
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Browse our complete collection of fashion items.
                </p>
              </div>
              <Input
                type="text"
                placeholder="Search for items"
                className="max-w-md"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {items.map((item) => (
                <Card key={item.id}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="aspect-[4/3] w-full object-cover rounded-t-md"
                  />
                  <CardContent className="p-4 space-y-2">
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <p className="text-muted-foreground">
                      ${item.price.toFixed(2)}
                    </p>
                    <Button variant="outline" size="sm">
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterComponent />
    </div>
  );
};

export default ShopPage;
