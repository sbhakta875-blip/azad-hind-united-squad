import { Link, useNavigate } from "@tanstack/react-router";
import {
  Activity,
  Check,
  FileText,
  Image,
  Info,
  LogOut,
  Mail,
  MapPin,
  Plus,
  Shield,
  Star,
  Tent,
  Trash2,
  Upload,
  Users,
  X,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { toast } from "sonner";
import { ExternalBlob } from "../backend";
import {
  ActivityCategory as ActivityCategoryEnum,
  MediaType,
  TeamRole as TeamRoleEnum,
} from "../backend";
import { LoadingPage } from "../components/LoadingSpinner";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Skeleton } from "../components/ui/skeleton";
import { Switch } from "../components/ui/switch";
import { Textarea } from "../components/ui/textarea";
import { useAuth } from "../hooks/use-auth";
import {
  useActivities,
  useAddActivity,
  useAddBranch,
  useAddGalleryItem,
  useAddTeamMember,
  useAdmissionInfo,
  useBranches,
  useContactSubmissions,
  useDeleteActivity,
  useDeleteBranch,
  useDeleteGalleryItem,
  useDeleteTeamMember,
  useGalleryItems,
  useMarkContactRead,
  useOrgInfo,
  useTeamMembers,
  useUpdateAdmissionInfo,
  useUpdateOrgInfo,
  useUpdateOrgLogo,
} from "../hooks/use-backend";
import { useAppStore } from "../store";
import type {
  ActivityCategory,
  AdmissionInfo,
  OrgInfo,
  TeamRole,
} from "../types";

// ─── types ───────────────────────────────────────────────────────────────────
type AdminTab =
  | "overview"
  | "org"
  | "team"
  | "activities"
  | "branches"
  | "gallery"
  | "contacts"
  | "admission";

const TAB_LIST: { id: AdminTab; label: string; icon: ReactNode }[] = [
  { id: "overview", label: "Overview", icon: <Star className="h-4 w-4" /> },
  { id: "org", label: "Org Info", icon: <Info className="h-4 w-4" /> },
  { id: "team", label: "Team", icon: <Users className="h-4 w-4" /> },
  {
    id: "activities",
    label: "Activities",
    icon: <Activity className="h-4 w-4" />,
  },
  { id: "branches", label: "Branches", icon: <MapPin className="h-4 w-4" /> },
  { id: "gallery", label: "Gallery", icon: <Image className="h-4 w-4" /> },
  { id: "contacts", label: "Messages", icon: <Mail className="h-4 w-4" /> },
  {
    id: "admission",
    label: "Admission",
    icon: <FileText className="h-4 w-4" />,
  },
];

// ─── helpers ──────────────────────────────────────────────────────────────────
function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display font-bold text-xl text-foreground mb-5 pb-3 border-b-2 border-primary flex items-center gap-2">
      {children}
    </h2>
  );
}

function EmptyState({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <div className="text-center py-12 text-muted-foreground">
      <div className="opacity-25 mb-3 flex justify-center">{icon}</div>
      <p className="text-sm">{text}</p>
    </div>
  );
}

function UploadButton({
  label,
  accept,
  onFile,
  loading,
}: {
  label: string;
  accept: string;
  onFile: (file: File) => void;
  loading?: boolean;
}) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <>
      <input
        ref={ref}
        type="file"
        accept={accept}
        className="hidden"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) onFile(f);
          e.target.value = "";
        }}
      />
      <Button
        type="button"
        variant="outline"
        size="sm"
        disabled={loading}
        onClick={() => ref.current?.click()}
        className="gap-1.5"
        data-ocid="admin.upload_button"
      >
        <Upload className="h-3.5 w-3.5" />
        {loading ? "Uploading…" : label}
      </Button>
    </>
  );
}

