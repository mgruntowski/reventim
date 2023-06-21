import { Prisma } from "@prisma/client";
import { create } from "zustand";

interface UserState {
  user: Partial<Prisma.UserGetPayload<{ include: { tickets: true } }>>;
  setUser: (
    user: Partial<Prisma.UserGetPayload<{ include: { tickets: true } }>>
  ) => void;
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set(() => ({ user })),
}));

export default useUserStore;
