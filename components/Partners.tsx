"use client"
import CallButton from "@/components/CallButton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface PartnerProps {
  image: string;
}

const features: PartnerProps[] = [
  {
    image: "bing-seo-sacramento.png",
  },
  {
    image: "shopify-developer.png",
  },
  {
    image: "google-seo-sacramento.png",
  },
  {
    image: "woocommerce-developer.png",
  },
];

export const Partners = () => {
  return (
    <section
      id="partners"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Partners
        </span>
      </h2>

      {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map(({ image }: PartnerProps) => (
          <Card key={image}>

            <CardFooter>
              <Image
                src={`/badges/${image}`}
                width={300}
                height={300}
                alt="About feature"
                className="w-[full] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div> */}
      <div className="flex justify-center">
        <CallButton />
      </div>
    </section>
  );
};
