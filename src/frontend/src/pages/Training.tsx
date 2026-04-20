import { Flag, Shield, Target, Zap } from "lucide-react";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import { ActivityCategory } from "../backend";
import { Layout } from "../components/Layout";
import { LoadingPage } from "../components/LoadingSpinner";
import { MilitaryCard } from "../components/MilitaryCard";
import { SectionHeader } from "../components/SectionHeader";
import { useActivities } from "../hooks/use-backend";

const FALLBACK_TRAINING = [
  {
    id: 1n,
    name: "Drill & Marching",
    description:
      "Precision parade formations, cadence drills, and command-response training.",
    category: ActivityCategory.training,
  },
  {
    id: 2n,
    name: "Physical Training",
    description:
      "Endurance runs, strength conditioning, and military fitness benchmarks.",
    category: ActivityCategory.training,
  },
  {
    id: 3n,
    name: "Traffic Training",
    description:
      "Road safety, traffic management duties, and public service coordination.",
    category: ActivityCategory.training,
  },
  {
    id: 4n,
    name: "Band Training",
    description:
      "Military band performance, instrument proficiency, and ceremonial music.",
    category: ActivityCategory.training,
  },
  {
    id: 5n,
    name: "Govt. Exam Training",
    description:
      "Preparation for government and defense service competitive examinations.",
    category: ActivityCategory.training,
  },
  {
    id: 6n,
    name: "First Aid",
    description:
      "Basic emergency response, wound care, and casualty management protocols.",
    category: ActivityCategory.training,
  },
  {
    id: 7n,
    name: "Defense Training",
    description:
      "Self-defense techniques, situational awareness, and tactical fundamentals.",
    category: ActivityCategory.training,
  },
  {
    id: 8n,
    name: "Camping",
    description:
      "Field craft, survival skills, and outdoor leadership exercises.",
    category: ActivityCategory.training,
  },
];

const FALLBACK_EVENTS = [
  {
    id: 9n,
    name: "RDC Parade",
    description:
      "Republic Day Camp parade training and national-level competitive drill.",
    category: ActivityCategory.event,
  },
  {
    id: 10n,
    name: "Independence Day Parade",
    description: "Annual 15th August parade drills and ceremonial formations.",
    category: ActivityCategory.event,
  },
  {
    id: 11n,
    name: "PTS Parade",
    description: "Pre-Trekking and Service parade training exercises.",
    category: ActivityCategory.event,
  },
];

const ICON_MAP: Record<string, ReactNode> = {
  "Drill & Marching": <Target className="h-6 w-6" />,
  "Physical Training": <Zap className="h-6 w-6" />,
  "Defense Training": <Shield className="h-6 w-6" />,
};

export default function TrainingPage() {
  const { data: activities = [], isLoading } = useActivities();
  if (isLoading)
    return (
      <Layout>
        <LoadingPage />
      </Layout>
    );

  const trainings = activities.filter(
    (a) => a.category === ActivityCategory.training,
  );
  const events = activities.filter(
    (a) => a.category === ActivityCategory.event,
  );
  const displayTrainings = trainings.length > 0 ? trainings : FALLBACK_TRAINING;
  const displayEvents = events.length > 0 ? events : FALLBACK_EVENTS;

  return (
    <Layout>
      <section
        className="bg-primary py-20 text-primary-foreground"
        data-ocid="training.hero_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block mb-3 px-4 py-1 bg-secondary text-secondary-foreground text-xs font-bold tracking-widest uppercase">
            Programs
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-primary-foreground mb-4">
            Training & Activities
          </h1>
          <p className="text-primary-foreground/70 max-w-xl text-lg leading-relaxed">
            Comprehensive military-style training programs building discipline,
            fitness, and national character.
          </p>
        </div>
      </section>

      <section
        className="py-16 md:py-20 bg-background"
        data-ocid="training.programs_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Training"
            title="Core Training Programs"
            subtitle="Eight pillars of cadet development forming the foundation of the Azad Hind United Squad program."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {displayTrainings.map((t, i) => (
              <motion.div
                key={String(t.id)}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                data-ocid={`training.program_card.${i + 1}`}
              >
                <MilitaryCard accent className="h-full">
                  <div className="text-secondary mb-3">
                    {ICON_MAP[t.name] ?? <Flag className="h-6 w-6" />}
                  </div>
                  <h3 className="font-display font-bold text-base text-foreground mb-2">
                    {t.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t.description}
                  </p>
                </MilitaryCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-16 bg-muted/40 border-y border-border"
        data-ocid="training.events_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Events"
            title="Key Parade Events"
            subtitle="Annual parades and ceremonies where cadets represent the organization at national level."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayEvents.map((e, i) => (
              <motion.div
                key={String(e.id)}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-ocid={`training.event_card.${i + 1}`}
              >
                <MilitaryCard className="border-t-4 border-t-primary h-full">
                  <Flag className="h-6 w-6 text-secondary mb-3" />
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {e.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {e.description}
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
