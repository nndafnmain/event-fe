import React from "react";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="container md:max-w-[90%]">
      <div className="flex min-h-screen items-center justify-around gap-5">
        <section className="flex w-[50%] justify-center">
          <img src="/auth/auth-animation.svg" alt="" />
        </section>
        <section className="w-[50%]">{children}</section>
      </div>
    </main>
  );
};
