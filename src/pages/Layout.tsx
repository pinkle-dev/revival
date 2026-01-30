import { Layout } from "@/components/Layout";
import { useLocalStorage, useScroll } from "@/hooks";

export const LayoutPage = () => {
  useScroll();
  useLocalStorage();

  return <Layout />;
};
