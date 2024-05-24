import React, { useEffect, useRef } from 'react';
import './Popup.css';

interface PopupProps {
  isOpen: boolean;
  positionTo: HTMLElement | null;
  onClose: () => void;
  children: React.ReactNode;
}

export const Popup: React.FC<PopupProps> = ({
  isOpen,
  positionTo,
  onClose,
  children,
}) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen || !popupRef.current || !positionTo) return;

    const { top, left, height } = positionTo.getBoundingClientRect();
    popupRef.current.style.top = `${top + height}px`;
    popupRef.current.style.left = `${left}px`;
  }, [isOpen, positionTo]);

  if (!isOpen) return null;

  return (
    <>
      <div className="popup-shade" onClick={onClose} />
      <div className="popup-content" ref={popupRef}>
        {children}
      </div>
    </>
  );
};
