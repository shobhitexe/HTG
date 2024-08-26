"use client";

import { Button, MailIcon, useToast } from "@repo/ui";
import { collectEmailAction } from "./submitFormAction";

export default function EmailForm() {
  const { toast } = useToast();

  async function collectEmailsClient(formdata: FormData) {
    const response = await collectEmailAction(formdata);
    if (response === true) {
      toast({
        title: "Response Recorded",
        description: "You have been added to the waitlist",
      });
    }
  }

  return (
    <form action={collectEmailsClient} className="flex flex-col gap-2">
      <div className="relative flex items-center bg-ChineseBlack py-1 px-5 rounded-sm w-full md:max-w-sm max-w-xs">
        <MailIcon className="w-5 h-5" />
        <input
          className="bg-transparent md:py-3 py-2 px-2 focus:outline-none w-full"
          placeholder="Enter your Email"
          type="email"
          name="email"
          required
        />
      </div>
      <Button
        variant={"golden"}
        className="text-black w-full md:max-w-sm max-w-xs text-lg font-ClashGroteskMedium"
      >
        Join the Waitlist
      </Button>
    </form>
  );
}
