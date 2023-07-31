import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children }) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);
  const [documentHeight, setDocumentHeight] = useState(0);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>('#drawer-portal');
    setMounted(true);

    // Function to update the document height state
    const updateDocumentHeight = () => {
      setDocumentHeight(document.documentElement.scrollHeight);
    };

    // Add event listener for window resize and DOM content load
    window.addEventListener('resize', updateDocumentHeight);
    document.addEventListener('DOMContentLoaded', updateDocumentHeight);

    // Call the updateDocumentHeight function initially to set the document height
    updateDocumentHeight();

    return () => {
      window.removeEventListener('resize', updateDocumentHeight);
      document.removeEventListener('DOMContentLoaded', updateDocumentHeight);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!event.target || !(event.target instanceof Node)) return;
      const drawerElement = document.getElementById('drawer');
      if (!drawerElement?.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      //   document.body.classList.add('blur');
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
      //   document.body.classList.remove('blur');
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      //   document.body.classList.remove('blur');
    };
  }, [isOpen, onClose]);

  return mounted && ref.current ? (
    createPortal(
      <>
        <div
          id="drawer"
          className={`fixed inset-y-0 left-0 w-64 bg-backgroundGrey shadow-lg transition-transform duration-300 ease-in-out transform z-[51] drawer-content ${
            isOpen ? 'translate-x-0' : 'translate-x-[-100%]'
          }`}
        >
          <div className="p-4">{children}</div>
        </div>
        <div
          className={`z-[50] absolute bg-black w-screen opacity-50 ${
            isOpen ? '' : 'hidden'
          }`}
          style={{ height: `${documentHeight}px` }}
        ></div>
      </>,
      document.getElementById('drawer-portal') as HTMLElement
    )
  ) : (
    <></>
  );
};

export default Drawer;
