"use client";

import React from "react";
import { Moon, Sun, Computer } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// ThemeToggleItem component for each theme option
const ThemeToggleItem = ({
  icon,
  text,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  text: string;
  active: boolean;
  onClick: () => void;
}) => (
  <DropdownMenuItem
    onClick={onClick}
    className={`flex cursor-pointer items-center gap-4 px-2.5 py-2 focus:bg-gray-100 dark:focus:bg-dark-400 ${
      active ? "bg-gray-100 dark:bg-dark-400" : ""
    }`}
  >
    {icon}
    <p
      className={`body-semibold text-light-500 ${
        active ? "text-primary-500" : "text-dark100_light900"
      }`}
    >
      {text}
    </p>
  </DropdownMenuItem>
);

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = (newTheme: string) => {
    if (newTheme !== theme) {
      setTheme(newTheme);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="border-none">
          <Sun
            className={`size-[1.2rem] rotate-0 scale-100 transition-all ${
              theme === "dark" ? "dark:-rotate-90 dark:scale-0" : ""
            }`}
            color="#ff7000"
            fill="#ff7000"
          />
          <Moon
            className={`absolute size-[1.2rem] rotate-90 scale-0 transition-all ${
              theme === "dark" ? "dark:rotate-0 dark:scale-100" : ""
            }`}
            color="#ff7000"
            fill="#ff7000"
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="dark:border-dark-400 dark:bg-dark-300"
      >
        <ThemeToggleItem
          icon={
            <Sun
              size={16}
              className={theme === "light" ? "active-theme" : ""}
            />
          }
          text="Light"
          active={theme === "light"}
          onClick={() => toggleTheme("light")}
        />
        <ThemeToggleItem
          icon={
            <Moon
              size={16}
              className={theme === "dark" ? "active-theme" : ""}
            />
          }
          text="Dark"
          active={theme === "dark"}
          onClick={() => toggleTheme("dark")}
        />
        <ThemeToggleItem
          icon={
            <Computer
              size={16}
              className={theme === "system" ? "active-theme" : ""}
            />
          }
          text="System"
          active={theme === "system"}
          onClick={() => toggleTheme("system")}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
