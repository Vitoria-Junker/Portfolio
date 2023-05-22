import { useSession } from "next-auth/react";

export const useUserSession = () => {
  const { data: session } = useSession();
  return session;
};

export const isMyEmail = (userEmail) => {
  return userEmail === "vickjunker14@gmail.com";
};