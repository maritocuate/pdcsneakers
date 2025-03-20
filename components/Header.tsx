"use client";

import { ClerkLoaded, SignInButton, useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Form from "next/form";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { PackageIcon, TrolleyIcon } from "@sanity/icons";

function Header() {
  const { user } = useUser();
  console.log(user);

  return (
    <header className="flex flex-wrap justify-between items-center gap-4 p-4 py-2">
      <Link href="/">PDC Sneakers</Link>

      <Form action="/search" className="w-full sm:flex-1">
        <Input
          type="text"
          name="query"
          placeholder="Search"
          className="rounded"
        />
      </Form>

      <div className="flex items-center gap-4">
        <Link href="/basket">
          <Button>
            <TrolleyIcon className="w-4 h-4" />
          </Button>
        </Link>

        <ClerkLoaded>
          {user ? (
            <div className="flex items-center gap-3">
              <Link href="/orders">
                <Button>
                  <PackageIcon className="w-4 h-4" />
                </Button>
              </Link>

              <UserButton />
            </div>
          ) : (
            <SignInButton mode="modal" />
          )}
        </ClerkLoaded>
      </div>
    </header>
  );
}

export default Header;
