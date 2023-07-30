import axiosInstance from 'lib/axios';
import { ProjectHLDetail } from 'pages/api/projects';
import { ProjectDetails } from 'pages/api/projects/[id]';

export const getProjects = () => {
  return axiosInstance.get<ProjectHLDetail[]>(`/projects/`);
};

export const getProjectFromId = (id: string) => {
  return axiosInstance.get<ProjectDetails>(`/projects/${id}`);
};
