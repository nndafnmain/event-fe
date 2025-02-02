import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export const Register = () => {
  let form = {};
  return (
    <main className="w-[60%] space-y-2">
      <section className="text-center">
        <h1 className="text-xl font-bold text-gray-950">Register</h1>
        <p className="text-sm font-semibold text-gray-400">
          Already have an account?{" "}
          <Link to={`/auth/login`} className="text-blue-700">
            Login
          </Link>
        </p>
      </section>
      <section>
        <Card className="space-y-3 p-5">
          <Input />
          <Input />
          <Input />
          <Input />
          <Button className="w-full">Submit</Button>
        </Card>
      </section>
    </main>
  );
};
