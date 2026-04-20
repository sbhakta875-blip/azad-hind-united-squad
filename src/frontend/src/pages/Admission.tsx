import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle, CreditCard, FileText } from "lucide-react";
import { motion } from "motion/react";
import { Layout } from "../components/Layout";
import { LoadingPage } from "../components/LoadingSpinner";
import { MilitaryCard } from "../components/MilitaryCard";
import { SectionHeader } from "../components/SectionHeader";
import { useAdmissionInfo } from "../hooks/use-backend";

const FALLBACK_DOCS = [
  "Passport-size photographs (4 copies)",
  "School/College Certificate",
  "Address Proof (Aadhaar/Voter ID)",
  "Photo ID Proof",
];
const FALLBACK_FEES = { admission: 350n, monthly: 50n };

export default function AdmissionPage() {
  const { data: admissionInfo, isLoading } = useAdmissionInfo();
  if (isLoading)
    return (
      <Layout>
        <LoadingPage />
      </Layout>
    );

  const fees = admissionInfo?.fees ?? FALLBACK_FEES;
  const docs = admissionInfo?.documents ?? FALLBACK_DOCS;

  return (
    <Layout>
      <section
        className="bg-primary py-20 text-primary-foreground"
        data-ocid="admission.hero_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block mb-3 px-4 py-1 bg-secondary text-secondary-foreground text-xs font-bold tracking-widest uppercase">
            Enroll Today
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-primary-foreground mb-4">
            Admission
          </h1>
          <p className="text-primary-foreground/70 max-w-xl text-lg leading-relaxed">
            Join the Azad Hind United Squad — a disciplined path to leadership,
            fitness, and national service.
          </p>
        </div>
      </section>

      <section
        className="py-16 md:py-20 bg-background"
        data-ocid="admission.fees_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Fees" title="Admission Fees" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              data-ocid="admission.admission_fee_card"
            >
              <MilitaryCard className="text-center border-t-4 border-t-primary">
                <CreditCard className="h-8 w-8 text-secondary mx-auto mb-3" />
                <div className="font-display font-bold text-4xl text-primary mb-1">
                  ₹{fees.admission.toString()}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-widest font-semibold">
                  One-Time Admission Fee
                </div>
              </MilitaryCard>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              data-ocid="admission.monthly_fee_card"
            >
              <MilitaryCard className="text-center border-t-4 border-t-secondary">
                <CreditCard className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="font-display font-bold text-4xl text-primary mb-1">
                  ₹{fees.monthly.toString()}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-widest font-semibold">
                  Monthly Fee
                </div>
              </MilitaryCard>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        className="py-16 bg-muted/40 border-y border-border"
        data-ocid="admission.documents_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Required"
            title="Documents Needed"
            subtitle="Prepare these documents before submitting your application."
          />
          <div className="max-w-2xl mx-auto">
            <MilitaryCard>
              <div className="flex items-center gap-3 mb-5">
                <FileText className="h-6 w-6 text-secondary" />
                <h3 className="font-display font-bold text-lg text-foreground">
                  Required Documents
                </h3>
              </div>
              <ul className="space-y-3" data-ocid="admission.documents_list">
                {docs.map((doc, i) => (
                  <li
                    key={doc}
                    className="flex items-center gap-3 text-foreground"
                    data-ocid={`admission.doc_item.${i + 1}`}
                  >
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </MilitaryCard>
          </div>
        </div>
      </section>

      <section
        className="py-16 bg-background"
        data-ocid="admission.steps_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Process" title="How to Apply" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                step: "01",
                title: "Contact Us",
                desc: "Call or visit our headquarters at Behala Chowrasta, Kolkata.",
              },
              {
                step: "02",
                title: "Submit Documents",
                desc: "Bring required documents and passport-size photos for registration.",
              },
              {
                step: "03",
                title: "Pay Admission Fee",
                desc: "Pay the one-time ₹350 admission fee and ₹50/month ongoing.",
              },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <MilitaryCard accent className="h-full">
                  <div className="font-display font-bold text-4xl text-primary/20 mb-2">
                    {s.step}
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </MilitaryCard>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/contact"
              className="military-button inline-flex items-center gap-2"
              data-ocid="admission.apply_button"
            >
              Apply Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
