import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className=" flex   flex-col h-screen justify-center items-center gap-10">
      <h1 className="text-3xl font-bold ">Marian Reserve Pro Page</h1>
      <section className="w-1/4 gap-4 flex flex-wrap">
        <Button>Boton de shadcn | deafult</Button>
        <Button variant={"destructive"}>Boton de shadcn | destructive</Button>
        <Button variant={"ghost"}>Boton de shadcn | ghost</Button>
        <Button variant={"link"}>Boton de shadcn | link</Button>
        <Button variant={"outline"}>Boton de shadcn | outline</Button>
        <Button variant={"secondary"}>Boton de shadcn | secondary</Button>
      </section>
    </div>
  );
}
