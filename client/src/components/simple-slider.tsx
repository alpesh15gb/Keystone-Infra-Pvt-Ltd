import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Test with one image first
import testImage from "@/assets/logo.png";

export function SimpleSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Test with URLs that should work
  const testImages = [
    "/images/slider-1_1754941983527.jpg",
    "/images/slider-2_1754941983528.jpg",
    "/images/slider-3_1754941983528.jpg"
  ];

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testImages.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testImages.length) % testImages.length);
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Project Gallery Test</h2>
        
        {/* Test with logo first */}
        <div className="mb-8">
          <img src={testImage} alt="Logo test" className="w-32 h-auto mx-auto" />
          <p className="text-center mt-2">Logo Test (should show)</p>
        </div>

        {/* Test slider */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96">
            <img
              src={testImages[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error("Image failed to load:", testImages[currentIndex]);
                (e.target as HTMLImageElement).src = testImage; // Fallback to logo
              }}
              onLoad={() => {
                console.log("Image loaded successfully:", testImages[currentIndex]);
              }}
            />
            
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          <div className="p-4 text-center">
            <p>Current image: {testImages[currentIndex]}</p>
            <p>Index: {currentIndex + 1} of {testImages.length}</p>
          </div>
        </div>
      </div>
    </section>
  );
}