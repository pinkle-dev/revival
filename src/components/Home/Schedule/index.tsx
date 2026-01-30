import { Wrapper, VerticalText } from "./styles";
import { COMPONENTS, TextElements } from "@/consts";
import { useTranslation } from "@/hooks";
import { useRecoilState } from "recoil";
import { appState } from "@/state";
import { ScheduleInfo } from "./Info";

export const ScheduleComponent = () => {
  const [{ bar: isShow }, setApp] = useRecoilState(appState);
  const content = useTranslation(COMPONENTS.SCHEDULE);

  const changeVisibilityHandler = () => {
    setApp((prev) => ({ ...prev, bar: !prev.bar }));
  };
  return isShow ? (
    <ScheduleInfo callback={changeVisibilityHandler} />
  ) : (
    <Wrapper $show={isShow} onClick={changeVisibilityHandler}>
      <VerticalText element={TextElements.P1}>
        {content.short_title}
      </VerticalText>
    </Wrapper>
  );
};
