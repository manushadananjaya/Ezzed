import React from "react";
import HeaderComponent from "@/components/header";
import { FooterComponent } from "@/components/footer";

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderComponent />
      <main className="flex-grow">
        <section className="py-12 md:py-24 md:px-24 lg:py-32">
          <div className="container space-y-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  About Us
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  At EZZED Inc, we are passionate about creating high-quality,
                  stylish clothing that empowers our customers to express their
                  unique sense of fashion. Our team of designers and artisans
                  work tirelessly to curate a collection that combines the
                  latest trends with timeless elegance.
                </p>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  We believe that fashion should be accessible to everyone,
                  which is why we strive to offer affordable prices without
                  compromising on quality or craftsmanship. Our mission is to
                  inspire confidence and self-expression through the power of
                  fashion.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterComponent />
    </div>
  );
};

export default AboutPage;
