import { MapPin, Phone, Star, User } from "lucide-react";
import { motion } from "motion/react";
import { Layout } from "../components/Layout";
import { LoadingPage } from "../components/LoadingSpinner";
import { MilitaryCard } from "../components/MilitaryCard";
import { SectionHeader } from "../components/SectionHeader";
import { useBranches } from "../hooks/use-backend";

const FALLBACK_BRANCHES = [
  {
    id: 1n,
    name: "Behala Chowrasta Unit",
    address: "15/1 Raja Rammohan Roy Road, Kolkata – 700008",
    contactPerson: "Ratan Halder",
    phone: "9804312544",
    isHQ: true,
  },
  {
    id: 2n,
    name: "Barisha Branch",
    address: "Barisha, Kolkata",
    contactPerson: "Branch Commander",
    phone: "9804312544",
    isHQ: false,
  },
  {
    id: 3n,
    name: "Thakurpukur Branch",
    address: "Thakurpukur, Kolkata",
    contactPerson: "Branch Commander",
    phone: "9804312544",
    isHQ: false,
  },
  {
    id: 4n,
    name: "Bishnupur Branch",
    address: "Bishnupur, West Bengal",
    contactPerson: "Branch Commander",
    phone: "9804312544",
    isHQ: false,
  },
  {
    id: 5n,
    name: "Falta Branch",
    address: "Falta, South 24 Parganas",
    contactPerson: "Branch Commander",
    phone: "9804312544",
    isHQ: false,
  },
  {
    id: 6n,
    name: "Newtown Branch",
    address: "Newtown, Kolkata",
    contactPerson: "Branch Commander",
    phone: "9804312544",
    isHQ: false,
  },
  {
    id: 7n,
    name: "Kalagachhia Branch",
    address: "Kalagachhia, Howrah",
    contactPerson: "Branch Commander",
    phone: "9804312544",
    isHQ: false,
  },
  {
    id: 8n,
    name: "Shibrampur Branch",
    address: "Shibrampur, West Bengal",
    contactPerson: "Branch Commander",
    phone: "9804312544",
    isHQ: false,
  },
  {
    id: 9n,
    name: "Howrah Singur Branch",
    address: "Singur, Hooghly",
    contactPerson: "Branch Commander",
    phone: "9804312544",
    isHQ: false,
  },
];

export default function BranchesPage() {
  const { data: branches = [], isLoading } = useBranches();
  if (isLoading)
    return (
      <Layout>
        <LoadingPage />
      </Layout>
    );

  const displayBranches = branches.length > 0 ? branches : FALLBACK_BRANCHES;
  const hq = displayBranches.find((b) => b.isHQ);
  const regional = displayBranches.filter((b) => !b.isHQ);

  return (
    <Layout>
      <section
        className="bg-primary py-20 text-primary-foreground"
        data-ocid="branches.hero_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block mb-3 px-4 py-1 bg-secondary text-secondary-foreground text-xs font-bold tracking-widest uppercase">
            Network
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-primary-foreground mb-4">
            Our Branches
          </h1>
          <p className="text-primary-foreground/70 max-w-xl text-lg leading-relaxed">
            Operating across {displayBranches.length} locations in West Bengal,
            bringing military training to youth across the region.
          </p>
        </div>
      </section>

      {hq && (
        <section
          className="py-14 bg-background"
          data-ocid="branches.hq_section"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader badge="Headquarters" title="Main HQ" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
              data-ocid="branches.hq_card"
            >
              <MilitaryCard className="border-l-4 border-l-secondary">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="h-6 w-6 text-secondary" />
                  <h3 className="font-display font-bold text-xl text-foreground">
                    {hq.name}
                  </h3>
                  <span className="military-badge">HQ</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-secondary" />
                    <span>{hq.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <User className="h-4 w-4 flex-shrink-0 text-secondary" />
                    <span>{hq.contactPerson}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4 flex-shrink-0 text-secondary" />
                    <a
                      href={`tel:${hq.phone}`}
                      className="hover:text-foreground transition-smooth"
                    >
                      {hq.phone}
                    </a>
                  </div>
                </div>
              </MilitaryCard>
            </motion.div>
          </div>
        </section>
      )}

      <section
        className="py-16 bg-muted/40 border-y border-border"
        data-ocid="branches.regional_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Branches"
            title="Regional Branches"
            subtitle={`${regional.length} branches spread across the region`}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {regional.map((branch, i) => (
              <motion.div
                key={String(branch.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                data-ocid={`branches.branch_card.${i + 1}`}
              >
                <MilitaryCard className="h-full">
                  <h3 className="font-display font-bold text-base text-foreground mb-3">
                    {branch.name}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-secondary" />
                      <span>{branch.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <User className="h-4 w-4 flex-shrink-0 text-secondary" />
                      <span>{branch.contactPerson}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="h-4 w-4 flex-shrink-0 text-secondary" />
                      <a
                        href={`tel:${branch.phone}`}
                        className="hover:text-foreground transition-smooth"
                      >
                        {branch.phone}
                      </a>
                    </div>
                  </div>
                </MilitaryCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
