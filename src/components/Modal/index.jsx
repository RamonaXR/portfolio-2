import { FaTimes } from "react-icons/fa";

const ImageModal = ({ isOpen, imageSrc, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="bg-opacity-70 fixed inset-0 z-50 flex items-center justify-center bg-black"
      onClick={onClose}
    >
      <div className="relative w-full max-w-3xl p-4" onClick={(e) => e.stopPropagation()}>
        <button
          className="absolute top-4 right-4 text-3xl font-bold text-black"
          onClick={onClose}
          aria-label="Close Modal"
        >
          <FaTimes />
        </button>
        <img
          src={imageSrc}
          alt="Full-size preview"
          className="h-auto w-full rounded object-contain shadow-lg"
        />
      </div>
    </div>
  );
};

export default ImageModal;
