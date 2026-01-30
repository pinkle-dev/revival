import { AboutComponent } from "./About";
import { EventsComponent } from "./Events";
import { MainComponent } from "./Main";
import { ScheduleComponent } from "./Schedule";

export const Home = () => {
  return (
    <>
      <MainComponent />
      <AboutComponent />
      <EventsComponent />
      <ScheduleComponent />
    </>
  );
};
