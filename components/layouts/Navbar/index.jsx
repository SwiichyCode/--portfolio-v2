import Link from "next/link";
import * as S from "./styles";

export const Navbar = () => {
  const items = [
    { text: "About", url: "/about" },
    { text: "Projects", url: "" },
    { text: "Contact", url: "" },
    { text: "Skills", url: "" },
    { text: "Blog", url: "" },
    { text: "Resume", url: "" },
  ];

  return (
    <S.Navigation>
      <S.List>
        {items.map((item, index) => (
          <S.ItemList key={index}>
            <Link href={item.url}>{item.text}</Link>
          </S.ItemList>
        ))}
      </S.List>
    </S.Navigation>
  );
};
