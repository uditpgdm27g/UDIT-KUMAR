export interface AcademicQualification {
  degree: string;
  institution: string;
  score: string;
  year: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  iconName: string;
}

export interface Project {
  title: string;
  id: string;
  domain: 'Finance' | 'Analytics' | 'Fintech' | 'Operations' | 'AI-ML';
  period: string;
  summary: string;
  details: string[];
  techStack?: string[];
  link?: string;
  isPlaceholder?: boolean;
}

export interface CaseCompetition {
  title: string;
  organizer: string;
  team: string;
  rank: string;
  problem: string;
  solution: string;
  expectedOutcome: string[];
  metrics?: { label: string; value: string }[];
}

export interface Certification {
  name: string;
  issuer: string;
  duration?: string;
  year: string;
}

export interface AchievementItem {
  title: string;
  detail: string;
  year: string;
  category: 'award' | 'sport' | 'academic';
}

export interface LeadershipItem {
  role: string;
  organization: string;
  year: string;
  description?: string;
}
