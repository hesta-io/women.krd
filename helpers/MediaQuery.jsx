import { useMediaQuery } from 'react-responsive';

export function OnDesktop({ children }) {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
}
export function OnTablet({ children }) {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
}
export function OnMobile({ children }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
}
export function isSmallDevice() {
  const isSmall = useMediaQuery({ maxWidth: 991 });
  return isSmall;
}
export function OnDefault({ children }) {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
}
