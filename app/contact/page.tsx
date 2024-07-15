import React from "react";
import HeaderComponent from "@/components/header";
import { FooterComponent } from "@/components/footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderComponent />
      <main className="flex-grow">
        <section className="py-12 md:py-24 md:px-24 lg:py-32">
          <div className="container space-y-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Contact Us
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  We would love to hear from you! Whether you have a question
                  about our products, need assistance with an order, or just
                  want to give us your feedback, feel free to get in touch with
                  us.
                </p>
              </div>
            </div>
            <form className="max-w-[700px] mx-auto space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Your message"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </section>
      </main>
      <FooterComponent />
    </div>
  );
};

export default ContactPage;
