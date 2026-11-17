import {
  Apple, Baby, Blocks, BookOpen, Bus, GraduationCap, MonitorPlay, Palette, Smile, Snowflake, Sun, Users,
  type LucideProps,
} from "lucide-react";

const icons = { Apple, Baby, Blocks, BookOpen, Bus, GraduationCap, MonitorPlay, Palette, Smile, Snowflake, Sun, Users };

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const C = icons[name as keyof typeof icons] ?? Smile;
  return <C aria-hidden {...props} />;
}
