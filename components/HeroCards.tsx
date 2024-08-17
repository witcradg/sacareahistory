"use client"

import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "WordPress Website Design & Development",
    description:
      "Custom Website Design & Development for the WordPress Platform.",
    icon: <ChartIcon />,
  },
  {
    title: "Shopify Store Design & Development",
    description:
      "Design and Develop a Custom Shopify Store For Your eCommerce Business.",
    icon: <WalletIcon />,
  },
  {
    title: "Email Marketing Automation",
    description:
      "Setup Email Marketing Services For Your Local Business, Ecommerce Store, Or Cold Marketing.",
    icon: <MagnifierIcon />,
  },
];

export const HeroCards = () => {
  return (
    <div className="grid gap-8 place-items-center">
      <div>
        <div className="flex flex-col gap-8">
          {serviceList.map(({ icon, title, description }: ServiceProps) => (
            <Card key={title}>
              <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                  {icon}
                </div>
                <div>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription className="text-md mt-2">
                    {description}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
