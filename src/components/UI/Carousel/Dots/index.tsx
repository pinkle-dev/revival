import type { CardProps } from "../../Card";
import { Dot, Wrapper } from "./styles";

interface DotsProps {
  items: Array<CardProps>;
  activeIdx: number;
  callback: (idx: number) => () => void;
}

export const Dots: React.FC<DotsProps> = ({ items, activeIdx, callback }) => {
  return (
    <Wrapper>
      {items.map((_, idx) => (
        <Dot key={idx} $active={activeIdx === idx} onClick={callback(idx)} />
      ))}
    </Wrapper>
  );
};
