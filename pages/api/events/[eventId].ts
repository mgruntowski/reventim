import { NextApiRequest, NextApiResponse } from "next";

import prisma from "lib/prisma";

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const event = await prisma.event.findFirst({
      where: { eventId: req.query.eventId as string },
      include: {
        sections: true,
      },
    });

    res.status(200).json(event);
  } catch (err) {
    res.json(err);
  }
};

export default handle;
