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
       