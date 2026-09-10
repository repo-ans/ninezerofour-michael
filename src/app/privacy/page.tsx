import type { Metadata } from "next";
import { site } from "@/content/site";
import {
  LegalShell,
  LegalSection,
  LegalCallout,
  LegalContact,
} from "@/components/legal/Legal";

const EFFECTIVE_DATE = "September 10, 2026";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} ${site.tagline} collects, uses, and safeguards your information.`,
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" effectiveDate={EFFECTIVE_DATE}>
      <LegalSection n={1} title="Introduction">
        <p>
          At {site.name} {site.tagline} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;), your privacy matters to us. This Privacy Policy
          explains how we collect, use, and safeguard your information when you
          interact with our website, services, and communications.
        </p>
      </LegalSection>

      <LegalSection n={2} title="Information We Collect">
        <p>We may collect the following types of information:</p>
        <ul>
          <li>
            <strong>Personal Information:</strong> Name, email address, phone
            number, and other details you provide via our forms.
          </li>
          <li>
            <strong>Usage Data:</strong> IP address, browser type, pages visited,
            and — where enabled — marketing identifiers passed through URL
            parameters (such as UTM parameters, Google Click ID, or Facebook
            Click ID).
          </li>
          <li>
            <strong>Communication Data:</strong> Text message and email
            interactions, form submissions, and appointment and call records.
          </li>
        </ul>
      </LegalSection>

      <LegalSection n={3} title="How We Use Your Information">
        <p>We may use your information to:</p>
        <ul>
          <li>Respond to your inquiries and manage your appointments</li>
          <li>Provide updates about our services</li>
          <li>
            Send appointment reminders or follow-ups via SMS, email, or phone
          </li>
          <li>Analyze site traffic and improve our services</li>
          <li>Comply with legal obligations or resolve disputes</li>
        </ul>
      </LegalSection>

      <LegalSection n={4} title="Sharing Your Information">
        <p>
          We do not sell your personal information. We may share information
          with:
        </p>
        <ul>
          <li>
            Internal staff and contractors under confidentiality agreements
          </li>
          <li>
            Third-party service providers (such as GoHighLevel, our CRM and
            messaging platform, plus analytics and hosting providers) strictly to
            perform services on our behalf
          </li>
          <li>Legal authorities if required by law</li>
        </ul>
        <LegalCallout title="Non-Sharing Clause">
          No mobile information will be shared with third parties or affiliates
          for marketing or promotional purposes. Information sharing to
          subcontractors in support services, such as customer service, is
          permitted. All other use case categories exclude text messaging
          originator opt-in data and consent — this information will not be
          shared with any third parties.
        </LegalCallout>
      </LegalSection>

      <LegalSection n={5} title="Communication & Consent">
        <p>
          By submitting your information through our website forms, you consent
          to receive communications from {site.name} {site.tagline} via phone,
          SMS/text message, and email.
        </p>
        <ul>
          <li>
            <strong>Marketing Messages:</strong> Promotions, offers, and service
            opportunities require your express written consent via checkbox
            opt-in on our forms.
          </li>
          <li>
            <strong>Non-Marketing Messages:</strong> Appointment reminders,
            service updates, and follow-ups require your express consent via
            checkbox opt-in.
          </li>
          <li>
            Consent to receive SMS messages is not a condition of any purchase or
            service.
          </li>
          <li>
            You may opt out of SMS at any time by replying <strong>STOP</strong>{" "}
            to any message. After opting out, you will receive one final
            confirmation message.
          </li>
          <li>
            For help, reply <strong>HELP</strong> to any message or contact us at{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
            <a href={site.phoneHref}>{site.phone}</a>.
          </li>
        </ul>
      </LegalSection>

      <LegalSection n={6} title="SMS/Text Messaging Terms">
        <p>
          {site.name} {site.tagline} offers an SMS messaging program to provide
          appointment reminders, service updates, and follow-ups related to your
          visits.
        </p>
        <ul>
          <li>
            By opting in, you agree to receive recurring text messages from us at
            the mobile number you provided.
          </li>
          <li>Message frequency varies based on your interactions with us.</li>
          <li>
            Message and data rates may apply. Contact your wireless carrier for
            pricing details.
          </li>
          <li>
            You can opt out at any time by texting <strong>STOP</strong>. You
            will receive one final confirmation message.
          </li>
          <li>
            For assistance, text <strong>HELP</strong> or contact us at{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
            <a href={site.phoneHref}>{site.phone}</a>.
          </li>
          <li>
            We will not sell, rent, or share your phone number or SMS consent
            information with any third parties or affiliates for marketing
            purposes.
          </li>
          <li>
            Your data may be shared with service providers (such as our CRM and
            messaging platform) solely for delivering the messages you consented
            to receive.
          </li>
          <li>
            Participating carriers are not liable for delayed or undelivered
            messages.
          </li>
        </ul>
      </LegalSection>

      <LegalSection n={7} title="TCPA Compliance">
        <p>
          {site.name} {site.tagline} complies with the Telephone Consumer
          Protection Act (TCPA) and all applicable federal and state regulations
          governing text message and telephone communications.
        </p>
        <ul>
          <li>
            We only send text messages to individuals who have provided prior
            express consent (for informational messages) or prior express written
            consent (for marketing messages) through our website forms.
          </li>
          <li>
            We honor all opt-out requests promptly. Upon receiving a STOP
            message, we will cease sending further communications within a
            reasonable timeframe.
          </li>
          <li>
            If you believe you have received a message in error, please contact
            us immediately at{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
            <a href={site.phoneHref}>{site.phone}</a>.
          </li>
        </ul>
      </LegalSection>

      <LegalSection n={8} title="Cookies & Analytics">
        <p>
          This site may use Google Analytics (GA4), the Meta Pixel, and Google
          Ads conversion tracking to understand site usage and measure
          advertising performance. These services may set cookies or use similar
          technologies. You can control cookie behavior through your browser
          settings.
        </p>
      </LegalSection>

      <LegalSection n={9} title="Data Security">
        <p>
          We implement reasonable technical and organizational measures to
          protect your information against unauthorized access, loss, or misuse.
        </p>
      </LegalSection>

      <LegalSection n={10} title="Your Rights">
        <p>
          You may request access to, correction of, or deletion of your personal
          data at any time by contacting us.
        </p>
      </LegalSection>

      <LegalSection n={11} title="Updates to This Policy">
        <p>
          We may update this Privacy Policy periodically. Updates will be
          reflected on this page with a revised effective date.
        </p>
      </LegalSection>

      <LegalSection n={12} title="Contact Us">
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at:
        </p>
        <LegalContact />
      </LegalSection>
    </LegalShell>
  );
}
