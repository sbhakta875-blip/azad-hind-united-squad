import type {
  Activity,
  ActivityCategory,
  AdmissionInfo,
  Branch,
  Camp,
  ContactSubmission,
  ExternalBlob,
  GalleryItem,
  Id,
  MediaType,
  OrgInfo,
  TeamMember,
  TeamRole,
  Timestamp,
  UserRole,
} from "../backend";

export type {
  OrgInfo,
  TeamMember,
  Activity,
  Camp,
  Branch,
  GalleryItem,
  ContactSubmission,
  AdmissionInfo,
  ActivityCategory,
  MediaType,
  TeamRole,
  UserRole,
  Id,
  Timestamp,
  ExternalBlob,
};

export interface NavLink {
  label: string;
  to: string;
}
