import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Lightbulb, TrendingUp, PiggyBank } from "lucide-react";
import { ImageWithFallback } from "../shared/ImageWithFallback";

const tips = [
	{
		icon: PiggyBank,
		title: "Start with the 50/30/20 Rule",
		description:
			"Allocate 50% of your income to needs, 30% to wants, and 20% to savings and debt repayment. This simple framework helps maintain balance in your financial life.",
		category: "Budgeting Basics",
		image:
			"https://images.unsplash.com/photo-1691302174364-1958bc3d3ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWdneSUyMGJhbmslMjBzYXZpbmdzfGVufDF8fHx8MTc2MTExMjU0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
	},
	{
		icon: TrendingUp,
		title: "Set SMART Financial Goals",
		description:
			"Make your goals Specific, Measurable, Achievable, Relevant, and Time-bound. Instead of 'save more money,' try 'save $5,000 for an emergency fund by December.'",
		category: "Goal Setting",
		image:
			"https://images.unsplash.com/photo-1758691031730-640885ad19e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBnb2FscyUyMHBsYW5uaW5nfGVufDF8fHx8MTc2MTE1MTg5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
	},
	{
		icon: Lightbulb,
		title: "Review Your Budget Weekly",
		description:
			"Spend 15 minutes each week reviewing your expenses and adjusting categories as needed. Regular check-ins prevent overspending and keep you on track.",
		category: "Best Practices",
		image:
			"https://images.unsplash.com/photo-1758518727667-995863b2de71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWRnZXQlMjByZXZpZXclMjBwbGFubmluZ3xlbnwxfHx8fDE3NjExNTE4OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
	},
	{
		icon: PiggyBank,
		title: "Build an Emergency Fund First",
		description:
			"Before aggressive investing or paying off low-interest debt, save 3-6 months of expenses. This safety net protects you from unexpected financial shocks.",
		category: "Saving Strategy",
		image:
			"https://images.unsplash.com/photo-1586739050530-2fddeb1770d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjBmdW5kJTIwc2FmZXR5fGVufDF8fHx8MTc2MTE1MTg5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
	},
	{
		icon: TrendingUp,
		title: "Track Every Purchase for 30 Days",
		description:
			"Recording all expenses, even small ones, reveals spending patterns you didn't know existed. You'll be surprised where your money actually goes.",
		category: "Money Awareness",
		image:
			"https://images.unsplash.com/photo-1626207887298-da2fc1f50e82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleHBlbnNlJTIwdHJhY2tpbmclMjByZWNlaXB0fGVufDF8fHx8MTc2MTE1MTg5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
	},
	{
		icon: Lightbulb,
		title: "Automate Your Savings",
		description:
			"Set up automatic transfers to savings accounts right after payday. When you don't see the money, you won't miss it, and your savings grow effortlessly.",
		category: "Automation",
		image:
			"https://images.unsplash.com/photo-1603940516962-4976f0d44a19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aWMlMjBzYXZpbmdzJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjExNTE4OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
	},
];

const quickTips = [
	"Use cash for discretionary spending to avoid overspending",
	"Unsubscribe from marketing emails to reduce impulse purchases",
	"Compare prices before making large purchases",
	"Cook at home more often - it's healthier and cheaper",
	"Cancel unused subscriptions and memberships",
	"Use the 24-hour rule for non-essential purchases",
	"Take advantage of cashback and rewards programs",
	"Buy generic brands when quality is comparable",
];

export function TipsSection() {
	return (
		<section id="tips" className="py-20 bg-white">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<div className="flex items-center justify-center gap-3 mb-4">
						<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#3b82f6] text-white">
							<Lightbulb className="h-6 w-6" />
						</div>
						<h2 className="text-[32px] font-bold text-[#111827]">
							Financial Tips & Advice
						</h2>
					</div>
					<p className="text-[16px] text-[#6b7280]">
						Expert advice to help you make smarter financial decisions and build
						lasting wealth.
					</p>
				</div>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
					{tips.map((tip, index) => {
						const Icon = tip.icon;
						return (
							<Card
								key={index}
								className="border border-gray-200 transition-all hover:shadow-lg hover:border-[#3b82f6] overflow-hidden bg-white"
							>
								<div className="relative h-48 overflow-hidden">
									<ImageWithFallback
										src={tip.image}
										alt={tip.title}
										className="w-full h-full object-cover"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
									<div className="absolute top-4 right-4">
										<span className="text-[14px] bg-white/90 backdrop-blur px-3 py-1.5 rounded-full border border-gray-200 text-[#111827]">
											{tip.category}
										</span>
									</div>
									<div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#3b82f6] text-white shadow-lg">
										<Icon className="h-6 w-6" />
									</div>
								</div>
								<CardHeader>
									<CardTitle className="text-[24px] font-medium text-[#111827] mb-3">
										{tip.title}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<CardDescription className="text-[16px] text-[#6b7280]">
										{tip.description}
									</CardDescription>
								</CardContent>
							</Card>
						);
					})}
				</div>

				<div className="max-w-4xl mx-auto">
					<Card className="border border-gray-200 bg-[#f9fafb]">
						<CardHeader>
							<CardTitle className="text-[24px] font-medium text-[#111827] mb-3">
								Quick Money-Saving Tips
							</CardTitle>
							<CardDescription className="text-[16px] text-[#6b7280]">
								Small changes that add up to big savings over time
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="grid gap-3 sm:grid-cols-2">
								{quickTips.map((tip, index) => (
									<div key={index} className="flex items-start gap-2">
										<span className="text-[#3b82f6] mt-1 flex-shrink-0">💡</span>
										<span className="text-[14px] text-[#6b7280]">{tip}</span>
									</div>
								))}
							</div>
						</CardContent>
					</Card>

					<div className="mt-8 p-6 bg-[#3b82f6]/5 rounded-lg border-2 border-[#3b82f6]/20">
						<div className="flex items-start gap-4">
							<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#3b82f6] text-white flex-shrink-0">
								<Lightbulb className="h-5 w-5" />
							</div>
							<div>
								<h3 className="text-[24px] font-medium text-[#111827] mb-2">
									Pro Tip: Make Budgeting a Habit
								</h3>
								<p className="text-[16px] text-[#6b7280]">
									The key to successful budgeting isn't perfection—it's consistency.
									Even if you overspend one month, review what happened, adjust, and
									keep going. Financial wellness is a journey, not a destination.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}