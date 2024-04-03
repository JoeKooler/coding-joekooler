import { ProjectHLDetail } from 'interfaces/projects/project';
import { NextApiRequest, NextApiResponse } from 'next';
import { projects } from './mockData';

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
