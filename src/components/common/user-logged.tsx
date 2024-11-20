import { authOptions } from "@/config/auth.config";
import { getServerSession } from "next-auth";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";
import { Settings, User } from "lucide-react";
import { LogOut } from "./log-out-button";
export async function UserLogged() {
  const session = await getServerSession(authOptions);

  if (!session?.user) return null;
  const {
    user: { name, lastName },
  } = session;
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="bg-accent text-accent-foreground size-10 flex justify-center items-center rounded-full cursor-pointer">
            <span>{session?.user.name ? session?.user.name[0] : null}</span>
            <span>
              {session?.user.lastName ? session?.user.lastName[0] : null}
            </span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>
            {name}, {lastName}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <LogOut />
          {/* <DropdownMenuItem></DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
