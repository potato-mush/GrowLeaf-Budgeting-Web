import { ArrowLeft, Search, HelpCircle, FileText, MessageCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Article descriptions
const articleDescriptions: { [key: string]: string } = {
  "Downloading and installing GrowLeaf": "Learn how to download GrowLeaf from the App Store (iOS) or Google Play Store (Android). Follow our step-by-step installation guide to get started quickly and securely on your mobile device.",
  "Creating your account with phone verification": "Set up your GrowLeaf account using your phone number. We'll send you a one-time password (OTP) via SMS to verify your identity and ensure your account security.",
  "Setting up your secure PIN (4-6 digits)": "Create a strong 4-6 digit PIN to protect your financial data. This PIN will be used for quick login and securing sensitive operations within the app.",
  "Understanding the dashboard layout": "Get familiar with GrowLeaf's intuitive dashboard. Learn where to find your budget overview, recent transactions, savings progress, and quick action buttons.",
  "Adding your first transaction": "Record your first income or expense transaction. Learn how to categorize transactions, add notes, and attach receipts for better financial tracking.",
  "Creating your initial budget": "Set up your first budget by allocating amounts to different spending categories. Follow the 50/30/20 rule or create a custom budget that works for your lifestyle.",

  "Creating category-based budgets": "Organize your spending with custom categories like groceries, transportation, entertainment, and more. Set monthly limits for each category to stay on track.",
  "Setting and tracking budget goals": "Define specific financial goals with target amounts and deadlines. Track your progress with visual indicators and receive notifications as you approach your goals.",
  "Adding income and expense transactions": "Log all your financial activities quickly. Use smart categorization, recurring transaction templates, and bulk import features for efficient tracking.",
  "Creating savings challenges": "Challenge yourself to save more! Create goals like \"Save $5,000 for vacation\" with deadlines and milestones. Track progress and celebrate achievements.",
  "Tracking your savings progress": "Monitor your savings with real-time charts and progress bars. See how close you are to reaching each goal and adjust your saving strategy accordingly.",
  "Understanding budget summaries and charts": "Visualize your spending patterns with interactive charts. Analyze monthly trends, category breakdowns, and compare actual spending vs. budgeted amounts.",

  "Creating loan records for lending": "Track money you've lent to friends or family. Record the amount, borrower details, interest rate (if any), and expected repayment date.",
  "Tracking money you've borrowed": "Keep track of debts you owe. Set up payment schedules, get reminders for due dates, and monitor how much you've paid versus what remains.",
  "Setting payment schedules and reminders": "Never miss a loan payment! Set up automatic reminders for upcoming due dates and create payment schedules to stay organized.",
  "Marking loans as paid or settled": "Easily update loan status when payments are made or loans are fully settled. Keep accurate records of all financial obligations.",
  "Editing loan details and amounts": "Update loan information as circumstances change. Modify amounts, due dates, interest rates, or add notes to existing loan records.",
  "Managing multiple loans efficiently": "View all your loans (borrowed and lent) in one place. Sort by due date, amount, or status to prioritize repayments and collections.",

  "How phone authentication keeps you safe": "Your phone number serves as your unique identifier with two-factor authentication (OTP + PIN) providing bank-level security for your account.",
  "Setting a strong PIN": "Choose a PIN that's easy for you to remember but hard for others to guess. Avoid obvious combinations like 1234 or your birth year.",
  "Resetting your forgotten PIN": "If you forget your PIN, use the 'Forgot PIN?' option to receive an OTP via SMS. After verification, you can create a new secure PIN.",
  "Understanding data encryption": "All your financial data is encrypted with military-grade 256-bit encryption both during transmission and when stored on our secure servers.",
  "Managing your privacy settings": "Control what data is collected, how it's used, and manage notification preferences. Review and update your privacy settings anytime in the app.",
  "Account security best practices": "Learn essential security tips: never share your PIN, enable biometric authentication, regularly update the app, and review account activity periodically.",

  "Navigating the app (iOS & Android)": "Master GrowLeaf's navigation with bottom tabs for quick access to Dashboard, Transactions, Analytics, and Settings. Swipe gestures for faster actions.",
  "Using offline mode effectively": "Add transactions, view budgets, and check loan status even without internet. All changes sync automatically when you're back online.",
  "Syncing data across devices": "Your financial data syncs in real-time across all your devices (phone, tablet, web). Changes made on one device appear instantly on others.",
  "Understanding app permissions": "GrowLeaf requests only essential permissions: SMS (for OTP), Notifications (for alerts), and Storage (for data backup). You control all permissions.",
  "Customizing currency settings": "Set your preferred currency from 150+ options. All financial data displays in your chosen currency with automatic conversion support.",
  "App performance and battery tips": "Optimize GrowLeaf's performance by enabling background sync wisely, clearing cache periodically, and updating to the latest version for improvements.",

  "Updating your phone number": "Change your registered phone number through Settings > Account > Phone Number. You'll receive OTP verification on both old and new numbers.",
  "Changing your PIN": "Update your PIN anytime for security. Go to Settings > Security > Change PIN. You'll need to enter your current PIN before setting a new one.",
  "Managing custom categories": "Create, edit, or delete custom transaction categories to match your spending habits. Assign colors and icons for easy visual identification.",
  "Exporting data to PDF": "Generate detailed financial reports in PDF format. Choose date ranges, select data types (transactions, budgets, loans), and download for tax prep or record-keeping.",
  "Customizing app settings": "Personalize GrowLeaf with theme options, language preferences, date formats, and default categories. Tailor the app to your needs.",
  "Deleting your account": "Permanently delete your account and all associated data through Settings > Account > Delete Account. This action cannot be undone.",

  "Setting up budget alert thresholds": "Get notified when you've spent 50%, 75%, or 90% of your category budget. Customize alert percentages for each spending category.",
  "Managing notification preferences": "Control which notifications you receive: transaction confirmations, budget alerts, loan reminders, savings milestones, or financial tips.",
  "Understanding notification types": "GrowLeaf sends 5 types of notifications: Transaction confirmations, Budget warnings, Savings celebrations, Loan reminders, and Financial advice.",
  "Setting loan payment reminders": "Configure automatic reminders 7 days, 3 days, and 1 day before loan payments are due. Choose notification times that work for you.",
  "Customizing alert frequency": "Decide how often you want to receive notifications: Real-time, Daily summary, Weekly digest, or turn off non-critical alerts completely.",
  "Troubleshooting notification issues": "If notifications aren't working, check: App permissions, phone's Do Not Disturb mode, battery optimization settings, and app notification settings.",

  "OTP not received - resend options": "If you don't receive OTP within 60 seconds, tap 'Resend OTP'. Check if your phone can receive SMS and has good signal strength.",
  "Fixing login and PIN issues": "Can't log in? Ensure you're using the correct phone number and PIN. Use 'Forgot PIN?' to reset. Clear app cache if issues persist.",
  "Resolving app crashes or freezes": "Force close the app, clear cache (Settings > Storage), ensure you have the latest version, and restart your device. Contact support if problems continue.",
  "Troubleshooting data sync errors": "Check your internet connection, ensure you're logged in, and manually trigger sync from Settings > Sync Now. Data syncs automatically when online.",
  "Clearing cache and app data": "Free up space and resolve issues by clearing app cache: Go to phone Settings > Apps > GrowLeaf > Storage > Clear Cache.",
  "Reporting bugs and requesting features": "Found a bug? Request a feature? Use Settings > Help & Feedback > Report Issue. Include screenshots and detailed descriptions for faster resolution.",
};

export function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/#support");
  };

  const helpCategories = [
    {
      icon: HelpCircle,
      title: "Getting Started",
      color: "#3b82f6",
      articles: [
        "Downloading and installing GrowLeaf",
        "Creating your account with phone verification",
        "Setting up your secure PIN (4-6 digits)",
        "Understanding the dashboard layout",
        "Adding your first transaction",
        "Creating your initial budget",
      ],
    },
    {
      icon: HelpCircle,
      title: "Budgeting & Goals",
      color: "#10b981",
      articles: [
        "Creating category-based budgets",
        "Setting and tracking budget goals",
        "Adding income and expense transactions",
        "Creating savings challenges",
        "Tracking your savings progress",
        "Understanding budget summaries and charts",
      ],
    },
    {
      icon: HelpCircle,
      title: "Loans & Lending",
      color: "#8b5cf6",
      articles: [
        "Creating loan records for lending",
        "Tracking money you've borrowed",
        "Setting payment schedules and reminders",
        "Marking loans as paid or settled",
        "Editing loan details and amounts",
        "Managing multiple loans efficiently",
      ],
    },
    {
      icon: HelpCircle,
      title: "Security & Privacy",
      color: "#ef4444",
      articles: [
        "How phone authentication keeps you safe",
        "Setting a strong PIN",
        "Resetting your forgotten PIN",
        "Understanding data encryption",
        "Managing your privacy settings",
        "Account security best practices",
      ],
    },
    {
      icon: HelpCircle,
      title: "Mobile App Features",
      color: "#f59e0b",
      articles: [
        "Navigating the app (iOS & Android)",
        "Using offline mode effectively",
        "Syncing data across devices",
        "Understanding app permissions",
        "Customizing currency settings",
        "App performance and battery tips",
      ],
    },
    {
      icon: HelpCircle,
      title: "Account Management",
      color: "#06b6d4",
      articles: [
        "Updating your phone number",
        "Changing your PIN",
        "Managing custom categories",
        "Exporting data to PDF",
        "Customizing app settings",
        "Deleting your account",
      ],
    },
    {
      icon: HelpCircle,
      title: "Notifications & Alerts",
      color: "#ec4899",
      articles: [
        "Setting up budget alert thresholds",
        "Managing notification preferences",
        "Understanding notification types",
        "Setting loan payment reminders",
        "Customizing alert frequency",
        "Troubleshooting notification issues",
      ],
    },
    {
      icon: HelpCircle,
      title: "Technical Support",
      color: "#6b7280",
      articles: [
        "OTP not received - resend options",
        "Fixing login and PIN issues",
        "Resolving app crashes or freezes",
        "Troubleshooting data sync errors",
        "Clearing cache and app data",
        "Reporting bugs and requesting features",
      ],
    },
  ];

  const filteredCategories = helpCategories
    .map((category) => ({
      ...category,
      articles: category.articles.filter((article) =>
        article.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter(
      (category) =>
        category.articles.length > 0 ||
        category.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const handleArticleClick = (article: string) => {
    setSelectedArticle(article);
  };

  const closeModal = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#3b82f6] text-white py-16 relative overflow-hidden">
        {/* Dot Pattern Background - Full Coverage */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <div className="w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}></div>
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

          <h1 className="text-[32px] font-bold mb-4">
            How can we help you?
          </h1>
          <p className="text-[16px] text-white/90 mb-8 max-w-2xl">
            Search our help center or browse categories below to find answers to your questions
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for help articles..."
              className="pl-12 pr-4 py-6 text-[16px] bg-white text-gray-900 border-0"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Help Categories */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredCategories.map((category, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-2 border-gray-100 hover:border-[#3b82f6]">
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${category.color}20` }}
                >
                  <category.icon className="h-6 w-6" style={{ color: category.color }} />
                </div>
                <div>
                  <h3 className="text-[24px] font-medium text-[#111827]">
                    {category.title}
                  </h3>
                </div>
              </div>

              <ul className="space-y-3">
                {category.articles.map((article, articleIndex) => (
                  <li key={articleIndex}>
                    <Button
                      variant="ghost"
                      onClick={() => handleArticleClick(article)}
                      className="w-full justify-start text-left h-auto py-2 px-0 hover:bg-transparent hover:text-[#3b82f6] text-[14px] text-[#6b7280] hover:translate-x-1 transition-transform cursor-pointer"
                    >
                      <FileText className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span className="flex-1">{article}</span>
                    </Button>
                  </li>
                ))}
              </ul>
            </Card>
          ))}

          {filteredCategories.length === 0 && (
            <div className="col-span-full text-center py-16">
              <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-[24px] font-medium text-[#111827] mb-2">
                No results found
              </h3>
              <p className="text-[16px] text-[#6b7280]">
                Try searching with different keywords
              </p>
            </div>
          )}

          {/* Contact Support */}
          <div className="col-span-full mt-16 bg-[#f9fafb] rounded-2xl p-8 text-center">
            <MessageCircle className="h-12 w-12 text-[#3b82f6] mx-auto mb-4" />
            <h3 className="text-[24px] font-medium text-[#111827] mb-2">
              Still need help?
            </h3>
            <p className="text-[16px] text-[#6b7280] mb-6 max-w-xl mx-auto">
              Can't find what you're looking for? Our support team is ready to assist you.
            </p>
            <Button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white">
              <MessageCircle className="h-4 w-4 mr-2" />
              Contact Support
            </Button>
          </div>
        </div>
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[99999] flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={closeModal}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col animate-in slide-in-from-bottom duration-300"
            onClick={(e) => e.stopPropagation()}
            style={{ position: 'relative', zIndex: 100000 }}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 sm:p-6 flex items-start justify-between rounded-t-2xl flex-shrink-0">
              <div className="flex items-start gap-3 sm:gap-4 flex-1 pr-2">
                <div className="w-10 h-10 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-5 w-5 text-[#3b82f6]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[18px] sm:text-[22px] font-medium text-[#111827] leading-tight break-words">
                    {selectedArticle}
                  </h3>
                </div>
              </div>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="overflow-y-auto flex-1 p-4 sm:p-6">
              <p className="text-[15px] sm:text-[16px] text-[#6b7280] leading-relaxed">
                {articleDescriptions[selectedArticle] || "Detailed information about this topic is coming soon. Please check back later or contact our support team for immediate assistance."}
              </p>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-200 p-4 sm:p-6 flex-shrink-0">
              <Button 
                className="bg-[#3b82f6] hover:bg-[#2563eb] text-white w-full h-11"
                onClick={closeModal}
              >
                Got it, thanks!
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}