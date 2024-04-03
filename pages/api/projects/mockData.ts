import { ProjectHLDetail } from 'interfaces/projects/project';

export const projects = [
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
  {
    id: 'densoFinalEnergyVisualizer',
    imageURL:
      'https://storage.googleapis.com/joe-port-bucket-1/denso-final-energy-visualizer/Screenshot%202024-04-03%20162703.png',
    name: 'Final Energy Visualizer',
    techStacks: ['NextJS', 'React', 'Zustand', 'Tailwind', 'Ant Design'],
    description:
      'A user-friendly frontend application using NextJS, Ant Design, and Tailwind for efficient document management at the Denso factory. Replacing manual document searches, the application greatly improved user experience and saved valuable time for workers',
  },
  {
    id: 'gosoftMig',
    name: 'GoSoft Project Migration',
    imageURL:
      'https://www.gosoft.co.th/wp-content/uploads/2019/01/cropped-LOGO-gosoft.png',
    description:
      'Remade and migrated an old Java servlet application for a client in one of the biggest retail industries in Thailand using React Micro frontend and NodeJS Express for the backend.',
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
    id: 'trinket',
    name: 'Trinket',
    imageURL:
      'https://storage.googleapis.com/joe-port-bucket-1/trinket/Alpha.png',
    description:
      'Trinket is the ultimate digital collectibles platform. Each Trinket is a verified collectible with a unique ID that you can show to your friends.',
    techStacks: [
      'React Native',
      'TypeScript',
      'Expo',
      'Recoil',
      'Tamagui',
      'NodeJS',
      'GCP',
    ],
  },
] satisfies ProjectHLDetail[];
