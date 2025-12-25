import React from 'react';

interface MakeEditableProps {
  Component: React.ComponentType<any>;
  isEditMode: boolean;
  [key: string]: any;
}

export function makeEditable<P extends object>(
  Component: React.ComponentType<P>
): React.ComponentType<P & { isEditMode?: boolean }> {
  return function EditableComponent(props: P & { isEditMode?: boolean }) {
    return <Component {...props} isEditMode={props.isEditMode || false} />;
  };
}

export default makeEditable;
