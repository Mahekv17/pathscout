
import * as React from "react";
import { createContext, useContext, useState } from "react";

const TOAST_LIMIT = 20;
const TOAST_REMOVE_DELAY = 1000;

type ToastType = "default" | "destructive";
type ToastActionElement = React.ReactElement;

type ToastProps = {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
  variant?: ToastType;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

type Toast = ToastProps;

const ToastActionContext = createContext<{
  toasts: Toast[];
  addToast: (toast: Toast) => void;
  updateToast: (toast: Toast) => void;
  dismissToast: (toastId: string) => void;
  removeToast: (toastId: string) => void;
} | null>(null);

function useToast() {
  const context = useContext(ToastActionContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
}

export function ToastProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = React.useCallback((toast: Toast) => {
    setToasts((prevToasts) => {
      if (prevToasts.length >= TOAST_LIMIT) {
        const nextToasts = [...prevToasts];
        nextToasts.shift();
        return [...nextToasts, toast];
      }
      return [...prevToasts, toast];
    });
  }, []);

  const updateToast = React.useCallback((toast: Toast) => {
    if (!toast.id) return;

    setToasts((prevToasts) => {
      const toastIndex = prevToasts.findIndex((t) => t.id === toast.id);

      if (toastIndex === -1) return prevToasts;

      const newToasts = [...prevToasts];
      newToasts[toastIndex] = { ...newToasts[toastIndex], ...toast };

      return newToasts;
    });
  }, []);

  const dismissToast = React.useCallback((toastId: string) => {
    setToasts((prevToasts) => {
      return prevToasts.map((toast) =>
        toast.id === toastId ? { ...toast, open: false } : toast
      );
    });
  }, []);

  const removeToast = React.useCallback((toastId: string) => {
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

export function toast({
  title,
  description,
  variant = "default",
  action,
}: Omit<ToastProps, "id" | "open" | "onOpenChange">) {
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
    update: ({ title, description, variant, action }: Omit<ToastProps, "id">) => {
      const { updateToast } = useToast();
      updateToast({ id, title, description, variant, action });
    },
  };
}

export { type ToastProps, type ToastActionElement, useToast };
export const ToastAction = ({ className, ...props }: React.HTMLAttributes<HTMLButtonElement>) => (
  <button className={className} {...props} />
);
