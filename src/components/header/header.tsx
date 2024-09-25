import style from "@/components/header/header-style.module.scss";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Header() {
  return (
    <nav className={style.nav}>
      <Image src={logo} alt="" />
      <h1 className={style.title}>Bem-vindo de volta, Marcos</h1>
      <span className={style.data}>Segunda, 01 de dezembro de 2025</span>
    </nav>
  );
}
