import type { NextApiRequest, NextApiResponse } from 'next';

export interface ProjectDetails {
  id: string;
  name: string;
  techStacks: string[];
  description: string;
  startDate: string;
  imageURLs: string[];
  githubHref?: string;
}

const projects = [
  {
    id: 'oic',
    name: 'OIC: A Play to Learn Game',
    imageURLs: [],
    startDate: '06/12/2022',
    description: `A play to earn A "Play to Learn" game that is both fun and improves players' knowledge about the real-world insurance system. Responsible for Store, Inventory, Mission, Quiz, Daily rewards, Tournament, and Friend list frontend modules using Unity C#`,
    techStacks: ['C#', 'Unity', 'UniRX', 'DoTween'],
  },
  {
    id: 'ttd',
    name: 'Thailand Tourism Directory',
    imageURLs: [],
    startDate: '',
    description:
      'An application for the Thailand Tourism Directory (Official department) using React Native with TypeScript deployed on both the App Store and Play Store',
    techStacks: [
      'React Native',
      'TypeScript',
      'Redux',
      'Redux Saga',
      'Styled Component',
    ],
  },
] satisfies ProjectDetails[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProjectDetails | { error: number }>
) {
  const { id } = req.query;
  console.log('Req ', req.query);

  const project = projects.find((project) => project.id === id);
  if (!project) {
    res.status(404).send({
      error: 404,
    });
    res.end();
    return;
  }
  res.json(project);
  res.end();
}
