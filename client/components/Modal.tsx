"use client";
import React, { useCallback } from "react";
import Button from "./Button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit?: () => void; // Assuming onSubmit should be optional here
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
}) => {
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    onClose();
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled || !onSubmit) {
      return;
    }
    onSubmit();
  }, [onSubmit, disabled]);

  if (!isOpen) {
    return null; // Prevent rendering when modal is closed
  }

  return (
    <>
      <div className="justify-center items-center flex fixed inset-0 z-50 overflow-x-hidden overflow-y-auto bg-neutral-800 bg-opacity-70 outline-none focus:outline-none">
        <div className="relative w-full max-w-[70%] lg:max-w-[30%] my-6 mx-auto max-h-[80vh] overflow-auto">
          {/* Modal Content */}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-600">
              <h3 className="text-2xl font-semibold text-white">{title}</h3>
              <button onClick={handleClose} className="text-white">
                Close
              </button>
            </div>

            {/* Modal Body */}
            <div className="relative p-6 flex-auto">{body}</div>

            {/* Modal Footer */}
            <div className="flex flex-col gap-2  p-10">
              <Button
                disabled={disabled}
                label={actionLabel}
                secondary
                fullWidth
                large
                onClick={handleSubmit}
              />
              {footer}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
