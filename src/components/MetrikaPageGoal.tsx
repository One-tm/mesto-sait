"use client";

import { useEffect } from "react";
import { reachGoal, type MetrikaGoal } from "@/lib/metrika";

type MetrikaPageGoalProps = {
  goal: MetrikaGoal;
  params?: Record<string, string>;
};

export function MetrikaPageGoal({ goal, params }: MetrikaPageGoalProps) {
  useEffect(() => {
    reachGoal(goal, params);
  }, [goal, params]);

  return null;
}
