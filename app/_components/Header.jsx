"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

export default function Header() {
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, [path]);
  return (
    <div className=" flex justify-between p-6 px-10 shadow-md fixed top-0 w-full z-10 bg-white ">
      <div className="flex gap-10 items-center">
        <Image src="/logo.svg" alt="logo" width={167} height={41} />
        <ul className="hidden md:flex gap-4">
          <Link href={"/"}>
            <li
              className={`hover:text-primary font-medium text-sm cursor-pointer ${
                path === "/" && "text-primary"
              }`}
            >
              For Rent
            </li>
          </Link>
          <Link href={"/"}>
            <li className="hover:text-primary font-medium text-sm cursor-pointer">
              For Sale
            </li>
          </Link>
          <Link href={"/"}>
            <li className="hover:text-primary font-medium text-sm cursor-pointer">
              Agent Finder
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex gap-2">
        <Button className="flex gap-2 items-center">
          <Plus />
          Post your Add
        </Button>
        <Button variant="outline">Login</Button>
      </div>
    </div>
  );
}
