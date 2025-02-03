import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MenuIcon, Search, SearchIcon } from "lucide-react";

export const Header = () => {
  const hasToken = true;
  return (
    <header className="bg-blue-950 p-2 md:p-5">
      <div className="container flex items-center justify-between">
        <section className="w-[10%]">
          <h1 className="font-semibold text-white md:text-2xl">Evento</h1>
        </section>
        <section className="hidden md:block md:flex md:w-[65%] md:gap-2">
          <Input
            className="bg-blue-950 text-white"
            placeholder="Search event here..."
          />
          <Button className="rounded-sm">
            <SearchIcon />
          </Button>
        </section>
        <section className="hidden md:block">
          {hasToken ? (
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
          ) : (
            <div className="flex gap-3">
              <Button>Register</Button>
              <Button>Login</Button>
            </div>
          )}
        </section>
        <section className="block flex gap-3 md:hidden">
          <Search color="white" size={17} />
          <MenuIcon color="white" size={17} />
        </section>
      </div>
    </header>
  );
};
