import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function HomeComponent() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="sticky top-0 z-50 md:px-24 w-full bg-background border-b">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold"
            prefetch={false}
          >
            <Package2Icon className="w-6 h-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#"
              className="font-medium hover:text-primary transition-colors"
              prefetch={false}
            >
              Shop
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="font-medium hover:text-primary transition-colors flex items-center gap-1">
                Categories
                <ChevronDownIcon className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>
                  <Link href="#" prefetch={false}>
                    Shirts
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" prefetch={false}>
                    Pants
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" prefetch={false}>
                    Dresses
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" prefetch={false}>
                    Jackets
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" prefetch={false}>
                    Accessories
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" prefetch={false}>
                    Shoes
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="#"
              className="font-medium hover:text-primary transition-colors"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#"
              className="font-medium hover:text-primary transition-colors"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <SearchIcon className="w-5 h-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <ShoppingCartIcon className="w-5 h-5" />
              <span className="sr-only">Cart</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <img
                src="/placeholder.svg"
                width="32"
                height="32"
                className="rounded-full"
                alt="Avatar"
              />
              <span className="sr-only">Account</span>
            </Button>
          </div>
        </div>
      </header>
      <section className="relative md:px-24   items-center space-x-4 w-full h-[80vh] overflow-hidden">
        <img
          src="/placeholder.svg"
          alt="Hero Image"
          className="absolute inset-0 w-full h-full object-cover object-center"
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
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Shop Now
            </Link>
            <Link
              href="#"
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
      <footer className="bg-muted md:px-24 p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link href="#" prefetch={false}>
              About Us
            </Link>
            <Link href="#" prefetch={false}>
              Careers
            </Link>
            <Link href="#" prefetch={false}>
              News
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Shop</h3>
            <Link href="#" prefetch={false}>
              Shirts
            </Link>
            <Link href="#" prefetch={false}>
              Pants
            </Link>
            <Link href="#" prefetch={false}>
              Dresses
            </Link>
            <Link href="#" prefetch={false}>
              Accessories
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Support</h3>
            <Link href="#" prefetch={false}>
              Contact Us
            </Link>
            <Link href="#" prefetch={false}>
              FAQs
            </Link>
            <Link href="#" prefetch={false}>
              Returns
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" prefetch={false}>
              Cookie Policy
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Stay Connected</h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                <TwitterIcon className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                <InstagramIcon className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                <FacebookIcon className="w-5 h-5" />
              </Link>
            </div>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-lg flex-1"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}

function AccessibilityIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="16" cy="4" r="1" />
      <path d="m18 19 1-7-6 1" />
      <path d="m5 8 3-3 5.5 3-2.36 3.5" />
      <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
      <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
    </svg>
  )
}


function ChevronDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}


function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}


function FootprintsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" />
      <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" />
      <path d="M16 17h4" />
      <path d="M4 13h4" />
    </svg>
  );
}


function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}


function Package2Icon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}


function PenIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    </svg>
  );
}


function PocketIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z" />
      <polyline points="8 10 12 14 16 10" />
    </svg>
  );
}


function SaladIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 21h10" />
      <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
      <path d="M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1" />
      <path d="m13 12 4-4" />
      <path d="M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2" />
    </svg>
  );
}


function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}


function ShirtIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </svg>
  );
}


function ShoppingCartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}


function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
