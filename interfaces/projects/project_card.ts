import { ReactNode } from 'react';

export interface ProjectCardProps {
  id: string;
  src?: string;
  name: string;
  description?: string;
  projectId?: number;
  techStacks?: string[];
  ImageCoverSlot?: ReactNode;
  focused?: boolean;
  onClick?: (id: string) => void;
}
