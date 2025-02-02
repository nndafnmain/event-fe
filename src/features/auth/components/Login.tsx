import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <main className="w-[60%] space-y-2">
      <section className="text-center">
        <h1 className="text-xl font-bold text-gray-950">Login</h1>
        <p className="text-sm font-semibold text-gray-400">
          Don't have account yet?{" "}
          <Link to={`/auth/register`} className="text-blue-700">
            Register
          </Link>
        </p>
      </section>
      <section>
        <Card className="space-y-3 p-5">
          <Input />
          <Input />
          <Button className="w-full">Submit</Button>
        </Card>
      </section>
    </main>
  );
};
