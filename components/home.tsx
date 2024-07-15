import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import HeaderComponent from "./header"
import {
  ShirtIcon,
  PenIcon,
  SaladIcon,
  PocketIcon,
  AccessibilityIcon,
  FootprintsIcon,
} from "@/components/ui/icons"
import { FooterComponent } from "./footer"

export function HomeComponent() {
  return (
    <div className="flex flex-col min-h-dvh">
      <HeaderComponent />
      <section className="relative md:px-24   items-center space-x-4 w-full h-[80vh] overflow-hidden">
        <img
          src="/ezzed.png"
          alt="Hero Image"
          className="absolute inset-0 w-full opacity-50 h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative  z-20 container h-full flex flex-col items-center justify-center text-center text-white space-y-6 pl-10 px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Discover the Latest Fashion Trends
          </h1>
          <p className="max-w-3xl text-lg md:text-xl">
            Explore our curated collection of stylish and high-quality clothing
            for every occasion.
          </p>
          <div className="space-x-4">
            <Link
              href="/shop"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Shop Now
            </Link>
            <Link
              href="/about"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 md:px-24 lg:py-32 bg-muted">
        <div className="container  space-y-8">
          <div className="flex flex-col  items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                About Our Clothing Brand
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                At Acme Inc, we are passionate about creating high-quality,
                stylish clothing that empowers our customers to express their
                unique sense of fashion. Our team of designers and artisans work
                tirelessly to curate a collection that combines the latest
                trends with timeless elegance. We believe that fashion should be
                accessible to everyone, which is why we strive to offer
                affordable prices without compromising on quality or
                craftsmanship. Our mission is to inspire confidence and
                self-expression through the power of fashion.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:px-24 md:py-24 lg:py-32">
        <div className="container space-y-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Featured Products
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Discover our curated selection of the latest fashion items.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Card>
              <img
                src="/placeholder.svg"
                alt="Product 1"
                className="aspect-[4/3] w-full object-cover rounded-t-md"
              />
              <CardContent className="p-4 space-y-2">
                <h3 className="text-lg font-medium">Casual Shirt</h3>
                <p className="text-muted-foreground">$29.99</p>
                <Button variant="outline" size="sm">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
            <Card>
              <img
                src="/placeholder.svg"
                alt="Product 2"
                className="aspect-[4/3] w-full object-cover rounded-t-md"
              />
              <CardContent className="p-4 space-y-2">
                <h3 className="text-lg font-medium">Skinny Jeans</h3>
                <p className="text-muted-foreground">$49.99</p>
                <Button variant="outline" size="sm">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
            <Card>
              <img
                src="/placeholder.svg"
                alt="Product 3"
                className="aspect-[4/3] w-full object-cover rounded-t-md"
              />
              <CardContent className="p-4 space-y-2">
                <h3 className="text-lg font-medium">Floral Dress</h3>
                <p className="text-muted-foreground">$69.99</p>
                <Button variant="outline" size="sm">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
            <Card>
              <img
                src="/placeholder.svg"
                alt="Product 4"
                className="aspect-[4/3] w-full object-cover rounded-t-md"
              />
              <CardContent className="p-4 space-y-2">
                <h3 className="text-lg font-medium">Leather Jacket</h3>
                <p className="text-muted-foreground">$99.99</p>
                <Button variant="outline" size="sm">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-12 md:px-24 md:py-24 lg:py-32 bg-muted">
        <div className="container space-y-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Shop by Category
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Explore our wide range of clothing categories.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <Link
              href="#"
              className="group flex flex-col items-center justify-center space-y-2 p-4 rounded-md bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
              prefetch={false}
            >
              <ShirtIcon className="w-8 h-8" />
              <span className="text-sm font-medium">Shirts</span>
            </Link>
            <Link
              href="#"
              className="group flex flex-col items-center justify-center space-y-2 p-4 rounded-md bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
              prefetch={false}
            >
              <PenIcon className="w-8 h-8" />
              <span className="text-sm font-medium">Pants</span>
            </Link>
            <Link
              href="#"
              className="group flex flex-col items-center justify-center space-y-2 p-4 rounded-md bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
              prefetch={false}
            >
              <SaladIcon className="w-8 h-8" />
              <span className="text-sm font-medium">Dresses</span>
            </Link>
            <Link
              href="#"
              className="group flex flex-col items-center justify-center space-y-2 p-4 rounded-md bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
              prefetch={false}
            >
              <PocketIcon className="w-8 h-8" />
              <span className="text-sm font-medium">Jackets</span>
            </Link>
            <Link
              href="#"
              className="group flex flex-col items-center justify-center space-y-2 p-4 rounded-md bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
              prefetch={false}
            >
              <AccessibilityIcon className="w-8 h-8" />
              <span className="text-sm font-medium">Accessories</span>
            </Link>
            <Link
              href="#"
              className="group flex flex-col items-center justify-center space-y-2 p-4 rounded-md bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
              prefetch={false}
            >
              <FootprintsIcon className="w-8 h-8" />
              <span className="text-sm font-medium">Shoes</span>
            </Link>
          </div>
        </div>
      </section>
      <FooterComponent />
    </div>
  );
}

