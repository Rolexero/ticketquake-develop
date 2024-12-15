import { useLocation } from "react-router-dom";

export default function useCanGoBack() {
  const { key } = useLocation();

  return key.toLowerCase() !== "default";
}
