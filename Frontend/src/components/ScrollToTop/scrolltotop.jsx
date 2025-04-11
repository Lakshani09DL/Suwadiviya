
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  const pathsToScrollTop = ["/homagama", "/nawaloka", "/colombo", "/gampaha", "/bloodBank"];

  useEffect(() => {
    if (pathsToScrollTop.includes(pathname)) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

export default ScrollToTop;
