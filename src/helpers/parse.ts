import { ROUTES } from "@/consts";
import type { EventT } from "@/types";

export const parseEventToCard = (events: EventT[], action: string) => {
  return events
    .map((event) => ({
      ...event,
      action: { title: action, to: `${ROUTES.EVENTS}/${event.id}` },
    }))
    .slice(0, 3);
};
