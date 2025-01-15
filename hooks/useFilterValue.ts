import { OUTDOOR_OPTIONS } from "@/lib/constants";
import { useState } from "react";

export function useFilterValue() {
  const [value, setValue] = useState<(typeof OUTDOOR_OPTIONS)[0]>(
    OUTDOOR_OPTIONS[0]
  );

  return { value, setValue };
}
