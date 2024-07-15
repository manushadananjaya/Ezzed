import React from 'react'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { SearchIcon, ShoppingCartIcon, ChevronDownIcon, Package2Icon } from "@/components/ui/icons";


function HeaderComponent() {
  return (
    <div>
      <header className="sticky top-0 z-50 md:px-24 w-full bg-background border-b">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold"
            prefetch={false}
          >
            <Package2Icon className="w-6 h-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/shop"
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
                  <Link href="/shop/shirts" prefetch={false}>
                    Shirts
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/shop/pants" prefetch={false}>
                    Pants
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/shop/dresses" prefetch={false}>
                    Dresses
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/shop/jackets" prefetch={false}>
                    Jackets
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/shop/Accessories" prefetch={false}>
                    Accessories
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/shop/shoes" prefetch={false}>
                    Shoes
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/about"
              className="font-medium hover:text-primary transition-colors"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="/contact"
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
    </div>
  );
}

export default HeaderComponent;
