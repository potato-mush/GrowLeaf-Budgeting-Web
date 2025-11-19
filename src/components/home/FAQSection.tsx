import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqs = [
  {
    question: "What is GrowLeaf and is it free?",
    answer: "GrowLeaf is a completely free mobile budget management app designed to help you take control of your personal finances. All features including transaction tracking, budget creation, savings challenges, loan management, and analytics are available at no cost. There are no hidden fees, premium plans, or in-app purchases.",
  },
  {
    question: "Is my financial data secure with GrowLeaf?",
    answer: "Absolutely. GrowLeaf uses bank-level security with phone-based authentication and a secure 4-6 digit PIN. All your data is encrypted both during transmission and when stored in our cloud (Firebase). We use military-grade 256-bit encryption, and your PIN is never stored in plain text. We never share or sell your data to third parties, and you maintain full control over your information.",
  },
  {
    question: "How does the phone number authentication work?",
    answer: "GrowLeaf uses your phone number as your unique identifier for enhanced security. When you sign up, we send a one-time password (OTP) via SMS to verify your number. After verification, you create a secure PIN (4-6 digits) for quick login. This two-factor approach ensures only you can access your account. You can reset your PIN anytime by receiving a new OTP.",
  },
  {
    question: "What platforms does GrowLeaf support?",
    answer: "GrowLeaf is available as a mobile app for both iOS (App Store) and Android (Google Play Store), built with React Native and Expo for optimal performance. We also offer a web version that syncs seamlessly with your mobile app. All your financial data synchronizes automatically across all devices in real-time, so you can manage your budget from anywhere.",
  },
  {
    question: "Can I track loans and manage lending/borrowing?",
    answer: "Yes! GrowLeaf includes comprehensive loan management features at no cost. You can track money you've lent to others and money you've borrowed, set payment schedules, monitor due dates, and receive reminders. Each loan entry includes details like amount, interest rate (if any), payment status, and notes. You can also mark loans as paid or settled directly from the loan detail screen.",
  },
  {
    question: "How do savings challenges work?",
    answer: "Savings challenges help you reach your financial goals with motivation and accountability. Create a challenge by setting a target amount and deadline (e.g., \"Save $5,000 for vacation by December\"). Track your progress with visual indicators, receive milestone notifications, and adjust your goals as needed. You can have multiple active challenges for different purposes like emergency funds, vacation, or major purchases.",
  },
  {
    question: "What types of notifications will I receive?",
    answer: "GrowLeaf sends smart notifications to keep you on track: transaction confirmations when you add income/expenses, budget alerts when approaching your spending limits, savings milestone celebrations, loan payment reminders, and helpful financial tips. You have full control over which notifications you receive through the app settings, and can enable/disable specific categories at any time.",
  },
  {
    question: "Can I use GrowLeaf offline?",
    answer: "Yes! GrowLeaf works offline, allowing you to add transactions, view your dashboard, and check budgets even without internet connection. Your data is stored locally on your device and automatically syncs with the cloud when you're back online. This ensures you never lose track of your finances, regardless of connectivity.",
  },
  {
    question: "How do I reset my PIN if I forget it?",
    answer: "If you forget your PIN, tap \"Forgot PIN?\" on the login screen. We'll send a verification code (OTP) to your registered phone number via SMS. After entering the OTP, you can create a new PIN. This process ensures security while allowing you to regain access to your account. Make sure you have access to the phone number registered with your account.",
  },
  {
    question: "Can I export my financial data?",
    answer: "Yes, you can export your transaction history, budgets, and financial reports as PDF files at any time at no cost. This is useful for tax preparation, sharing with accountants, or keeping personal records. Simply go to Settings > Data Export and choose the date range and data types you want to export.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-[#f9fafb]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[32px] font-bold text-[#111827] mb-4">Frequently Asked Questions</h2>
          <p className="text-[16px] text-[#6b7280]">
            Got questions? We've got answers. If you don't find what you're looking for, contact our support team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left text-[16px] text-[#111827] hover:text-[#3b82f6]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[16px] text-[#6b7280]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}