// ─── overview ─────────────────────────────────────────────────────────────────
function OverviewTab({ onNavigate }: { onNavigate: (tab: AdminTab) => void }) {
  const { data: members = [] } = useTeamMembers();
  const { data: gallery = [] } = useGalleryItems();
  const { data: submissions = [] } = useContactSubmissions();
  const { data: branches = [] } = useBranches();
  const { data: activities = [] } = useActivities();

  const stats: {
    label: string;
    value: number;
    tab: AdminTab;
    icon: ReactNode;
  }[] = [
    {
      label: "Team Members",
      value: members.length,
      tab: "team",
      icon: <Users className="h-6 w-6" />,
    },
    {
      label: "Gallery Items",
      value: gallery.length,
      tab: "gallery",
      icon: <Image className="h-6 w-6" />,
    },
    {
      label: "Unread Messages",
      value: submissions.filter((s) => !s.isRead).length,
      tab: "contacts",
      icon: <Mail className="h-6 w-6" />,
    },
    {
      label: "Branches",
      value: branches.length,
      tab: "branches",
      icon: <MapPin className="h-6 w-6" />,
    },
    {
      label: "Activities",
      value: activities.length,
      tab: "activities",
      icon: <Activity className="h-6 w-6" />,
    },
    {
      label: "Total Messages",
      value: submissions.length,
      tab: "contacts",
      icon: <FileText className="h-6 w-6" />,
    },
  ];

  return (
    <div data-ocid="admin.overview_panel">
      <SectionTitle>
        <Star className="h-5 w-5 text-secondary" />
        Dashboard Overview
      </SectionTitle>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {stats.map((s) => (
          <button
            key={s.label}
            type="button"
            onClick={() => onNavigate(s.tab)}
            className="bg-muted/50 border border-border p-4 text-left hover:bg-primary/5 hover:border-primary transition-smooth group"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="text-muted-foreground group-hover:text-primary transition-smooth">
                {s.icon}
              </div>
              <span className="font-display font-bold text-3xl text-foreground">
                {s.value}
              </span>
            </div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
              {s.label}
            </div>
          </button>
        ))}
      </div>

      <div className="border-t border-border pt-6">
        <p className="text-sm text-muted-foreground font-medium mb-3 uppercase tracking-wider">
          Quick Navigation
        </p>
        <div className="flex flex-wrap gap-2">
          {TAB_LIST.filter((t) => t.id !== "overview").map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => onNavigate(t.id)}
              className="flex items-center gap-1.5 px-3 py-2 text-xs border border-border bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth font-medium"
            >
              {t.icon}
              {t.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── org info ─────────────────────────────────────────────────────────────────
function OrgTab() {
  const { data: orgInfo, isLoading } = useOrgInfo();
  const updateOrgInfo = useUpdateOrgInfo();
  const updateOrgLogo = useUpdateOrgLogo();
  const [uploading, setUploading] = useState(false);

  const [form, setForm] = useState<OrgInfo>({
    name: "",
    tagline: "",
    department: "",
    registrationNo: "",
    affiliationNo: "",
    address: "",
    phone: "",
    email: "",
    mission: [],
  });
  const [missionText, setMissionText] = useState("");
  const [initialised, setInitialised] = useState(false);

  if (!initialised && orgInfo) {
    setForm({ ...orgInfo, mission: orgInfo.mission ?? [] });
    setMissionText((orgInfo.mission ?? []).join("\n"));
    setInitialised(true);
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const missionArr = missionText
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean);
      await updateOrgInfo.mutateAsync({ ...form, mission: missionArr });
      toast.success("Organisation info saved successfully.");
    } catch {
      toast.error("Failed to save organisation info.");
    }
  };

  const handleLogoUpload = async (file: File) => {
    setUploading(true);
    try {
      const bytes = new Uint8Array(await file.arrayBuffer());
      const blob = ExternalBlob.fromBytes(bytes);
      await updateOrgLogo.mutateAsync(blob);
      toast.success("Logo updated.");
    } catch {
      toast.error("Logo upload failed.");
    } finally {
      setUploading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-3">
        {[...Array(5)].map((_, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: skeleton placeholder
          <Skeleton key={i} className="h-10 w-full" />
        ))}
      </div>
    );
  }

  return (
    <div data-ocid="admin.org_panel">
      <SectionTitle>
        <Info className="h-5 w-5 text-secondary" />
        Organisation Information
      </SectionTitle>

      {/* Logo */}
      <div className="mb-6 flex items-center gap-4">
        <div className="h-16 w-16 border-2 border-border bg-muted flex items-center justify-center overflow-hidden">
          {orgInfo?.logoBlob ? (
            <img
              src={orgInfo.logoBlob.getDirectURL()}
              alt="Logo"
              className="h-full w-full object-contain"
            />
          ) : (
            <Shield className="h-8 w-8 text-muted-foreground opacity-40" />
          )}
        </div>
        <div>
          <p className="text-sm font-medium text-foreground mb-1">
            Organisation Logo
          </p>
          <UploadButton
            label="Upload Logo"
            accept="image/*"
            onFile={handleLogoUpload}
            loading={uploading}
          />
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-4 max-w-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="org-name">Organisation Name</Label>
            <Input
              id="org-name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Azad Hind United Squad"
              data-ocid="admin.org_name_input"
            />
          </div>
          <div>
            <Label htmlFor="org-tagline">Tagline</Label>
            <Input
              id="org-tagline"
              value={form.tagline}
              onChange={(e) => setForm({ ...form, tagline: e.target.value })}
              placeholder="Building discipline, leadership & patriotism"
              data-ocid="admin.org_tagline_input"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="org-dept">Department</Label>
            <Input
              id="org-dept"
              value={form.department}
              onChange={(e) => setForm({ ...form, department: e.target.value })}
              data-ocid="admin.org_dept_input"
            />
          </div>
          <div>
            <Label htmlFor="org-reg">Registration No.</Label>
            <Input
              id="org-reg"
              value={form.registrationNo}
              onChange={(e) =>
                setForm({ ...form, registrationNo: e.target.value })
              }
              data-ocid="admin.org_reg_input"
            />
          </div>
        </div>
        <div>
          <Label htmlFor="org-affil">Affiliation No.</Label>
          <Input
            id="org-affil"
            value={form.affiliationNo}
            onChange={(e) =>
              setForm({ ...form, affiliationNo: e.target.value })
            }
            data-ocid="admin.org_affil_input"
          />
        </div>
        <div>
          <Label htmlFor="org-address">Address</Label>
          <Textarea
            id="org-address"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            rows={2}
            data-ocid="admin.org_address_input"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="org-phone">Phone</Label>
            <Input
              id="org-phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              data-ocid="admin.org_phone_input"
            />
          </div>
          <div>
            <Label htmlFor="org-email">Email</Label>
            <Input
              id="org-email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              data-ocid="admin.org_email_input"
            />
          </div>
        </div>
        <div>
          <Label htmlFor="org-mission">Mission Points (one per line)</Label>
          <Textarea
            id="org-mission"
            value={missionText}
            onChange={(e) => setMissionText(e.target.value)}
            rows={4}
            placeholder="Instilling discipline and leadership in youth..."
            data-ocid="admin.org_mission_textarea"
          />
        </div>
        <Button
          type="submit"
          disabled={updateOrgInfo.isPending}
          className="military-button"
          data-ocid="admin.org_save_button"
        >
          {updateOrgInfo.isPending ? "Saving…" : "Save Changes"}
        </Button>
      </form>
    </div>
  );
}

// ─── team members ─────────────────────────────────────────────────────────────
function TeamTab() {
  const { data: members = [], isLoading } = useTeamMembers();
  const addMember = useAddTeamMember();
  const deleteMember = useDeleteTeamMember();
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [role, setRole] = useState<TeamRole>(TeamRoleEnum.trainer);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !title.trim()) {
      toast.error("Name and title are required.");
      return;
    }
    setUploading(true);
    try {
      let photoBlob: ExternalBlob | null = null;
      if (photoFile) {
        const bytes = new Uint8Array(await photoFile.arrayBuffer());
        photoBlob = ExternalBlob.fromBytes(bytes);
      }
      await addMember.mutateAsync({
        name: name.trim(),
        title: title.trim(),
        role,
        photoBlob,
        order: BigInt(members.length + 1),
      });
      toast.success("Team member added.");
      setName("");
      setTitle("");
      setRole(TeamRoleEnum.trainer);
      setPhotoFile(null);
      setShowForm(false);
    } catch {
      toast.error("Failed to add team member.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div data-ocid="admin.team_panel">
      <div className="flex items-center justify-between mb-5">
        <SectionTitle>
          <Users className="h-5 w-5 text-secondary" />
          Team Members
        </SectionTitle>
        <button
          type="button"
          onClick={() => setShowForm((v) => !v)}
          className="military-button flex items-center gap-1.5 py-2 px-4 text-sm"
          data-ocid="admin.team_add_button"
        >
          {showForm ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          {showForm ? "Cancel" : "Add Member"}
        </button>
      </div>

      {showForm && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-muted/40 border border-border p-5 mb-6"
          data-ocid="admin.team_add_form"
        >
          <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
            New Team Member
          </h3>
          <form onSubmit={handleAdd} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="m-name">Full Name *</Label>
                <Input
                  id="m-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ratan Halder"
                  data-ocid="admin.team_name_input"
                />
              </div>
              <div>
                <Label htmlFor="m-title">Title / Rank *</Label>
                <Input
                  id="m-title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Commanding Officer"
                  data-ocid="admin.team_title_input"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="m-role">Role</Label>
                <select
                  id="m-role"
                  value={role}
                  onChange={(e) => setRole(e.target.value as TeamRole)}
                  className="w-full h-10 px-3 border border-input bg-background text-foreground text-sm rounded-sm"
                  data-ocid="admin.team_role_select"
                >
                  <option value={TeamRoleEnum.leadership}>Leadership</option>
                  <option value={TeamRoleEnum.trainer}>Trainer</option>
                  <option value={TeamRoleEnum.senior}>Senior</option>
                </select>
              </div>
              <div>
                <Label>Photo (optional)</Label>
                <div className="flex items-center gap-2">
                  <UploadButton
                    label={
                      photoFile
                        ? `${photoFile.name.slice(0, 16)}…`
                        : "Choose Photo"
                    }
                    accept="image/*"
                    onFile={setPhotoFile}
                  />
                  {photoFile && (
                    <button
                      type="button"
                      onClick={() => setPhotoFile(null)}
                      className="text-destructive hover:underline text-xs"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            </div>
            <Button
              type="submit"
              disabled={uploading || addMember.isPending}
              className="military-button"
              data-ocid="admin.team_submit_button"
            >
              {uploading || addMember.isPending ? "Adding…" : "Add Member"}
            </Button>
          </form>
        </motion.div>
      )}

      {isLoading ? (
        <div className="space-y-2">
          {["sk-a", "sk-b", "sk-c"].map((k) => (
            <Skeleton key={k} className="h-16 w-full" />
          ))}
        </div>
      ) : members.length === 0 ? (
        <div data-ocid="admin.team_empty_state">
          <EmptyState
            icon={<Users className="h-12 w-12" />}
            text="No team members added yet. Add the first member above."
          />
        </div>
      ) : (
        <div className="space-y-2" data-ocid="admin.team_list">
          {members.map((m, i) => (
            <div
              key={String(m.id)}
              className="flex items-center gap-3 border border-border p-3 bg-card hover:bg-muted/30 transition-smooth"
              data-ocid={`admin.team_item.${i + 1}`}
            >
              <div className="h-10 w-10 border border-border bg-muted flex-shrink-0 overflow-hidden">
                {m.photoBlob ? (
                  <img
                    src={m.photoBlob.getDirectURL()}
                    alt={m.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-muted-foreground">
                    <Users className="h-5 w-5" />
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-foreground text-sm truncate">
                  {m.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {m.title} · <span className="capitalize">{m.role}</span>
                </div>
              </div>
              <button
                type="button"
                onClick={async () => {
                  if (!confirm(`Delete ${m.name}?`)) return;
                  await deleteMember.mutateAsync(m.id);
                  toast.success("Member deleted.");
                }}
                className="p-2 hover:bg-destructive/10 text-destructive transition-smooth flex-shrink-0"
                aria-label="Delete member"
                data-ocid={`admin.team_delete_button.${i + 1}`}
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── activities ───────────────────────────────────────────────────────────────
function ActivitiesTab() {
  const { data: activities = [], isLoading } = useActivities();
  const addActivity = useAddActivity();
  const deleteActivity = useDeleteActivity();
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<ActivityCategory>(
    ActivityCategoryEnum.training,
  );

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !description.trim()) {
      toast.error("Name and description are required.");
      return;
    }
    try {
      await addActivity.mutateAsync({
        name: name.trim(),
        description: description.trim(),
        category,
      });
      toast.success("Activity added.");
      setName("");
      setDescription("");
      setCategory(ActivityCategoryEnum.training);
      setShowForm(false);
    } catch {
      toast.error("Failed to add activity.");
    }
  };

  return (
    <div data-ocid="admin.activities_panel">
      <div className="flex items-center justify-between mb-5">
        <SectionTitle>
          <Activity className="h-5 w-5 text-secondary" />
          Activities & Events
        </SectionTitle>
        <button
          type="button"
          onClick={() => setShowForm((v) => !v)}
          className="military-button flex items-center gap-1.5 py-2 px-4 text-sm"
          data-ocid="admin.activities_add_button"
        >
          {showForm ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          {showForm ? "Cancel" : "Add Activity"}
        </button>
      </div>

      {showForm && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="bg-muted/40 border border-border p-5 mb-6"
          data-ocid="admin.activities_add_form"
        >
          <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
            New Activity
          </h3>
          <form onSubmit={handleAdd} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="act-name">Activity Name *</Label>
                <Input
                  id="act-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Leadership Training"
                  data-ocid="admin.activity_name_input"
                />
              </div>
              <div>
                <Label htmlFor="act-cat">Category</Label>
                <select
                  id="act-cat"
                  value={category}
                  onChange={(e) =>
                    setCategory(e.target.value as ActivityCategory)
                  }
                  className="w-full h-10 px-3 border border-input bg-background text-foreground text-sm rounded-sm"
                  data-ocid="admin.activity_category_select"
                >
                  <option value={ActivityCategoryEnum.training}>
                    Training
                  </option>
                  <option value={ActivityCategoryEnum.event}>Event</option>
                </select>
              </div>
            </div>
            <div>
              <Label htmlFor="act-desc">Description *</Label>
              <Textarea
                id="act-desc"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                placeholder="Describe the activity..."
                data-ocid="admin.activity_desc_textarea"
              />
            </div>
            <Button
              type="submit"
              disabled={addActivity.isPending}
              className="military-button"
              data-ocid="admin.activity_submit_button"
            >
              {addActivity.isPending ? "Adding…" : "Add Activity"}
            </Button>
          </form>
        </motion.div>
      )}

      {isLoading ? (
        <div className="space-y-2">
          {["sk-a", "sk-b", "sk-c"].map((k) => (
            <Skeleton key={k} className="h-14 w-full" />
          ))}
        </div>
      ) : activities.length === 0 ? (
        <div data-ocid="admin.activities_empty_state">
          <EmptyState
            icon={<Activity className="h-12 w-12" />}
            text="No activities added yet."
          />
        </div>
      ) : (
        <div className="space-y-2" data-ocid="admin.activities_list">
          {activities.map((a, i) => (
            <div
              key={String(a.id)}
              className="flex items-start gap-3 border border-border p-3 bg-card"
              data-ocid={`admin.activity_item.${i + 1}`}
            >
              <div className="flex-shrink-0 mt-0.5">
                <span
                  className={`inline-block px-2 py-0.5 text-xs font-semibold uppercase tracking-wider ${a.category === "training" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}
                >
                  {a.category}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-foreground text-sm">
                  {a.name}
                </div>
                <div className="text-xs text-muted-foreground line-clamp-1">
                  {a.description}
                </div>
              </div>
              <button
                type="button"
                onClick={async () => {
                  if (!confirm("Delete this activity?")) return;
                  await deleteActivity.mutateAsync(a.id);
                  toast.success("Deleted.");
                }}
                className="p-2 hover:bg-destructive/10 text-destructive transition-smooth flex-shrink-0"
                aria-label="Delete"
                data-ocid={`admin.activity_delete_button.${i + 1}`}
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── branches ─────────────────────────────────────────────────────────────────
function BranchesTab() {
  const { data: branches = [], isLoading } = useBranches();
  const addBranch = useAddBranch();
  const deleteBranch = useDeleteBranch();
  const [showForm, setShowForm] = useState(false);
  const [bName, setBName] = useState("");
  const [bAddress, setBAddress] = useState("");
  const [bContact, setBContact] = useState("");
  const [bPhone, setBPhone] = useState("");
  const [bIsHQ, setBIsHQ] = useState(false);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bName.trim() || !bAddress.trim()) {
      toast.error("Name and address are required.");
      return;
    }
    try {
      await addBranch.mutateAsync({
        name: bName.trim(),
        address: bAddress.trim(),
        contactPerson: bContact.trim(),
        phone: bPhone.trim(),
        isHQ: bIsHQ,
      });
      toast.success("Branch added.");
      setBName("");
      setBAddress("");
      setBContact("");
      setBPhone("");
      setBIsHQ(false);
      setShowForm(false);
    } catch {
      toast.error("Failed to add branch.");
    }
  };

  return (
    <div data-ocid="admin.branches_panel">
      <div className="flex items-center justify-between mb-5">
        <SectionTitle>
          <MapPin className="h-5 w-5 text-secondary" />
          Branches & Locations
        </SectionTitle>
        <button
          type="button"
          onClick={() => setShowForm((v) => !v)}
          className="military-button flex items-center gap-1.5 py-2 px-4 text-sm"
          data-ocid="admin.branches_add_button"
        >
          {showForm ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          {showForm ? "Cancel" : "Add Branch"}
        </button>
      </div>

      {showForm && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="bg-muted/40 border border-border p-5 mb-6"
          data-ocid="admin.branches_add_form"
        >
          <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
            New Branch
          </h3>
          <form onSubmit={handleAdd} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="b-name">Branch Name *</Label>
                <Input
                  id="b-name"
                  value={bName}
                  onChange={(e) => setBName(e.target.value)}
                  placeholder="Behala HQ"
                  data-ocid="admin.branch_name_input"
                />
              </div>
              <div>
                <Label htmlFor="b-contact">Contact Person</Label>
                <Input
                  id="b-contact"
                  value={bContact}
                  onChange={(e) => setBContact(e.target.value)}
                  data-ocid="admin.branch_contact_input"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="b-address">Address *</Label>
              <Input
                id="b-address"
                value={bAddress}
                onChange={(e) => setBAddress(e.target.value)}
                placeholder="15/1, Raja Rammohan Roy Road, Kolkata"
                data-ocid="admin.branch_address_input"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
              <div>
                <Label htmlFor="b-phone">Phone</Label>
                <Input
                  id="b-phone"
                  value={bPhone}
                  onChange={(e) => setBPhone(e.target.value)}
                  data-ocid="admin.branch_phone_input"
                />
              </div>
              <div className="flex items-center gap-3 pb-1">
                <Switch
                  id="b-hq"
                  checked={bIsHQ}
                  onCheckedChange={setBIsHQ}
                  data-ocid="admin.branch_hq_switch"
                />
                <Label htmlFor="b-hq">Headquarters</Label>
              </div>
            </div>
            <Button
              type="submit"
              disabled={addBranch.isPending}
              className="military-button"
              data-ocid="admin.branch_submit_button"
            >
              {addBranch.isPending ? "Adding…" : "Add Branch"}
            </Button>
          </form>
        </motion.div>
      )}

      {isLoading ? (
        <div className="space-y-2">
          {["sk-a", "sk-b", "sk-c"].map((k) => (
            <Skeleton key={k} className="h-14 w-full" />
          ))}
        </div>
      ) : branches.length === 0 ? (
        <div data-ocid="admin.branches_empty_state">
          <EmptyState
            icon={<MapPin className="h-12 w-12" />}
            text="No branches added yet."
          />
        </div>
      ) : (
        <div className="space-y-2" data-ocid="admin.branches_list">
          {branches.map((b, i) => (
            <div
              key={String(b.id)}
              className="flex items-start gap-3 border border-border p-4 bg-card"
              data-ocid={`admin.branch_item.${i + 1}`}
            >
              <MapPin className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-medium text-foreground text-sm">
                    {b.name}
                  </span>
                  {b.isHQ && (
                    <span className="military-badge text-xs py-0.5">HQ</span>
                  )}
                </div>
                <div className="text-xs text-muted-foreground">{b.address}</div>
                {b.contactPerson && (
                  <div className="text-xs text-muted-foreground">
                    {b.contactPerson} · {b.phone}
                  </div>
                )}
              </div>
              <button
                type="button"
                onClick={async () => {
                  if (!confirm("Delete this branch?")) return;
                  await deleteBranch.mutateAsync(b.id);
                  toast.success("Deleted.");
                }}
                className="p-2 hover:bg-destructive/10 text-destructive transition-smooth flex-shrink-0"
                aria-label="Delete branch"
                data-ocid={`admin.branch_delete_button.${i + 1}`}
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── gallery ──────────────────────────────────────────────────────────────────
function GalleryTab() {
  const { data: items = [], isLoading } = useGalleryItems();
  const addItem = useAddGalleryItem();
  const deleteItem = useDeleteGalleryItem();
  const [showPhotoForm, setShowPhotoForm] = useState(false);
  const [showVideoForm, setShowVideoForm] = useState(false);
  const [gTitle, setGTitle] = useState("");
  const [gFile, setGFile] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [uploading, setUploading] = useState(false);

  const handlePhotoAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!gTitle.trim() || !gFile) {
      toast.error("Title and photo are required.");
      return;
    }
    setUploading(true);
    try {
      const bytes = new Uint8Array(await gFile.arrayBuffer());
      const blob = ExternalBlob.fromBytes(bytes);
      await addItem.mutateAsync({
        title: gTitle.trim(),
        mediaType: MediaType.photo,
        blob,
        thumbnailBlob: null,
      });
      toast.success("Photo uploaded.");
      setGTitle("");
      setGFile(null);
      setShowPhotoForm(false);
    } catch {
      toast.error("Upload failed.");
    } finally {
      setUploading(false);
    }
  };

  const handleVideoAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoTitle.trim() || !videoUrl.trim()) {
      toast.error("Title and URL are required.");
      return;
    }
    try {
      const blob = ExternalBlob.fromURL(videoUrl.trim());
      await addItem.mutateAsync({
        title: videoTitle.trim(),
        mediaType: MediaType.video,
        blob,
        thumbnailBlob: null,
      });
      toast.success("Video added.");
      setVideoTitle("");
      setVideoUrl("");
      setShowVideoForm(false);
    } catch {
      toast.error("Failed to add video.");
    }
  };

  return (
    <div data-ocid="admin.gallery_panel">
      <div className="flex items-center justify-between mb-5">
        <SectionTitle>
          <Image className="h-5 w-5 text-secondary" />
          Gallery Management
        </SectionTitle>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => {
              setShowPhotoForm((v) => !v);
              setShowVideoForm(false);
            }}
            className="military-button flex items-center gap-1.5 py-2 px-3 text-sm"
            data-ocid="admin.gallery_add_photo_button"
          >
            {showPhotoForm ? (
              <X className="h-4 w-4" />
            ) : (
              <Upload className="h-4 w-4" />
            )}
            {showPhotoForm ? "Cancel" : "Upload Photo"}
          </button>
          <button
            type="button"
            onClick={() => {
              setShowVideoForm((v) => !v);
              setShowPhotoForm(false);
            }}
            className="military-button-secondary flex items-center gap-1.5 py-2 px-3 text-sm"
            data-ocid="admin.gallery_add_video_button"
          >
            {showVideoForm ? (
              <X className="h-4 w-4" />
            ) : (
              <Plus className="h-4 w-4" />
            )}
            {showVideoForm ? "Cancel" : "Add Video"}
          </button>
        </div>
      </div>

      {showPhotoForm && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="bg-muted/40 border border-border p-5 mb-6"
          data-ocid="admin.gallery_photo_form"
        >
          <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
            Upload Photo
          </h3>
          <form onSubmit={handlePhotoAdd} className="space-y-4">
            <div>
              <Label htmlFor="g-title">Title *</Label>
              <Input
                id="g-title"
                value={gTitle}
                onChange={(e) => setGTitle(e.target.value)}
                placeholder="Parade Day 2024"
                data-ocid="admin.gallery_photo_title_input"
              />
            </div>
            <div>
              <Label>Photo File *</Label>
              <div className="flex items-center gap-2 mt-1">
                <UploadButton
                  label={gFile ? `${gFile.name.slice(0, 20)}…` : "Choose Image"}
                  accept="image/*"
                  onFile={setGFile}
                />
                {gFile && (
                  <button
                    type="button"
                    onClick={() => setGFile(null)}
                    className="text-destructive text-xs hover:underline"
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
            <Button
              type="submit"
              disabled={uploading || addItem.isPending}
              className="military-button"
              data-ocid="admin.gallery_photo_submit_button"
            >
              {uploading ? "Uploading…" : "Upload Photo"}
            </Button>
          </form>
        </motion.div>
      )}

      {showVideoForm && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="bg-muted/40 border border-border p-5 mb-6"
          data-ocid="admin.gallery_video_form"
        >
          <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
            Add Video
          </h3>
          <form onSubmit={handleVideoAdd} className="space-y-4">
            <div>
              <Label htmlFor="v-title">Title *</Label>
              <Input
                id="v-title"
                value={videoTitle}
                onChange={(e) => setVideoTitle(e.target.value)}
                placeholder="Annual Camp 2024 Highlights"
                data-ocid="admin.gallery_video_title_input"
              />
            </div>
            <div>
              <Label htmlFor="v-url">Video URL *</Label>
              <Input
                id="v-url"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                placeholder="https://youtube.com/..."
                data-ocid="admin.gallery_video_url_input"
              />
            </div>
            <Button
              type="submit"
              disabled={addItem.isPending}
              className="military-button"
              data-ocid="admin.gallery_video_submit_button"
            >
              {addItem.isPending ? "Adding…" : "Add Video"}
            </Button>
          </form>
        </motion.div>
      )}

      {isLoading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {["sk-a", "sk-b", "sk-c", "sk-d", "sk-e", "sk-f", "sk-g", "sk-h"].map(
            (k) => (
              <Skeleton key={k} className="aspect-square" />
            ),
          )}
        </div>
      ) : items.length === 0 ? (
        <div data-ocid="admin.gallery_empty_state">
          <EmptyState
            icon={<Image className="h-12 w-12" />}
            text="No gallery items uploaded yet."
          />
        </div>
      ) : (
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
          data-ocid="admin.gallery_list"
        >
          {items.map((item, i) => (
            <div
              key={String(item.id)}
              className="relative group border border-border overflow-hidden aspect-square bg-muted"
              data-ocid={`admin.gallery_item.${i + 1}`}
            >
              {item.mediaType === MediaType.photo ? (
                <img
                  src={
                    item.thumbnailBlob?.getDirectURL() ??
                    item.blob.getDirectURL()
                  }
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full flex flex-col items-center justify-center bg-primary/10">
                  <Tent className="h-8 w-8 text-primary opacity-60 mb-1" />
                  <span className="text-xs text-muted-foreground text-center px-2 line-clamp-2">
                    {item.title}
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/70 transition-smooth flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                <p className="text-primary-foreground text-xs font-medium text-center px-2 line-clamp-2">
                  {item.title}
                </p>
                <button
                  type="button"
                  onClick={async () => {
                    if (!confirm("Delete this item?")) return;
                    await deleteItem.mutateAsync(item.id);
                    toast.success("Deleted.");
                  }}
                  aria-label="Delete"
                  className="h-8 w-8 bg-destructive flex items-center justify-center hover:bg-destructive/80 transition-smooth"
                  data-ocid={`admin.gallery_delete_button.${i + 1}`}
                >
                  <Trash2 className="h-4 w-4 text-destructive-foreground" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── contacts ─────────────────────────────────────────────────────────────────
function ContactsTab() {
  const { data: submissions = [], isLoading } = useContactSubmissions();
  const markRead = useMarkContactRead();

  const unread = submissions.filter((s) => !s.isRead);
  const read = submissions.filter((s) => s.isRead);
  const sorted = [...unread, ...read];

  return (
    <div data-ocid="admin.contacts_panel">
      <div className="flex items-center justify-between mb-5">
        <SectionTitle>
          <Mail className="h-5 w-5 text-secondary" />
          Contact Messages
        </SectionTitle>
        {unread.length > 0 && (
          <span className="military-badge">{unread.length} unread</span>
        )}
      </div>

      {isLoading ? (
        <div className="space-y-3">
          {["sk-a", "sk-b", "sk-c"].map((k) => (
            <Skeleton key={k} className="h-20 w-full" />
          ))}
        </div>
      ) : submissions.length === 0 ? (
        <div data-ocid="admin.contacts_empty_state">
          <EmptyState
            icon={<Mail className="h-12 w-12" />}
            text="No messages received yet."
          />
        </div>
      ) : (
        <div className="space-y-3" data-ocid="admin.contacts_list">
          {sorted.map((s, i) => (
            <div
              key={String(s.id)}
              className={`border p-4 transition-smooth ${s.isRead ? "border-border bg-card opacity-70" : "border-primary bg-primary/5"}`}
              data-ocid={`admin.contact_item.${i + 1}`}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <span className="font-semibold text-foreground text-sm">
                    {s.name}
                  </span>
                  <span className="text-muted-foreground text-xs ml-2">
                    {s.email}
                  </span>
                  {!s.isRead && (
                    <span className="ml-2 inline-block px-1.5 py-0.5 bg-primary text-primary-foreground text-xs font-bold uppercase">
                      New
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {s.isRead ? (
                    <Check className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <button
                      type="button"
                      onClick={async () => {
                        await markRead.mutateAsync(s.id);
                        toast.success("Marked as read.");
                      }}
                      className="text-xs text-primary hover:underline font-medium"
                      data-ocid={`admin.contact_mark_read_button.${i + 1}`}
                    >
                      Mark read
                    </button>
                  )}
                </div>
              </div>
              <p className="text-sm text-foreground leading-relaxed">
                {s.message}
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                {new Date(Number(s.submittedAt) / 1_000_000).toLocaleDateString(
                  "en-IN",
                  { day: "numeric", month: "short", year: "numeric" },
                )}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── admission ────────────────────────────────────────────────────────────────
function AdmissionTab() {
  const { data: info, isLoading } = useAdmissionInfo();
  const updateAdmission = useUpdateAdmissionInfo();
  const [admFee, setAdmFee] = useState("");
  const [monthFee, setMonthFee] = useState("");
  const [docsText, setDocsText] = useState("");
  const [initialised, setInitialised] = useState(false);

  if (!initialised && info) {
    setAdmFee(info.fees.admission.toString());
    setMonthFee(info.fees.monthly.toString());
    setDocsText(info.documents.join("\n"));
    setInitialised(true);
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const docs = docsText
      .split("\n")
      .map((d) => d.trim())
      .filter(Boolean);
    const payload: AdmissionInfo = {
      fees: {
        admission: BigInt(admFee || "0"),
        monthly: BigInt(monthFee || "0"),
      },
      documents: docs,
    };
    try {
      await updateAdmission.mutateAsync(payload);
      toast.success("Admission info saved.");
    } catch {
      toast.error("Failed to save admission info.");
    }
  };

  // biome-ignore lint/suspicious/noArrayIndexKey: skeleton placeholder
  if (isLoading)
    return (
      <div className="space-y-3">
        {["sk-a", "sk-b", "sk-c"].map((k) => (
          <Skeleton key={k} className="h-10 w-full" />
        ))}
      </div>
    );

  return (
    <div data-ocid="admin.admission_panel">
      <SectionTitle>
        <FileText className="h-5 w-5 text-secondary" />
        Admission Configuration
      </SectionTitle>

      <form onSubmit={handleSave} className="space-y-6 max-w-xl">
        <div>
          <p className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
            Fee Structure
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="adm-fee">Admission Fee (₹)</Label>
              <Input
                id="adm-fee"
                type="number"
                value={admFee}
                onChange={(e) => setAdmFee(e.target.value)}
                placeholder="500"
                min="0"
                data-ocid="admin.admission_fee_input"
              />
            </div>
            <div>
              <Label htmlFor="month-fee">Monthly Fee (₹)</Label>
              <Input
                id="month-fee"
                type="number"
                value={monthFee}
                onChange={(e) => setMonthFee(e.target.value)}
                placeholder="200"
                min="0"
                data-ocid="admin.monthly_fee_input"
              />
            </div>
          </div>
        </div>

        <div>
          <Label htmlFor="adm-docs">Required Documents (one per line)</Label>
          <Textarea
            id="adm-docs"
            value={docsText}
            onChange={(e) => setDocsText(e.target.value)}
            rows={6}
            placeholder="Aadhaar Card&#10;Birth Certificate&#10;School ID&#10;Passport Photo"
            data-ocid="admin.admission_docs_textarea"
          />
        </div>

        <Button
          type="submit"
          disabled={updateAdmission.isPending}
          className="military-button"
          data-ocid="admin.admission_save_button"
        >
          {updateAdmission.isPending ? "Saving…" : "Save Admission Info"}
        </Button>
      </form>
    </div>
  );
}

// ─── access denied ────────────────────────────────────────────────────────────
function AccessDenied() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="h-20 w-20 border-2 border-destructive mx-auto flex items-center justify-center mb-4">
          <Shield className="h-10 w-10 text-destructive" />
        </div>
        <h1 className="font-display font-bold text-2xl text-foreground mb-2">
          Access Denied
        </h1>
        <p className="text-muted-foreground mb-6 text-sm">
          You need admin privileges to access this panel.
        </p>
        <Link
          to="/admin/login"
          className="military-button"
          data-ocid="admin.login_redirect_button"
        >
          Login as Admin
        </Link>
      </div>
    </div>
  );
}

// ─── main admin page ──────────────────────────────────────────────────────────
export default function AdminPage() {
  const { isAuthenticated, isAdmin, isInitializing, isCheckingAdmin, logout } =
    useAuth();
  const { admin, setAdminTab } = useAppStore();
  const activeTab = admin.activeTab as AdminTab;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isInitializing && !isCheckingAdmin && !isAuthenticated) {
      void navigate({ to: "/admin/login" });
    }
  }, [isAuthenticated, isInitializing, isCheckingAdmin, navigate]);

  if (isInitializing || (isAuthenticated && isCheckingAdmin)) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <LoadingPage />
      </div>
    );
  }
  if (!isAuthenticated || !isAdmin) return <AccessDenied />;

  const tabContent: Record<AdminTab, ReactNode> = {
    overview: <OverviewTab onNavigate={(tab) => setAdminTab(tab)} />,
    org: <OrgTab />,
    team: <TeamTab />,
    activities: <ActivitiesTab />,
    branches: <BranchesTab />,
    gallery: <GalleryTab />,
    contacts: <ContactsTab />,
    admission: <AdmissionTab />,
  };

  return (
    <div
      className="min-h-screen bg-background flex flex-col"
      data-ocid="admin.page"
    >
      {/* Header */}
      <header className="bg-card border-b-2 border-primary sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-secondary" />
            <span className="font-display font-bold text-base text-foreground tracking-tight">
              Admin Dashboard
            </span>
            <span className="hidden sm:inline-block text-xs text-muted-foreground border-l border-border pl-3">
              Azad Hind United Squad
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="text-xs text-muted-foreground hover:text-foreground transition-smooth hidden sm:block"
              data-ocid="admin.view_site_link"
            >
              View Site →
            </Link>
            <button
              type="button"
              onClick={logout}
              className="flex items-center gap-1.5 text-xs military-button-secondary py-1.5 px-3"
              data-ocid="admin.logout_button"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 gap-6">
        {/* Sidebar */}
        <aside
          className="w-48 flex-shrink-0 hidden md:block"
          data-ocid="admin.sidebar"
        >
          <nav className="space-y-0.5 sticky top-20">
            {TAB_LIST.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setAdminTab(tab.id)}
                className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-sm font-medium text-left transition-smooth border-l-2 ${
                  activeTab === tab.id
                    ? "bg-primary/10 text-primary border-l-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground border-l-transparent"
                }`}
                data-ocid={`admin.${tab.id}_tab`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Mobile tabs */}
        <div className="md:hidden mb-4 flex gap-1 flex-wrap w-full -mx-4 px-4 sm:-mx-6 sm:px-6">
          {TAB_LIST.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setAdminTab(tab.id)}
              className={`flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium transition-smooth ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
              data-ocid={`admin.mobile_${tab.id}_tab`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <main className="flex-1 min-w-0">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.18 }}
          >
            <div className="bg-card border border-border p-5 sm:p-6">
              {tabContent[activeTab]}
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
