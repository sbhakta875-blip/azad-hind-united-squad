import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { LoadingPage } from "./components/LoadingSpinner";
import { Toaster } from "./components/ui/sonner";

const HomePage = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/About"));
const LeadershipPage = lazy(() => import("./pages/Leadership"));
const TrainingPage = lazy(() => import("./pages/Training"));
const CampsPage = lazy(() => import("./pages/Camps"));
const BranchesPage = lazy(() => import("./pages/Branches"));
const GalleryPage = lazy(() => import("./pages/Gallery"));
const AdmissionPage = lazy(() => import("./pages/Admission"));
const ContactPage = lazy(() => import("./pages/Contact"));
const AdminPage = lazy(() => import("./pages/Admin"));
const AdminLoginPage = lazy(() => import("./pages/AdminLogin"));

function Wrap({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<LoadingPage />}>{children}</Suspense>;
}

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <Toaster position="bottom-right" />
    </>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <Wrap>
      <HomePage />
    </Wrap>
  ),
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: () => (
    <Wrap>
      <AboutPage />
    </Wrap>
  ),
});
const leadershipRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/leadership",
  component: () => (
    <Wrap>
      <LeadershipPage />
    </Wrap>
  ),
});
const trainingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/training",
  component: () => (
    <Wrap>
      <TrainingPage />
    </Wrap>
  ),
});
const campsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/camps",
  component: () => (
    <Wrap>
      <CampsPage />
    </Wrap>
  ),
});
const branchesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/branches",
  component: () => (
    <Wrap>
      <BranchesPage />
    </Wrap>
  ),
});
const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/gallery",
  component: () => (
    <Wrap>
      <GalleryPage />
    </Wrap>
  ),
});
const admissionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admission",
  component: () => (
    <Wrap>
      <AdmissionPage />
    </Wrap>
  ),
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: () => (
    <Wrap>
      <ContactPage />
    </Wrap>
  ),
});
const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  component: () => (
    <Wrap>
      <AdminPage />
    </Wrap>
  ),
});
const adminLoginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/login",
  component: () => (
    <Wrap>
      <AdminLoginPage />
    </Wrap>
  ),
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  leadershipRoute,
  trainingRoute,
  campsRoute,
  branchesRoute,
  galleryRoute,
  admissionRoute,
  contactRoute,
  adminRoute,
  adminLoginRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
