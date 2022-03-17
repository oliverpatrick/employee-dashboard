// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  holidaysTaken: string;
  holidayDays: string;
  daysAbsent: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res
    .status(200)
    .json({ holidaysTaken: 'John Doe', holidayDays: '', daysAbsent: '' });
}
