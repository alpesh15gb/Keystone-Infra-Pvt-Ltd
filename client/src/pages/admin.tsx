import { useState } from "react";
import { useLocation } from "wouter";
import AdminLogin from "@/components/admin-login";
import Home from "@/pages/home";
import { CodeEditor } from "@/components/code-editor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [, setLocation] = useLocation();

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setLocation("/");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Panel</h1>
            <p className="text-gray-600">Enter admin credentials to access the content editor</p>
          </div>
          <AdminLogin onSuccess={handleLoginSuccess} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Admin Header */}
      <div className="fixed top-0 left-0 right-0 bg-blue-600 text-white z-50 px-4 py-2">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="font-medium">Admin Mode</span>
          </div>
          <button
            onClick={handleLogout}
            className="bg-blue-700 hover:bg-blue-800 px-3 py-1 rounded text-sm transition-colors"
          >
            Exit Admin
          </button>
        </div>
      </div>

      {/* Admin Content */}
      <div className="pt-16 px-4">
        <Tabs defaultValue="visual" className="max-w-7xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="visual">Visual Editor</TabsTrigger>
            <TabsTrigger value="code">Code Editor</TabsTrigger>
          </TabsList>
          
          <TabsContent value="visual">
            <div className="bg-blue-50 p-4 rounded mb-4">
              <p className="text-sm text-blue-800">Click any text or image to edit directly on the page</p>
            </div>
            <Home isEditMode={true} />
          </TabsContent>
          
          <TabsContent value="code">
            <div className="space-y-4">
              <CodeEditor
                filePath="home.tsx"
                initialCode="// Edit your component code here"
                onSave={async (code) => {
                  await fetch('/api/content', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id: 'home-code', content: code })
                  });
                }}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}