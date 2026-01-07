import Preloader from "@/components/ui/preloader";
import "./global.css"
import BootstrapForBrowser from "@/components/ui/bootstrapForBrowser";
import BackgroundWaves from "@/components/ui/backgroundWaves";
import Header from "@/components/sections/header";
import CallToAction from "@/components/sections/callToAction";
import Footer from "@/components/sections/footer";

export const metadata = {
  title: "Danny Portal - Personal Portfolio",
  description: "Danny Portal - Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <BootstrapForBrowser />
        <Preloader />
        <BackgroundWaves />
        <Header />
        {children}
        <CallToAction />
        <Footer />
      </body>
    </html>
  );
}
