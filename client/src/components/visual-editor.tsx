import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Edit3, Save, Palette, Type, Image, Settings, Eye, Code, Download, Lock } from 'lucide-react';
import AdminLogin from '@/components/admin-login';

interface VisualEditorProps {
  isEditMode: boolean;
  setIsEditMode: (mode: boolean) => void;
}

interface EditableContent {
  id: string;
  type: 'text' | 'heading' | 'color' | 'image';
  value: string;
  label: string;
}

export function VisualEditor({ isEditMode, setIsEditMode }: VisualEditorProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [editableContent, setEditableContent] = useState<EditableContent[]>([
    { id: 'hero-title', type: 'heading', value: 'Turning Vision into Infrastructure', label: 'Hero Title' },
    { id: 'hero-subtitle', type: 'text', value: 'Where Quality Meets Integrity Vision Builds Sustainablility', label: 'Hero Subtitle' },
    { id: 'hero-description', type: 'text', value: 'Leading infrastructure development across India for over 20 years. From highways to bridges, we build the foundations of tomorrow.', label: 'Hero Description' },
    { id: 'company-name', type: 'heading', value: 'KEYSTONE INFRA PVT. LTD.', label: 'Company Name' },
    { id: 'primary-color', type: 'color', value: '#ea580c', label: 'Primary Orange Color' },
    { id: 'secondary-color', type: 'color', value: '#92400e', label: 'Secondary Brown Color' },
    { id: 'about-title', type: 'heading', value: 'About Keystone Infra', label: 'About Section Title' },
    { id: 'contact-email', type: 'text', value: 'contact@keystoneinfra.in', label: 'Contact Email' },
    { id: 'contact-phone', type: 'text', value: '+919393645644', label: 'Contact Phone' }
  ]);

  const [selectedContent, setSelectedContent] = useState<EditableContent | null>(null);
  const [colorPicker, setColorPicker] = useState({ show: false, color: '#ea580c' });
  const [changes, setChanges] = useState<Record<string, string>>({});

  const handleContentEdit = (id: string, newValue: string) => {
    setChanges(prev => ({ ...prev, [id]: newValue }));
    setEditableContent(prev => 
      prev.map(item => item.id === id ? { ...item, value: newValue } : item)
    );
  };

  const handleSaveChanges = () => {
    // In a real implementation, this would send changes to the backend
    console.log('Saving changes:', changes);
    
    // Apply CSS variable changes for colors
    if (changes['primary-color']) {
      document.documentElement.style.setProperty('--primary-orange', changes['primary-color']);
    }
    if (changes['secondary-color']) {
      document.documentElement.style.setProperty('--secondary-brown', changes['secondary-color']);
    }

    // Apply text changes to DOM elements
    Object.entries(changes).forEach(([id, value]) => {
      const element = document.querySelector(`[data-editable="${id}"]`);
      if (element) {
        element.textContent = value;
      }
    });

    alert('Changes saved successfully!');
    setChanges({});
  };

  const handleExportChanges = () => {
    const exportData = {
      timestamp: new Date().toISOString(),
      changes: changes,
      content: editableContent
    };
    
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'website-changes.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleEditorClick = () => {
    if (!isAuthenticated) {
      setShowLoginDialog(true);
    } else {
      setIsEditMode(!isEditMode);
    }
  };

  const handleLogin = (password: string) => {
    setIsAuthenticated(true);
    // Store auth state in session storage (will be cleared when browser closes)
    sessionStorage.setItem('admin-authenticated', 'true');
  };

  // Check for existing authentication on component mount
  useEffect(() => {
    const authState = sessionStorage.getItem('admin-authenticated');
    if (authState === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50">
      <AdminLogin 
        isOpen={showLoginDialog}
        onClose={() => setShowLoginDialog(false)}
        onLogin={handleLogin}
      />
      
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant={isEditMode ? "destructive" : "default"}
            className="mb-2 shadow-lg"
            onClick={handleEditorClick}
          >
            {isEditMode ? (
              <>
                <Eye className="w-4 h-4 mr-2" />
                Exit Edit Mode
              </>
            ) : (
              <>
                {isAuthenticated ? <Edit3 className="w-4 h-4 mr-2" /> : <Lock className="w-4 h-4 mr-2" />}
                {isAuthenticated ? 'Visual Editor' : 'Admin Login'}
              </>
            )}
          </Button>
        </DialogTrigger>
        
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Visual Website Editor
            </DialogTitle>
          </DialogHeader>

          <Tabs defaultValue="content" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="content" className="flex items-center gap-2">
                <Type className="w-4 h-4" />
                Content
              </TabsTrigger>
              <TabsTrigger value="colors" className="flex items-center gap-2">
                <Palette className="w-4 h-4" />
                Colors
              </TabsTrigger>
              <TabsTrigger value="images" className="flex items-center gap-2">
                <Image className="w-4 h-4" />
                Images
              </TabsTrigger>
              <TabsTrigger value="export" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export
              </TabsTrigger>
            </TabsList>

            <TabsContent value="content" className="space-y-4">
              <div className="grid gap-4">
                <h3 className="text-lg font-semibold">Text Content</h3>
                {editableContent.filter(item => item.type === 'text' || item.type === 'heading').map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-4">
                      <Label className="text-sm font-medium text-gray-600 mb-2 block">
                        {item.label}
                      </Label>
                      {item.type === 'heading' ? (
                        <Input
                          value={item.value}
                          onChange={(e) => handleContentEdit(item.id, e.target.value)}
                          className="font-semibold"
                          placeholder={item.label}
                        />
                      ) : (
                        <Textarea
                          value={item.value}
                          onChange={(e) => handleContentEdit(item.id, e.target.value)}
                          rows={3}
                          placeholder={item.label}
                        />
                      )}
                      <div className="text-xs text-gray-500 mt-1">
                        Element ID: {item.id}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="colors" className="space-y-4">
              <div className="grid gap-4">
                <h3 className="text-lg font-semibold">Brand Colors</h3>
                {editableContent.filter(item => item.type === 'color').map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-4">
                      <Label className="text-sm font-medium text-gray-600 mb-2 block">
                        {item.label}
                      </Label>
                      <div className="flex items-center gap-3">
                        <input
                          type="color"
                          value={item.value}
                          onChange={(e) => handleContentEdit(item.id, e.target.value)}
                          className="w-12 h-10 rounded border cursor-pointer"
                        />
                        <Input
                          value={item.value}
                          onChange={(e) => handleContentEdit(item.id, e.target.value)}
                          placeholder="#ea580c"
                          className="flex-1"
                        />
                        <div 
                          className="w-10 h-10 rounded border"
                          style={{ backgroundColor: item.value }}
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-3">Quick Color Presets</h4>
                    <div className="grid grid-cols-6 gap-2">
                      {[
                        '#ea580c', '#fb923c', '#f97316', '#dc2626', '#dc2626',
                        '#92400e', '#a16207', '#ca8a04', '#365314', '#166534'
                      ].map((color, index) => (
                        <button
                          key={index}
                          className="w-8 h-8 rounded border-2 border-gray-300 hover:border-gray-500 transition-colors"
                          style={{ backgroundColor: color }}
                          onClick={() => {
                            handleContentEdit('primary-color', color);
                          }}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="images" className="space-y-4">
              <div className="grid gap-4">
                <h3 className="text-lg font-semibold">Image Management</h3>
                <Card>
                  <CardContent className="p-4">
                    <p className="text-gray-600 mb-4">
                      Image editing will be available in the next update. Currently, you can:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                      <li>Replace images by uploading new files to the /client/public/images/ folder</li>
                      <li>Update image references in the code</li>
                      <li>Use the existing slider images that are already optimized</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="export" className="space-y-4">
              <div className="grid gap-4">
                <h3 className="text-lg font-semibold">Save & Export</h3>
                
                <Card>
                  <CardContent className="p-4 space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Current Changes</h4>
                      {Object.keys(changes).length === 0 ? (
                        <p className="text-gray-500 text-sm">No changes made yet</p>
                      ) : (
                        <div className="space-y-2">
                          {Object.entries(changes).map(([id, value]) => (
                            <div key={id} className="text-sm bg-gray-50 p-2 rounded">
                              <strong>{id}:</strong> {value.substring(0, 50)}{value.length > 50 ? '...' : ''}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="flex gap-3">
                      <Button 
                        onClick={handleSaveChanges}
                        disabled={Object.keys(changes).length === 0}
                        className="flex items-center gap-2"
                      >
                        <Save className="w-4 h-4" />
                        Apply Changes
                      </Button>
                      
                      <Button 
                        variant="outline"
                        onClick={handleExportChanges}
                        disabled={Object.keys(changes).length === 0}
                        className="flex items-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        Export JSON
                      </Button>
                    </div>

                    <div className="text-xs text-gray-500 bg-yellow-50 p-3 rounded">
                      <strong>Note:</strong> Changes are applied temporarily. For permanent changes, 
                      the exported JSON can be used to update the website's source code.
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>

      {isEditMode && (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 px-3 py-2 rounded-lg text-sm mt-2 shadow-lg">
          <strong>Edit Mode Active:</strong> Click on any text to edit it directly
        </div>
      )}
    </div>
  );
}

export default VisualEditor;