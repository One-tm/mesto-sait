"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { reachGoal, type MetrikaGoal } from "@/lib/metrika";

type MetrikaGoalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  goal: MetrikaGoal;
  goalParams?: Record<string, string>;
};

export function MetrikaGoalLink({ children, goal, goalParams, onClick, ...props }: MetrikaGoalLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        reachGoal(goal, goalParams);
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
