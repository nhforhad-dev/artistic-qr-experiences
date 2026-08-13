import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/aq/site-header";
import { Hero } from "@/components/aq/hero";
import { DynamicDemo } from "@/components/aq/dynamic-demo";
import { Pillars } from "@/components/aq/pillars";
import { Creator } from "@/components/aq/creator";
import { Experiences } from "@/components/aq/experiences";
import { Validation } from "@/components/aq/validation";
import { Dashboard } from "@/components/aq/dashboard";
import { Analytics } from "@/components/aq/analytics";
import { Pricing } from "@/components/aq/pricing";
import { Trust } from "@/components/aq/trust";
import { FAQ } from "@/components/aq/faq";
import { FinalCTA } from "@/components/aq/final-cta";
import { SiteFooter } from "@/components/aq/site-footer";
import { Gloop } from "@/components/aq/gloop";

const TITLE = "Artistic QR — Branded QR codes with dynamic destinations";
const DESCRIPTION =
  "Create artistic QR codes from your logo or idea, connect them to dynamic destinations you can update without reprinting, and measure every scan from one dashboard.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <DynamicDemo />
        <Pillars />
        <Creator />
        <Experiences />
        <Validation />
        <Dashboard />
        <Analytics />
        <Pricing />
        <Trust />
        <FAQ />
        <FinalCTA />
      </main>
      <SiteFooter />
      <Gloop />
    </div>
  );
}
