"use client"
import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import bg from "../public/hero_banner.webp"

export const Hero = () => {
  return (
    <section style={{
      backgroundImage: `url(${bg.src})`,
      width: '100%',
      height: '100%',
      backgroundSize: 'cover'
    }} className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              eCommerce
            </span>{" "}
            Development
          </h1>{" "}
          and{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Website
            </span>{" "}
            Design + Shopify
          </h2>
        </main>

        <p className="text-xl md:w-10/12 mx-auto lg:mx-0 text-[#F596D3]"
        >
          Business eCommerce Development. Gatsby, Shopify, WooCommerce, WordPress eCommerce Development. Custom OpenCart + Magento Solutions Sacramento, CA.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button asChild className="w-full md:w-1/3">
            <a
              rel="noreferrer noopener"
              href="https://www.upwork.com/freelancers/devinmallonee"
              target="_blank"
              className={`w-full md:w-1/3 ${buttonVariants({
                variant: "outline",
              })}`}
            >
              Start Here
            </a>
          </Button>

          <a
            rel="noreferrer noopener"
            href="https://www.linkedin.com/in/devin-mallonee/"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Devin Mallonee
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
