import { NavBar } from "@/components";
import { inter } from "@/utils/fonts";
import Head from "next/head";

interface GeneralLayoutProps {
  children: React.ReactNode;
}

export function GeneralLayout({children}: GeneralLayoutProps) {
  return (
    <div className={`wrapper lg:h-screen flex flex-col items-stretch justify-start gap-4 pb-4 ${inter.className}`}>
      <Head>
        <title>Spotta</title>
      </Head>
      <NavBar />
      {children}
    </div>
  )
}