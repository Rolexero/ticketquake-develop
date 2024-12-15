import { useCallback, useState } from "react";

export const useModalState = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);
  const toggleIsOpen = useCallback(
    () => setIsOpen((prevState) => !prevState),
    []
  );

  const closeModal = useCallback(() => setIsOpen(false), []);
  const openModal = useCallback(() => setIsOpen(true), []);

  return { isOpen, toggleIsOpen, closeModal, openModal, setIsOpen };
};
