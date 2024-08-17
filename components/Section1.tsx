"use client"

import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import { ArrowRightIcon } from "@radix-ui/react-icons"
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const section1Image = "/section1.png"

export const Section1 = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <Image
          src={section1Image}
          width={600}
          height={400}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          style={{
            width: '100%',
            height: 'auto',
          }}
          alt="About services"
        />
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Custom eCommerce Solutions for your online store. Custom eCommerce websites built to scale.
          </h2>
          <div className="text-direction-b pb-2 space-y-8 md:pb-8">
            <p className="m-0 text-black font-medium text-left">
              In today&apos;s fast-paced digital world, having an online store has become a necessity for businesses
              of all sizes. However, not all eCommerce solutions are created equal. While there are plenty of
              pre-built platforms available, they may not always offer the features and functionalities that a
              business needs to meet its unique requirements. That&apos;s where custom eCommerce solutions come into play.
              With a custom eCommerce website, businesses can tailor their online store to their specific needs and
              preferences, ensuring a seamless shopping experience for their customers. These solutions are designed
              to scale and can grow with the business, making them a long-term investment for any company looking to
              establish a strong online presence.
            </p>
            <p className="m-0 text-black font-medium text-left">
              When it comes to building custom eCommerce solutions, it&apos;s essential to work with a team that understands
              the business&apos;s needs and goals. From design to development, a custom eCommerce website requires a collaborative
              effort to ensure that every aspect of the platform meets the business&apos;s requirements. This includes features
              such as product management, payment processing, order fulfillment, and more. By working with a team of experts,
              businesses can ensure that their eCommerce platform is not only tailored to their needs but also optimized for
              performance and security. With a custom eCommerce solution, businesses can offer their customers a unique shopping
              experience while achieving their online sales goals.
            </p>
            <Button asChild className="w-full md:w-1/3">
              <Link
                className="btn-xl btn bg-primary text-white"
                href="https://bookme.name/devinm"
              >
                TALK TO AN EXPERT
                <ArrowRightIcon className="inline my-2 ml-4 mr-0" />
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};
