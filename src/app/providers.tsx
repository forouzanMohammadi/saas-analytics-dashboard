import type { ReactNode } from "react";
import { Toaster } from "@/components/shared/feedback/Toaster";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
}
