import React from 'react';
import ProjectCard from './project_card';

export default function ProjectCardMock() {
  const url =
    'https://storage.googleapis.com/joe-port-bucket-1/292670856_5488351314550386_7274380543853968100_n.jpg';
  const tags = ['C#', 'Unity', 'UniRX', 'DoTween'];
  const name = 'OIC';
  const description =
    'Lorem ipsum Lorem ipsum sdajkldsa jdsakl jaskl djaslkajsmlfkn lkan rwropq nowqin rwqoirnqw rikoqnroqw rikoqnroq wrikoqnroqw rikoqnroqwri koqnroqwrikoqn roqwrikoqnr oqwrikoqnroqwr ikoqnroqwrikoq nroqw';
  return (
    <ProjectCard
      src={url}
      techStacks={tags}
      name={name}
      description={description}
      id={name.toLowerCase()}
    />
  );
}
