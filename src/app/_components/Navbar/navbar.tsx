"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  Link,
  link as linkStyles,
  Button,
} from "@nextui-org/react";

import { FaPaintBrush } from "react-icons/fa";

import { siteConfig } from "$/src/config/site";
import NextLink from "next/link";
import { clsx } from "clsx";

import { ThemeSwitch } from "$/src/app/Switch/theme-switch";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent
        className="basis-1/5 sm:basis-full"
        justify="start"
      ></NavbarContent>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
        <NavbarBrand as="li" className="max-w-fit gap-3">
          <NextLink className="flex items-center justify-start gap-1" href="/">
            <p
              style={{
                fontSize: "42px",
                fontFamily: "Arial, sans-serif",
                fontWeight: "bold",
                color: "var(--foreground)",
                alignContent: "left",
              }}
            >
              <em>TransFlex</em>
            </p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent>
        <NavbarItem className="hidden gap-2 sm:flex">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="basis-1 pl-4 sm:hidden" justify="end">
        <Button
          as={Link}
          className="rounded-full"
          href="/creators"
          color="primary"
          endContent={<FaPaintBrush />}
        >
          Creators
        </Button>
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            userProfileUrl="/profile"
            userProfileMode="navigation"
          />
        </SignedIn>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <Link color="foreground" href="#" size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
