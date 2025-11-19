import { Button } from "../ui/button";
import { Download, DollarSign, PiggyBank, CreditCard, TrendingUp, Wallet, Target, Receipt, CircleDollarSign } from "lucide-react";
import { motion } from "framer-motion";
import { getAssetPath } from "../../utils/assetPath";

export function HeroSection() {
  // Pop-up icons configuration - all behind phone with original positions
  const popUpIcons = [
    {
      icon: DollarSign,
      color: "#10b981",
      size: "large",
      position: { top: "10%", left: "5%" },
      delay: 0.5,
    },
    {
      icon: PiggyBank,
      color: "#f59e0b",
      size: "medium",
      position: { top: "15%", right: "8%" },
      delay: 0.7,
    },
    {
      icon: CreditCard,
      color: "#3b82f6",
      size: "small",
      position: { bottom: "25%", left: "0%" },
      delay: 0.9,
    },
    {
      icon: TrendingUp,
      color: "#8b5cf6",
      size: "large",
      position: { top: "45%", right: "5%" },
      delay: 1.1,
    },
    {
      icon: Wallet,
      color: "#ec4899",
      size: "medium",
      position: { bottom: "15%", right: "12%" },
      delay: 1.3,
    },
    {
      icon: Target,
      color: "#06b6d4",
      size: "small",
      position: { top: "60%", left: "8%" },
      delay: 1.5,
    },
    {
      icon: Receipt,
      color: "#f43f5e",
      size: "medium",
      position: { top: "30%", left: "15%" },
      delay: 1.7,
    },
    {
      icon: CircleDollarSign,
      color: "#14b8a6",
      size: "large",
      position: { bottom: "35%", right: "10%" },
      delay: 1.9,
    },
  ];

  const getSizeClasses = (size: string) => {
    const sizes = {
      small: "w-12 h-12",
      medium: "w-16 h-16",
      large: "w-20 h-20",
    };
    return sizes[size as keyof typeof sizes];
  };

  const getIconSize = (size: string) => {
    const sizes = {
      small: "h-5 w-5",
      medium: "h-7 w-7",
      large: "h-9 w-9",
    };
    return sizes[size as keyof typeof sizes];
  };

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Dot Pattern Background - Full Coverage */}
      <div className="absolute bottom-0 right-0 w-full h-full opacity-[0.06] pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, #00000011 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <h1 
              className="font-bold text-[#111827] leading-[1.1]"
              style={{ 
                fontSize: 'clamp(42px, 5vw, 72px)',
                lineHeight: '1.1',
                textTransform: 'capitalize',
                letterSpacing: '-0.02em',
              }}
            >
              Track your financial growth, one leaf at a time
            </h1>
            
            <p className="text-[24px] font-medium text-[#3b82f6]">
              Monitor your expenses, manage loans, and achieve your savings goals—all in one app.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="gap-2 bg-[#3b82f6] hover:bg-white/90 text-[#3b82f6] h-12">
                <Download className="h-5 w-5" />
                Download
              </Button>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex items-center justify-center h-[700px] overflow-visible">
            {/* Scattered Icons - All behind phone */}
            {popUpIcons.map((iconConfig, index) => {
              const Icon = iconConfig.icon;
              return (
                <motion.div
                  key={`icon-${index}`}
                  className={`absolute ${getSizeClasses(iconConfig.size)} rounded-full flex items-center justify-center shadow-lg`}
                  style={{
                    backgroundColor: `${iconConfig.color}20`,
                    border: `2px solid ${iconConfig.color}`,
                    zIndex: 5,
                    ...iconConfig.position,
                  }}
                  initial={{
                    x: "0%",
                    y: "0%",
                    scale: 0,
                    opacity: 0,
                  }}
                  animate={{
                    x: "0%",
                    y: "0%",
                    scale: 1,
                    opacity: 0.8,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: iconConfig.delay,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                >
                  <Icon className={getIconSize(iconConfig.size)} style={{ color: iconConfig.color }} />
                </motion.div>
              );
            })}

            {/* Phone Mockup */}
            <div className="transform hover:scale-105 transition-transform duration-300 relative z-10">
              <div className="relative w-[280px] sm:w-[320px]">
                <div className="absolute inset-0 bg-[#3b82f6]/20 blur-3xl translate-y-8"></div>
                <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-3xl z-10"></div>
                  <div className="relative bg-white rounded-[2.5rem] overflow-hidden">
                    <img
                      src={getAssetPath('market.gif')}
                      alt="GrowLeaf Dashboard"
                      className="w-full h-[580px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  </div>
                  <div className="absolute -right-1 top-32 w-1 h-14 bg-gray-800 rounded-l"></div>
                  <div className="absolute -right-1 top-48 w-1 h-16 bg-gray-800 rounded-l"></div>
                  <div className="absolute -left-1 top-36 w-1 h-10 bg-gray-800 rounded-r"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Wave SVG at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        
        <svg
          className="relative block"
          style={{ 
            width: '300%', 
            height: '400px', 
            marginLeft: '-100%', 
            zIndex: 1,
            filter: 'drop-shadow(0 -4px 18px rgba(59, 130, 246,0.3))'
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="wave-path"
              d="M0,40 C200,100 400,0 600,40 C800,80 1000,0 1200,40 L1200,120 L0,120 Z"
            />
          </defs>
          <g>
            <use
              href="#wave-path"
              className="wave wave-1"
              fill="rgba(255,255,255,0.7)"
            />
            <use
              href="#wave-path"
              className="wave wave-2"
              fill="rgba(255,255,255,0.5)"
            />
            <use
              href="#wave-path"
              className="wave wave-3"
              fill="rgba(255,255,255,0.3)"
            />
            <use
              href="#wave-path"
              className="wave wave-4"
              fill="rgba(255,255,255,1)"
            />
          </g>
        </svg>
      </div>
    </section>
  );
}
