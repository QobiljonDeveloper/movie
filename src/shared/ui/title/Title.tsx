import { memo, type ReactNode } from "react";

export const Title = memo(
  ({ children, className }: { children: ReactNode; className?: string }) => {
    return (
      <h3 className={`text-2xl font-bold mb-2 dark:text-white text-sy ${className}`}>{children}</h3>
    );
  }
);
