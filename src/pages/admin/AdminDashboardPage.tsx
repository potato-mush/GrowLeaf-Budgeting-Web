import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { 
  Users, 
  MessageSquare, 
  HelpCircle, 
  Settings, 
  LogOut, 
  BarChart3,
  TrendingUp,
  Activity,
  Trash2,
  Mail,
  Calendar
} from "lucide-react";
import { useAdmin } from "../../contexts/AdminContext";
import { 
  getSupportTickets, 
  getSuggestions, 
  updateSuggestionStatus, 
  deleteSupportTicket, 
  deleteSuggestion, 
  SupportTicket,
  Suggestion, 
  getUserFeedback, 
  updateFeedbackStatus, 
  deleteUserFeedback, 
  UserFeedback 
} from "../../lib/firebaseService";

export function AdminDashboardPage() {
  const navigate = useNavigate();
  const { logout } = useAdmin();
  const [activeTab, setActiveTab] = useState("overview");
  const [supportTickets, setSupportTickets] = useState<SupportTicket[]>([]);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [feedbacks, setFeedbacks] = useState<UserFeedback[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (activeTab === "support") {
      loadSupportTickets();
    } else if (activeTab === "suggestions") {
      loadSuggestions();
    } else if (activeTab === "feedback") {
      loadFeedbacks();
    }
  }, [activeTab]);

  const loadSupportTickets = async () => {
    setLoading(true);
    const tickets = await getSupportTickets();
    setSupportTickets(tickets);
    setLoading(false);
  };

  const loadSuggestions = async () => {
    setLoading(true);
    const sug = await getSuggestions();
    setSuggestions(sug);
    setLoading(false);
  };

  const loadFeedbacks = async () => {
    setLoading(true);
    const fb = await getUserFeedback();
    setFeedbacks(fb);
    setLoading(false);
  };

  const handleDeleteTicket = async (id: string) => {
    if (confirm("Are you sure you want to delete this ticket?")) {
      await deleteSupportTicket(id);
      loadSupportTickets();
    }
  };

  const handleDeleteSuggestion = async (id: string) => {
    if (confirm("Are you sure you want to delete this suggestion?")) {
      await deleteSuggestion(id);
      loadSuggestions();
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  const handleUpdateSuggestionStatus = async (id: string, status: Suggestion["status"]) => {
    const notes = prompt("Add admin notes (optional):");
    await updateSuggestionStatus(id, status, notes || undefined);
    loadSuggestions();
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "users", label: "Users", icon: Users },
    { id: "suggestions", label: "Suggestions", icon: MessageSquare },
    { id: "feedback", label: "Feedback", icon: HelpCircle },
    { id: "support", label: "Support", icon: HelpCircle },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const stats = [
    {
      icon: Users,
      label: "Total Users",
      value: "12,543",
      change: "+12.5%",
      color: "#3b82f6",
    },
    {
      icon: MessageSquare,
      label: "Suggestions",
      value: suggestions.length.toString(),
      change: "+5.2%",
      color: "#10b981",
    },
    {
      icon: HelpCircle,
      label: "Support Tickets",
      value: supportTickets.length.toString(),
      change: "-3.1%",
      color: "#f59e0b",
    },
    {
      icon: Activity,
      label: "User Ratings",
      value: feedbacks.length.toString(),
      change: "+8.4%",
      color: "#8b5cf6",
    },
  ];

  const formatDate = (timestamp: any) => {
    if (!timestamp) return "N/A";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  };

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img src="/src/assets/logo.png" alt="GrowLeaf Logo" className="h-8 w-8" />
              <div>
                <h1 className="text-[20px] font-bold text-[#111827]">GrowLeaf Admin</h1>
                <p className="text-[12px] text-[#6b7280]">Dashboard</p>
              </div>
            </div>

            <Button
              onClick={handleLogout}
              variant="outline"
              className="gap-2 border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? "border-[#3b82f6] text-[#3b82f6]"
                      : "border-transparent text-[#6b7280] hover:text-[#111827]"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-[14px] font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${stat.color}20` }}
                      >
                        <Icon className="h-6 w-6" style={{ color: stat.color }} />
                      </div>
                      <div
                        className={`text-[12px] font-medium px-2 py-1 rounded ${
                          stat.change.startsWith("+")
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {stat.change}
                      </div>
                    </div>
                    <p className="text-[14px] text-[#6b7280] mb-1">{stat.label}</p>
                    <p className="text-[32px] font-bold text-[#111827]">{stat.value}</p>
                  </Card>
                );
              })}
            </div>

            {/* Charts Placeholder */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="h-6 w-6 text-[#3b82f6]" />
                <h2 className="text-[24px] font-medium text-[#111827]">Analytics Overview</h2>
              </div>
              <div className="h-64 bg-[#f9fafb] rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                <p className="text-[#6b7280]">Chart visualization will be displayed here</p>
              </div>
            </Card>
          </div>
        )}

        {activeTab === "support" && (
          <Card className="p-6">
            <h2 className="text-[24px] font-medium text-[#111827] mb-6">Support Tickets</h2>
            {loading ? (
              <div className="text-center py-8">Loading...</div>
            ) : supportTickets.length === 0 ? (
              <div className="text-center py-8 text-[#6b7280]">No support tickets yet</div>
            ) : (
              <div className="space-y-4">
                {supportTickets.map((ticket) => (
                  <div key={ticket.id} className="border border-gray-200 rounded-lg p-4 hover:border-[#3b82f6] transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-[18px] font-medium text-[#111827] mb-1">{ticket.subject}</h3>
                        <div className="flex items-center gap-4 text-[14px] text-[#6b7280]">
                          <span className="flex items-center gap-1">
                            <Mail className="h-4 w-4" />
                            {ticket.email}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {formatDate(ticket.createdAt)}
                          </span>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteTicket(ticket.id!)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-[14px] text-[#6b7280] mb-2"><strong>From:</strong> {ticket.name}</p>
                    <p className="text-[14px] text-[#6b7280]">{ticket.message}</p>
                  </div>
                ))}
              </div>
            )}
          </Card>
        )}

        {activeTab === "suggestions" && (
          <Card className="p-6">
            <h2 className="text-[24px] font-medium text-[#111827] mb-6">User Suggestions</h2>
            {loading ? (
              <div className="text-center py-8">Loading...</div>
            ) : suggestions.length === 0 ? (
              <div className="text-center py-8 text-[#6b7280]">No suggestions yet</div>
            ) : (
              <div className="space-y-4">
                {suggestions.map((sug) => (
                  <div key={sug.id} className="border border-gray-200 rounded-lg p-4 hover:border-[#3b82f6] transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 bg-[#3b82f6]/10 text-[#3b82f6] rounded text-[12px] font-medium">
                            {sug.category}
                          </span>
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-600 rounded text-[12px] font-medium">
                            {sug.upvotes || 0} upvotes
                          </span>
                          <span className={`px-2 py-1 rounded text-[12px] font-medium ${
                            sug.status === "completed" ? "bg-green-100 text-green-600" :
                            sug.status === "in-progress" ? "bg-blue-100 text-blue-600" :
                            sug.status === "rejected" ? "bg-red-100 text-red-600" :
                            "bg-gray-100 text-gray-600"
                          }`}>
                            {sug.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-[14px] text-[#6b7280] mb-2">
                          <span>{sug.email}</span>
                          <span>{formatDate(sug.createdAt)}</span>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteSuggestion(sug.id!)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-[14px] text-[#6b7280] mb-2"><strong>From:</strong> {sug.name}</p>
                    <p className="text-[14px] text-[#6b7280] mb-3">{sug.suggestion}</p>
                    {sug.adminNotes && (
                      <div className="p-3 bg-blue-50 rounded-lg mb-3">
                        <p className="text-[12px] text-blue-900"><strong>Admin Notes:</strong> {sug.adminNotes}</p>
                      </div>
                    )}
                    <div className="flex gap-2">
                      <Button size="sm" onClick={() => handleUpdateSuggestionStatus(sug.id!, "in-progress")} className="bg-blue-500 hover:bg-blue-600">
                        In Progress
                      </Button>
                      <Button size="sm" onClick={() => handleUpdateSuggestionStatus(sug.id!, "completed")} className="bg-green-500 hover:bg-green-600">
                        Complete
                      </Button>
                      <Button size="sm" onClick={() => handleUpdateSuggestionStatus(sug.id!, "rejected")} className="bg-red-500 hover:bg-red-600">
                        Reject
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>
        )}

        {activeTab === "feedback" && (
          <Card className="p-6">
            <h2 className="text-[24px] font-medium text-[#111827] mb-6">User Feedback & Ratings</h2>
            {loading ? (
              <div className="text-center py-8">Loading...</div>
            ) : feedbacks.length === 0 ? (
              <div className="text-center py-8 text-[#6b7280]">No feedback yet</div>
            ) : (
              <div className="space-y-4">
                {feedbacks.map((fb) => (
                  <div key={fb.id} className="border border-gray-200 rounded-lg p-4 hover:border-[#3b82f6] transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={`text-xl ${i < fb.rating ? "text-yellow-400" : "text-gray-300"}`}>★</span>
                            ))}
                          </div>
                          <span className="text-[14px] font-medium text-[#111827]">{fb.rating}/5</span>
                          {fb.status === "reviewed" && (
                            <span className="px-2 py-1 bg-green-100 text-green-600 rounded text-[12px] font-medium">
                              Reviewed
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-[14px] text-[#6b7280] mb-2">
                          <span>{fb.email}</span>
                          <span>{formatDate(fb.createdAt)}</span>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteUserFeedback(fb.id!).then(loadFeedbacks)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-[14px] text-[#6b7280] mb-2"><strong>From:</strong> {fb.name}</p>
                    <p className="text-[14px] text-[#6b7280] mb-3">{fb.feedback}</p>
                    {fb.status !== "reviewed" && (
                      <Button 
                        size="sm" 
                        onClick={() => updateFeedbackStatus(fb.id!, "reviewed").then(loadFeedbacks)}
                        className="bg-green-500 hover:bg-green-600"
                      >
                        Mark as Reviewed
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </Card>
        )}

        {activeTab === "users" && (
          <Card className="p-6">
            <h2 className="text-[24px] font-medium text-[#111827] mb-6">User Management</h2>
            <div className="h-64 bg-[#f9fafb] rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
              <p className="text-[#6b7280]">User management interface will be displayed here</p>
            </div>
          </Card>
        )}

        {activeTab === "settings" && (
          <Card className="p-6">
            <h2 className="text-[24px] font-medium text-[#111827] mb-6">Admin Settings</h2>
            <div className="h-64 bg-[#f9fafb] rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
              <p className="text-[#6b7280]">Settings interface will be displayed here</p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
