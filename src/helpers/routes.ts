import type { ANCHORS, ROUTES } from "@/consts";

interface GetActiveStatusProps {
  location: string;
  link: ROUTES | ANCHORS;
  isAnchor?: boolean;
}

export const getActiveStatus = ({
  location,
  link,
  isAnchor,
}: GetActiveStatusProps) => {
  return (
    location.split("/")[1] ===
    link.split(isAnchor ? "#" : "/")[isAnchor ? 1 : 0]
  );
};
