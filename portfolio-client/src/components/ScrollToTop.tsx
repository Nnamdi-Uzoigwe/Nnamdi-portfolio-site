import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;

export const ScrollToTopInstant = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const ScrollToTopConditional = ({
  skipRoutes = [],
}: {
  skipRoutes?: string[];
}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Skip scrolling for certain routes
    if (!skipRoutes.includes(pathname)) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [pathname, skipRoutes]);

  return null;
};
