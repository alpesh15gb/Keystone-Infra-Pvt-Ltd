import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, X, Check, AlertCircle } from 'lucide-react';

interface ImageUploaderProps {
  currentImage?: string;
  onImageChange: (imageUrl: string) => void;
  label: string;
  accept?: string;
}

export function ImageUploader({ 
  currentImage, 
  onImageChange, 
  label, 
  accept = "image/*" 
}: ImageUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      setUploadStatus('uploading');
      
      // Create a local URL for the image
      const imageUrl = URL.createObjectURL(file);
      
      // Simulate upload delay
      setTimeout(() => {
        onImageChange(imageUrl);
        setUploadStatus('success');
        setTimeout(() => setUploadStatus('idle'), 2000);
      }, 500);
    } else {
      setUploadStatus('error');
      setTimeout(() => setUploadStatus('idle'), 2000);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const getStatusIcon = () => {
    switch (uploadStatus) {
      case 'uploading':
        return <div className="animate-spin w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full" />;
      case 'success':
        return <Check className="w-4 h-4 text-green-500" />;
      case 'error':
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Upload className="w-4 h-4" />;
    }
  };

  const getStatusMessage = () => {
    switch (uploadStatus) {
      case 'uploading':
        return 'Uploading...';
      case 'success':
        return 'Upload successful!';
      case 'error':
        return 'Error: Please select a valid image file';
      default:
        return '';
    }
  };

  return (
    <Card>
      <CardContent className="p-4">
        <Label className="text-sm font-medium text-gray-600 mb-3 block">
          {label}
        </Label>
        
        {/* Current Image Preview */}
        {currentImage && (
          <div className="mb-4">
            <img 
              src={currentImage} 
              alt="Current" 
              className="w-full h-32 object-cover rounded border"
            />
          </div>
        )}

        {/* Upload Area */}
        <div
          className={`
            border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer
            ${isDragging 
              ? 'border-blue-400 bg-blue-50' 
              : 'border-gray-300 hover:border-gray-400'
            }
            ${uploadStatus === 'error' ? 'border-red-400 bg-red-50' : ''}
            ${uploadStatus === 'success' ? 'border-green-400 bg-green-50' : ''}
          `}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="flex flex-col items-center space-y-2">
            {getStatusIcon()}
            <p className="text-sm text-gray-600">
              {isDragging 
                ? 'Drop image here' 
                : 'Click to upload or drag & drop'
              }
            </p>
            <p className="text-xs text-gray-500">
              PNG, JPG, GIF up to 10MB
            </p>
            {getStatusMessage() && (
              <p className={`text-xs font-medium ${
                uploadStatus === 'error' ? 'text-red-600' :
                uploadStatus === 'success' ? 'text-green-600' :
                'text-blue-600'
              }`}>
                {getStatusMessage()}
              </p>
            )}
          </div>
        </div>

        {/* Hidden File Input */}
        <Input
          ref={fileInputRef}
          type="file"
          accept={accept}
          onChange={handleFileInputChange}
          className="hidden"
        />

        {/* Upload Button */}
        <Button 
          variant="outline" 
          className="w-full mt-3"
          onClick={() => fileInputRef.current?.click()}
          disabled={uploadStatus === 'uploading'}
        >
          Choose Image File
        </Button>
      </CardContent>
    </Card>
  );
}

export default ImageUploader;