import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const LAST_UPDATED = "June 2, 2026";

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

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Privacy Policy"
        description="Toledo Pharmacy's privacy policy — how we collect, use, and protect your personal information at our Union City, NJ location."
        path="/privacy-policy"
      />
      <Navbar />
      <div className="flex-1 bg-cream">
        <section className="bg-navy py-16 md:py-20">
          <div className="container text-center">
            <p className="text-marigold font-body text-sm font-semibold uppercase tracking-widest mb-3">Legal</p>
            <h1 className="font-display font-bold text-white text-4xl md:text-5xl mb-4">Privacy Policy</h1>
            <p className="text-white/60 text-lg font-body">Effective Date: {LAST_UPDATED}</p>
          </div>
        </section>
        <section className="py-12 md:py-16">
          <div className="container max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
              <Section title="1. Introduction">
                <P>Toledo Pharmacy ("we," "us," or "our") is committed to protecting the privacy of all visitors to our websites and patients who use our pharmacy services. This Privacy Policy applies to both of our websites — www.mytoledorx.com and www.toledopharmacy.com (which redirects to www.mytoledorx.com) — collectively referred to as the "Site." It explains how we collect, use, disclose, and safeguard information when you visit the Site or interact with our pharmacy.</P>
                <P>By using the Site, you agree to the practices described in this Privacy Policy.</P>
              </Section>
              <Section title="2. Information We Collect">
                <SubSection title="2a. Information You Provide Directly">
                  <P>We collect personal information you voluntarily submit, primarily through our contact form:</P>
                  <UL items={["Full name","Email address","Phone number","Message content (which may include prescription or health-related questions)"]} />
                  <P>If you are a pharmacy patient, we may also collect prescription information, insurance details, date of birth, and other health information necessary to provide services. This health information is subject to HIPAA protections (see Section 5).</P>
                </SubSection>
                <SubSection title="2b. Information Collected Automatically">
                  <P>When you visit either website, certain data may be collected automatically:</P>
                  <UL items={["IP address and approximate location","Browser type and device information","Pages visited and time spent","Referring URLs and traffic source","Cookies and similar tracking technologies (see Section 6)"]} />
                </SubSection>
              </Section>
              <Section title="3. How We Use Your Information">
                <P>We use the information we collect to:</P>
                <UL items={["Respond to inquiries submitted through our contact form","Provide prescription dispensing, medication therapy management, and other pharmacy services","Administer walk-in vaccines and health screenings","Coordinate free prescription deliveries","Process insurance coordination and billing","Send appointment reminders or health communications where you have given consent","Improve our websites and services","Comply with applicable federal and New Jersey state laws, including HIPAA"]} />
              </Section>
              <Section title="4. Disclosure of Your Information">
                <P>We do not sell or rent your personal information. We may share it only in these limited circumstances:</P>
                <UL items={["Healthcare Providers: We may share relevant health information with your physicians or other providers involved in your care as permitted by law.","Insurance Companies: We share information necessary to process claims and coordinate benefits.","Service Providers: Trusted third parties (e.g., website hosting, Formspree for contact form processing) who are contractually obligated to protect your data and use it only as we specify.","Legal Requirements: We may disclose information if required by law, court order, or to protect the safety of patients, staff, or the public."]} />
              </Section>
              <Section title="5. HIPAA — Protected Health Information">
                <P>As a licensed pharmacy, Toledo Pharmacy is a HIPAA-covered entity. Protected Health Information (PHI) you provide — including prescription details, insurance information, medication history, and vaccination records — is handled in accordance with HIPAA. Our Notice of Privacy Practices (NPP) describes your full rights under HIPAA and is available at the pharmacy counter or upon request.</P>
              </Section>
              <Section title="6. Cookies and Tracking Technologies">
                <P>Our websites may use cookies and similar technologies to improve functionality and analyze traffic. You may manage cookies through your browser settings, though disabling certain cookies may affect site functionality. We may use analytics services such as Google Analytics, which operates under its own privacy policy. See our separate Cookie Policy for full details.</P>
              </Section>
              <Section title="7. Contact Form Data">
                <P>When you submit the contact form on either website (www.mytoledorx.com and www.toledopharmacy.com), your name, email, phone number, and message are processed through Formspree, Inc., a third-party form processing service, and delivered to us via email. Formspree processes this data solely to deliver your message to us and is contractually obligated to protect it. We do not share contact form data with third parties for marketing. We retain submissions only as long as necessary to respond to your inquiry.</P>
                <P><strong>Important:</strong> Our contact form is not intended for submitting prescription information, medication details, or other Protected Health Information (PHI). For prescription-related inquiries, please call us directly at (201) 867-0297.</P>
              </Section>
              <Section title="8. Children's Privacy">
                <P>Our websites are not directed to children under 13. We do not knowingly collect information from children under 13. If you believe we have inadvertently done so, contact us immediately.</P>
              </Section>
              <Section title="9. Data Security">
                <P>We maintain reasonable administrative, technical, and physical safeguards to protect your information. No internet transmission is completely secure, but we strive to protect your data to the best of our ability.</P>
              </Section>
              <Section title="10. Your Rights">
                <P>You may have the right to access, correct, or request deletion of your personal information (subject to legal retention requirements), opt out of marketing communications, and request health records under HIPAA. Contact us to exercise these rights.</P>
              </Section>
              <Section title="11. Third-Party Links">
                <P>Our sites may link to third-party sites (e.g., Google Maps, Google Reviews). We are not responsible for their privacy practices.</P>
              </Section>
              <Section title="12. Changes to This Policy">
                <P>We may update this Privacy Policy periodically. Changes will be posted on both websites with an updated effective date. Continued use constitutes acceptance.</P>
              </Section>
              <Section title="13. Contact Us">
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
