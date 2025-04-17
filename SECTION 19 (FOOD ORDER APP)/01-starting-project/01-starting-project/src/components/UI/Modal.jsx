// import { useEffect, useRef } from "react";
// import { createPortal } from "react-dom";
// export default function Modal({ children, open, className = "" }) {
//   const dialog = useRef();

//   useEffect(() => {
//     if (open) {
//       dialog.current.showModal();
//     }
//   }, [open]);
//   return createPortal(
//     <dialog open={open} className={`modal ${className}`}>
//       {children}
//     </dialog>,
//     document.getElementById("modal")
//   );
// }

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, onClose, className = "" }) {
  const dialog = useRef();

  useEffect(() => {
    const modalEl = dialog.current;
    if (open) {
      modalEl?.showModal();
    } else {
      modalEl?.close();
    }

    return () => modalEl.close();
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
