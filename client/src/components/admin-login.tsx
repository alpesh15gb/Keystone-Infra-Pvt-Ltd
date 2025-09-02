import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, User } from "lucide-react";

interface AdminLoginProps {
  onSuccess: () => void;
}

export default function AdminLogin({ onSuccess }: AdminLoginProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simple password check - in production this would be a proper auth system
    if (password === "keystone2025") {
      setTimeout(() => {
        onSuccess();
        setIsLoading(false);
      }, 500);
    } else {
      setTimeout(() => {
        setError("Invalid password. Please try again.");
        setIsLoading(false);
        setPassword("");
      }, 500);
    }
  };

  return (
    <Card className="shadow-xl">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Lock className="w-8 h-8 text-blue-600" />
        </div>
        <CardTitle className="text-xl">Admin Access</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Admin Password</label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="pl-10"
                required
                data-testid="admin-password-input"
              />
            </div>
          </div>
          
          {error && (
            <div className="text-red-600 text-sm bg-red-50 p-2 rounded">
              {error}
            </div>
          )}
          
          <Button
            type="submit"
            disabled={isLoading || !password}
            className="w-full bg-blue-600 hover:bg-blue-700"
            data-testid="admin-login-button"
          >
            {isLoading ? "Verifying..." : "Access Admin Panel"}
          </Button>
        </form>
        
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            Authorized personnel only
          </p>
        </div>
      </CardContent>
    </Card>
  );
}