import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import {
  LegalShell,
  LegalSection,
  LegalClause,
  LegalContact,
} from "@/components/legal/Legal";

const EFFECTIVE_DATE = "September 10, 2026";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms and conditions for using the ${site.name} ${site.tagline} website and services.`,
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms and Conditions" effectiveDate={EFFECTIVE_DATE}>
      <LegalSection n={1} title="Acceptance of Terms">
        <p>
          By accessing or using the {site.name} {site.tagline} website, you agree
          to be bound by these Terms and Conditions. If you do not agree, please
          do not use this website or our services.
        </p>
      </LegalSection>

      <LegalSection n={2} title="Use of the Website">
        <p>
          This website is provided to give information about our hair and scalp
          services and to let visitors request more information or book an
          appointment. You agree to use this website only for lawful purposes and
          not to submit false, misleading, or fraudulent information through any
          of our forms.
        </p>
      </LegalSection>

      <LegalSection n={3} title="Intellectual Property">
        <p>
          All content on this website — including text, graphics, logos, and the{" "}
          {site.name} name and mark — is the property of {site.name}{" "}
          {site.tagline} and may not be copied, reproduced, or distributed
          without our written permission.
        </p>
      </LegalSection>

      <LegalSection n={4} title="User Submissions and Communication Consent">
        <p>
          When you submit a form on this website, you provide accurate contact
          information and consent to be contacted by {site.name} {site.tagline}{" "}
          by phone, SMS/text message, and email regarding your inquiry. See our{" "}
          <Link href="/privacy">Privacy Policy</Link> for details on how we
          handle and use that information.
        </p>
      </LegalSection>

      <LegalSection n={5} title="SMS Terms of Service">
        <LegalClause n="5.1" title="Program Description">
          <p>
            By submitting your phone number through our website forms and opting
            in, you agree to receive SMS/text messages from {site.name}{" "}
            {site.tagline} related to your inquiry, scheduled appointments, and
            service updates.
          </p>
        </LegalClause>
        <LegalClause n="5.2" title="Opt-In and Consent">
          <p>
            Consent is collected via checkbox opt-in on our website forms.
            Consent to receive SMS messages is not a condition of any purchase or
            service.
          </p>
        </LegalClause>
        <LegalClause n="5.3" title="Message Frequency">
          <p>
            Message frequency varies based on your interactions with us (for
            example, an appointment confirmation or a follow-up after your
            visit).
          </p>
        </LegalClause>
        <LegalClause n="5.4" title="Message and Data Rates">
          <p>
            Message and data rates may apply. Contact your wireless carrier for
            details on your specific plan.
          </p>
        </LegalClause>
        <LegalClause n="5.5" title="Opt-Out">
          <p>
            You can cancel SMS messages at any time by texting{" "}
            <strong>STOP</strong>. After you send STOP, we will send you a
            message confirming that you have been unsubscribed, and you will no
            longer receive SMS messages from us.
          </p>
        </LegalClause>
        <LegalClause n="5.6" title="Help">
          <p>
            If you are experiencing issues, text <strong>HELP</strong> or contact
            us at <a href={`mailto:${site.email}`}>{site.email}</a> or{" "}
            <a href={site.phoneHref}>{site.phone}</a>.
          </p>
        </LegalClause>
        <LegalClause n="5.7" title="Carrier Liability">
          <p>Carriers are not liable for delayed or undelivered messages.</p>
        </LegalClause>
        <LegalClause n="5.8" title="Privacy">
          <p>
            We will not sell, rent, or share your mobile information or SMS
            consent data with third parties or affiliates for marketing purposes.
            See our <Link href="/privacy">Privacy Policy</Link> for full details.
          </p>
        </LegalClause>
        <LegalClause n="5.9" title="Modifications">
          <p>
            We reserve the right to modify or discontinue the SMS program at any
            time, with or without notice.
          </p>
        </LegalClause>
      </LegalSection>

      <LegalSection n={6} title="Appointments, Deposits & Cancellations">
        <p>
          A valid payment method on file is required to reserve any appointment.
          Pricing for each service is confirmed with you at consultation or
          before service begins. Cancellations or changes made within 48 hours of
          your reservation, and no-shows, are subject to a charge of 50% of the
          scheduled service.
        </p>
      </LegalSection>

      <LegalSection n={7} title="Client Conduct">
        <p>
          You agree to provide accurate information when booking, to arrive on
          time for scheduled appointments, and to treat our team and other
          clients with respect. We reserve the right to decline or discontinue
          service for abusive conduct or repeated no-shows.
        </p>
      </LegalSection>

      <LegalSection n={8} title="Third-Party Links">
        <p>
          This website may link to third-party sites or services we do not
          control. We are not responsible for the content, policies, or practices
          of any third-party site.
        </p>
      </LegalSection>

      <LegalSection n={9} title="Disclaimers and Limitation of Liability">
        <p>
          This website and our services are provided &ldquo;as is&rdquo; without
          warranties of any kind. To the fullest extent permitted by law,{" "}
          {site.name} {site.tagline} is not liable for any indirect, incidental,
          or consequential damages arising from your use of this website or our
          services.
        </p>
      </LegalSection>

      <LegalSection n={10} title="Governing Law">
        <p>
          These Terms are governed by the laws of the State of Florida and the
          federal laws of the United States applicable therein, without regard to
          conflict-of-law principles.
        </p>
      </LegalSection>

      <LegalSection n={11} title="Changes to Terms">
        <p>
          We may update these Terms periodically. Continued use of this website
          after changes are posted constitutes acceptance of the revised Terms.
        </p>
      </LegalSection>

      <LegalSection n={12} title="Contact Us">
        <p>
          If you have any questions about these Terms, please contact us at:
        </p>
        <LegalContact />
      </LegalSection>
    </LegalShell>
  );
}
