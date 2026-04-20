import { Shield, Star } from "lucide-react";
import { motion } from "motion/react";
import { TeamRole } from "../backend";
import { Layout } from "../components/Layout";
import { LoadingPage } from "../components/LoadingSpinner";
import { MilitaryCard } from "../components/MilitaryCard";
import { SectionHeader } from "../components/SectionHeader";
import { useTeamMembers } from "../hooks/use-backend";

const FALLBACK_LEADERS = [
  {
    id: 1n,
    name: "Ratan Halder",
    title: "Chief Commander Officer",
    role: TeamRole.leadership,
    order: 1n,
  },
  {
    id: 2n,
    name: "Subham Bhakta",
    title: "Asst. Chief Commander Officer",
    role: TeamRole.leadership,
    order: 2n,
  },
];
const FALLBACK_TRAINERS = [
  {
    id: 3n,
    name: "Abhijit Adhikary",
    title: "Senior Trainer",
    role: TeamRole.trainer,
    order: 1n,
  },
  {
    id: 4n,
    name: "Mousumi Mondal",
    title: "Official Member",
    role: TeamRole.senior,
    order: 2n,
  },
  {
    id: 5n,
    name: "Keya Samanta",
    title: "Senior Member",
    role: TeamRole.senior,
    order: 3n,
  },
];

type Member = {
  id: bigint;
  name: string;
  title: string;
  role: TeamRole;
  photoBlob?: { getDirectURL: () => string };
};

function MemberCard({ member, index }: { member: Member; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      data-ocid={`leadership.member_card.${index + 1}`}
    >
      <MilitaryCard className="text-center h-full">
        <div className="h-28 w-28 mx-auto mb-4 border-2 border-secondary bg-primary/10 flex items-center justify-center overflow-hidden">
          {member.photoBlob ? (
            <img
              src={member.photoBlob.getDirectURL()}
              alt={member.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <Shield className="h-12 w-12 text-primary/30" />
          )}
        </div>
        <h3 className="font-display font-bold text-lg text-foreground">
          {member.name}
        </h3>
        <div className="military-badge mt-2">{member.title}</div>
        <div className="mt-2 text-xs text-muted-foreground uppercase tracking-widest">
          {member.role === TeamRole.leadership
            ? "Leadership"
            : member.role === TeamRole.trainer
              ? "Trainer"
              : "Senior"}
        </div>
      </MilitaryCard>
    </motion.div>
  );
}

export default function LeadershipPage() {
  const { data: members = [], isLoading } = useTeamMembers();
  if (isLoading)
    return (
      <Layout>
        <LoadingPage />
      </Layout>
    );

  const leaders = members
    .filter((m) => m.role === TeamRole.leadership)
    .sort((a, b) => Number(a.order - b.order));
  const trainers = members
    .filter((m) => m.role === TeamRole.trainer || m.role === TeamRole.senior)
    .sort((a, b) => Number(a.order - b.order));

  const displayLeaders = leaders.length > 0 ? leaders : FALLBACK_LEADERS;
  const displayTrainers = trainers.length > 0 ? trainers : FALLBACK_TRAINERS;

  return (
    <Layout>
      <section
        className="bg-primary py-20 text-primary-foreground"
        data-ocid="leadership.hero_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block mb-3 px-4 py-1 bg-secondary text-secondary-foreground text-xs font-bold tracking-widest uppercase">
            Our Team
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-primary-foreground mb-4">
            Meet Our Leadership
          </h1>
          <p className="text-primary-foreground/70 max-w-xl text-lg leading-relaxed">
            Empowering the youth to serve the nation with dedication and honor.
          </p>
        </div>
      </section>

      <section
        className="py-16 md:py-20 bg-background"
        data-ocid="leadership.command_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Command" title="Commanding Officers" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {displayLeaders.map((m, i) => (
              <MemberCard key={String(m.id)} member={m} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-16 bg-muted/40 border-y border-border"
        data-ocid="leadership.trainers_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Staff" title="Seniors & Trainers" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {displayTrainers.map((m, i) => (
              <MemberCard key={String(m.id)} member={m} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-14 bg-background"
        data-ocid="leadership.values_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Motto" title="Our Core Principles" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Service Before Self",
              "Discipline & Honor",
              "Unity & Strength",
            ].map((v, i) => (
              <motion.div
                key={v}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <MilitaryCard accent className="text-center">
                  <Star className="h-6 w-6 text-secondary mx-auto mb-3" />
                  <h3 className="font-display font-bold text-lg text-foreground">
                    {v}
                  </h3>
                </MilitaryCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
