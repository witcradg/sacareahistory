"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

import submenus from "./submenus";

export function Navbar() {
  return (
    <Menubar id='mb1' className="border-0 my-1">
      <MenubarMenu>
        <Button className="menubutton" asChild variant="ghost">
          <Link href="/" passHref>
            HOME
          </Link>
        </Button>
        <Button className="menubutton" asChild variant="ghost">
          <Link href="/resources" passHref>
            RESOURCES
          </Link>
        </Button>
        {/* <MenubarTrigger className="text-2xl font-semibold">SERVICES
          <ChevronDown
            className="relative font-extrabold top-[1px] ml-1 h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180"
            aria-hidden="true"
          />
        </MenubarTrigger>
        <MenubarContent>
          {submenus.servicesList.map((submenu) => (
            <MenubarItem key={submenu.label}>
              <Link className="uppercase" href={submenu.href} passHref>
                {submenu.label}
              </Link>
            </MenubarItem>
          ))}
        </MenubarContent> */}
        <Button className="menubutton" asChild variant="ghost">
          <Link href="/calendar" passHref>
            CALENDAR
          </Link>
        </Button>
        <Button className="menubutton" asChild variant="ghost">
          <Link href="/timeline" passHref>
            TIMELINE
          </Link>
        </Button>
      </MenubarMenu>
    </Menubar >
  )
}
