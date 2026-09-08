import { createFileRoute } from "@tanstack/react-router";
import montageDashboard from "@/assets/montage-dashboard.jpg";
import montageCommand from "@/assets/montage-command.jpg";
import montageRoster from "@/assets/montage-roster.jpg";
import montageMobile from "@/assets/montage-mobile.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "NDISFlow AI — The AI Operating System for NDIS Providers" },
      {
        name: "description",
        content:
          "One platform for participants, workforce, rostering, service delivery, progress notes, claims, compliance and finance — with AI working across every workflow.",
      },
      { property: "og:title", content: "NDISFlow AI — Run your NDIS business with an AI workforce" },
      {
        property: "og:description",
        content:
          "Participants, rosters, service delivery, claims and compliance in one intelligent operating system.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const stats = [
  { value: "186", label: "Active Participants", tone: "text-foreground" },
  { value: "422", label: "Shifts Scheduled", tone: "text-foreground" },
  { value: "12", label: "Shifts Need Attention", tone: "text-amberish" },
  { value: "A$48,320", label: "Ready to Claim", tone: "text-teal" },
  { value: "7", label: "Claims at Risk", tone: "text-amberish" },
  { value: "3", label: "Compliance Alerts", tone: "text-rosey" },
];

const lifecycle = [
  ["01", "Referral", "Capture enquiries, referrals and participant information."],
  ["02", "Onboard", "Service agreements, plans, goals, documents and contacts."],
  ["03", "Plan", "Supports, funding, budgets and service schedules."],
  ["04", "Roster", "Match the right worker to the right participant."],
  ["05", "Deliver", "Mobile check-in, service delivery and worker workflows."],
  ["06", "Document", "Progress notes, incidents, evidence and outcomes."],
  ["07", "Claim", "Validate services and prepare claims."],
  ["08", "Monitor", "Compliance, funding, workforce and performance."],
];

const askQuestions = [
  "“Which participants are at risk of under-utilising their plans?”",
  "“Which shifts next week are hardest to fill?”",
  "“Show me claims likely to be rejected.”",
  "“Which worker credentials expire in the next 30 days?”",
  "“Why did our unclaimed revenue increase this month?”",
  "“Which participants have had unusual incident patterns?”",
  "“Which services are least profitable?”",
  "“What should my operations manager focus on today?”",
];

const capabilities = [
  "Participant Management",
  "Workforce Management",
  "Rostering",
  "Service Delivery",
  "Progress Notes",
  "Claims",
  "Compliance",
  "Finance",
  "Analytics",
  "AI Workflow Automation",
];

