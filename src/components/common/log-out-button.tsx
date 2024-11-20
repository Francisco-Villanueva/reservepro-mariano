"use client";

import { signOut } from "next-auth/react";
import { Button } from "../ui/button";
import { LogOut as LogOutIcon, Settings, User } from "lucide-react";
import { DropdownMenuItem } from "../ui/dropdown-menu";
export function LogOut() {
  const handleLogOut = () => {
    signOut({ callbackUrl: "http://localhost:3000/", redirect: true });
  };

  return (
    <DropdownMenuItem onClick={handleLogOut}>
      <LogOutIcon className="mr-2 h-4 w-4" />
      <span>Log out</span>
    </DropdownMenuItem>
  );
}
