import { Github, Linkedin, Mail } from "lucide-react";
import { LeetCodeIcon } from "./LeetCodeIcon";

export { LeetCodeIcon };

export const socialIconMap: Record<string, React.ElementType> = {
  Github,
  Linkedin,
  Mail,
  Leetcode: LeetCodeIcon,
};
