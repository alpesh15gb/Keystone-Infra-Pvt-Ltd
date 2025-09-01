import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Edit, Upload } from 'lucide-react';

interface EditableImageProps {
  id: string;
  src: string;
  alt: string;
  isEditMode: boolean;
  onImageChange?: (id: string, newSrc: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

export function EditableImage({
  id,
  src,
  alt,
  isEditMode,
  onImageChange,
  className,
  style
}: EditableImageProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const imageUrl = URL.createObjectURL(file);
      onImageChange?.(id, imageUrl);
    }
  };

  const triggerFileSelect = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.onchange = handleFileSelect;
    fileInput.click();
  };

  return (
    <div 
      className={cn("relative group", isEditMode && "cursor-pointer")}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={isEditMode ? triggerFileSelect : undefined}
      data-editable-image={id}
    >
      <img
        src={src}
        alt={alt}
        className={cn(
          className,
          isEditMode && "transition-all duration-200",
          isEditMode && isHovered && "opacity-75"
        )}
        style={style}
      />
      
      {isEditMode && isHovered && (
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-200">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
            <Upload className="w-4 h-4" />
            <span className="text-sm font-medium">Click to change image</span>
          </div>
        </div>
      )}
      
      {isEditMode && (
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-blue-500 text-white p-1 rounded">
            <Edit className="w-3 h-3" />
          </div>
        </div>
      )}
    </div>
  );
}

export default EditableImage;