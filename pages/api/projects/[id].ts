import type { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';
import { runMiddleware } from 'utils/runMiddleware';

// Initialize the cors middleware
const cors = Cors({
  origin: 'https://joekooler.dev',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
});

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
    imageURLs: [
      'https://storage.googleapis.com/joe-port-bucket-1/292670856_5488351314550386_7274380543853968100_n.jpg',
      'https://storage.googleapis.com/joe-port-bucket-1/oic/294938648_5459680740774390_2341437719593130946_n.jpg',
      'https://storage.googleapis.com/joe-port-bucket-1/oic/292614109_2265730443566498_1366621928279282908_n.jpg',
      'https://storage.googleapis.com/joe-port-bucket-1/oic/Screenshot%202022-10-13%20125010.png',
      'https://storage.googleapis.com/joe-port-bucket-1/oic/unnamed%20(5).webp',
    ],
    startDate: '06/12/2022',
    description: `A play to earn A "Play to Learn" game that is both fun and improves players' knowledge about the real-world insurance system. Responsible for Store, Inventory, Mission, Quiz, Daily rewards, Tournament, and Friend list frontend modules using Unity C#`,
    techStacks: ['C#', 'Unity', 'UniRX', 'DoTween'],
  },
  {
    id: 'ttd',
    name: 'Thailand Tourism Directory',
    imageURLs: [
      'https://storage.googleapis.com/joe-port-bucket-1/ttd/unnamed%20(1).webp',
      'https://storage.googleapis.com/joe-port-bucket-1/ttd/unnamed%20(2).webp',
      'https://storage.googleapis.com/joe-port-bucket-1/ttd/unnamed%20(3).webp',
      'https://storage.googleapis.com/joe-port-bucket-1/ttd/unnamed%20(4).webp',
    ],
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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProjectDetails | { error: number }>
) {
  await runMiddleware(req, res, cors);

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
