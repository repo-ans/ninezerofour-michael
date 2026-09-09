import { Container } from "@/components/ui/Container";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { Media } from "@/components/ui/Media";
import { ButtonLink } from "@/components/ui/Button";

export function StylistMatch() {
  return (
    <section className="bg-panel-2">
      <Container className="py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal className="order-2 md:order-1">
            <Media
              label="Consultation room"
              ratio="5 / 4"
              tone="sand"
              className="rounded-md"
            />
          </Reveal>

          <Reveal group className="order-1 flex flex-col gap-5 md:order-2">
            <RevealItem as="p" className="eyebrow">
              Find your stylist match
            </RevealItem>
            <RevealItem as="h2" className="display-md max-w-[16ch]">
              Priced by the stylist, not by a menu.
            </RevealItem>
            <RevealItem as="p" className="text-ink-soft">
              Each of our specialists sets pricing by their level and the time
              your hair genuinely needs. That&rsquo;s why every price is shown as
              a starting point — you receive an exact quote at your consultation
              or before service begins, never a surprise at checkout.
            </RevealItem>
            <RevealItem as="p" className="text-ink-soft">
              Not sure who to see? Book any consultation and we&rsquo;ll route
              you to the right person for your hair before your appointment.
            </RevealItem>
            <RevealItem as="div" className="pt-1">
              <ButtonLink href="/team" variant="outline" size="sm">
                Meet the team
              </ButtonLink>
            </RevealItem>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
