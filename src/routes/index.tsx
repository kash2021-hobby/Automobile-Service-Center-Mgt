import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A Good Place to Begin" },
      { name: "description", content: "A simple, welcoming place to start something new." },
      { property: "og:title", content: "A Good Place to Begin" },
      { property: "og:description", content: "A simple, welcoming place to start something new." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 sm:px-10 lg:px-16">
        <header className="flex items-center justify-between border-b border-border py-7">
          <span className="font-display text-2xl font-semibold">hello<span className="text-accent">.</span></span>
          <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">A fresh start</span>
        </header>

        <section className="relative flex flex-1 flex-col justify-center py-20 sm:py-28" aria-labelledby="welcome-title">
          <div className="artwork" aria-hidden="true">
            <span className="artwork-disc" />
            <span className="artwork-arc" />
            <span className="artwork-dot" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <p className="mb-8 text-xs font-semibold uppercase tracking-widest text-accent">Welcome in</p>
            <h1 id="welcome-title" className="font-display text-6xl leading-[1.05] font-medium sm:text-7xl lg:text-8xl">
              A good place<br />to <em className="font-normal">begin.</em>
            </h1>
            <p className="mt-9 max-w-md text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Every great idea starts somewhere. This little space is ready for yours.
            </p>
          </div>
        </section>

        <footer className="flex items-center justify-between border-t border-border py-6 text-xs text-muted-foreground">
          <span>Made for what comes next</span>
          <span>01 / 01</span>
        </footer>
      </div>
    </main>
  );
}
