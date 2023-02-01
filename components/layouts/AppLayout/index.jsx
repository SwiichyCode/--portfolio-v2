import React from "react";
import useStore from "@/stores/GlobalStateStore";
import * as S from "./styles";

export const AppLayout = ({ children }) => {
  const backgroundState = useStore((state) => state.backgroundActive);

  return (
    <S.Container backgroundState={backgroundState}>{children}</S.Container>
  );
};
