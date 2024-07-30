import { useMediaQuery } from "@vueuse/core";

const useIsMobile = () => {
  return useMediaQuery("(max-width: 639px)");
};

export default useIsMobile;
