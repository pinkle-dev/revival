import { useEffect, useState } from "react";
import { Card, type CardProps } from "../Card";
import { Dots } from "./Dots";
import { DesktopWrapper, MobileWrapper, Wrapper } from "./styles";
import { Divider } from "../Divider";

interface CarouselProps {
  items: Array<CardProps>;
}

export const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const changeIdxHandler = (idx: number) => () => {
    if (idx === activeIdx) return;
    setActiveIdx(idx);
  };

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setActiveIdx(activeIdx === items.length - 1 ? 0 : activeIdx + 1);
    }, 4000);
    return () => clearTimeout(intervalId);
  }, [activeIdx, items.length]);

  return (
    <Wrapper>
      <DesktopWrapper>
        {items.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </DesktopWrapper>
      <MobileWrapper>
        <Card {...items[activeIdx]} />
      </MobileWrapper>

      {items.length > 1 && (
        <>
          <Divider mobVertical={40} />
          <Dots
            items={items}
            activeIdx={activeIdx}
            callback={changeIdxHandler}
          />
        </>
      )}
    </Wrapper>
  );
};
