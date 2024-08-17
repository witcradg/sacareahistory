"use client"
import Link from "next/link";
import Image from "next/image";
import { FooterSocial } from "./footer-social";
import footerContent from "./footer-content.js"
import submenus from "../header/submenus";

export const Footer = () => {

  return (
    <footer id="footer">
      {/* <hr className="w-11/12 mx-auto" /> */}

      <section className="bg-gray-200 container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-x-12 gap-y-8">
        <div id="column-1-logo" className="col-span-full xl:col-span-1">
          <Link
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            <Image
              src="/us-cascr64.gif" width={300} height={69} alt="Logo" />
          </Link>
          <div className="pt-6">
            <FooterSocial />
          </div>
        </div>

        <div id="service-links-column-2" className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">{footerContent.column2header}</h3>
          {submenus.servicesList.map(({ href, label }) => (
            <div key={label}>
              <a
                rel="noreferrer noopener"
                href={href}
                className="opacity-60 hover:opacity-100 text-sm"
              >
                {label}
              </a>
            </div>))}
        </div>

        <div id="column3" className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">{footerContent.column3header}</h3>
          {footerContent.column3.elements.map(({ label, link }) => (
            <div key="label">
              <a
                rel="noreferrer noopener"
                href={link}
                className="opacity-60 hover:opacity-100"
              >
                {label}
              </a>
            </div>
          ))}
        </div>

        <div id="column-4" className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">{footerContent.column4header}</h3>
          {footerContent.column4.elements.map(({ label }, index) => (
            <div key={label}>
              <span
                className={`opacity-60 hover:opacity-100 ${index === 0 ? 'text-blue-500 font-bold' : ''
                  } ${index === footerContent.column4.elements.length - 1 ? 'font-bold' : ''}`}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024 All rights reserved.
        </h3>
      </section>
    </footer>
  );
};
