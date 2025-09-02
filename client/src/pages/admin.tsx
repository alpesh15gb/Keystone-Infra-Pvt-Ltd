import { useState } from "react";
import { useLocation } from "wouter";
import AdminLogin from "@/components/admin-login";
import Home from "@/pages/home";

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
            <span className="font-medium">Admin Mode - Content Editor Active</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-blue-100 text-sm">Click any text to edit</span>
            <button
              onClick={handleLogout}
              className="bg-blue-700 hover:bg-blue-800 px-3 py-1 rounded text-sm transition-colors"
            >
              Exit Admin
            </button>
          </div>
        </div>
      </div>

      {/* Content with edit mode enabled */}
      <div className="pt-12">
        <Home isEditMode={true} />
      </div>
    </div>
  );
}