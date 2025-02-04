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

export const Register = () => {
  const form = useForm();
  let onSubmit;
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
            <form action="" className="space-y-5 md:space-y-3">
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
                <Button className="w-full">Register</Button>
              </div>
            </form>
          </Form>
        </Card>
      </section>
    </main>
  );
};
