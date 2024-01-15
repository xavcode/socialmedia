import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Input } from "@nextui-org/react";
import Link from "next/link";
import HeaderAuth from "./HeaderAuth";


export default function Header() {

  return (
    <Navbar className="shadow-md mb-4">
      <NavbarBrand className="font-bold ">
        <Link href={'/'} >
          SOCIAL TOPICS
        </Link>
      </NavbarBrand>

      <NavbarContent justify="center">
        <NavbarItem>
          <Input />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  )
}