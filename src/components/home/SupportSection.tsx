import { HelpCircle, Shield, FileText, MessageSquare, Lightbulb, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createSupportTicket } from "../../lib/firebaseService";

export function SupportSection() {
  const navigate = useNavigate();
  const [showContactForm, setShowContactForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const supportLinks = [
    {
      icon: HelpCircle,
      title: "Help",
      description: "Get answers to common questions",
      path: "/help",
    },
    {
      icon: Shield,
      title: "Privacy Policy",
      description: "Learn how we protect your data",
      path: "/privacy-policy",
    },
    {
      icon: FileText,
      title: "Terms & Conditions",
      description: "Read our terms of service",
      path: "/terms",
    },
    {
      icon: MessageSquare,
      title: "Share Feedback",
      description: "Rate your experience with us",
      path: "/feedback",
    },
    {
      icon: Lightbulb,
      title: "Suggestion Box",
      description: "Share your ideas with us",
      path: "/suggestion-box",
    },
  ];

  const handleClick = (path: string) => {
    if (path.startsWith("#")) {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = await createSupportTicket({
      name,
      email,
      subject,
      message,
    });

    setIsSubmitting(false);

    if (result.success) {
      setIsSuccess(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setTimeout(() => {
        setIsSuccess(false);
        setShowContactForm(false);
      }, 3000);
    }
  };

  return (
    <section className="py-20 bg-[#f9fafb]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-bold text-[#111827]">
            Need Help?
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto mb-12">
          {supportLinks.map((link, index) => (
            <Button
              key={index}
              variant="ghost"
              onClick={() => handleClick(link.path)}
              className="h-auto flex flex-col items-start gap-3 p-6 bg-white hover:bg-white/80 border border-transparent hover:border-[#3b82f6] transition-all cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg bg-[#3b82f6] flex items-center justify-center">
                <link.icon className="h-5 w-5 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-[16px] font-medium text-[#111827] mb-1">
                  {link.title}
                </h3>
                <p className="text-[14px] text-[#6b7280]">
                  {link.description}
                </p>
              </div>
            </Button>
          ))}
        </div>

        {/* Contact Support Button */}
        {!showContactForm && (
          <div className="text-center">
            <Button
              onClick={() => setShowContactForm(true)}
              className="bg-[#3b82f6] hover:bg-[#2563eb] text-white h-12 px-8"
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              Contact Support
            </Button>
          </div>
        )}

        {/* Contact Form */}
        {showContactForm && (
          <div className="max-w-2xl mx-auto mt-8 bg-white rounded-2xl p-8 border-2 border-[#3b82f6]">
            {isSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-[24px] font-medium text-[#111827] mb-2">
                  Message Sent!
                </h3>
                <p className="text-[16px] text-[#6b7280]">
                  We'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-[24px] font-medium text-[#111827] mb-2">
                    Contact Support
                  </h3>
                  <p className="text-[14px] text-[#6b7280]">
                    Fill out the form below and we'll get back to you soon
                  </p>
                </div>

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
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    placeholder="Brief description of your issue"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-[14px] font-medium text-[#111827] mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    placeholder="Please describe your issue in detail..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    className="w-full px-3 py-2 rounded-md border border-gray-300 bg-white text-[16px] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] resize-none"
                  />
                </div>

                <div className="flex gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowContactForm(false)}
                    className="flex-1 h-12"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 h-12 bg-[#3b82f6] hover:bg-[#2563eb] text-white"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </section>
  );
}