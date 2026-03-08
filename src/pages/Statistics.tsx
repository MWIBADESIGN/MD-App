import { Users, FolderCheck, Calendar, Activity, ThumbsUp } from "lucide-react";
import StatCounter from "@/components/StatCounter";

const stats = [
  { icon: Users, label: "Happy Clients", target: 150, suffix: "+" },
  { icon: FolderCheck, label: "Completed Projects", target: 200, suffix: "+" },
  { icon: Calendar, label: "Years Experience", target: 5, suffix: "+" },
  { icon: Activity, label: "Active Projects", target: 12, suffix: "" },
  { icon: ThumbsUp, label: "Satisfaction Rate", target: 98, suffix: "%" },
];

const Statistics = () => {
  return (
    <div className="pb-20">
      <div className="gradient-hero px-5 pt-10 pb-6 rounded-b-3xl">
        <h1 className="text-xl font-extrabold text-primary-foreground mb-1">Our Statistics</h1>
        <p className="text-primary-foreground/70 text-sm">Numbers that speak for our quality</p>
      </div>

      <div className="px-5 mt-6 grid grid-cols-2 gap-3">
        {stats.map((stat, i) => (
          <StatCounter
            key={stat.label}
            icon={stat.icon}
            label={stat.label}
            target={stat.target}
            suffix={stat.suffix}
            delay={i * 200}
          />
        ))}
      </div>
    </div>
  );
};

export default Statistics;
