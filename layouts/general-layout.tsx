import { NavBar } from "@/components";

interface GeneralLayoutProps {
  children: React.ReactNode;
}

export function GeneralLayout({children}: GeneralLayoutProps) {
  return (
    <div className="lg:h-screen flex flex-col items-stretch gap-4 pb-4">
      <NavBar />
      {children}
    </div>
  )
}