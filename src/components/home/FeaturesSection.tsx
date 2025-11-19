import { Receipt, Wallet, Target, TrendingUp, Lock } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Receipt,
      title: "Track Transactions",
      description: "Log your income and expenses with detailed notes and categories.",
      blob: "M50.5,-58.3C64.8,-49.8,75.3,-32.2,78.9,-13.3C82.5,5.6,79.2,25.8,68.9,40.8C58.6,55.8,41.3,65.6,23.3,69.8C5.3,74,-13.4,72.6,-29.8,65.3C-46.2,58,-60.3,44.8,-67.7,28.3C-75.1,11.8,-75.8,-7.9,-69.8,-24.3C-63.8,-40.7,-51.1,-53.8,-36.8,-62.1C-22.5,-70.4,-6.7,-73.9,8.3,-70.5C23.3,-67.1,36.2,-66.8,50.5,-58.3Z",
    },
    {
      icon: Wallet,
      title: "Manage Loans",
      description: "Keep track of loans with due dates, statuses, and settlement options.",
      blob: "M45.3,-52.8C57.7,-43.5,66.3,-28.3,69.4,-11.8C72.5,4.7,70.1,22.5,61.8,36.8C53.5,51.1,39.3,61.9,23.5,66.3C7.7,70.7,-9.7,68.7,-25.3,62.3C-40.9,55.9,-54.7,45.1,-62.3,30.8C-69.9,16.5,-71.3,-1.3,-66.7,-17.3C-62.1,-33.3,-51.5,-47.5,-38.2,-56.6C-24.9,-65.7,-8.9,-69.7,4.7,-75.2C18.3,-80.7,32.9,-62.1,45.3,-52.8Z",
    },
    {
      icon: Target,
      title: "Savings Challenges",
      description: "Set savings goals and monitor your progress.",
      blob: "M43.7,-54.9C56.2,-45.3,65.9,-31.2,69.3,-15.5C72.7,0.2,69.8,17.5,62.1,32.3C54.4,47.1,41.9,59.4,26.8,65.3C11.7,71.2,-5.9,70.7,-22.3,65.5C-38.7,60.3,-53.9,50.4,-62.8,36.2C-71.7,22,-74.3,3.6,-70.2,-12.9C-66.1,-29.4,-55.3,-44,-41.8,-53.4C-28.3,-62.8,-12.1,-67,2.9,-70.5C17.9,-74,31.2,-64.5,43.7,-54.9Z",
    },
    {
      icon: TrendingUp,
      title: "Analytics",
      description: "Gain insights into your spending habits with detailed charts.",
      blob: "M48.2,-59.7C60.8,-50.3,68.5,-33.5,71.4,-15.6C74.3,2.3,72.4,21.3,64.2,37.2C56,53.1,41.5,66,24.8,71.3C8.1,76.6,-10.8,74.3,-27.5,67.4C-44.2,60.5,-58.7,49,-66.8,33.8C-74.9,18.6,-76.6,-0.3,-71.9,-17.3C-67.2,-34.3,-56.1,-49.4,-42.1,-58.5C-28.1,-67.6,-12.1,-70.7,3.8,-75.2C19.7,-79.7,35.6,-69.1,48.2,-59.7Z",
    },
    {
      icon: Lock,
      title: "Secure Login",
      description: "Log in with your phone number and secure your account with a 4-digit PIN.",
      blob: "M41.3,-54.8C52.4,-44.2,59.3,-29.8,62.8,-14.2C66.3,1.4,66.4,18.2,59.9,31.8C53.4,45.4,40.3,55.8,25.7,61.9C11.1,68,-5,69.8,-20.3,66.2C-35.6,62.6,-50.1,53.6,-58.3,40.3C-66.5,27,-68.4,9.4,-65.8,-6.9C-63.2,-23.2,-56.1,-38.2,-44.8,-48.7C-33.5,-59.2,-18.2,-65.2,-1.8,-63C14.6,-60.8,30.2,-65.4,41.3,-54.8Z",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-bold text-[#111827] mb-4">
            Why Choose GrowLeaf?
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              {/* Blob Background */}
              <div className="absolute inset-0 flex items-center justify-center transform -translate-y-4">
                <svg viewBox="0 0 200 200" className="w-64 h-64 opacity-20 group-hover:opacity-30 transition-opacity">
                  <path
                    fill="#3b82f6"
                    d={feature.blob}
                    transform="translate(100 100)"
                  />
                </svg>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center px-6 py-8">
                <div className="relative w-16 h-16 mb-6">
                  {/* Main Circle */}
                  <div className="absolute inset-0 rounded-full bg-[#3b82f6] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  {/* Decorative Points */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#3b82f6] group-hover:scale-125 transition-transform"></div>
                  <div className="absolute top-2 -right-2 w-2 h-2 rounded-full bg-[#3b82f6]/60 group-hover:scale-125 transition-transform"></div>
                  <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 rounded-full bg-[#3b82f6] group-hover:scale-125 transition-transform"></div>
                  <div className="absolute bottom-3 -left-2 w-1.5 h-1.5 rounded-full bg-[#3b82f6]/60 group-hover:scale-125 transition-transform"></div>
                  <div className="absolute -top-2 left-3 w-2 h-2 rounded-full bg-[#3b82f6]/70 group-hover:scale-125 transition-transform"></div>
                  <div className="absolute -bottom-2 right-4 w-1.5 h-1.5 rounded-full bg-[#3b82f6]/70 group-hover:scale-125 transition-transform"></div>
                </div>
                <h3 className="text-[24px] font-medium text-[#111827] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[16px] text-[#6b7280] max-w-xs">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
