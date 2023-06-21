import { NextApiRequest, NextApiResponse } from "next";

import prisma from "lib/prisma";

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findFirst({
      where: { email, password },
      include: {
        tickets: {
          include: {
            batch: {
              include: {
                section: {
                  include: {
                    event: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (user) {
      res.status(200).json(user);
    } else {
      res
        .status(401)
        .json({ message: "Cadastro inexistente, verifique seus dados." });
    }
  } catch (err) {
    res.json(err);
  }
};

export default handle;
