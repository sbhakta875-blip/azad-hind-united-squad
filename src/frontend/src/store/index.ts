import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  content: string | null;
}

interface AdminState {
  activeTab: string;
}

interface AppStore {
  modal: ModalState;
  admin: AdminState;
  openModal: (content: string) => void;
  closeModal: () => void;
  setAdminTab: (tab: string) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  modal: { isOpen: false, content: null },
  admin: { activeTab: "org" },
  openModal: (content) => set({ modal: { isOpen: true, content } }),
  closeModal: () => set({ modal: { isOpen: false, content: null } }),
  setAdminTab: (tab) =>
    set((state) => ({ admin: { ...state.admin, activeTab: tab } })),
}));
