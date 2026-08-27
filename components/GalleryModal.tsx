"use client";

import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Download } from "lucide-react";

interface GalleryModalProps {
  images: string[];
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function GalleryModal({
  images,
  title,
  isOpen,
  onClose,
}: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex]);

  if (!isOpen || images.length === 0) return null;

  const handleNext = () => {
    setIsSliding(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setIsSliding(false);
    }, 300);
  };

  const handlePrev = () => {
    setIsSliding(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      setIsSliding(false);
    }, 300);
  };

  const handleDownload = async () => {
    try {
      const imageUrl = images[currentIndex];
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${title}-${currentIndex + 1}.jpg`;
      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  const currentImage = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col animate-fadeIn"
      onClick={onClose}
    >
      {/* Header with Download and Close */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent px-6 py-4 flex items-center justify-between">
        <h2 className="text-white font-semibold text-lg">{title}</h2>
        <div className="flex items-center gap-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDownload();
            }}
            className="flex items-center gap-2 rounded-lg bg-gold/30 hover:bg-gold/50 px-4 py-2 text-gold transition-all duration-300 transform hover:scale-105"
          >
            <Download className="h-5 w-5" />
            Download
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="rounded-full bg-white/10 hover:bg-white/20 p-2 transition-all duration-300 transform hover:scale-110"
          >
            <X className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>

      {/* Main Image Container */}
      <div
        className="flex-1 flex items-center justify-center relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Previous Image (for side-by-side effect) */}
        <div className="absolute left-0 top-0 h-full w-1/4 hidden lg:flex items-center justify-center opacity-30 pointer-events-none">
          <img
            src={images[(currentIndex - 1 + images.length) % images.length]}
            alt="Previous"
            className="h-full w-full object-contain"
          />
        </div>

        {/* Current Image - Main */}
        <div className={`flex items-center justify-center h-full w-full lg:w-1/2 px-4 transition-all duration-500 ${isSliding ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <img
            src={currentImage}
            alt={`${title} ${currentIndex + 1}`}
            className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
          />
        </div>

        {/* Next Image (for side-by-side effect) */}
        <div className="absolute right-0 top-0 h-full w-1/4 hidden lg:flex items-center justify-center opacity-30 pointer-events-none">
          <img
            src={images[(currentIndex + 1) % images.length]}
            alt="Next"
            className="h-full w-full object-contain"
          />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/20 hover:bg-white/40 p-3 transition-all duration-300 transform hover:scale-110 hover:left-6"
        >
          <ChevronLeft className="h-8 w-8 text-white" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/20 hover:bg-white/40 p-3 transition-all duration-300 transform hover:scale-110 hover:right-6"
        >
          <ChevronRight className="h-8 w-8 text-white" />
        </button>
      </div>

      {/* Counter */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur px-6 py-2 rounded-full">
        <span className="text-white font-semibold">
          {currentIndex + 1} / {images.length}
        </span>
      </div>

      {/* Thumbnail Strip with smooth scroll */}
      <div className="bg-gradient-to-t from-black/90 to-transparent px-6 py-6 overflow-x-auto">
        <div className="flex gap-3 pb-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setIsSliding(true);
                setTimeout(() => {
                  setCurrentIndex(idx);
                  setIsSliding(false);
                }, 300);
              }}
              className={`relative h-24 w-24 flex-shrink-0 rounded-lg overflow-hidden border-3 transition-all duration-300 transform hover:scale-110 ${
                idx === currentIndex
                  ? "border-gold shadow-lg shadow-gold/50 scale-110"
                  : "border-white/30 hover:border-white/60 opacity-75 hover:opacity-100"
              }`}
            >
              <img
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
}
