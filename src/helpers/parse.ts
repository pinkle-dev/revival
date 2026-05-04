import { ROUTES } from "@/consts";
import type { EventT, Minister } from "@/types";

export const parseEventToCard = (events: EventT[], action: string) => {
  return events.slice(0, 3).map((event) => ({
    ...event,
    action: { title: action, to: `${ROUTES.EVENTS}/${event.id}` },
  }));
};

export const parseMinisterToCard = (ministers: Minister[]) => {
  return ministers
    .slice(0, 3)
    .map((minister) => ({ ...minister, title: minister.name }));
};
