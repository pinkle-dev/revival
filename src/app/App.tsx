import { RouterProvider } from "@/app/providers/routerProvider";
import { ThemeProvider } from "@/app/providers/themeProvider";
import { StateProvider } from "@/app/providers/stateProvider";

export const App = () => {
  return (
    <StateProvider>
      <ThemeProvider>
        <RouterProvider />
      </ThemeProvider>
    </StateProvider>
  );
};
