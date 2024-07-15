import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TwitterIcon, InstagramIcon, FacebookIcon } from "@/components/ui/icons";

export function FooterComponent() {
  return (
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
  );
}


