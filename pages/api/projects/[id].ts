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
  {
    id: 'gosoftMig',
    name: 'GoSoft Project Migration',
    imageURLs: [
      'https://www.gosoft.co.th/wp-content/uploads/2019/01/cropped-LOGO-gosoft.png',
    ],
    description:
      'Remade and migrated an old Java servlet application for a client in one of the biggest retail industries in Thailand using React Micro frontend and NodeJS Express for the backend.',
    startDate: '02/2023',
    techStacks: [
      'React',
      'TypeScript',
      'Redux',
      'Ant Design',
      'Tailwind',
      'NodeJS',
      'AWS',
    ],
  },
  {
    id: 'densoDocTag',
    name: 'Document tagging',
    startDate: '01/2023',
    imageURLs: [
      'https://storage.googleapis.com/joe-port-bucket-1/DensoDocTag.png',
    ],
    description:
      'A user-friendly frontend application using NextJS, Ant Design, and Tailwind for efficient document management at the Denso factory. Replacing manual document searches, the application greatly improved user experience and saved valuable time for workers',
    techStacks: ['NextJS', 'React', 'Zustand', 'Tailwind', 'Ant Design'],
  },
  {
    id: 'densoFinalEnergyVisualizer',
    startDate: '08/23',
    imageURLs: [
      'https://storage.googleapis.com/joe-port-bucket-1/denso-final-energy-visualizer/Screenshot%202024-04-03%20162703.png',
      'https://storage.googleapis.com/joe-port-bucket-1/denso-final-energy-visualizer/Screenshot%202024-04-03%20162754.png',
      'https://storage.googleapis.com/joe-port-bucket-1/denso-final-energy-visualizer/Screenshot%202024-04-03%20162949.png',
    ],
    name: 'Final Energy Visualizer',
    techStacks: ['NextJS', 'React', 'Zustand', 'Tailwind', 'Ant Design'],
    description:
      'A user-friendly frontend application using NextJS, Ant Design, and Tailwind for efficient document management at the Denso factory. Replacing manual document searches, the application greatly improved user experience and saved valuable time for workers',
  },
  {
    id: 'trinket',
    name: 'Trinket',
    imageURLs: [
      'https://storage.googleapis.com/joe-port-bucket-1/trinket/Alpha.png',
      'https://storage.googleapis.com/joe-port-bucket-1/trinket/Alpha-1.png',
      'https://storage.googleapis.com/joe-port-bucket-1/trinket/Alpha-2.png',
      'https://storage.googleapis.com/joe-port-bucket-1/trinket/Alpha-3.png',
      'https://storage.googleapis.com/joe-port-bucket-1/trinket/Alpha-4.png',
    ],
    description:
      'Trinket is the ultimate digital collectibles platform. Each Trinket is a verified collectible with a unique ID that you can show to your friends.',
    startDate: '08/2023',
    techStacks: [
      'React Native',
      'TypeScript',
      'Expo',
      'Zustand',
      'Tamagui',
      'NodeJS',
      'GCP',
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
