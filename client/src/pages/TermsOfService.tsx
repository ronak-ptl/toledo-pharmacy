import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LAST_UPDATED = "April 3, 2026";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="font-display font-bold text-navy text-xl md:text-2xl mb-3 pb-2 border-b border-navy/10">{title}</h2>
    <div className="space-y-3">{children}</div>
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

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 bg-cream">
        <section className="bg-navy py-16 md:py-20">
          <div className="container text-center">
            <p className="text-marigold font-body text-sm font-semibold uppercase tracking-widest mb-3">Legal</p>
            <h1 className="font-display font-bold text-white text-4xl md:text-5xl mb-4">Terms of Service</h1>
            <p className="text-white/60 text-lg font-body">Effective Date: {LAST_UPDATED}</p>
          </div>
        </section>
        <section className="py-12 md:py-16">
          <div className="container max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
              <Section title="1. Acceptance of Terms">
                <P>By accessing or using any Toledo Pharmacy website — including www.mytoledorx.com and www.toledopharmacy.com (which redirects to www.mytoledorx.com) — you agree to be bound by these Terms of Service ("Terms"). The term "Site" in these Terms refers collectively to both domain names and any pages served through them. If you do not agree, please do not use the Site.</P>
                <P>Toledo Pharmacy reserves the right to modify these Terms at any time. Continued use of the Site after changes are posted constitutes acceptance.</P>
              </Section>
              <Section title="2. About Our Websites">
                <P>Toledo Pharmacy operates two web addresses: www.mytoledorx.com (primary) and www.toledopharmacy.com (which automatically redirects visitors to www.mytoledorx.com). Both domains serve the same website and are owned and operated by Toledo Pharmacy, an independent retail pharmacy located at 3808 Bergenline Ave, Union City, NJ 07087.</P>
                <P>The Site provides information about our pharmacy services, business hours, location, and a contact form. It also hosts our Health Blog. The Site does not include an online store, e-commerce functionality, or the ability to purchase products or prescriptions online.</P>
              </Section>
              <Section title="3. Use of the Site">
                <P>You agree to use the Site only for lawful purposes and in accordance with these Terms. You agree not to:</P>
                <UL items={["Use the Site in any manner that violates applicable federal, state, or local law","Attempt to gain unauthorized access to any portion of the Site or its systems","Upload, transmit, or introduce viruses, malware, or other harmful code","Engage in any conduct that could damage, disable, or impair the Site","Use automated tools (bots, scrapers) to collect content without permission","Harass, intimidate, or harm any person through the Site"]} />
              </Section>
              <Section title="4. Contact Form">
                <P>The Site includes a contact form for visitor inquiries. By submitting the form, you acknowledge that:</P>
                <UL items={["You are providing accurate contact information","Submitting the form does not establish a pharmacist-patient or physician-patient relationship","The contact form is not for medical emergencies — call 911 or go to your nearest ER","Responses are provided during business hours and may take up to one business day"]} />
              </Section>
              <Section title="5. Health Information Disclaimer">
                <P>Content on the Site — including blog articles, service descriptions, and vaccine information — is for general informational purposes only. It does not constitute medical advice, a clinical diagnosis, or a treatment recommendation. Always consult your physician, pharmacist, or other licensed healthcare professional before making health or medication decisions. Toledo Pharmacy is not liable for actions taken based on Site content.</P>
              </Section>
              <Section title="6. Pharmacy Services">
                <P>Descriptions of pharmacy services on the Site are subject to all applicable federal and New Jersey state pharmacy laws and regulations.</P>
                <UL items={["Prescription medications are dispensed only upon receipt of a valid prescription from a licensed prescriber","Vaccine eligibility is assessed at the time of the walk-in visit; availability may vary","Free delivery is available Monday–Friday within our local service area; conditions apply","Insurance coordination is offered as a courtesy; coverage is determined by your insurer","The \"lowest prices\" and \"price-match\" commitments reflect our general pricing philosophy; prices are subject to change"]} />
              </Section>
              <Section title="7. Intellectual Property">
                <P>All content on the Site — including text, graphics, logos, images, and blog articles — is the property of Toledo Pharmacy or its content suppliers and is protected by applicable copyright and trademark law. You may not reproduce, distribute, or create derivative works without prior written permission.</P>
              </Section>
              <Section title="8. Disclaimer of Warranties">
                <P>THE SITE AND ITS CONTENT ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. TOLEDO PHARMACY DOES NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED OR ERROR-FREE.</P>
              </Section>
              <Section title="9. Limitation of Liability">
                <P>To the fullest extent permitted by law, Toledo Pharmacy shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Site or reliance on its content. Our aggregate liability for any claim shall not exceed one hundred dollars ($100.00).</P>
              </Section>
              <Section title="10. Indemnification">
                <P>You agree to indemnify and hold harmless Toledo Pharmacy and its pharmacists, employees, and agents from any claims, damages, and expenses (including reasonable attorneys' fees) arising from your use of the Site or violation of these Terms.</P>
              </Section>
              <Section title="11. Domain Redirects">
                <P>Toledo Pharmacy owns and operates both www.mytoledorx.com and www.toledopharmacy.com. The domain www.toledopharmacy.com is configured to automatically redirect visitors to www.mytoledorx.com. These Terms apply equally to users who access the Site via either domain.</P>
              </Section>
              <Section title="12. Governing Law">
                <P>These Terms are governed by the laws of the State of New Jersey, without regard to conflict of law principles. Any dispute shall be resolved in the state or federal courts of Hudson County, New Jersey.</P>
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
