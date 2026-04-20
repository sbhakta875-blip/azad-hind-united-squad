import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export class ExternalBlob {
    getBytes(): Promise<Uint8Array<ArrayBuffer>>;
    getDirectURL(): string;
    static fromURL(url: string): ExternalBlob;
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob;
    withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob;
}
export interface AdmissionInfo {
    documents: Array<string>;
    fees: AdmissionFees;
}
export type Timestamp = bigint;
export interface OrgInfo {
    affiliationNo: string;
    mission: Array<string>;
    tagline: string;
    name: string;
    logoBlob?: ExternalBlob;
    email: string;
    address: string;
    phone: string;
    department: string;
    registrationNo: string;
}
export interface ContactSubmission {
    id: Id;
    name: string;
    submittedAt: Timestamp;
    isRead: boolean;
    email: string;
    message: string;
}
export interface Activity {
    id: Id;
    name: string;
    description: string;
    category: ActivityCategory;
}
export type Id = bigint;
export interface Branch {
    id: Id;
    isHQ: boolean;
    name: string;
    contactPerson: string;
    address: string;
    phone: string;
}
export interface TeamMember {
    id: Id;
    photoBlob?: ExternalBlob;
    title: string;
    order: bigint;
    name: string;
    role: TeamRole;
}
export interface AdmissionFees {
    admission: bigint;
    monthly: bigint;
}
export interface Camp {
    id: Id;
    duration: string;
    name: string;
    activities: Array<string>;
    description: string;
}
export interface GalleryItem {
    id: Id;
    title: string;
    blob: ExternalBlob;
    isActive: boolean;
    thumbnailBlob?: ExternalBlob;
    mediaType: MediaType;
    uploadedAt: Timestamp;
}
export enum ActivityCategory {
    event = "event",
    training = "training"
}
export enum MediaType {
    video = "video",
    photo = "photo"
}
export enum TeamRole {
    senior = "senior",
    trainer = "trainer",
    leadership = "leadership"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    addActivity(name: string, description: string, category: ActivityCategory): Promise<Id>;
    addBranch(name: string, address: string, contactPerson: string, phone: string, isHQ: boolean): Promise<Id>;
    addCamp(name: string, duration: string, description: string, campActivities: Array<string>): Promise<Id>;
    addGalleryItem(title: string, mediaType: MediaType, blob: ExternalBlob, thumbnailBlob: ExternalBlob | null): Promise<Id>;
    addTeamMember(name: string, title: string, role: TeamRole, photoBlob: ExternalBlob | null, order: bigint): Promise<Id>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    deleteActivity(id: Id): Promise<void>;
    deleteBranch(id: Id): Promise<void>;
    deleteGalleryItem(id: Id): Promise<void>;
    deleteTeamMember(id: Id): Promise<void>;
    getActivities(): Promise<Array<Activity>>;
    getAdmissionInfo(): Promise<AdmissionInfo | null>;
    getBranches(): Promise<Array<Branch>>;
    getCallerUserRole(): Promise<UserRole>;
    getCamps(): Promise<Array<Camp>>;
    getContactSubmissions(): Promise<Array<ContactSubmission>>;
    getGalleryItems(): Promise<Array<GalleryItem>>;
    getOrgInfo(): Promise<OrgInfo | null>;
    getTeamMembers(): Promise<Array<TeamMember>>;
    isCallerAdmin(): Promise<boolean>;
    markContactRead(id: Id): Promise<void>;
    submitContact(name: string, email: string, message: string): Promise<Id>;
    updateActivity(id: Id, name: string, description: string, category: ActivityCategory): Promise<void>;
    updateAdmissionInfo(info: AdmissionInfo): Promise<void>;
    updateBranch(id: Id, name: string, address: string, contactPerson: string, phone: string, isHQ: boolean): Promise<void>;
    updateCamp(id: Id, name: string, duration: string, description: string, campActivities: Array<string>): Promise<void>;
    updateOrgInfo(info: OrgInfo): Promise<void>;
    updateOrgLogo(blob: ExternalBlob): Promise<void>;
    updateTeamMember(id: Id, name: string, title: string, role: TeamRole, photoBlob: ExternalBlob | null, order: bigint): Promise<void>;
}
