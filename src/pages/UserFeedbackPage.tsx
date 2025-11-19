import { ArrowLeft, Star, CheckCircle2, MessageSquare } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUserFeedback } from "../lib/firebaseService";

export function UserFeedbackPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/#support");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Please select a rating");
      return;
    }

    setIsSubmitting(true);

    const result = await createUserFeedback({
      name,
      email,
      rating,
      feedback,
    });

    setIsSubmitting(false);

    if (result.success) {
      setIsSuccess(true);
      setName("");
      setEmail("");
      setRating(0);
      setFeedback("");
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#3b82f6] text-white py-16 relative overflow-hidden">
        {/* Dot Patterns */}
        <div className="absolute" style={{ top: '-15%', right: '2%', width: '200px', height: '230px', opacity: 0.12 }}>
          <img src="/src/assets/dot.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute" style={{ bottom: '-20%', left: '5%', width: '180px', height: '210px', opacity: 0.1 }}>
          <img src="/src/assets/dot.png" alt="" className="w-full h-full object-contain" />
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
            <MessageSquare className="h-10 w-10" />
            <h1 className="text-[32px] font-bold">Share Your Feedback</h1>
          </div>
          <p className="text-[16px] text-white/90 max-w-2xl">
            Help us improve GrowLeaf by sharing your experience
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto">
          {isSuccess && (
            <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
              <p className="text-[14px] text-green-600">
                Thank you for your feedback! We appreciate your input.
              </p>
            </div>
          )}

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
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
                <label className="block text-[14px] font-medium text-[#111827] mb-3">
                  Rating <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        className={`h-10 w-10 ${
                          star <= rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    </button>
                  ))}
                </div>
                {rating > 0 && (
                  <p className="text-[14px] text-[#6b7280] mt-2">
                    You rated: {rating} {rating === 1 ? "star" : "stars"}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-[14px] font-medium text-[#111827] mb-2">
                  Your Feedback <span className="text-red-500">*</span>
                </label>
                <textarea
                  placeholder="Tell us about your experience with GrowLeaf..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  required
                  rows={6}
                  className="w-full px-3 py-2 rounded-md border border-gray-300 bg-white text-[16px] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-[#3b82f6] hover:bg-[#2563eb] text-white"
              >
                {isSubmitting ? "Submitting..." : "Submit Feedback"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
