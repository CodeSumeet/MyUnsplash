import { useMediaQuery } from "@uidotdev/usehooks";

const useWindowSize = () => {
  const isSm = useMediaQuery("only screen and (max-width : 576px)");
  const isMd = useMediaQuery(
    "only screen and (min-width : 577px) and (max-width : 992px)"
  );
  const isLg = useMediaQuery(
    "only screen and (min-width : 993px) and (max-width : 1200px)"
  );
  const isXl = useMediaQuery("only screen and (min-width : 1201px)");

  return { isSm, isMd, isLg, isXl };
};

export default useWindowSize;
