import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, SectionHead } from "./primitives";

const QA = [
  {
    q: "What makes an Artistic QR different from a normal QR?",
    a: "A normal QR encodes a link. An Artistic QR carries your brand visually, points to a destination you control, and records what happens after the scan — so it becomes part of your marketing rather than a black square.",
  },
  {
    q: "Can I change the destination after printing my QR?",
    a: "Yes, on any dynamic QR. The printed code stays identical; you simply update the destination inside Artistic QR and every future scan goes to the new place. Every change is logged in the QR's history.",
  },
  {
    q: "Will artistic QR codes still scan?",
    a: "Every design runs through scan validation before publishing — structure, contrast and destination are checked, and you can test the code on your own phone before you activate it.",
  },
  {
    q: "Do I need a subscription?",
    a: "Only if you want ongoing management: multiple QR codes, editable destinations and analytics. If you just need one QR for a wedding, a song or a menu, choose a one-time experience instead.",
  },
  {
    q: "What is a dynamic QR code?",
    a: "A dynamic QR points to an Artistic QR redirect. When someone scans it, we record the scan, check the current destination and forward them there — which is why the destination can change without reprinting.",
  },
  {
    q: "Can I use Artistic QR for events?",
    a: "Yes. Event, gift and personal QRs are available as one-time experiences, including audio and video, with a defined hosting period so nothing disappears mid-campaign.",
  },
  {
    q: "Can I see how many people scanned my QR?",
    a: "Yes. You get total and unique scans, trends over time, devices, broad location data where legally appropriate, and click engagement inside multi-link experiences.",
  },
  {
    q: "What happens if I cancel my plan?",
    a: "Your QR codes and their scan history stay in your account in read-only form for 90 days, and static codes keep working permanently. Dynamic redirects pause after the grace period — reactivating any paid plan restores them instantly with the same codes and destinations, so printed material is never invalidated without warning.",
  },
];

export function FAQ() {
  return (
    <Section id="faq">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHead eyebrow="FAQ" title="Questions before you start." />
        <Accordion type="single" collapsible className="w-full">
          {QA.map((item) => (
            <AccordionItem key={item.q} value={item.q} className="border-border">
              <AccordionTrigger className="text-left font-display text-[15px] hover:text-gold hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
