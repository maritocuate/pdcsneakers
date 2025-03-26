"use client";

import { ClerkLoaded, SignInButton, useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Form from "next/form";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import Image from "next/image";
import { Package, ShoppingCart } from "lucide-react";
function Header() {
  const { user } = useUser();

  return (
    <header className="flex flex-wrap justify-between items-center gap-4 p-6">
      <Link href="/">
        <Image src="/logo.png" alt="PDC Sneakers" width={80} height={80} />
      </Link>

      <div className="flex flex-wrap justify-between items-center gap-4">
        <Form action="/search" className="w-full sm:flex-1">
          <Input
            type="text"
            name="query"
            placeholder="Search"
            className="rounded-full bg-slate-100"
          />
        </Form>

        <div className="flex items-center gap-2">
          <Link href="/basket">
            <Button variant="outline" className="rounded-full w-9 h-9">
              <ShoppingCart size={20} />
            </Button>
          </Link>

          <ClerkLoaded>
            {user ? (
              <div className="flex items-center gap-2">
                <Link href="/orders">
                  <Button variant="outline" className="rounded-full w-9 h-9">
                    <Package />
                  </Button>
                </Link>

                <UserButton />
              </div>
            ) : (
              <SignInButton mode="modal" />
            )}
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
}

export default Header;
