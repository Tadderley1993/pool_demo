import { TopBar } from "@/components/shared/TopBar";
import { BottomNav } from "@/components/shared/BottomNav";

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopBar variant="portal" />
      <main className="pt-24 pb-28 md:pb-8 min-h-screen">{children}</main>
      <BottomNav />
    </>
  );
}
