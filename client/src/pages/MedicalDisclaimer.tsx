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

export default function MedicalDisclaimer() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Medical & Health Disclaimer"
        description="Medical disclaimer for Toledo Pharmacy's website content. Information provided is for educational purposes only and does not constitute medical advice."
        path="/medical-disclaimer"
      />
      <Navbar />
      <div className="flex-1 bg-cream">
        <section className="bg-navy py-16 md:py-20">
          <div className="container text-center">
            <p className="text-marigold font-body text-sm font-semibold uppercase tracking-widest mb-3">Legal</p>
            <h1 className="font-display font-bold text-white text-4xl md:text-5xl mb-4">Medical &amp; Health Disclaimer</h1>
            <p className="text-white/60 text-lg font-body">Effective Date: {LAST_UPDATED}</p>
          </div>
        </section>
        <section className="py-12 md:py-16">
          <div className="container max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
              <Section title="1. Scope of This Disclaimer">
                <P>This disclaimer applies to all content published on Toledo Pharmacy's websites — www.mytoledorx.com and www.toledopharmacy.com (which redirects to www.mytoledorx.com) — including text, service descriptions, vaccine information, health screening descriptions, blog articles, and any other material (collectively, "Content"). All Content is provided for general informational and educational purposes only.</P>
              </Section>
              <Section title="2. Not Medical or Pharmaceutical Advice">
                <P>Nothing on either website constitutes:</P>
                <UL items={["Medical advice, a clinical opinion, or a diagnosis","A recommendation to start, stop, or modify any medication or treatment","A determination of vaccine or clinical service eligibility","An endorsement of any drug, therapy, or product"]} />
                <P>Always consult your physician, pharmacist, or other qualified healthcare provider before making healthcare decisions. Never disregard or delay professional medical advice because of something you read on our websites.</P>
              </Section>
              <Section title="3. Prescription Medications">
                <P>Information about prescription medications on the Site is for educational purposes only. Toledo Pharmacy dispenses prescription medications only upon receipt of a valid prescription from a licensed prescriber. Visiting our websites does not create a prescriber-patient relationship. All medications carry potential risks and contraindications — consult your pharmacist or physician.</P>
              </Section>
              <Section title="4. Vaccines and Immunizations">
                <P>Toledo Pharmacy administers COVID-19, Flu, Shingles, Pneumonia, Tdap, and HPV vaccines in compliance with New Jersey pharmacy law and applicable CDC/ACIP guidelines. Website information about vaccines is for general awareness. Eligibility and dosing are assessed at the time of your visit. Walk-in availability is subject to stock and applicable regulations.</P>
              </Section>
              <Section title="5. Health Screenings">
                <P>Free health screenings (blood pressure checks, glucose monitoring, wellness consultations) are general wellness services only — not diagnostic services. Abnormal results should be followed up with your primary care provider.</P>
              </Section>
              <Section title="6. Prescription Delivery — Free and Paid Options">
                <P>Toledo Pharmacy offers prescription delivery services subject to the following terms and conditions:</P>
                <SubSection title="Free Delivery">
                  <UL items={["Free delivery is available Monday through Friday only, within our local service area. Deliveries are not available on Saturdays, Sundays, or holidays under the free delivery program.","Free delivery is limited to addresses within our local delivery zone. Eligibility is determined at the time of the request based on your delivery address. Please call us at (201) 867-0297 to confirm whether your address qualifies.","Toledo Pharmacy reserves the right to temporarily suspend or discontinue free delivery at any time, at our sole discretion, due to staffing, operational, weather, or other circumstances. We will make reasonable efforts to notify affected customers in advance when possible."]} />
                </SubSection>
                <SubSection title="Paid Delivery">
                  <UL items={["Customers located outside our local delivery area may be eligible for paid delivery. Applicable fees will be communicated at the time of the delivery request.","Paid delivery may also be available outside of standard free delivery days and hours (e.g., Saturdays or after-hours), subject to availability and applicable fees. Please call us at (201) 867-0297 for current rates and scheduling."]} />
                </SubSection>
                <SubSection title="General Delivery Terms">
                  <UL items={["Delivery times may vary due to order volume, weather, traffic, or other factors outside our control.","Toledo Pharmacy is not responsible for health outcomes resulting from delivery delays beyond our reasonable control.","Delivery services are provided as a convenience only. Customers are encouraged to plan ahead for time-sensitive medications and not rely solely on delivery for urgent prescriptions."]} />
                </SubSection>
              </Section>
              <Section title="7. Insurance and Pricing Information">
                <P>Insurance coverage, copays, and out-of-pocket costs are determined by your individual plan. We make no guarantee of coverage at any specific price. Our lowest-price and price-match commitment reflects our general pricing approach; pricing is subject to change.</P>
              </Section>
              <Section title="8. Blog Content">
                <P>Articles on our Health Blog are written for general community education. They are not reviewed by the FDA and do not constitute professional medical advice. Accuracy reflects information at the time of publication.</P>
              </Section>
              <div className="my-8 bg-red-50 border-l-4 border-red-500 rounded-r-xl p-5">
                <p className="font-display font-bold text-red-700 text-sm md:text-base leading-relaxed">
                  9. EMERGENCY SITUATIONS — IF YOU ARE EXPERIENCING A MEDICAL EMERGENCY, CALL 911 IMMEDIATELY OR GO TO YOUR NEAREST EMERGENCY ROOM. DO NOT RELY ON THESE WEBSITES IN AN EMERGENCY.
                </p>
              </div>
              <Section title="10. No Provider Relationship Created">
                <P>Viewing or using either website does not establish a pharmacist-patient or physician-patient relationship. That relationship is established only through in-person interaction at our pharmacy.</P>
              </Section>
              <Section title="11. Limitation of Liability">
                <P>To the extent permitted by applicable law, Toledo Pharmacy shall not be liable for any harm arising from reliance on website content for healthcare or medication decisions.</P>
              </Section>
              <Section title="12. Contact Us">
                <P>Our pharmacists are available during business hours to answer questions about your medications and health.</P>
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
