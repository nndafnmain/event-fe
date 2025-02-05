import React from "react";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="container max-w-full md:max-w-[90%]">
      <h1 className="text-center">Loket.com</h1>
      <div className="flex min-h-screen items-center gap-5 md:justify-around">
        <section className="hidden justify-center md:flex md:w-[50%]">
          <img src="/auth/auth-animation.svg" alt="" />
        </section>
        <section className="w-full md:w-[50%]">{children}</section>
      </div>
    </main>
  );
};
