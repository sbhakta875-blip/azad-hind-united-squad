import { Award, BookOpen, Shield } from "lucide-react";
import { motion } from "motion/react";
import { Layout } from "../components/Layout";
import { LoadingPage } from "../components/LoadingSpinner";
import { MilitaryCard } from "../components/MilitaryCard";
import { SectionHeader } from "../components/SectionHeader";
import { useOrgInfo } from "../hooks/use-backend";

export default function AboutPage() {
  const { data: orgInfo, isLoading } = useOrgInfo();

  const name = orgInfo?.name ?? "AZAD HIND UNITED SQUAD";
  const dept =
    orgInfo?.department ?? "Ministry of Youth Affairs & Sports, Govt. of India";
  const regNo = orgInfo?.registrationNo ?? "S/20/755";
  const affNo = orgInfo?.affiliationNo ?? "62213686 / NYK / 6221 / 2024–2025";
  const address =
    orgInfo?.address ??
    "Behala Chowrasta, 15/1 Raja Rammohan Roy Road, Kolkata – 700008";
  const phone = orgInfo?.phone ?? "9804312544";
  const mission = orgInfo?.mission ?? [
    "Character building through military discipline",
    "Self-reliance and physical fitness",
    "Patriotism and national service",
    "Leadership and community development",
  ];

  if (isLoading)
    return (
      <Layout>
        <LoadingPage />
      </Layout>
    );

  return (
    <Layout>
      <section
        className="bg-primary py-20 text-primary-foreground"
        data-ocid="about.hero_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-block mb-3 px-4 py-1 bg-secondary text-secondary-foreground text-xs font-bold tracking-widest uppercase">
              About Us
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-primary-foreground mb-4">
              {name}
            </h1>
            <p className="text-primary-foreground/70 max-w-2xl text-lg leading-relaxed">
              A premier youth development organization committed to building the
              next generation of disciplined, patriotic leaders.
            </p>
          </motion.div>
        </div>
      </section>

      <section
        className="py-16 md:py-20 bg-background"
        data-ocid="about.info_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeader
                badge="Identity"
                title="Our Organization"
                centered={false}
              />
              <dl className="space-y-4">
                {(
                  [
                    ["Organization Name", name],
                    ["Department", dept],
                    ["Registration No.", regNo],
                    ["Affiliation No.", affNo],
                    ["Headquarters", address],
                    ["Phone", phone],
                  ] as [string, string][]
                ).map(([k, v]) => (
                  <div key={k} className="border-b border-border pb-3">
                    <dt className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-0.5">
                      {k}
                    </dt>
                    <dd className="text-foreground font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeader
                badge="Purpose"
                title="Our Mission"
                centered={false}
              />
              <div className="space-y-4 mb-8">
                {mission.map((item, missionIndex) => (
                  <MilitaryCard
                    key={item}
                    accent
                    className="flex items-center gap-4"
                  >
                    <div className="h-8 w-8 bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground text-sm font-bold">
                        {missionIndex + 1}
                      </span>
                    </div>
                    <span className="font-medium text-foreground">{item}</span>
                  </MilitaryCard>
                ))}
              </div>
              <div className="bg-primary/5 border border-primary/20 p-6">
                <p className="text-muted-foreground leading-relaxed italic">
                  "Our goal is to instill in the youth of India the values of
                  discipline, service, and patriotism — equipping them to be
                  responsible citizens and future leaders of the nation."
                </p>
                <div className="mt-4 text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                  — Azad Hind United Squad
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        className="py-16 bg-muted/40 border-y border-border"
        data-ocid="about.values_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Values" title="What Guides Us" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Discipline",
                desc: "Strict adherence to military values, time management, and personal responsibility.",
              },
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "Education",
                desc: "Preparation for government exams, first aid, and civic knowledge.",
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Honor",
                desc: "Serving the nation with integrity, courage, and unwavering commitment.",
              },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <MilitaryCard className="text-center h-full">
                  <div className="text-secondary mb-4 flex justify-center">
                    {v.icon}
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">
                    {v.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </MilitaryCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
