"use client";
import React from "react";
import { Button } from "../ui/button";
// import { Icons } from "../global/icons";
// import { signIn } from "@/lib/auth-client";

export default function SocialButtons() {
  // async function handleSignIn(provider: "google" | "github") {
  //   await signIn.social({
  //     provider: provider,
  //   });
  // }
  return (
    <div className="mt-6 grid grid-cols-2 gap-3">
      <Button
        // onClick={() => handleSignIn("google")}
        type="button"
        variant="outline"
      >
        {/* <Icons.google /> */}
        <span>Google</span>
      </Button>
      <Button
        // onClick={() => handleSignIn("google")}
        type="button"
        variant="outline"
      >
        {/* <Icons.gitHub /> */}
        <span>Github</span>
      </Button>
    </div>
  );
}
