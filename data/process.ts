import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    step: "01",
    title: "Discovery",
    description:
      "We understand your brokerage workflows, pain points, and goals to identify where automation creates the most impact.",
    icon: "Search",
  },
  {
    id: 2,
    step: "02",
    title: "Automation Strategy",
    description:
      "We design AI systems around your existing operations, ensuring every automation aligns with how your team works.",
    icon: "Palette",
  },
  {
    id: 3,
    step: "03",
    title: "Implementation",
    description:
      "We deploy automation with minimal disruption, integrating seamlessly into your current tech stack.",
    icon: "Rocket",
  },
  {
    id: 4,
    step: "04",
    title: "Optimization",
    description:
      "We continuously improve workflows based on performance data to deliver better business outcomes over time.",
    icon: "BarChart",
  },
];
