import { Smartphone, Shield, Zap, BarChart3, ArrowRight, Check } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: Smartphone,
      title: "Sign Up with Your Phone Number",
      description: "Enter your phone number and verify it with an OTP.",
      step: "01",
      color: "#3b82f6",
      features: ["Quick verification", "Secure process", "No email required"],
    },
    {
      icon: Shield,
      title: "Set Up Your PIN",
      description: "Secure your account with a 4-digit PIN.",
      step: "02",
      color: "#8b5cf6",
      features: ["4-digit PIN", "Biometric support", "Enhanced security"],
    },
    {
      icon: Zap,
      title: "Start Tracking",
      description: "Log transactions, manage loans, and set savings goals.",
      step: "03",
      color: "#10b981",
      features: ["Track expenses", "Manage loans", "Set goals"],
    },
    {
      icon: BarChart3,
      title: "Gain Insights",
      description: "View analytics and track your financial progress.",
      step: "04",
      color: "#f59e0b",
      features: ["Visual charts", "Spending patterns", "Progress tracking"],
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#3b82f6]/10 rounded-full mb-4">
            <span className="text-[14px] font-medium text-[#3b82f6]">SIMPLE PROCESS</span>
          </div>
          <h2 className="text-[32px] font-bold text-[#111827] mb-4">
            How It Works
          </h2>
          <p className="text-[16px] text-[#6b7280] max-w-2xl mx-auto">
            Get started with GrowLeaf in four simple steps and take control of your finances today.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Curved Connection Line for Desktop */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-1">
            <svg className="w-full h-32" viewBox="0 0 1200 128" preserveAspectRatio="none">
              <path
                d="M0,64 Q300,0 600,64 T1200,64"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeDasharray="8,8"
                opacity="0.3"
              />
            </svg>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Arrow Connector for Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-32 -right-4 z-20">
                    <ArrowRight className="h-8 w-8 text-[#3b82f6]/40" />
                  </div>
                )}

                <div className="relative bg-[#f9fafb] rounded-2xl p-6 h-full border-2 border-transparent group-hover:border-[#3b82f6]/30 transition-all duration-300 group-hover:shadow-xl">
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-white border-2 border-[#3b82f6] flex items-center justify-center shadow-lg">
                    <span className="text-[18px] font-bold text-[#3b82f6]">{step.step}</span>
                  </div>

                  {/* Icon with Gradient Background */}
                  <div className="relative mb-6">
                    <div 
                      className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: step.color }}
                    >
                      <step.icon className="h-10 w-10 text-white" />
                    </div>
                    {/* Decorative dots */}
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full" style={{ backgroundColor: step.color, opacity: 0.4 }}></div>
                    <div className="absolute -top-1 -left-1 w-3 h-3 rounded-full" style={{ backgroundColor: step.color, opacity: 0.3 }}></div>
                  </div>

                  {/* Content */}
                  <div className="mb-4">
                    <h3 className="text-[20px] font-medium text-[#111827] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[14px] text-[#6b7280]">
                      {step.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 pt-4 border-t border-gray-200">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div 
                          className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: step.color, opacity: 0.2 }}
                        >
                          <Check className="h-3 w-3" style={{ color: step.color }} />
                        </div>
                        <span className="text-[12px] text-[#6b7280]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
              <span className="text-[16px] font-medium">Ready to get started?</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}