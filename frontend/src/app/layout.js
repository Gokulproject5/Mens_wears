import { Bowlby_One_SC, Bricolage_Grotesque, Caveat ,Varela_Round } from "next/font/google";
import "./globals.css";

const caveatSan = Varela_Round({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: "400",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: "400",
});

const bowlyOne = Bowlby_One_SC({
  variable:"--font-bowly",
  subsets:["latin"],
  weight:"400"
})

export const metadata = {
  title: "Goxz Wears",
  description: "Goxz wears is premium wears",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${caveatSan.variable} ${bricolage.variable} ${bowlyOne.variable} h-full bg-black antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
