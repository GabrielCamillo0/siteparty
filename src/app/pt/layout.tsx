import { HtmlLang } from "@/components/HtmlLang";

export default function PortugueseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HtmlLang lang="pt" />
      {children}
    </>
  );
}
