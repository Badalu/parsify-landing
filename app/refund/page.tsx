import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy — Parsify",
  description: "Parsify refund and cancellation policy. Learn about our 7-day money-back guarantee and how to request a refund.",
  robots: "index, follow",
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    content: `At Parsify, we want you to be completely satisfied with our bank statement conversion service. If you are not satisfied for any reason, we offer a straightforward refund policy designed to be fair and transparent.`,
  },
  {
    id: "money-back",
    title: "7-Day Money-Back Guarantee",
    content: `We offer a 7-day money-back guarantee on all new subscriptions. If you are unsatisfied with Parsify within the first 7 days of your paid subscription, contact us and we will issue a full refund — no questions asked.

This guarantee applies to:
• First-time subscribers on Starter, Professional, or Business plans
• Annual plan subscribers within 7 days of purchase
• Upgrades to a higher plan within 7 days of the upgrade date`,
  },
  {
    id: "credit-packs",
    title: "Credit Pack Refunds",
    content: `One-time credit packs (Pay-Per-Page packs) are eligible for a refund only if:
• The credits have not been used
• The refund request is made within 14 days of purchase
• The reason is a technical issue on our side (e.g., incorrect conversion output, system error)

Partially used credit packs will be refunded on a pro-rata basis for unused credits only.`,
  },
  {
    id: "non-refundable",
    title: "Non-Refundable Situations",
    content: `Refunds will not be issued in the following cases:
• Subscription renewals — you will receive an email reminder 3 days before renewal
• Refund requests made after 7 days of the initial purchase (subscriptions) or 14 days (credit packs)
• Accounts suspended due to violation of our Terms of Service
• Requests citing dissatisfaction with output accuracy when the uploaded document was password-protected, scanned at low quality, or not a valid bank statement`,
  },
  {
    id: "cancellation",
    title: "Cancellation Policy",
    content: `You may cancel your subscription at any time from your account settings. Upon cancellation:
• Your subscription will remain active until the end of the current billing period
• No further charges will be made after cancellation
• Access to premium features continues until the billing period ends
• Unused credits in credit packs remain available even after cancellation`,
  },
  {
    id: "process",
    title: "How to Request a Refund",
    content: `To request a refund, please:
1. Email us at support@parsify.in with subject line "Refund Request – [Your Email]"
2. Include your registered email address and order/subscription ID
3. Briefly describe the reason for your refund request

We typically process refund requests within 3–5 business days. Approved refunds are credited back to the original payment method within 5–10 business days depending on your bank.`,
  },
  {
    id: "disputes",
    title: "Payment Disputes",
    content: `We encourage you to contact us directly before filing a chargeback or dispute with your bank or card provider. We are committed to resolving all issues promptly and fairly.

Filing a chargeback without first contacting us may result in suspension of your account while the dispute is under review.`,
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: `We reserve the right to modify this Refund Policy at any time. Changes will be posted on this page with an updated effective date. Continued use of Parsify after changes constitutes your acceptance of the updated policy.`,
  },
];

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Hero */}
      <div className="border-b border-border bg-secondary/30 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">Legal</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl">Refund Policy</h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Effective date: <strong>1 June 2026</strong>
          </p>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
            We stand behind our product. If Parsify isn't working for you, we make it easy to get your money back.
          </p>
        </div>
      </div>

      {/* Quick Summary Card */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 mt-12">
        <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 sm:p-8">
          <h2 className="font-semibold text-lg">Quick Summary</h2>
          <ul className="mt-4 space-y-3">
            {[
              { emoji: "✅", text: "7-day money-back guarantee on all new subscriptions" },
              { emoji: "✅", text: "14-day refund window for unused credit packs" },
              { emoji: "✅", text: "Cancel anytime — no lock-in contracts" },
              { emoji: "⚡", text: "Refunds processed within 3–5 business days" },
              { emoji: "📧", text: "Email support@parsify.in for any refund request" },
            ].map((item) => (
              <li key={item.text} className="flex items-start gap-3 text-sm text-foreground/85">
                <span className="text-base shrink-0">{item.emoji}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Content Sections */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {sections.map((section) => (
          <section key={section.id} id={section.id}>
            <h2 className="font-serif text-2xl sm:text-3xl">{section.title}</h2>
            <div className="mt-4 text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
              {section.content}
            </div>
          </section>
        ))}

        {/* Contact Box */}
        <div className="rounded-2xl border border-border bg-card p-7 text-center">
          <h3 className="font-semibold text-lg">Still have questions?</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Our support team is here to help. We typically respond within 24 hours on business days.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Contact Support
            </Link>
            <a
              href="mailto:support@parsify.in"
              className="inline-flex h-10 items-center justify-center rounded-lg border border-border px-6 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              support@parsify.in
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap gap-4 text-sm text-muted-foreground border-t border-border pt-8">
          <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">Terms &amp; Conditions</Link>
          <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          <Link href="/" className="hover:text-foreground transition-colors">← Back to Home</Link>
        </nav>
      </div>
    </div>
  );
}
