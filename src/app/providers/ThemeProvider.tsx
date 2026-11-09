import type { ReactNode } from "react";
import { ThemeProvider as ExistingThemeProvider } from "../../components/theme-provider";

export function AppThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ExistingThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ExistingThemeProvider>
  );
}