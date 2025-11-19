import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Lock, User, AlertCircle } from "lucide-react";
import { useAdmin } from "../../contexts/AdminContext";

export function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAdmin();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError("Please enter both username and password");
      return;
    }

    const success = login(username, password);
    if (success) {
      navigate("/admin/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3b82f6] to-[#2563eb] flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute" style={{ top: '10%', left: '10%', width: '150px', height: '180px', opacity: 0.3 }}>
          <img src="/src/assets/dot.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute" style={{ bottom: '10%', right: '10%', width: '120px', height: '150px', opacity: 0.3 }}>
          <img src="/src/assets/dot.png" alt="" className="w-full h-full object-contain" />
        </div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-xl mb-4">
            <img src="/src/assets/logo.png" alt="GrowLeaf Logo" className="h-10 w-10" />
          </div>
          <h1 className="text-white text-[32px] font-bold mb-2">GrowLeaf Admin</h1>
          <p className="text-white/80 text-[16px]">Sign in to access the admin panel</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
                <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <p className="text-[14px] text-red-600">{error}</p>
              </div>
            )}

            {/* Username Field */}
            <div>
              <label className="block text-[14px] font-medium text-[#111827] mb-2">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="pl-10 h-12 text-[16px]"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-[14px] font-medium text-[#111827] mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 h-12 text-[16px]"
                />
              </div>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              className="w-full h-12 bg-[#3b82f6] hover:bg-[#2563eb] text-white text-[16px] font-medium"
            >
              Sign In
            </Button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-[#f9fafb] rounded-lg border border-gray-200">
            <p className="text-[12px] text-[#6b7280] mb-2 font-medium">Demo Credentials:</p>
            <p className="text-[12px] text-[#6b7280]">Username: <span className="font-mono font-semibold">admin</span></p>
            <p className="text-[12px] text-[#6b7280]">Password: <span className="font-mono font-semibold">admin123</span></p>
          </div>
        </div>

        {/* Back to Home Link */}
        <div className="text-center mt-6">
          <button
            onClick={() => navigate("/")}
            className="text-white hover:text-white/80 text-[14px] underline transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
