"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface LocalSearchProps {
  route: string;
  iconPosition?: "left" | "right";
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
}

const LocalSearch = (props: LocalSearchProps) => {
  const { route, iconPosition, imgSrc, placeholder, otherClasses = "" } = props;

  return (
    <div
      className={cn(
        "background-light800_darkgradient flex min-h-[56px] grow items-center gap-2 rounded-[10px] px-4",
        otherClasses
      )}
    >
      {iconPosition === "left" && (
        <Image
          src={imgSrc}
          alt="search"
          width={20}
          height={20}
          className="cursor-pointer"
        />
      )}

      <Input
        type="text"
        placeholder={placeholder}
        className="no-focus paragraph-regular placeholder flex-1 border-none bg-transparent shadow-none outline-none dark:text-light-900"
      />

      {iconPosition === "right" && (
        <Image
          src={imgSrc}
          alt="search"
          width={20}
          height={20}
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default LocalSearch;
