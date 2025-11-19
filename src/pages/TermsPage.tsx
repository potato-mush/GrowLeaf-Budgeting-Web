import { ArrowLeft, FileText, CheckCircle, XCircle, AlertTriangle, Scale, UserX } from "lucide-react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { getAssetPath } from "../utils/assetPath";

export function TermsPage() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/#support");
  };

  const sections = [
    {
      icon: CheckCircle,
      title: "Acceptance of Terms",
      content: "By downloading, installing, or using GrowLeaf, you agree to these Terms and Conditions. These terms constitute a legally binding agreement between you and GrowLeaf Inc. If you do not agree to these terms, you may not use our mobile budget management application or related services."
    },
    {
      icon: UserX,
      title: "Account Registration & Eligibility",
      content: "You must be at least 13 years old to use GrowLeaf. Account registration requires a valid phone number capable of receiving SMS messages. You are responsible for maintaining the confidentiality of your PIN and any activities under your account. You must notify us immediately of any unauthorized access. One phone number may only be associated with one active account."
    },
    {
      icon: Scale,
      title: "PIN Security & Authentication",
      content: "You agree to create a secure 4-6 digit PIN and keep it confidential. Never share your PIN with anyone. You are solely responsible for all account activity conducted with your PIN. GrowLeaf is not liable for unauthorized access resulting from PIN disclosure. You must use the official PIN reset process via OTP verification if you forget your PIN."
    },
    {
      icon: Scale,
      title: "Acceptable Use Policy",
      content: "You agree to use GrowLeaf only for lawful personal financial management purposes. Prohibited activities include: sharing accounts, attempting to hack or reverse engineer the app, using automated systems to access the service, inputting false or misleading financial data intentionally, violating any applicable laws or regulations, or interfering with other users' access to the service."
    },
    {
      icon: AlertTriangle,
      title: "Financial Information Disclaimer",
      content: "GrowLeaf is a budgeting tool and does NOT provide financial advice, investment recommendations, or professional financial planning services. All financial decisions are your sole responsibility. The analytics and insights provided are for informational purposes only. We make no guarantees about financial outcomes. Consult qualified financial professionals for personalized advice."
    },
    {
      icon: XCircle,
      title: "Limitation of Liability",
      content: "GrowLeaf is provided 'as is' and 'as available' without warranties of any kind. We do not guarantee uninterrupted service, error-free operation, or accurate financial calculations. In no event shall GrowLeaf Inc. be liable for any indirect, incidental, special, consequential, or punitive damages including loss of profits, data, or financial losses resulting from app use or inability to use the service."
    },
    {
      icon: FileText,
      title: "Service Modifications & Updates",
      content: "We reserve the right to modify, suspend, or discontinue any aspect of GrowLeaf at any time with or without notice. This includes features, functionality, and pricing. App updates may be required for continued use. We may also impose limits on certain features or restrict access to parts of the service. Material changes will be communicated via in-app notifications."
    },
    {
      icon: FileText,
      title: "Data Ownership & Responsibility",
      content: "You retain ownership of all financial data you input into GrowLeaf. However, you grant us license to use, store, and process this data to provide services. You are responsible for the accuracy of your financial data. We are not responsible for errors in budgets, calculations, or reports resulting from incorrect user input. You should regularly backup or export your data."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#3b82f6] text-white py-16 relative overflow-hidden">
        {/* Scattered Dot Patterns - 5 fully framed patterns, positioned to avoid collision */}
        <div className="absolute" style={{ top: '-15%', right: '2%', width: '200px', height: '230px', opacity: 0.12 }}>
          <img src={getAssetPath('dot.png')} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute" style={{ bottom: '-20%', left: '5%', width: '180px', height: '210px', opacity: 0.1 }}>
          <img src={getAssetPath('dot.png')} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute" style={{ top: '8%', left: '38%', width: '160px', height: '190px', opacity: 0.08 }}>
          <img src={getAssetPath('dot.png')} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute" style={{ bottom: '5%', right: '42%', width: '190px', height: '220px', opacity: 0.09 }}>
          <img src={getAssetPath('dot.png')} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute" style={{ top: '45%', left: '72%', width: '170px', height: '200px', opacity: 0.11 }}>
          <img src={getAssetPath('dot.png')} alt="" className="w-full h-full object-contain" />
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
            <FileText className="h-10 w-10" />
            <h1 className="text-[32px] font-bold">
              Terms & Conditions
            </h1>
          </div>
          <p className="text-[16px] text-white/90 max-w-2xl">
            Last updated: January 22, 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-[16px] text-[#6b7280] mb-12">
            Please read these Terms and Conditions carefully before using GrowLeaf. These Terms govern your use of our mobile budget management application and constitute a legally binding agreement between you and GrowLeaf Inc. By using GrowLeaf, you acknowledge that you have read, understood, and agree to be bound by these Terms.
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

          {/* Additional Terms */}
          <div className="mt-12 space-y-6">
            <div>
              <h3 className="text-[24px] font-medium text-[#111827] mb-3">
                Free Service
              </h3>
              <p className="text-[16px] text-[#6b7280] leading-relaxed">
                GrowLeaf is provided completely free of charge. All features including transaction tracking, budget management, savings challenges, loan tracking, analytics, and data export are available at no cost. There are no subscription fees, premium plans, hidden charges, or in-app purchases. We are committed to keeping GrowLeaf free and accessible to everyone.
              </p>
            </div>

            <div>
              <h3 className="text-[24px] font-medium text-[#111827] mb-3">
                Intellectual Property Rights
              </h3>
              <p className="text-[16px] text-[#6b7280] leading-relaxed">
                GrowLeaf, including the mobile application, web platform, design, features, source code, and documentation are owned by GrowLeaf Inc. and protected by copyright, trademark, patent, and trade secret laws. You are granted a limited, non-exclusive, non-transferable license to use the app for personal budgeting purposes. You may not copy, modify, distribute, reverse engineer, or create derivative works from GrowLeaf.
              </p>
            </div>

            <div>
              <h3 className="text-[24px] font-medium text-[#111827] mb-3">
                Termination & Account Deletion
              </h3>
              <p className="text-[16px] text-[#6b7280] leading-relaxed">
                You may delete your account at any time through Settings {'>'} Account {'>'} Delete Account. We may suspend or terminate your account immediately if you violate these Terms, engage in fraudulent activity, or for any reason at our sole discretion. Upon termination, your data will be permanently deleted within 90 days unless retention is required by law. You will lose access to all budgets, transactions, and financial data.
              </p>
            </div>

            <div>
              <h3 className="text-[24px] font-medium text-[#111827] mb-3">
                Governing Law & Dispute Resolution
              </h3>
              <p className="text-[16px] text-[#6b7280] leading-relaxed">
                These Terms are governed by the laws of the State of California, USA, without regard to conflict of law principles. Any disputes shall first be attempted to be resolved through good faith negotiation. If unresolved, disputes will be settled through binding arbitration in San Francisco, California, except where prohibited by law. You waive the right to participate in class action lawsuits.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16 bg-[#f9fafb] rounded-2xl p-8">
            <h3 className="text-[24px] font-medium text-[#111827] mb-4">
              Questions About Our Terms?
            </h3>
            <p className="text-[16px] text-[#6b7280] mb-6">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <div className="text-[16px] text-[#6b7280]">
              <p className="mb-2"><strong>Email:</strong> legal@growleaf.com</p>
              <p className="mb-2"><strong>Support:</strong> support@growleaf.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
