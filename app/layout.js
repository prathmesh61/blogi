import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter, Outfit } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });
export const metadata = {
  title: "Blogi App",
  description: "Dev community blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className} suppressHydrationWarning={true}>
        <div className="bg-[#F6F4F0] ">
          <div className="max-w-screen-2xl mx-auto flex flex-col justify-between ">
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
