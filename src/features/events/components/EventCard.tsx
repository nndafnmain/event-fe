import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";

interface Event {
  title: string;
  startDate: string;
  endDate?: string;
  price: number;
  organizer: string;
  imageSource: string;
}

export const EventCard: React.FC<Event> = ({
  imageSource,
  organizer,
  price,
  startDate,
  title,
  endDate,
}) => {
  return (
    <Card className="w-52 md:w-72">
      <CardContent className="w-full overflow-hidden p-0">
        <img
          src={imageSource}
          alt={title}
          className="h-full w-full rounded-b-none rounded-t-md object-cover"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </CardContent>
      <CardDescription className="space-y-3 p-5">
        <p className="text-base font-semibold text-gray-900">{title}</p>
        <p>
          {startDate} {endDate ? `- ${endDate}` : null}
        </p>
        <p className="text-base font-semibold text-black">{price}</p>
      </CardDescription>
      <div className="space-y-5">
        <Separator className="w-full" />
        <CardFooter className="flex h-10 items-center gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>
          <p className="text-sm text-gray-700">{organizer}</p>
        </CardFooter>
      </div>
    </Card>
  );
};
