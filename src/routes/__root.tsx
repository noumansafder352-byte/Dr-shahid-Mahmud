import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { SITE } from "@/lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist.</p>
        <Link to="/" className="mt-6 inline-flex rounded-full gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">Go home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try refreshing.</p>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-6 rounded-full gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">Try again</button>
      </div>
    </div>
  );
}

const physicianJsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: SITE.doctor,
  medicalSpecialty: ["Pediatrics", "Neonatology", "Pediatric Neurology"],
  telephone: SITE.phoneIntl,
  url: SITE.url,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Abid Majeed Road",
    addressLocality: "Rawalpindi",
    postalCode: "46000",
    addressCountry: "PK",
  },
  openingHours: "Mo-Sa 17:00-21:00",
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Best Pediatrician in Rawalpindi | Prof. Dr. Shahid Mahmud" },
      { name: "description", content: "Prof. Brig (R) Dr. Shahid Mahmud — Top Pediatrician, Neonatologist & Child Neurologist in Rawalpindi. Expert care for newborns, infants & children. Book an appointment today." },
      { name: "keywords", content: "Best Pediatrician in Rawalpindi, Child Specialist Rawalpindi, Child Neurologist Rawalpindi, Neonatologist Rawalpindi, Pediatric Neurologist Pakistan" },
      { name: "author", content: SITE.doctor },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE.doctor },
      { property: "og:title", content: "Best Pediatrician in Rawalpindi | Dr. Shahid Mahmud" },
      { property: "og:description", content: "Expert pediatric, neonatal and child neurology care in Rawalpindi." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#3b82f6" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(physicianJsonLd) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pb-24 lg:pb-0">
          <Outlet />
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </QueryClientProvider>
  );
}