function Index() {
  return (
    <div className="bg-ink text-foreground min-h-screen">
      {/* NAV */}
      <header className="border-b border-line/70 bg-ink/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="size-7 rounded-md bg-gradient-to-br from-cyan to-teal grid place-items-center text-ink font-bold font-display">
              N
            </div>
            <span className="font-semibold tracking-tight text-[15px] font-display">
              NDISFlow<span className="text-cyan"> AI</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-7 text-[13px] text-mist">
            <a href="#platform">Platform</a>
            <a href="#ai-team">AI Team</a>
            <a href="#command-centre">Command Centre</a>
            <a href="#workers">Workers</a>
          </nav>
          <button className="chip rounded-full px-4 py-2 text-[13px] font-medium hover:text-cyan transition">
            See it in Action <span className="text-cyan">→</span>
          </button>
        </div>
      </header>

      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-cyan/10 blur-[120px]" />
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 grid lg:grid-cols-12 gap-10 items-center relative">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 chip rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-cyan">
              AI Operating System
            </div>
            <h1 className="mt-6 text-[44px] leading-[1.02] font-bold tracking-tight glow-text font-display">
              Run your entire NDIS provider business with an AI workforce.
            </h1>
            <p className="mt-5 text-mist text-[15px] leading-relaxed max-w-md">
              Participants. Workers. Rosters. Service delivery. Progress notes. Claims. Compliance.
              Finance.
            </p>
            <p className="mt-3 text-[15px] font-semibold text-foreground max-w-md">
              One operating system. AI working across every workflow.
            </p>
            <p className="mt-3 text-mist text-[14px] leading-relaxed max-w-md">
              NDISFlow AI brings your entire operation into one intelligent platform — helping your
              team spend less time managing administration and more time delivering quality
              participant outcomes.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button className="cta-primary rounded-full px-6 py-3 text-[14px]">
                See NDISFlow AI in Action →
              </button>
              <button className="chip rounded-full px-6 py-3 text-[14px] font-medium">
                Explore the Platform
              </button>
            </div>
            <div className="mt-8 text-[11px] uppercase tracking-[0.16em] text-mist/70 leading-relaxed">
              Participant Management · Workforce · Rostering · Service Delivery · Claims ·
              Compliance · Finance
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="spec rounded-2xl p-5 shadow-[0_40px_80px_-30px_oklch(0_0_0/0.9)]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] uppercase tracking-[0.2em] text-mist">Today</span>
                <span className="size-2 rounded-full bg-teal shadow-[0_0_10px_oklch(0.92_0.14_170/0.8)]" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-xl bg-ink/40 border border-line/60 p-3">
                    <div className={`text-2xl font-bold font-display ${s.tone}`}>{s.value}</div>
                    <div className="text-[11px] text-mist mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-xl border border-cyan/30 bg-gradient-to-br from-cyan/10 to-teal/5 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="size-5 rounded bg-gradient-to-br from-cyan to-teal text-ink text-[11px] font-bold grid place-items-center font-display">
                    AI
                  </span>
                  <span className="text-[12px] font-semibold text-cyan">AI Command Centre</span>
                </div>
                <p className="text-[13px] leading-relaxed">
                  <span className="text-mist">“What needs my attention today?”</span>
                  <br />
                  <span className="text-foreground">
                    3 worker credentials expire this week. 7 claims are missing sufficient service
                    evidence. Participant Sarah M. has shown a change in support pattern over the
                    last 30 days. 2 tomorrow-morning shifts remain uncovered.
                  </span>
                </p>
                <div className="mt-3 flex gap-2">
                  <button className="rounded-lg bg-panel2/70 border border-line px-3 py-1.5 text-[12px] font-medium">
                    Fix Issues →
                  </button>
                  <button className="cta-primary rounded-lg px-3 py-1.5 text-[12px]">
                    Ask AI →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — PROBLEM */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl font-display">
          Your NDIS business shouldn't need seven different systems to operate.
        </h2>
        <p className="mt-4 text-mist max-w-xl text-[15px]">
          Most providers are stitching systems together — and your team becomes the integration
          layer. NDISFlow changes that.
        </p>
        <div className="mt-10 grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-line/70 bg-panel/60 p-6">
            <div className="text-[11px] uppercase tracking-[0.2em] text-mist mb-4">
              Today — Fragmented. Manual. Reactive.
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {[
                "CRM",
                "Spreadsheets",
                "Rostering software",
                "Timesheets",
                "Progress notes",
                "Accounting",
                "Compliance folders",
              ].map((s) => (
                <div
                  key={s}
                  className="rounded-lg border border-line/60 bg-ink/40 px-3 py-3 text-[13px] text-mist"
                >
                  {s}
                </div>
              ))}
              <div className="rounded-lg border border-dashed border-line/60 bg-ink/20 px-3 py-3 text-[13px] text-mist/60">
                …and more
              </div>
            </div>
          </div>
          <div className="spec rounded-2xl p-6 flex flex-col">
            <div className="text-[11px] uppercase tracking-[0.2em] text-cyan mb-4">
              Tomorrow — Connected. Automated. Intelligent.
            </div>
            <div className="flex-1 rounded-xl border border-cyan/30 bg-ink/40 grid place-items-center p-6">
              <div className="text-center">
                <div className="text-cyan text-2xl glow-text font-bold font-display">
                  NDISFlow AI
                </div>
                <div className="text-[12px] text-mist mt-2 leading-relaxed">
                  One participant — one record from referral to service delivery.
                  <br />
                  One worker — one record from recruitment to every shift delivered.
                  <br />
                  One workflow — service → evidence → claim → payment.
                  <br />
                  One source of truth — operations, finance and compliance.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — LIFECYCLE */}
      <section id="platform" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-display">
          From first referral to final reimbursement. One platform.
        </h2>
        <p className="mt-3 text-mist max-w-xl">
          Every action updates the next workflow automatically. No duplicate entry.
        </p>
        <div className="relative flow mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
          {lifecycle.map(([n, title, copy]) => (
            <div key={n} className="rounded-xl border border-line/60 bg-panel/50 p-4">
              <div className="text-cyan text-[11px] font-bold font-display">{n}</div>
              <div className="font-semibold text-[14px] mt-1">{title}</div>
              <div className="text-[12px] text-mist mt-1">{copy}</div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-mist text-[14px] max-w-2xl leading-relaxed">
          A delivered shift can create the timesheet, trigger progress-note completion, update
          participant utilisation and prepare the service for claiming. No chasing spreadsheets. No
          wondering what happened.
        </p>
      </section>

      {/* SECTION 4 — AI TEAM */}
      <section id="ai-team" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-display">
          Meet your AI operations team.
        </h2>
        <p className="mt-3 text-mist max-w-xl">
          AI doesn't sit beside NDISFlow — it works inside every part of it.
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-5">
          {/* Care Copilot */}
          <div className="spec rounded-2xl p-6">
            <div className="text-[11px] uppercase tracking-[0.2em] text-cyan">AI Care Copilot</div>
            <h3 className="mt-2 text-xl font-semibold font-display">
              Understand what's happening across every participant.
            </h3>
            <p className="mt-2 text-[13px] text-mist leading-relaxed">
              The Care Copilot analyses service notes, goals and participant history to surface
              important changes that may otherwise remain buried across hundreds of records.
            </p>
            <div className="mt-4 rounded-xl border border-line/70 bg-ink/40 p-4">
              <div className="text-[13px] text-mist">
                Participant Insight · <span className="text-foreground">Sarah M.</span>
              </div>
              <div className="mt-2 text-[14px] italic border-l-2 border-cyan/50 pl-3">
                “Community participation has decreased over the last six weeks.”
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5 text-[11px] text-mist">
                {["Support notes", "Changes over time", "Goals affected", "Follow-up items"].map(
                  (t) => (
                    <span key={t} className="chip rounded-full px-2.5 py-1">
                      {t}
                    </span>
                  ),
                )}
              </div>
              <button className="mt-4 cta-primary rounded-lg px-3 py-1.5 text-[12px]">
                Review Insight →
              </button>
            </div>
          </div>

          {/* Roster Agent */}
          <div className="spec rounded-2xl p-6">
            <div className="text-[11px] uppercase tracking-[0.2em] text-cyan">AI Roster Agent</div>
            <h3 className="mt-2 text-xl font-semibold font-display">
              Build better rosters in minutes, not hours.
            </h3>
            <p className="mt-2 text-[13px] text-mist leading-relaxed">
              The AI considers worker availability, participant preferences, skills and
              qualifications, location, shift history, overtime risk and credential status.
            </p>
            <div className="mt-4 rounded-xl border border-line/70 bg-ink/40 p-4">
              <div className="text-[13px] text-mist">
                4 workers match James' Saturday support requirement.
              </div>
              <div className="mt-3 rounded-lg border border-teal/40 bg-teal/5 p-3">
                <div className="flex items-center justify-between text-[14px]">
                  <span className="font-semibold">Emma R.</span>
                  <span className="text-teal font-semibold font-display">96% Match</span>
                </div>
                <div className="mt-2 text-[12px] text-mist space-y-0.5">
                  <div>✓ Available</div>
                  <div>✓ Required credentials current</div>
                  <div>✓ Previously supported James</div>
                  <div>✓ 8 km away</div>
                </div>
              </div>
              <button className="mt-4 cta-primary rounded-lg px-3 py-1.5 text-[12px]">
                Assign Emma →
              </button>
            </div>
          </div>

          {/* Claim Copilot */}
          <div className="spec rounded-2xl p-6">
            <div className="text-[11px] uppercase tracking-[0.2em] text-cyan">AI Claim Copilot</div>
            <h3 className="mt-2 text-xl font-semibold font-display">
              Catch claim problems before submission.
            </h3>
            <p className="mt-2 text-[13px] text-mist leading-relaxed">
              Before a service reaches claiming, AI checks the underlying operational evidence.
            </p>
            <div className="mt-4 rounded-xl border border-line/70 bg-ink/40 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[13px] text-mist">Claim Readiness</div>
                  <div className="text-xl font-bold font-display">A$286.40</div>
                </div>
                <span className="chip rounded-full px-2.5 py-1 text-[11px] text-amberish">
                  Needs Review
                </span>
              </div>
              <div className="mt-3 text-[13px] text-mist italic border-l-2 border-cyan/50 pl-3">
                Service delivered and timesheet completed, but progress-note evidence may be
                insufficient.
              </div>
              <div className="mt-2 text-[12px] text-mist">
                <span className="text-foreground font-medium">Suggested action:</span> request
                additional service detail from worker.
              </div>
              <button className="mt-4 cta-primary rounded-lg px-3 py-1.5 text-[12px]">
                Resolve →
              </button>
            </div>
          </div>

          {/* Compliance Copilot */}
          <div className="spec rounded-2xl p-6">
            <div className="text-[11px] uppercase tracking-[0.2em] text-cyan">
              AI Compliance Copilot
            </div>
            <h3 className="mt-2 text-xl font-semibold font-display">
              From periodic checking to continuous monitoring.
            </h3>
            <p className="mt-2 text-[13px] text-mist leading-relaxed">
              AI continuously watches operational activity for issues requiring attention.
            </p>
            <div className="mt-4 rounded-xl border border-line/70 bg-ink/40 p-4">
              <div className="text-[13px] text-mist">Potential Incident Detected</div>
              <div className="mt-2 text-[14px] italic border-l-2 border-rosey/60 pl-3">
                “Participant became distressed and pushed another participant.”
              </div>
              <div className="mt-3 text-[12px] text-mist space-y-0.5">
                <div>1. Review source note</div>
                <div>2. Complete incident details</div>
                <div>3. Notify responsible manager</div>
                <div>4. Assess reporting requirements</div>
                <div>5. Store evidence and actions</div>
              </div>
              <button className="mt-4 cta-primary rounded-lg px-3 py-1.5 text-[12px]">
                Start Review →
              </button>
            </div>
          </div>
        </div>
        <p className="mt-5 text-[11px] text-mist/70 italic">
          AI assists authorised staff with identification and workflow preparation; final compliance
          decisions remain with the provider.
        </p>
      </section>

      {/* SECTION 5 — COMMAND CENTRE */}
      <section id="command-centre" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-display">
          Ask your business anything.
        </h2>
        <p className="mt-3 text-mist max-w-xl">
          Every participant. Every worker. Every shift. Every dollar. One conversation — with the
          actions required, not just answers.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {askQuestions.map((q) => (
            <span key={q} className="chip rounded-full px-3 py-1.5 text-[12px] text-mist">
              {q}
            </span>
          ))}
        </div>

        <div className="mt-8 spec rounded-2xl p-5 md:p-7">
          <div className="flex gap-3 items-start">
            <div className="size-8 rounded-lg bg-panel2 grid place-items-center text-[11px] font-bold text-mist border border-line font-display">
              MG
            </div>
            <div className="rounded-xl rounded-tl-sm bg-panel2/80 border border-line px-4 py-3 text-[14px]">
              What are my biggest operational risks this week?
            </div>
          </div>
          <div className="mt-4 flex gap-3 items-start">
            <div className="size-8 rounded-lg bg-gradient-to-br from-cyan to-teal grid place-items-center text-[11px] font-bold text-ink font-display">
              AI
            </div>
            <div className="flex-1 rounded-xl rounded-tl-sm bg-ink/40 border border-cyan/25 p-4">
              <div className="font-semibold mb-3 font-display">4 issues need attention.</div>
              <div className="space-y-3 text-[13px]">
                <div className="flex gap-3">
                  <span className="size-2.5 rounded-full dot-red mt-1 shrink-0" />
                  <div>
                    <span className="font-semibold">12 uncovered shifts</span>{" "}
                    <span className="text-mist">— 6 occur within the next 48 hours.</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="size-2.5 rounded-full dot-amber mt-1 shrink-0" />
                  <div>
                    <span className="font-semibold">A$14,820 claim risk</span>{" "}
                    <span className="text-mist">— primarily missing worker documentation.</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="size-2.5 rounded-full dot-amber mt-1 shrink-0" />
                  <div>
                    <span className="font-semibold">9 expiring credentials</span>{" "}
                    <span className="text-mist">— 3 affect workers rostered next week.</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="size-2.5 rounded-full dot-yellow mt-1 shrink-0" />
                  <div>
                    <span className="font-semibold">Participant funding utilisation</span>{" "}
                    <span className="text-mist">
                      — 7 participants are materially below planned utilisation.
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Resolve Shifts", "Review Claims", "Contact Workers", "View Participants"].map(
                  (b) => (
                    <button
                      key={b}
                      className="rounded-lg bg-panel2/70 border border-line px-3 py-1.5 text-[12px]"
                    >
                      {b}
                    </button>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — WORKER */}
      <section id="workers" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-display">
          Voice → structured documentation in seconds.
        </h2>
        <p className="mt-3 text-mist max-w-xl">
          Less paperwork in the field. Better information everywhere else — your frontline team
          spends more time supporting participants.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          <div className="rounded-2xl border border-line/70 bg-panel/60 p-5">
            <div className="text-[11px] uppercase tracking-[0.2em] text-mist mb-3">Before Shift</div>
            <div className="rounded-lg bg-ink/40 border border-line/60 p-3 text-[13px] space-y-1.5">
              <div className="font-medium">Sarah M.</div>
              <div className="text-mist">Support goals</div>
              <div className="text-mist">Important instructions</div>
              <div className="text-mist">Location</div>
              <div className="text-mist">Tasks</div>
            </div>
          </div>
          <div className="rounded-2xl border border-line/70 bg-panel/60 p-5">
            <div className="text-[11px] uppercase tracking-[0.2em] text-mist mb-3">During Shift</div>
            <div className="space-y-2">
              <button className="w-full rounded-lg bg-panel2/70 border border-line py-2.5 text-[13px] font-medium">
                Check In
              </button>
              <div className="flex gap-2">
                <button className="flex-1 rounded-lg bg-panel2/70 border border-line py-2 text-[12px]">
                  Tasks
                </button>
                <button className="flex-1 rounded-lg bg-panel2/70 border border-line py-2 text-[12px]">
                  Incident
                </button>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 rounded-lg bg-panel2/70 border border-line py-2 text-[12px]">
                  Photo / Document
                </button>
                <button className="flex-1 rounded-lg bg-panel2/70 border border-line py-2 text-[12px]">
                  Quick Note
                </button>
              </div>
            </div>
          </div>
          <div className="spec rounded-2xl p-5">
            <div className="text-[11px] uppercase tracking-[0.2em] text-cyan mb-3">After Shift</div>
            <div className="rounded-lg bg-ink/40 border border-cyan/25 p-3 text-[12px]">
              <div className="text-mist">
                🎙️ “We went grocery shopping and Sarah prepared her own shopping list. She needed
                less prompting than last week and paid independently.”
              </div>
              <div className="mt-3 font-semibold font-display">Draft Progress Note</div>
              <div className="mt-1 text-mist">Activity: Community access / shopping</div>
              <div className="text-mist">
                Observed progress: increased independent planning and payment.
              </div>
              <div className="mt-1 text-mist">Goal linkage: daily living independence.</div>
              <div className="mt-3 flex gap-2">
                <button className="flex-1 cta-primary rounded-lg py-1.5 text-[11px]">Submit</button>
                <button className="flex-1 rounded-lg bg-panel2/70 border border-line py-1.5 text-[11px]">
                  Review / Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — OPERATING MODEL */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-display">
          Don't just automate your NDIS business. Operate it differently.
        </h2>
        <p className="mt-3 text-mist max-w-xl">
          Technology alone doesn't eliminate every exception. That's why NDISFlow can combine three
          layers into one operating model.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {[
            ["Software", "One system to run the organisation."],
            [
              "AI Workforce",
              "AI automates repetitive operational workflows and identifies issues requiring attention.",
            ],
            [
              "APT Operations",
              "Specialists can handle back-office exceptions, administration and operational support when required.",
            ],
          ].map(([t, c]) => (
            <div key={t} className="rounded-2xl border border-line/60 bg-panel/50 p-6">
              <div className="text-[11px] uppercase tracking-[0.2em] text-cyan">{t}</div>
              <p className="mt-2 text-[13px] text-mist leading-relaxed">{c}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 spec rounded-2xl p-6">
          <div className="text-[11px] uppercase tracking-[0.2em] text-cyan mb-4">
            Example workflow
          </div>
          <div className="grid md:grid-cols-5 gap-3 text-[12px]">
            {[
              "Shift completed",
              "AI checks documentation",
              "Complete? Yes → prepare claiming",
              "No → automatically request missing information",
              "Still unresolved → human operations handles exception",
            ].map((s) => (
              <div key={s} className="rounded-lg border border-line/60 bg-ink/40 p-3 text-mist">
                {s}
              </div>
            ))}
          </div>
          <div className="mt-4 text-[13px] text-foreground">
            Manager only sees issues requiring judgement.
          </div>
        </div>
        <p className="mt-8 text-2xl md:text-3xl font-bold tracking-tight glow-text font-display max-w-2xl">
          Your organisation should scale participants faster than it scales administration.
        </p>
        <div className="mt-4 text-[12px] text-mist/70">
          Powered by APT Business Services + SoluLab
        </div>
      </section>

      {/* SECTION 8 — FINAL CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="spec rounded-3xl p-10 md:p-14 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-[40px] font-bold leading-tight tracking-tight glow-text font-display">
              Imagine running your next 500 participants without building a 500-participant back
              office.
            </h2>
            <p className="mt-5 text-mist text-[15px] leading-relaxed max-w-md">
              Run the organisation. Let AI run the administration around it.
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {capabilities.map((c) => (
                <span key={c} className="chip rounded-full px-2.5 py-1 text-[11px] text-mist">
                  ✓ {c}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="cta-primary rounded-full px-6 py-3 text-[14px]">
                See NDISFlow AI in Action →
              </button>
              <button className="chip rounded-full px-6 py-3 text-[14px] font-medium">
                Request a Tailored Demo
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              [montageDashboard, "NDISFlow management dashboard"],
              [montageCommand, "NDISFlow AI Command Centre"],
              [montageRoster, "NDISFlow roster view"],
              [montageMobile, "NDISFlow mobile worker app"],
            ].map(([src, alt]) => (
              <img
                key={alt}
                src={src}
                alt={alt}
                loading="lazy"
                width={1024}
                height={1024}
                className="rounded-xl border border-line/60 aspect-square object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-3 border-t border-line/60">
        <div className="text-[13px] font-semibold font-display">
          NDISFlow <span className="text-cyan">AI</span>
        </div>
        <div className="text-[12px] text-mist">
          The AI Operating System for Modern NDIS Providers.
        </div>
        <div className="text-[12px] text-mist/70">Powered by APT Business Services + SoluLab</div>
      </footer>
    </div>
  );
}
