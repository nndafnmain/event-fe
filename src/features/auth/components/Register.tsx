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
import { registerSchema, RegisterSchema } from "../schemas/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegister } from "../hooks/useRegister";

export const Register = () => {
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      referralCode: "",
      password: "",
      confirmPassword: "",
    },
  });

  const mutation = useRegister();

  function onSubmit(values: RegisterSchema) {
    const { email, password, username, referralCode } = values;
    mutation.mutate({ email, password, username, referralCode });
  }

  return (
    <main className="w-full space-y-2 md:w-[80%]">
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
        <Card className="p-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5 md:space-y-3"
            >
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs md:text-sm">
                        Username
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Cole Palmer" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="palmer@chelsea.com" {...field} />
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
                        <Input
                          placeholder="*******"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input placeholder="********" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="referralCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Referral code</FormLabel>
                      <FormControl>
                        <Input placeholder="Referral code.." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <Button className="w-full" type="submit">
                  Register
                </Button>
              </div>
            </form>
          </Form>
        </Card>
      </section>
    </main>
  );
};
