"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { Svgs } from "./Svgs";
import { Button, buttonVariants } from "./ui/Button";
import { useToast } from "@/hooks/use-toast";

const UserAuthForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const loginWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn("google");
    } catch (error) {
      // toast
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was an error logging in with google.",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <Button
        variant="default"
        isLoading={isLoading}
        size="sm"
        className={`w-full`}
        onClick={loginWithGoogle}
      >
        {isLoading ? null : <Svgs.google className="h-4 w-4 mr-2" />}
        Google
      </Button>
    </div>
  );
};

export default UserAuthForm;
