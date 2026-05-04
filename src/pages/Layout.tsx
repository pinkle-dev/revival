import { Layout } from "@/components/Layout";
import { useLocalStorage, useScroll, useScrollToTop } from "@/hooks";

export const LayoutPage = () => {
  useScroll();
  useScrollToTop();
  useLocalStorage();

  return <Layout />;
};
