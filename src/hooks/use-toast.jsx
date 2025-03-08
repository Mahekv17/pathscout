
import * as React from "react";
import { createContext, useContext, useState } from "react";

const TOAST_LIMIT = 20;
const TOAST_REMOVE_DELAY = 1000;

const ToastActionContext = createContext(null);

function useToast() {
  const context = useContext(ToastActionContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = React.useCallback((toast) => {
    setToasts((prevToasts) => {
      if (prevToasts.length >= TOAST_LIMIT) {
        const nextToasts = [...prevToasts];
        nextToasts.shift();
        return [...nextToasts, toast];
      }
      return [...prevToasts, toast];
    });
  }, []);

  const updateToast = React.useCallback((toast) => {
    if (!toast.id) return;

    setToasts((prevToasts) => {
      const toastIndex = prevToasts.findIndex((t) => t.id === toast.id);

      if (toastIndex === -1) return prevToasts;

      const newToasts = [...prevToasts];
      newToasts[toastIndex] = { ...newToasts[toastIndex], ...toast };

      return newToasts;
    });
  }, []);

  const dismissToast = React.useCallback((toastId) => {
    setToasts((prevToasts) => {
      return prevToasts.map((toast) =>
        toast.id === toastId ? { ...toast, open: false } : toast
      );
    });
  }, []);

  const removeToast = React.useCallback((toastId) => {
    setToasts((prevToasts) => {
      return prevToasts.filter((toast) => toast.id !== toastId);
    });
  }, []);

  return (
    <ToastActionContext.Provider
      value={{
        toasts,
        addToast,
        updateToast,
        dismissToast,
        removeToast,
      }}
    >
      {children}
    </ToastActionContext.Provider>
  );
}

export function toast({ title, description, variant = "default", action }) {
  const { addToast } = useToast();

  const id = React.useId();
  addToast({ id, title, description, variant, action, open: true });

  function dismiss() {
    const { dismissToast } = useToast();
    dismissToast(id);
  }

  return {
    id,
    dismiss,
    update: ({ title, description, variant, action }) => {
      const { updateToast } = useToast();
      updateToast({ id, title, description, variant, action });
    },
  };
}

export { useToast };
export const ToastAction = ({ className, ...props }) => (
  <button className={className} {...props} />
);
