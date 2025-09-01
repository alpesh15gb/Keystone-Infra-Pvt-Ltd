import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface EditableTextProps {
  id: string;
  children: React.ReactNode;
  isEditMode: boolean;
  onSave?: (id: string, value: string) => void;
  className?: string;
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  multiline?: boolean;
}

export function EditableText({
  id,
  children,
  isEditMode,
  onSave,
  className,
  element = 'p',
  multiline = false
}: EditableTextProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState('');
  const [originalValue, setOriginalValue] = useState('');
  const textRef = useRef<HTMLElement>(null);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const text = textRef.current.textContent || '';
      setValue(text);
      setOriginalValue(text);
    }
  }, [children]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleClick = () => {
    if (isEditMode && !isEditing) {
      setIsEditing(true);
    }
  };

  const handleSave = () => {
    if (value.trim() && value !== originalValue) {
      onSave?.(id, value);
      setOriginalValue(value);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setValue(originalValue);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline) {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Enter' && e.ctrlKey) {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  const editableProps = {
    'data-editable': id,
    className: cn(
      className,
      isEditMode && 'cursor-pointer hover:bg-blue-50 hover:outline hover:outline-2 hover:outline-blue-300 rounded transition-all',
      isEditing && 'outline outline-2 outline-blue-500'
    ),
    onClick: handleClick,
    ref: textRef,
    suppressContentEditableWarning: true
  };

  if (isEditing) {
    const InputComponent = multiline ? 'textarea' : 'input';
    return (
      <div className="relative">
        <InputComponent
          ref={inputRef as any}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleSave}
          className={cn(
            'w-full bg-white border-2 border-blue-500 rounded px-2 py-1 text-inherit font-inherit resize-none',
            className
          )}
          rows={multiline ? 3 : undefined}
        />
        <div className="absolute -top-8 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded">
          Press Enter to save, Esc to cancel
        </div>
      </div>
    );
  }

  const Element = element as any;
  
  return (
    <Element {...editableProps}>
      {children}
    </Element>
  );
}

export default EditableText;