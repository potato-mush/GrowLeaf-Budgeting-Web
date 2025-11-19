import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck, FileText, Phone, Bell, Cloud } from "lucide-react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

export function PrivacyPolicyPage() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/#support");
  };

  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: "We collect your phone number for authentication, transaction data you input (income, expenses, budgets, loans), your 4-6 digit PIN (encrypted), device information for app functionality, and notification preferences. We never access your SMS messages beyond OTP verification or collect sensitive financial account credentials."
    },
    {
      icon: Lock,
      title: "How We Use Your Data",
      content: "Your data is used exclusively for: authenticating your identity via phone and PIN, enabling budgeting and financial tracking features, providing personalized financial analytics and insights, sending notifications and reminders you've enabled, improving app performance and user experience, and ensuring data synchronization across your devices."
    },
    {
      icon: Cloud,
      title: "Data Storage & Security",
      content: "All data is stored using Firebase Cloud Firestore with bank-level 256-bit encryption. Your PIN is hashed and never stored in plain text. Local data on your device uses AsyncStorage with encryption. We implement industry-standard security protocols including SSL/TLS for data transmission, regular security audits, and automatic backups with encryption at rest."
    },
    {
      icon: Phone,
      title: "SMS & Phone Data Handling",
      content: "We use your phone number solely for account authentication via one-time passwords (OTP). SMS messages are processed through Firebase Phone Authentication. We do not read, store, or access your text messages. OTP codes are temporary and automatically expire. You can change your phone number at any time through account settings."
    },
    {
      icon: UserCheck,
      title: "Third-Party Services",
      content: "GrowLeaf uses Firebase (Google) for authentication, cloud storage, and push notifications. We use SMS service providers only for OTP delivery. We do not share your personal or financial data with advertisers, data brokers, or any third parties for marketing purposes. Analytics are anonymized and used only for app improvement."
    },
    {
      icon: Eye,
      title: "Your Privacy Rights",
      content: "You have the right to: access all your personal data, export your financial records as PDF, delete your account and all associated data, opt-out of non-essential notifications, request data corrections or updates, withdraw consent for data processing, and file complaints with data protection authorities. Contact us at privacy@growleaf.com to exercise these rights."
    },
    {
      icon: Bell,
      title: "Notifications & Communications",
      content: "We send transaction confirmations, budget alerts, savings milestones, loan reminders, and optional financial tips. You control all notification preferences in Settings. We never send promotional SMS or sell your contact information. Push notifications require device permission and can be disabled anytime in your phone's settings or within the app."
    },
    {
      icon: FileText,
      title: "Data Retention & Deletion",
      content: "Active account data is retained as long as your account exists. Deleted transactions are permanently removed within 30 days. Closed accounts and associated data are deleted within 90 days unless required by law. OTP codes expire within 10 minutes. You can request immediate data deletion by contacting support or using the in-app delete account feature."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#3b82f6] text-white py-16 relative overflow-hidden">
        {/* Scattered Dot Patterns - 5 fully framed patterns, positioned to avoid collision */}
        <div className="absolute" style={{ top: '-15%', right: '2%', width: '200px', height: '230px', opacity: 0.12 }}>
          <img src="/src/assets/dot.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute" style={{ bottom: '-20%', left: '5%', width: '180px', height: '210px', opacity: 0.1 }}>
          <img src="/src/assets/dot.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute" style={{ top: '8%', left: '38%', width: '160px', height: '190px', opacity: 0.08 }}>
          <img src="/src/assets/dot.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute" style={{ bottom: '5%', right: '42%', width: '190px', height: '220px', opacity: 0.09 }}>
          <img src="/src/assets/dot.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute" style={{ top: '45%', left: '72%', width: '170px', height: '200px', opacity: 0.11 }}>
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
            <Shield className="h-10 w-10" />
            <h1 className="text-[32px] font-bold">
              Privacy Policy
            </h1>
          </div>
          <p className="text-[16px] text-white/90 max-w-2xl">
            Last updated: January 22, 2025
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-[16px] text-[#6b7280] mb-12">
            At GrowLeaf, your privacy and data security are our highest priorities. This Privacy Policy explains how we collect, use, protect, and handle your personal and financial information when you use our mobile budget management application. We are committed to transparency and giving you control over your data.
          </p>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="border-l-4 border-[#3b82f6] pl-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center flex-shrink-0">
                    <section.icon className="h-6 w-6 text-[#3b82f6]" />
                  </div>
                  <div>
                    <h2 className="text-[24px] font-medium text-[#111827] mb-3">
                      {section.title}
                    </h2>
                    <p className="text-[16px] text-[#6b7280] leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Sections */}
          <div className="mt-12 space-y-6">
            <div>
              <h3 className="text-[24px] font-medium text-[#111827] mb-3">
                Children's Privacy
              </h3>
              <p className="text-[16px] text-[#6b7280] leading-relaxed">
                GrowLeaf is not intended for users under 13 years of age. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us at privacy@growleaf.com and we will delete it immediately.
              </p>
            </div>

            <div>
              <h3 className="text-[24px] font-medium text-[#111827] mb-3">
                International Data Transfers
              </h3>
              <p className="text-[16px] text-[#6b7280] leading-relaxed">
                Your data may be processed in servers located in different countries where Firebase operates. We ensure all data transfers comply with GDPR, CCPA, and other applicable data protection regulations. Data transferred internationally receives the same level of protection as described in this policy.
              </p>
            </div>

            <div>
              <h3 className="text-[24px] font-medium text-[#111827] mb-3">
                Changes to This Privacy Policy
              </h3>
              <p className="text-[16px] text-[#6b7280] leading-relaxed">
                We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of material changes via in-app notification and email at least 30 days before they take effect. Your continued use of GrowLeaf after changes indicates acceptance of the updated policy.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16 bg-[#f9fafb] rounded-2xl p-8">
            <h3 className="text-[24px] font-medium text-[#111827] mb-4">
              Questions About Privacy?
            </h3>
            <p className="text-[16px] text-[#6b7280] mb-6">
              If you have questions or concerns about this Privacy Policy or how we handle your data, please contact our Privacy Team:
            </p>
            <div className="text-[16px] text-[#6b7280]">
              <p className="mb-2"><strong>Email:</strong> privacy@growleaf.com</p>
              <p className="mb-2"><strong>Support:</strong> support@growleaf.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
