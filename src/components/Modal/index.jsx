import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const ImageModal = ({ isOpen, imageSrc, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close Modal"
          className="absolute -top-3 -right-3 rounded-full bg-gray-900 p-2 text-white shadow transition-colors hover:bg-gray-800"
        >
          <FaTimes size={20} />
        </button>

        <img
          src={imageSrc}
          alt="Full-size preview"
          className="h-auto w-full rounded object-contain"
        />
      </div>
    </div>
  );
};

export default ImageModal;
