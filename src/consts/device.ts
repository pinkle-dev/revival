const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

const media = "@media (max-width:";

export const device = {
  mobileS: `${media} ${size.mobileS})`,
  mobileM: `${media} ${size.mobileM})`,
  mobileL: `${media} ${size.mobileL})`,
  tablet: `${media} ${size.tablet})`,
  laptop: `${media} ${size.laptop})`,
  laptopL: `${media} ${size.laptopL})`,
  desktop: `${media} ${size.desktop})`,
};
