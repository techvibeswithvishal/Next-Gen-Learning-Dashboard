export interface Course {
  id: string;
  title: string;
  progress: number;
  icon_name:
    | "Code2"
    | "Rocket"
    | "Brain"
    | "Database"
    | "BookOpen"
    | "Layers"
    | "BarChart3"
    | "Cpu";
  created_at: string;
}