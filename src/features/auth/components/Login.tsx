import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { loginSchema, LoginSchema } from "../schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "../hooks/useLogin";

export const Login = () => {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const mutation = useLogin();

  function onSubmit(values: LoginSchema) {
    mutation.mutate(values);
  }

  return (
    <main className="w-full space-y-2 md:w-[80%]">
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
        <Card className="p-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5 md:space-y-3"
            >
              <div className="">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs md:text-sm">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="enzo@gmail.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input placeholder="********" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <Button className="w-full">Login</Button>
              </div>
            </form>
          </Form>
        </Card>
      </section>
    </main>
  );
};
