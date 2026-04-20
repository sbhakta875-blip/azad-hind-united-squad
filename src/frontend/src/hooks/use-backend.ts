import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createActor } from "../backend";
import type {
  ActivityCategory,
  AdmissionInfo,
  ExternalBlob,
  Id,
  MediaType,
  OrgInfo,
  TeamRole,
  UserRole,
} from "../types";

function useBackendActor() {
  return useActor(createActor);
}

export function useOrgInfo() {
  const { actor, isFetching } = useBackendActor();
  return useQuery({
    queryKey: ["orgInfo"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getOrgInfo();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useTeamMembers() {
  const { actor, isFetching } = useBackendActor();
  return useQuery({
    queryKey: ["teamMembers"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getTeamMembers();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useActivities() {
  const { actor, isFetching } = useBackendActor();
  return useQuery({
    queryKey: ["activities"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getActivities();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCamps() {
  const { actor, isFetching } = useBackendActor();
  return useQuery({
    queryKey: ["camps"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getCamps();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useBranches() {
  const { actor, isFetching } = useBackendActor();
  return useQuery({
    queryKey: ["branches"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getBranches();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGalleryItems() {
  const { actor, isFetching } = useBackendActor();
  return useQuery({
    queryKey: ["galleryItems"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getGalleryItems();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAdmissionInfo() {
  const { actor, isFetching } = useBackendActor();
  return useQuery({
    queryKey: ["admissionInfo"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getAdmissionInfo();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useContactSubmissions() {
  const { actor, isFetching } = useBackendActor();
  return useQuery({
    queryKey: ["contactSubmissions"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getContactSubmissions();
    },
    enabled: !!actor && !isFetching,
  });
}

// --- Mutations ---

export function useSubmitContact() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      name,
      email,
      message,
    }: {
      name: string;
      email: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.submitContact(name, email, message);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["contactSubmissions"] }),
  });
}

export function useUpdateOrgInfo() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (info: OrgInfo) => {
      if (!actor) throw new Error("Actor not available");
      return actor.updateOrgInfo(info);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["orgInfo"] }),
  });
}

export function useUpdateOrgLogo() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (blob: ExternalBlob) => {
      if (!actor) throw new Error("Actor not available");
      return actor.updateOrgLogo(blob);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["orgInfo"] }),
  });
}

export function useAddTeamMember() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (params: {
      name: string;
      title: string;
      role: TeamRole;
      photoBlob: ExternalBlob | null;
      order: bigint;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.addTeamMember(
        params.name,
        params.title,
        params.role,
        params.photoBlob,
        params.order,
      );
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["teamMembers"] }),
  });
}

export function useDeleteTeamMember() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: Id) => {
      if (!actor) throw new Error("Actor not available");
      return actor.deleteTeamMember(id);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["teamMembers"] }),
  });
}

export function useAddActivity() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (params: {
      name: string;
      description: string;
      category: ActivityCategory;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.addActivity(
        params.name,
        params.description,
        params.category,
      );
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["activities"] }),
  });
}

export function useDeleteActivity() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: Id) => {
      if (!actor) throw new Error("Actor not available");
      return actor.deleteActivity(id);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["activities"] }),
  });
}

export function useAddCamp() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (params: {
      name: string;
      duration: string;
      description: string;
      activities: string[];
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.addCamp(
        params.name,
        params.duration,
        params.description,
        params.activities,
      );
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["camps"] }),
  });
}

export function useDeleteCamp() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (_id: Id) => {
      if (!actor) throw new Error("Actor not available");
      // deleteCamp is not yet available in the backend
      throw new Error("Delete camp is not supported yet");
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["camps"] }),
  });
}

export function useAddBranch() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (params: {
      name: string;
      address: string;
      contactPerson: string;
      phone: string;
      isHQ: boolean;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.addBranch(
        params.name,
        params.address,
        params.contactPerson,
        params.phone,
        params.isHQ,
      );
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["branches"] }),
  });
}

export function useDeleteBranch() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: Id) => {
      if (!actor) throw new Error("Actor not available");
      return actor.deleteBranch(id);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["branches"] }),
  });
}

export function useAddGalleryItem() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (params: {
      title: string;
      mediaType: MediaType;
      blob: ExternalBlob;
      thumbnailBlob: ExternalBlob | null;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.addGalleryItem(
        params.title,
        params.mediaType,
        params.blob,
        params.thumbnailBlob,
      );
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["galleryItems"] }),
  });
}

export function useDeleteGalleryItem() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: Id) => {
      if (!actor) throw new Error("Actor not available");
      return actor.deleteGalleryItem(id);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["galleryItems"] }),
  });
}

export function useUpdateAdmissionInfo() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (info: AdmissionInfo) => {
      if (!actor) throw new Error("Actor not available");
      return actor.updateAdmissionInfo(info);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admissionInfo"] }),
  });
}

export function useMarkContactRead() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: Id) => {
      if (!actor) throw new Error("Actor not available");
      return actor.markContactRead(id);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["contactSubmissions"] }),
  });
}

export function useAssignUserRole() {
  const { actor } = useBackendActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (params: { user: string; role: UserRole }) => {
      if (!actor) throw new Error("Actor not available");
      const { Principal } = await import("@icp-sdk/core/principal");
      return actor.assignCallerUserRole(
        Principal.fromText(params.user),
        params.role,
      );
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["isAdmin"] }),
  });
}
