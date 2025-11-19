import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Jane D.",
      initials: "JD",
      text: "GrowLeaf has completely changed how I manage my finances. Highly recommend!",
      rating: 5,
    },
    {
      name: "Mark T.",
      initials: "MT",
      text: "I love the savings challenges feature. It keeps me motivated to save!",
      rating: 5,
    },
    {
      name: "Sarah L.",
      initials: "SL",
      text: "The loan management system is a lifesaver. I always know what I owe and when.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-bold text-[#111827]">
            What Our Users Say
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-[#f9fafb] border-none shadow-sm">
              <CardContent className="pt-6">
                <div className="flex flex-col gap-4">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[#3b82f6] text-[#3b82f6]" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-[16px] text-[#6b7280]">
                    "{testimonial.text}"
                  </p>

                  {/* User Info */}
                  <div className="flex items-center gap-3 pt-2">
                    <Avatar className="h-10 w-10 bg-[#3b82f6]">
                      <AvatarFallback className="bg-[#3b82f6] text-white">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-[16px] font-medium text-[#111827]">
                        {testimonial.name}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}