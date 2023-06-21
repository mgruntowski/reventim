import { NextApiRequest, NextApiResponse } from "next";

import prisma from "lib/prisma";

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("req ->", req);

  try {
    const event = await prisma.event.findFirst({
      where: { eventId: req.query },
    });

    res.status(200).json(event);
  } catch (err) {
    res.json(err);
  }
};

export default handle;
