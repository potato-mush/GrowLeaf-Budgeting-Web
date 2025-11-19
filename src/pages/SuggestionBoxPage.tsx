import { ArrowLeft, Lightbulb, CheckCircle2, ThumbsUp, TrendingUp, Clock, CheckCircle, XCircle, Loader } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createSuggestion, getSuggestions, upvoteSuggestion, removeUpvote, Suggestion } from "../lib/firebaseService";

export function SuggestionBoxPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/#support");
  };

  useEffect(() => {
    loadSuggestions();
    // Get user email from localStorage (for tracking upvotes)
    const storedEmail = localStorage.getItem("userEmail") || "";
    setUserEmail(storedEmail);
  }, []);

  const loadSuggestions = async () => {
    setLoading(true);
    const data = await getSuggestions();
    setSuggestions(data);
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Store email for upvoting
    localStorage.setItem("userEmail", email);
    setUserEmail(email);

    const result = await createSuggestion({
      name,
      email,
      category,
      suggestion,
    });

    setIsSubmitting(false);

    if (result.success) {
      setIsSuccess(true);
      setName("");
      setEmail("");
      setCategory("");
      setSuggestion("");
      loadSuggestions();
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  const handleUpvote = async (suggestionId: string, alreadyUpvoted: boolean) => {
    if (!userEmail) {
      alert("Please submit a suggestion first or enter your email to vote");
      return;
    }

    if (alreadyUpvoted) {
      await removeUpvote(suggestionId, userEmail);
    } else {
      await upvoteSuggestion(suggestionId, userEmail);
    }
    loadSuggestions();
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      pending: { color: "bg-yellow-100 text-yellow-600 border-yellow-200", icon: Clock, label: "Pending" },
      "in-progress": { color: "bg-blue-100 text-blue-600 border-blue-200", icon: Loader, label: "In Progress" },
      completed: { color: "bg-green-100 text-green-600 border-green-200", icon: CheckCircle, label: "Completed" },
      rejected: { color: "bg-red-100 text-red-600 border-red-200", icon: XCircle, label: "Rejected" },
    };
    const badge = badges[status as keyof typeof badges] || badges.pending;
    const Icon = badge.icon;
    return (
      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-[12px] font-medium border ${badge.color}`}>
        <Icon className="h-3 w-3" />
        {badge.label}
      </span>
    );
  };

  const categories = [
    "Feature Request",
    "User Interface",
    "Performance",
    "Security",
    "Documentation",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#3b82f6] text-white py-16 relative overflow-hidden">
        {/* Dot Patterns */}
        <div className="absolute" style={{ top: '-15%', right: '2%', width: '200px', height: '230px', opacity: 0.12 }}>
          <img src="/dot.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute" style={{ bottom: '-20%', left: '5%', width: '180px', height: '210px', opacity: 0.1 }}>
          <img src="/dot.png" alt="" className="w-full h-full object-contain" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Button 
            variant="ghost" 
            className="text-white hover:text-white hover:bg-white/10 mb-6 -ml-4"
            onClick={handleBackToHome}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>

          <div className="flex items-center gap-4 mb-4">
            <Lightbulb className="h-10 w-10" />
            <h1 className="text-[32px] font-bold">Suggestion Box</h1>
          </div>
          <p className="text-[16px] text-white/90 max-w-2xl">
            Share your ideas and vote on suggestions from the community!
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Submit Form */}
          <div>
            <h2 className="text-[24px] font-medium text-[#111827] mb-6">Submit Your Idea</h2>
            {isSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                <p className="text-[14px] text-green-600">
                  Thank you! Your suggestion has been submitted successfully.
                </p>
              </div>
            )}

            <Card className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[14px] font-medium text-[#111827] mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-[14px] font-medium text-[#111827] mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-[14px] font-medium text-[#111827] mb-2">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                    className="w-full h-12 px-3 rounded-md border border-gray-300 bg-white text-[16px] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
                  >
                    <option value="">Select a category</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[14px] font-medium text-[#111827] mb-2">
                    Your Suggestion <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    placeholder="Tell us your idea in detail..."
                    value={suggestion}
                    onChange={(e) => setSuggestion(e.target.value)}
                    required
                    rows={5}
                    className="w-full px-3 py-2 rounded-md border border-gray-300 bg-white text-[16px] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-[#3b82f6] hover:bg-[#2563eb] text-white"
                >
                  {isSubmitting ? "Submitting..." : "Submit Suggestion"}
                </Button>
              </form>
            </Card>
          </div>

          {/* Popular Suggestions */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[24px] font-medium text-[#111827]">Community Suggestions</h2>
              <TrendingUp className="h-6 w-6 text-[#3b82f6]" />
            </div>

            {loading ? (
              <div className="text-center py-12">
                <Loader className="h-8 w-8 animate-spin text-[#3b82f6] mx-auto" />
              </div>
            ) : suggestions.length === 0 ? (
              <Card className="p-8 text-center">
                <Lightbulb className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-[16px] text-[#6b7280]">No suggestions yet. Be the first to share your idea!</p>
              </Card>
            ) : (
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {suggestions.map((sug) => {
                  const hasUpvoted = sug.upvotedBy?.includes(userEmail);
                  return (
                    <Card key={sug.id} className="p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-3">
                        <button
                          onClick={() => handleUpvote(sug.id!, hasUpvoted)}
                          className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg border-2 transition-all ${
                            hasUpvoted
                              ? "bg-[#3b82f6] border-[#3b82f6] text-white"
                              : "bg-white border-gray-200 text-gray-600 hover:border-[#3b82f6] hover:text-[#3b82f6]"
                          }`}
                        >
                          <ThumbsUp className="h-4 w-4" />
                          <span className="text-[12px] font-medium">{sug.upvotes || 0}</span>
                        </button>

                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <span className="px-2 py-1 bg-[#3b82f6]/10 text-[#3b82f6] rounded text-[12px] font-medium">
                                {sug.category}
                              </span>
                            </div>
                            {getStatusBadge(sug.status || "pending")}
                          </div>

                          <p className="text-[14px] text-[#111827] font-medium mb-2">{sug.suggestion}</p>
                          <p className="text-[12px] text-[#6b7280]">
                            by {sug.name} • {sug.createdAt?.toDate?.()?.toLocaleDateString() || "Recently"}
                          </p>

                          {sug.adminNotes && (
                            <div className="mt-3 p-3 bg-[#f9fafb] rounded-lg border border-gray-200">
                              <p className="text-[12px] font-medium text-[#111827] mb-1">Admin Note:</p>
                              <p className="text-[12px] text-[#6b7280]">{sug.adminNotes}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
