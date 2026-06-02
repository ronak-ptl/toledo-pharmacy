import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const LAST_UPDATED = "April 3, 2026";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="font-display font-bold text-navy text-xl md:text-2xl mb-3 pb-2 border-b border-navy/10">{title}</h2>
    <div className="space-y-3">{children}</div>
  </div>
);

const SubSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mt-4 mb-2">
    <h3 className="font-display font-semibold text-navy text-lg mb-2">{title}</h3>
    <div className="space-y-2">{children}</div>
  </div>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-navy/70 text-base leading-relaxed font-body">{children}</p>
);

const UL = ({ items }: { items: string[] }) => (
  <ul className="list-disc list-outside ml-5 space-y-1">
    {items.map((item, i) => (
      <li key={i} className="text-navy/70 text-base leading-relaxed font-body">{item}</li>
    ))}
  </ul>
);

export default function CookiePolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Cookie Policy"
        description="Toledo Pharmacy's cookie policy — how we use cookies and similar technologies on our website."
        path="/cookie-policy"
      />
      <Navbar />
      <div className="flex-1 bg-cream">
        <section className="bg-navy py-16 md:py-20">
          <div className="container text-center">
            <p className="text-marigold font-body text-sm font-semibold uppercase tracking-widest mb-3">Legal</p>
            <h1 className="font-display font-bold text-white text-4xl md:text-5xl mb-4">Cookie Policy</h1>
            <p className="text-white/60 text-lg font-body">Effective Date: {LAST_UPDATED}</p>
          </div>
        </section>
        <section className="py-12 md:py-16">
          <div className="container max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
              <Section title="1. What Are Cookies?">
                <P>Cookies are small text files placed on your device when you visit a website. They help websites function properly, remember preferences, and provide usage analytics to site owners. Similar technologies include web beacons, pixel tags, and local storage.</P>
              </Section>
              <Section title="2. Which Websites This Policy Covers">
                <P>This Cookie Policy applies to both Toledo Pharmacy websites: www.mytoledorx.com (primary) and www.toledopharmacy.com (which automatically redirects to www.mytoledorx.com). Whether you arrive via either domain, the same cookies and tracking practices apply.</P>
              </Section>
              <Section title="3. Types of Cookies We Use">
                <SubSection title="Strictly Necessary Cookies">
                  <P>Essential for basic website operation (navigation, contact form functionality). Cannot be disabled without significantly impairing the site. Do not collect information used for marketing.</P>
                </SubSection>
                <SubSection title="Analytics and Performance Cookies">
                  <P>We may use analytics tools to collect aggregated, anonymized data about how visitors use our websites — such as most-visited pages, session duration, and traffic sources. This helps us improve the site.</P>
                  <P>Analytics tools operate under their own privacy policies and may transfer data to servers outside the U.S.</P>
                </SubSection>
                <SubSection title="Functional Cookies">
                  <P>These may remember your preferences (e.g., language) and enable enhanced functionality. Set by us or by third-party service providers.</P>
                </SubSection>
              </Section>
              <Section title="4. What We Do NOT Use Cookies For">
                <P>Because neither website includes an online store or user accounts, we do not use:</P>
                <UL items={["Shopping cart or purchase session cookies","Account login or authentication cookies","Cross-site advertising or retargeting cookies"]} />
                <P>We do not sell personal information or use cookies to track your activity across unrelated third-party websites for advertising.</P>
              </Section>
              <Section title="5. Third-Party Cookies">
                <P>Our websites may include features from third parties that set their own cookies:</P>
                <UL items={["Google Maps — for our location and directions feature","Google Reviews — for displaying customer reviews","Analytics tools — for site traffic analysis"]} />
                <P>We do not control third-party cookies. Please refer to each provider's privacy and cookie policy for details.</P>
              </Section>
              <Section title="6. Managing Your Cookie Preferences">
                <SubSection title="Browser Settings">
                  <P>You can manage cookies through your browser settings — block all cookies, delete existing cookies, or receive notifications before a cookie is placed. Note that blocking all cookies may impair site functionality.</P>
                </SubSection>
                <SubSection title="Analytics Opt-Out">
                  <P>To opt out of analytics tracking, you may install the Google Analytics Opt-out Browser Add-on available at: tools.google.com/dlpage/gaoptout</P>
                </SubSection>
              </Section>
              <Section title="7. New Jersey and California Residents">
                <P>New Jersey residents may have rights under the New Jersey Data Privacy Act (NJDPA). California residents have rights under the California Consumer Privacy Act (CCPA). Analytics data collected via cookies may constitute personal information under these laws. We do not sell personal data. To exercise your rights, contact us below.</P>
              </Section>
              <Section title="8. Cookie Retention">
                <P>Session cookies expire when you close your browser. Persistent analytics cookies are typically retained for up to 13 months. You may delete cookies at any time through your browser settings.</P>
              </Section>
              <Section title="9. Changes to This Policy">
                <P>We may update this Cookie Policy to reflect changes in technology, law, or our practices. Changes will be posted on both websites with an updated effective date.</P>
              </Section>
              <Section title="10. Contact Us">
                <div className="bg-cream rounded-xl p-6 space-y-1">
                  <p className="font-display font-semibold text-navy">Toledo Pharmacy</p>
                  <p className="text-navy/70 font-body text-sm">3808 Bergenline Ave, Union City, NJ 07087</p>
                  <p className="text-navy/70 font-body text-sm">Phone: (201) 867-0297</p>
                  <p className="text-navy/70 font-body text-sm">Fax: (201) 867-6848</p>
                  <p className="text-navy/70 font-body text-sm">www.mytoledorx.com · www.toledopharmacy.com</p>
                </div>
              </Section>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
