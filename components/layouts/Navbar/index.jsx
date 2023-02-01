import Link from "next/link";
import { motion } from "framer-motion";
import { GroupMotion, ItemMotion } from "./motion";
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
      <S.List
        as={motion.ul}
        variants={GroupMotion}
        initial="hidden"
        animate="visible"
      >
        {items.map((item, index) => (
          <S.ItemList as={motion.li} variants={ItemMotion} key={index}>
            <Link href={item.url}>{item.text}</Link>
          </S.ItemList>
        ))}
      </S.List>
    </S.Navigation>
  );
};
