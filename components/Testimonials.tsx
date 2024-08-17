"use client"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://devinm.vercel.app/layout/dm.png",
    name: "Financial Website Development, with API and Membership",
    userName: "Web Design, Web Development, Software Development",
    comment: "Devin has done a great job with our custom designed and developed WordPress Site with Blog and React App To Manage Live API Feed.",
  },
  {
    image: "https://devinm.vercel.app/layout/dm.png",
    name: "SEO & Web Design",
    userName: "Search Engine Optimization",
    comment:
      "Devin was great at helping me find out what I needed. I have an eCommerce website that he was able to refresh for us so we look modern and can compete in our market. Very fast and great graphic designer.",
  },

  {
    image: "https://devinm.vercel.app/layout/dm.png",
    name: "The Bailey Law Firm Website Development ",
    userName: "Custom Website Development",
    comment:
      "Devin's communication was friendly and professional. He pushed back when needed, and was understanding when challenged. His work was solid and in general he's just a really kind individual. Our project dragged on due to a number of factors, and he stuck with it and finished it out even though it was long past the expected delivery date. Many freelancers would have bailed at that stage in the project, so I commend him for sticking it thru. Overall, my only constructive feedback would be that attention to the details could have bit a little better. There were a couple more stages of review than were necessary due to a lot of back and forth. Overall, a good experience. Would hire again.",
  },
  {
    image: "https://devinm.vercel.app/layout/dm.png",
    name: "Shopify Email Template Redesign Help",
    userName: "5 Stars",
    comment:
      "He was incredible easy to work with and extremely knowledgeable in CSS and email HTML. I was extremely impressed by his responsiveness and his ability to see the vision and create it in HTML. I would recommend Devin over and over again for any Shopify development needs.",
  },
  {
    image: "https://devinm.vercel.app/layout/dm.png",
    name: "5 Stars Designer",
    userName: "E-mail Template Designer",
    comment:
      "Devin was wonderful to work with. I only had a general idea of what I wanted but he was able to take my vague ideas and his expertise to create exactly what I was looking for. He met all deadlines and was very amenable to the changes I had. I would and will absolutely work with him again!",
  },
  {
    image: "https://devinm.vercel.app/layout/dm.png",
    name: "Developer needed to integrate Shopify site w/ form builder app that can automate data gen &PDF email",
    userName: "5 Stars Shopify Developer",
    comment:
      "He was available regularly to further discuss the project. He facilitated connections when needed to further enhance my project. He took time to engage software companies with my specific inquiries. He was receptive to my ideas and also provided helpful feedback. He put together my vision well and helped me choose which plugins and software would help me accomplish my task. I greatly appreciate the final project which is a well designed and integrated Shopify site with intricate code to suit my needs  . I would highly recommend his services  to others.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        See What People Say
        {/* <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          People Love{" "}
        </span>
        This Landing Page */}
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Reviews From Real Clients Like YOU!
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
