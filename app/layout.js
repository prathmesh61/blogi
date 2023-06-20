import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter, Outfit } from "next/font/google";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/Context/Context";

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
        <div className=" ">
          <div className="  ">
            <ThemeProvider>
              <div className="max-w-screen-2xl h-full mx-auto flex flex-col justify-between">
                <Navbar />
                {children}
              </div>
            </ThemeProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
