import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    step: "01",
    title: "Discover",
    description:
      "We dive deep into your current workflows, pain points, and goals to identify where automation will have the biggest impact.",
    icon: "Search",
  },
  {
    id: 2,
    step: "02",
    title: "Design",
    description:
      "Our team designs custom AI automation blueprints tailored to your real estate operations and brand requirements.",
    icon: "Palette",
  },
  {
    id: 3,
    step: "03",
    title: "Deploy",
    description:
      "We build, test, and launch your AI systems with seamless integration into your existing tech stack.",
    icon: "Rocket",
  },
  {
    id: 4,
    step: "04",
    title: "Optimize",
    description:
      "Continuous monitoring, data analysis, and iteration ensure your automations perform better over time.",
    icon: "BarChart",
  },
];
