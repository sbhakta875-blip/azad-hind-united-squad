import { Calendar, CheckCircle, Tent } from "lucide-react";
import { motion } from "motion/react";
import { Layout } from "../components/Layout";
import { LoadingPage } from "../components/LoadingSpinner";
import { MilitaryCard } from "../components/MilitaryCard";
import { SectionHeader } from "../components/SectionHeader";
import { useCamps } from "../hooks/use-backend";

const FALLBACK_CAMPS = [
  {
    id: 1n,
    name: "Summer Camp",
    duration: "4–7 days",
    description:
      "An intensive summer training program combining physical endurance, military skills, and team building exercises.",
    activities: [
      "Gun shooting",
      "Rock climbing",
      "Fire fighting",
      "Self-defense",
      "Cultural programs",
    ],
  },
  {
    id: 2n,
    name: "Winter Camp",
    duration: "5–7 days",
    description:
      "Cold-weather survival training, mountain trekking, and advanced military skills in challenging winter conditions.",
    activities: [
      "Cold weather survival",
      "Trekking",
      "First aid drills",
      "Camp craft",
      "Cultural programs",
    ],
  },
];

export default function CampsPage() {
  const { data: camps = [], isLoading } = useCamps();
  if (isLoading)
    return (
      <Layout>
        <LoadingPage />
      </Layout>
    );

  const displayCamps = camps.length > 0 ? camps : FALLBACK_CAMPS;

  return (
    <Layout>
      <section
        className="bg-primary py-20 text-primary-foreground"
        data-ocid="camps.hero_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block mb-3 px-4 py-1 bg-secondary text-secondary-foreground text-xs font-bold tracking-widest uppercase">
            Field Training
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-primary-foreground mb-4">
            Camps & Programs
          </h1>
          <p className="text-primary-foreground/70 max-w-xl text-lg leading-relaxed">
            Multi-day immersive camps that build survival skills, teamwork, and
            national character in real field conditions.
          </p>
        </div>
      </section>

      <section
        className="py-16 md:py-20 bg-background"
        data-ocid="camps.list_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Camps" title="Annual Camp Programs" />
          <div className="space-y-8">
            {displayCamps.map((camp, i) => (
              <motion.div
                key={String(camp.id)}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                data-ocid={`camps.camp_card.${i + 1}`}
              >
                <MilitaryCard className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-1 md:col-span-2">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="h-12 w-12 bg-primary flex items-center justify-center flex-shrink-0">
                        <Tent className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-2xl text-foreground">
                          {camp.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Calendar className="h-4 w-4 text-secondary" />
                          <span className="text-sm text-muted-foreground">
                            Duration: {camp.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {camp.description}
                    </p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
                      Activities Include
                    </div>
                    <ul className="space-y-2">
                      {camp.activities.map((activity) => (
                        <li
                          key={activity}
                          className="flex items-center gap-2 text-sm text-foreground"
                        >
                          <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </MilitaryCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-14 bg-muted/40 border-t border-border"
        data-ocid="camps.highlights_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Experience" title="What to Expect" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: "🎯",
                label: "Gun Shooting",
                desc: "Supervised target practice with safety protocols.",
              },
              {
                icon: "🧗",
                label: "Rock Climbing",
                desc: "Vertical training builds courage and physical strength.",
              },
              {
                icon: "🔥",
                label: "Fire Fighting",
                desc: "Emergency response and fire safety fundamentals.",
              },
              {
                icon: "🎭",
                label: "Cultural Programs",
                desc: "Patriotic performances celebrating national pride.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <MilitaryCard accent className="text-center h-full">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-display font-bold text-base text-foreground mb-1">
                    {item.label}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </MilitaryCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
