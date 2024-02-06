import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artigos",
};

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
