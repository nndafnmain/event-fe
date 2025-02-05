import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Separator } from "@radix-ui/react-separator";
import { Calendar, Clock, LocateFixedIcon } from "lucide-react";

export const EventDetail = () => {
  return (
    <main className="md:container md:mt-10">
      <section className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <section className="md:col-span-2">
          <img
            src="/event/cd1.png"
            alt=""
            className="w-full rounded-md md:w-[100%]"
          />
        </section>
        <section className="md:col-span-1">
          <Card className="flex h-full flex-col justify-between space-y-5 p-5">
            <h1 className="mb-10 text-2xl font-semibold">
              Mens Rea - Makassar
            </h1>
            <div className="flex items-center gap-3">
              <Calendar color="blue" size={16} />
              <p className="text-sm">05 Jul - 05 Jul 2025</p>
            </div>
            <div className="flex items-center gap-3">
              <Clock color="blue" size={16} />
              <p className="text-sm">09.00 - 15.00</p>
            </div>
            <div className="flex items-center gap-3">
              <LocateFixedIcon color="blue" size={16} />
              <p className="text-sm">Auditorium Makassar</p>
            </div>
            <Separator color="red" />
            <CardFooter className="flex items-center gap-5 p-0">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  className="h-10 rounded-full"
                />
              </Avatar>
              <div>
                <h1 className="text-sm text-gray-400">Held by: </h1>
                <p className="text-sm font-semibold">Comika Entertainment</p>
              </div>
            </CardFooter>
          </Card>
        </section>
        <section className="space-y-3 md:col-span-2 md:mt-10">
          <h1 className="text-xl font-bold">Deskripsi</h1>
          <p className="text-sm text-gray-500">
            Mens Rea adalah istilah hukum yang artinya "Niat Jahat" Dalam
            persidangan seringkali yang harus dicari tahu adalah apakah ada niat
            jahat dalam tindakan seseorang. Dalam Stand-Up Comedy Special ke 10,
            Pandji Pragiwaksono ingin memberi pesan bahwa tidak ada niat jahat
            dari yang dia bawakan di atas panggung hanyalah komedi dengan tujuan
            membuat penonton tertawa. Namun pada saat yang bersamaan, di
            pertunjukan yang akan bertema politik ini Pandji akan mencari tahu
            adakah niat jahat di balik tindak- tanduk beberapa nama di dunia
            politik Indonesia. Mens Rea Tour akan mulai berjalan di tahun 2025
            dengan mengunjungi 10 kota nasional & 1 kota Jakarta.
          </p>
        </section>
        <section className="md:col-span-1 md:mt-10">
          <Card className="p-5">
            <Button className="w-full">Buy ticket</Button>
          </Card>
        </section>
      </section>
    </main>
  );
};
