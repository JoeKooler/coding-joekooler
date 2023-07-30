import { NextApiRequest, NextApiResponse } from 'next';

const projects = [
  {
    id: 'oic',
    imageURL:
      'https://storage.googleapis.com/joe-port-bucket-1/292670856_5488351314550386_7274380543853968100_n.jpg',
    name: 'OIC',
    techStacks: ['C#', 'Unity', 'UniRX', 'DoTween'],
    description: `A play to earn A "Play to Learn" game that is both fun and improves players' knowledge about the real-world insurance system. Responsible for Store, Inventory, Mission, Quiz, Daily rewards, Tournament, and Friend list frontend modules using Unity C#`,
  },
  {
    id: 'ttd',
    imageURL: 'https://storage.googleapis.com/joe-port-bucket-1/TTD.webp',
    name: 'TTD',
    techStacks: [
      'React Native',
      'TypeScript',
      'Redux',
      'Redux Saga',
      'Styled Component',
    ],
    description:
      'An application for the Thailand Tourism Directory (Official department) using React Native with TypeScript deployed on both the App Store and Play Store',
  },
  {
    id: 'densoDocTag',
    imageURL:
      'https://storage.googleapis.com/joe-port-bucket-1/DensoDocTag.png',
    name: 'Document tagging',
    techStacks: ['NextJS', 'React', 'Zustand', 'Tailwind', 'Ant Design'],
    description:
      'A user-friendly frontend application using NextJS, Ant Design, and Tailwind for efficient document management at the Denso factory. Replacing manual document searches, the application greatly improved user experience and saved valuable time for workers',
  },
] satisfies ProjectHLDetail[];

export interface ProjectHLDetail {
  id: string;
  name: string;
  techStacks: string[];
  description: string;
  imageURL: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProjectHLDetail[] | { error: number }>
) {
  const { id } = req.query;
  console.log('Req ', req.query);

  if (!projects) {
    res.status(404).send({
      error: 404,
    });
    res.end();
    return;
  }
  res.json(projects);
  res.end();
}
