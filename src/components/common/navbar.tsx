import { UserLogged } from "./user-logged";

export function Navbar() {
  return (
    <nav className="w-full bg-accent h-10 fixed top-0 flex items-center justify-between  px-8">
      <h2 className="text-green-500">Reserve Pro</h2>
      <UserLogged />
    </nav>
  );
}
