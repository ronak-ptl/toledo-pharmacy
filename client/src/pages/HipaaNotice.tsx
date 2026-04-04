import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

export default function HipaaNotice() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 bg-cream">
        <section className="bg-navy py-16 md:py-20">
          <div className="container text-center">
            <p className="text-marigold font-body text-sm font-semibold uppercase tracking-widest mb-3">Legal</p>
            <h1 className="font-display font-bold text-white text-4xl md:text-5xl mb-4">Notice of Privacy Practices</h1>
            <p className="text-white/60 text-lg font-body">Effective Date: {LAST_UPDATED}</p>
          </div>
        </section>
        <div className="bg-marigold/10 border-l-4 border-marigold">
          <div className="container max-w-3xl mx-auto py-4 px-8">
            <p className="text-navy font-body text-sm font-semibold leading-relaxed">
              THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.
            </p>
          </div>
        </div>
        <section className="py-12 md:py-16">
          <div className="container max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
              <Section title="Our Legal Duty">
                <P>Toledo Pharmacy is required by law to maintain the privacy of your Protected Health Information (PHI), to provide you with this Notice of our privacy practices, and to abide by the terms of the Notice currently in effect. PHI is information that identifies you and relates to your past, present, or future health condition, healthcare services, or payment for those services.</P>
                <P>This Notice applies to PHI collected through in-person pharmacy services and through our websites (www.mytoledorx.com and www.toledopharmacy.com).</P>
              </Section>
              <Section title="How We May Use and Disclose Your Health Information">
                <SubSection title="For Treatment">
                  <P>We use and disclose PHI to provide pharmacy services: dispensing prescriptions, counseling on drug interactions and side effects, coordinating care with prescribing physicians, administering vaccines (COVID-19, Flu, Shingles, Pneumonia, Tdap, HPV), and managing medication therapy.</P>
                </SubSection>
                <SubSection title="For Payment">
                  <P>We use and disclose PHI to bill and receive payment for services, including submitting insurance claims, verifying eligibility, and coordinating benefits.</P>
                </SubSection>
                <SubSection title="For Healthcare Operations">
                  <P>We may use PHI for quality improvement, staff training, compliance activities, and pharmacy management.</P>
                </SubSection>
                <SubSection title="Other Permitted Disclosures (No Authorization Required)">
                  <UL items={["As required by federal, state, or local law","To public health authorities for disease or vaccination reporting","To government agencies for audits or oversight of the healthcare system","To law enforcement as required or permitted by law","To avert a serious and imminent threat to health or safety","For workers' compensation purposes as authorized by New Jersey law","To the U.S. Department of Health and Human Services for compliance investigations"]} />
                </SubSection>
              </Section>
              <Section title="Uses and Disclosures Requiring Your Authorization">
                <P>For any use or disclosure not described above, we will obtain your written authorization. This includes marketing, sale of PHI (which we do not do), and most uses of psychotherapy notes. You may revoke authorization in writing at any time; revocation does not affect prior actions.</P>
              </Section>
              <Section title="Your Rights Regarding Your Health Information">
                <SubSection title="Right to Access Your Records">
                  <P>You may inspect and receive copies of your PHI (with limited exceptions). We may charge a reasonable cost-based fee.</P>
                </SubSection>
                <SubSection title="Right to Request Amendments">
                  <P>You may request correction of inaccurate or incomplete PHI. We may deny the request in limited circumstances but will notify you.</P>
                </SubSection>
                <SubSection title="Right to an Accounting of Disclosures">
                  <P>You may request a list of certain PHI disclosures made during the past six years (excluding treatment, payment, and operations).</P>
                </SubSection>
                <SubSection title="Right to Request Restrictions">
                  <P>You may request limits on use or disclosure of your PHI. We must honor restrictions on disclosures to a health plan when you pay out-of-pocket in full.</P>
                </SubSection>
                <SubSection title="Right to Confidential Communications">
                  <P>You may request we contact you only at a specific address or phone number.</P>
                </SubSection>
                <SubSection title="Right to a Paper Copy of This Notice">
                  <P>You may request a printed copy of this Notice at any time.</P>
                </SubSection>
                <SubSection title="Right to Notification of a Breach">
                  <P>We will notify you of any breach of your unsecured PHI as required by law.</P>
                </SubSection>
              </Section>
              <Section title="Changes to This Notice">
                <P>We may update this Notice at any time. The revised Notice will be posted in our pharmacy and on both websites (www.mytoledorx.com and www.toledopharmacy.com) and will apply to all PHI we maintain.</P>
              </Section>
              <Section title="Complaints">
                <P>If you believe your privacy rights have been violated, you may file a complaint with Toledo Pharmacy directly or with:</P>
                <UL items={["U.S. Department of Health and Human Services, Office for Civil Rights","200 Independence Avenue SW, Washington, DC 20201","Phone: 1-877-696-6775  |  www.hhs.gov/ocr"]} />
                <P>You will not be penalized or retaliated against for filing a complaint.</P>
              </Section>
              <Section title="Contact Us">
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
