import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export const Header = () => {
  const hasToken = true;
  return (
    <header className="bg-blue-950 p-5">
      <div className="container flex items-center justify-between">
        <section className="w-[10%]">
          <h1 className="font-semibold text-white md:text-2xl">Evento</h1>
        </section>
        <section className="flex w-[65%] gap-2">
          <Input className="bg-blue-950 text-white" />
          <Button className="rounded-sm">
            <SearchIcon />
          </Button>
        </section>
        <section>
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
      </div>
    </header>
  );
};
