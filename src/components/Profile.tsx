'use client'

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Input, Avatar, Button, Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import * as actions from '@/actions'


export default function Profile() {
  const session = useSession()

  if (session.data?.user) {
    return <div>From client: {JSON.stringify(session.data.user)} </div>
  }
  return <div>From client: Signed out</div>
}