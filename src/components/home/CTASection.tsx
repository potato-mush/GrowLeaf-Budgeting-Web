import { Button } from "../ui/button";
import { Download } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[32px] font-bold text-[#111827] mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          
          <p className="text-[24px] font-medium text-[#3b82f6] mb-8">
            Download GrowLeaf today and start your journey to financial freedom.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* TODO: Add Watch Demo button in the future */}
            {/* <Button size="lg" className="gap-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white h-12">
              <PlayCircle className="h-5 w-5" />
              Watch Demo
            </Button> */}
            <Button size="lg" className="gap-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white h-12">
              <Download className="h-5 w-5" />
              Download
            </Button>
          </div>

          {/* App Info */}
          <div className="flex gap-4 justify-center mt-8 opacity-50">
            <div className="text-[14px] text-[#6b7280]">
              Available for download
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}