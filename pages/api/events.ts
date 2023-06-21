import { NextApiResponse } from "next";

import prisma from "lib/prisma";

const handle = async (_: never, res: NextApiResponse) => {
  try {
    const events = await prisma.event.findMany();

    res.status(200).json(events);
  } catch (err) {
    res.json(err);
  }
};

export default handle;
