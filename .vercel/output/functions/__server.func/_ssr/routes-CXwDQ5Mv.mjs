import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CXwDQ5Mv.js
var import_jsx_runtime = require_jsx_runtime();
var montage_dashboard_default = "/assets/montage-dashboard-BCu3y1Eu.jpg";
var montage_command_default = "/assets/montage-command-B56dJZZL.jpg";
var montage_roster_default = "/assets/montage-roster-CFWNZr7E.jpg";
var montage_mobile_default = "/assets/montage-mobile-DnA_QJCN.jpg";
var stats = [
	{
		value: "186",
		label: "Active Participants",
		tone: "text-foreground"
	},
	{
		value: "422",
		label: "Shifts Scheduled",
		tone: "text-foreground"
	},
	{
		value: "12",
		label: "Shifts Need Attention",
		tone: "text-amberish"
	},
	{
		value: "A$48,320",
		label: "Ready to Claim",
		tone: "text-teal"
	},
	{
		value: "7",
		label: "Claims at Risk",
		tone: "text-amberish"
	},
	{
		value: "3",
		label: "Compliance Alerts",
		tone: "text-rosey"
	}
];
var lifecycle = [
	[
		"01",
		"Referral",
		"Capture enquiries, referrals and participant information."
	],
	[
		"02",
		"Onboard",
		"Service agreements, plans, goals, documents and contacts."
	],
	[
		"03",
		"Plan",
		"Supports, funding, budgets and service schedules."
	],
	[
		"04",
		"Roster",
		"Match the right worker to the right participant."
	],
	[
		"05",
		"Deliver",
		"Mobile check-in, service delivery and worker workflows."
	],
	[
		"06",
		"Document",
		"Progress notes, incidents, evidence and outcomes."
	],
	[
		"07",
		"Claim",
		"Validate services and prepare claims."
	],
	[
		"08",
		"Monitor",
		"Compliance, funding, workforce and performance."
	]
];
var askQuestions = [
	"“Which participants are at risk of under-utilising their plans?”",
	"“Which shifts next week are hardest to fill?”",
	"“Show me claims likely to be rejected.”",
	"“Which worker credentials expire in the next 30 days?”",
	"“Why did our unclaimed revenue increase this month?”",
	"“Which participants have had unusual incident patterns?”",
	"“Which services are least profitable?”",
	"“What should my operations manager focus on today?”"
];
var capabilities = [
	"Participant Management",
	"Workforce Management",
	"Rostering",
	"Service Delivery",
	"Progress Notes",
	"Claims",
	"Compliance",
	"Finance",
	"Analytics",
	"AI Workflow Automation"
];
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-ink text-foreground min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "border-b border-line/70 bg-ink/80 backdrop-blur-sm sticky top-0 z-40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-6xl mx-auto px-6 h-16 flex items-center justify-between",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "size-7 rounded-md bg-gradient-to-br from-cyan to-teal grid place-items-center text-ink font-bold font-display",
								children: "N"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-semibold tracking-tight text-[15px] font-display",
								children: ["NDISFlow", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-cyan",
									children: " AI"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden md:flex items-center gap-7 text-[13px] text-mist",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#platform",
									children: "Platform"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#ai-team",
									children: "AI Team"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#command-centre",
									children: "Command Centre"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#workers",
									children: "Workers"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "chip rounded-full px-4 py-2 text-[13px] font-medium hover:text-cyan transition",
							children: ["See it in Action ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-cyan",
								children: "→"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-cyan/10 blur-[120px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-6xl mx-auto px-6 pt-20 pb-16 grid lg:grid-cols-12 gap-10 items-center relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "inline-flex items-center gap-2 chip rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-cyan",
								children: "AI Operating System"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-6 text-[44px] leading-[1.02] font-bold tracking-tight glow-text font-display",
								children: "Run your entire NDIS provider business with an AI workforce."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-mist text-[15px] leading-relaxed max-w-md",
								children: "Participants. Workers. Rosters. Service delivery. Progress notes. Claims. Compliance. Finance."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-[15px] font-semibold text-foreground max-w-md",
								children: "One operating system. AI working across every workflow."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-mist text-[14px] leading-relaxed max-w-md",
								children: "NDISFlow AI brings your entire operation into one intelligent platform — helping your team spend less time managing administration and more time delivering quality participant outcomes."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "cta-primary rounded-full px-6 py-3 text-[14px]",
									children: "See NDISFlow AI in Action →"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "chip rounded-full px-6 py-3 text-[14px] font-medium",
									children: "Explore the Platform"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 text-[11px] uppercase tracking-[0.16em] text-mist/70 leading-relaxed",
								children: "Participant Management · Workforce · Rostering · Service Delivery · Claims · Compliance · Finance"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "spec rounded-2xl p-5 shadow-[0_40px_80px_-30px_oklch(0_0_0/0.9)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mb-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] uppercase tracking-[0.2em] text-mist",
										children: "Today"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-teal shadow-[0_0_10px_oklch(0.92_0.14_170/0.8)]" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-2 sm:grid-cols-3 gap-2.5",
									children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl bg-ink/40 border border-line/60 p-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `text-2xl font-bold font-display ${s.tone}`,
											children: s.value
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[11px] text-mist mt-0.5",
											children: s.label
										})]
									}, s.label))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 rounded-xl border border-cyan/30 bg-gradient-to-br from-cyan/10 to-teal/5 p-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 mb-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "size-5 rounded bg-gradient-to-br from-cyan to-teal text-ink text-[11px] font-bold grid place-items-center font-display",
												children: "AI"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[12px] font-semibold text-cyan",
												children: "AI Command Centre"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[13px] leading-relaxed",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-mist",
													children: "“What needs my attention today?”"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-foreground",
													children: "3 worker credentials expire this week. 7 claims are missing sufficient service evidence. Participant Sarah M. has shown a change in support pattern over the last 30 days. 2 tomorrow-morning shifts remain uncovered."
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-3 flex gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												className: "rounded-lg bg-panel2/70 border border-line px-3 py-1.5 text-[12px] font-medium",
												children: "Fix Issues →"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												className: "cta-primary rounded-lg px-3 py-1.5 text-[12px]",
												children: "Ask AI →"
											})]
										})
									]
								})
							]
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "max-w-6xl mx-auto px-6 py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl md:text-4xl font-bold tracking-tight max-w-2xl font-display",
						children: "Your NDIS business shouldn't need seven different systems to operate."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-mist max-w-xl text-[15px]",
						children: "Most providers are stitching systems together — and your team becomes the integration layer. NDISFlow changes that."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 grid md:grid-cols-2 gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-line/70 bg-panel/60 p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] uppercase tracking-[0.2em] text-mist mb-4",
								children: "Today — Fragmented. Manual. Reactive."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-2.5",
								children: [[
									"CRM",
									"Spreadsheets",
									"Rostering software",
									"Timesheets",
									"Progress notes",
									"Accounting",
									"Compliance folders"
								].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-lg border border-line/60 bg-ink/40 px-3 py-3 text-[13px] text-mist",
									children: s
								}, s)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-lg border border-dashed border-line/60 bg-ink/20 px-3 py-3 text-[13px] text-mist/60",
									children: "…and more"
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "spec rounded-2xl p-6 flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] uppercase tracking-[0.2em] text-cyan mb-4",
								children: "Tomorrow — Connected. Automated. Intelligent."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex-1 rounded-xl border border-cyan/30 bg-ink/40 grid place-items-center p-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-cyan text-2xl glow-text font-bold font-display",
										children: "NDISFlow AI"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-[12px] text-mist mt-2 leading-relaxed",
										children: [
											"One participant — one record from referral to service delivery.",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"One worker — one record from recruitment to every shift delivered.",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"One workflow — service → evidence → claim → payment.",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"One source of truth — operations, finance and compliance."
										]
									})]
								})
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "platform",
				className: "max-w-6xl mx-auto px-6 py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl md:text-4xl font-bold tracking-tight font-display",
						children: "From first referral to final reimbursement. One platform."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-mist max-w-xl",
						children: "Every action updates the next workflow automatically. No duplicate entry."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative flow mt-10 grid grid-cols-2 md:grid-cols-4 gap-3",
						children: lifecycle.map(([n, title, copy]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-line/60 bg-panel/50 p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-cyan text-[11px] font-bold font-display",
									children: n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold text-[14px] mt-1",
									children: title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[12px] text-mist mt-1",
									children: copy
								})
							]
						}, n))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-mist text-[14px] max-w-2xl leading-relaxed",
						children: "A delivered shift can create the timesheet, trigger progress-note completion, update participant utilisation and prepare the service for claiming. No chasing spreadsheets. No wondering what happened."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "ai-team",
				className: "max-w-6xl mx-auto px-6 py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl md:text-4xl font-bold tracking-tight font-display",
						children: "Meet your AI operations team."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-mist max-w-xl",
						children: "AI doesn't sit beside NDISFlow — it works inside every part of it."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid md:grid-cols-2 gap-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "spec rounded-2xl p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] uppercase tracking-[0.2em] text-cyan",
										children: "AI Care Copilot"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 text-xl font-semibold font-display",
										children: "Understand what's happening across every participant."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-[13px] text-mist leading-relaxed",
										children: "The Care Copilot analyses service notes, goals and participant history to surface important changes that may otherwise remain buried across hundreds of records."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 rounded-xl border border-line/70 bg-ink/40 p-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-[13px] text-mist",
												children: ["Participant Insight · ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-foreground",
													children: "Sarah M."
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-2 text-[14px] italic border-l-2 border-cyan/50 pl-3",
												children: "“Community participation has decreased over the last six weeks.”"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-3 flex flex-wrap gap-1.5 text-[11px] text-mist",
												children: [
													"Support notes",
													"Changes over time",
													"Goals affected",
													"Follow-up items"
												].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "chip rounded-full px-2.5 py-1",
													children: t
												}, t))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												className: "mt-4 cta-primary rounded-lg px-3 py-1.5 text-[12px]",
												children: "Review Insight →"
											})
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "spec rounded-2xl p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] uppercase tracking-[0.2em] text-cyan",
										children: "AI Roster Agent"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 text-xl font-semibold font-display",
										children: "Build better rosters in minutes, not hours."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-[13px] text-mist leading-relaxed",
										children: "The AI considers worker availability, participant preferences, skills and qualifications, location, shift history, overtime risk and credential status."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 rounded-xl border border-line/70 bg-ink/40 p-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[13px] text-mist",
												children: "4 workers match James' Saturday support requirement."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-3 rounded-lg border border-teal/40 bg-teal/5 p-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between text-[14px]",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-semibold",
														children: "Emma R."
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-teal font-semibold font-display",
														children: "96% Match"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-2 text-[12px] text-mist space-y-0.5",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "✓ Available" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "✓ Required credentials current" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "✓ Previously supported James" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "✓ 8 km away" })
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												className: "mt-4 cta-primary rounded-lg px-3 py-1.5 text-[12px]",
												children: "Assign Emma →"
											})
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "spec rounded-2xl p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] uppercase tracking-[0.2em] text-cyan",
										children: "AI Claim Copilot"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 text-xl font-semibold font-display",
										children: "Catch claim problems before submission."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-[13px] text-mist leading-relaxed",
										children: "Before a service reaches claiming, AI checks the underlying operational evidence."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 rounded-xl border border-line/70 bg-ink/40 p-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-[13px] text-mist",
													children: "Claim Readiness"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-xl font-bold font-display",
													children: "A$286.40"
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "chip rounded-full px-2.5 py-1 text-[11px] text-amberish",
													children: "Needs Review"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-3 text-[13px] text-mist italic border-l-2 border-cyan/50 pl-3",
												children: "Service delivered and timesheet completed, but progress-note evidence may be insufficient."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-2 text-[12px] text-mist",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-foreground font-medium",
													children: "Suggested action:"
												}), " request additional service detail from worker."]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												className: "mt-4 cta-primary rounded-lg px-3 py-1.5 text-[12px]",
												children: "Resolve →"
											})
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "spec rounded-2xl p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] uppercase tracking-[0.2em] text-cyan",
										children: "AI Compliance Copilot"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 text-xl font-semibold font-display",
										children: "From periodic checking to continuous monitoring."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-[13px] text-mist leading-relaxed",
										children: "AI continuously watches operational activity for issues requiring attention."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 rounded-xl border border-line/70 bg-ink/40 p-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[13px] text-mist",
												children: "Potential Incident Detected"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-2 text-[14px] italic border-l-2 border-rosey/60 pl-3",
												children: "“Participant became distressed and pushed another participant.”"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-3 text-[12px] text-mist space-y-0.5",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "1. Review source note" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "2. Complete incident details" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "3. Notify responsible manager" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "4. Assess reporting requirements" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "5. Store evidence and actions" })
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												className: "mt-4 cta-primary rounded-lg px-3 py-1.5 text-[12px]",
												children: "Start Review →"
											})
										]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-[11px] text-mist/70 italic",
						children: "AI assists authorised staff with identification and workflow preparation; final compliance decisions remain with the provider."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "command-centre",
				className: "max-w-6xl mx-auto px-6 py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl md:text-4xl font-bold tracking-tight font-display",
						children: "Ask your business anything."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-mist max-w-xl",
						children: "Every participant. Every worker. Every shift. Every dollar. One conversation — with the actions required, not just answers."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-wrap gap-2",
						children: askQuestions.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "chip rounded-full px-3 py-1.5 text-[12px] text-mist",
							children: q
						}, q))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 spec rounded-2xl p-5 md:p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-3 items-start",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "size-8 rounded-lg bg-panel2 grid place-items-center text-[11px] font-bold text-mist border border-line font-display",
								children: "MG"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-xl rounded-tl-sm bg-panel2/80 border border-line px-4 py-3 text-[14px]",
								children: "What are my biggest operational risks this week?"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex gap-3 items-start",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "size-8 rounded-lg bg-gradient-to-br from-cyan to-teal grid place-items-center text-[11px] font-bold text-ink font-display",
								children: "AI"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 rounded-xl rounded-tl-sm bg-ink/40 border border-cyan/25 p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-semibold mb-3 font-display",
										children: "4 issues need attention."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-3 text-[13px]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full dot-red mt-1 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-semibold",
														children: "12 uncovered shifts"
													}),
													" ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-mist",
														children: "— 6 occur within the next 48 hours."
													})
												] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full dot-amber mt-1 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-semibold",
														children: "A$14,820 claim risk"
													}),
													" ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-mist",
														children: "— primarily missing worker documentation."
													})
												] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full dot-amber mt-1 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-semibold",
														children: "9 expiring credentials"
													}),
													" ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-mist",
														children: "— 3 affect workers rostered next week."
													})
												] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full dot-yellow mt-1 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-semibold",
														children: "Participant funding utilisation"
													}),
													" ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-mist",
														children: "— 7 participants are materially below planned utilisation."
													})
												] })]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 flex flex-wrap gap-2",
										children: [
											"Resolve Shifts",
											"Review Claims",
											"Contact Workers",
											"View Participants"
										].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "rounded-lg bg-panel2/70 border border-line px-3 py-1.5 text-[12px]",
											children: b
										}, b))
									})
								]
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "workers",
				className: "max-w-6xl mx-auto px-6 py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl md:text-4xl font-bold tracking-tight font-display",
						children: "Voice → structured documentation in seconds."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-mist max-w-xl",
						children: "Less paperwork in the field. Better information everywhere else — your frontline team spends more time supporting participants."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid md:grid-cols-3 gap-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-line/70 bg-panel/60 p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[11px] uppercase tracking-[0.2em] text-mist mb-3",
									children: "Before Shift"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg bg-ink/40 border border-line/60 p-3 text-[13px] space-y-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-medium",
											children: "Sarah M."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-mist",
											children: "Support goals"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-mist",
											children: "Important instructions"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-mist",
											children: "Location"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-mist",
											children: "Tasks"
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-line/70 bg-panel/60 p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[11px] uppercase tracking-[0.2em] text-mist mb-3",
									children: "During Shift"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "w-full rounded-lg bg-panel2/70 border border-line py-2.5 text-[13px] font-medium",
											children: "Check In"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												className: "flex-1 rounded-lg bg-panel2/70 border border-line py-2 text-[12px]",
												children: "Tasks"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												className: "flex-1 rounded-lg bg-panel2/70 border border-line py-2 text-[12px]",
												children: "Incident"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												className: "flex-1 rounded-lg bg-panel2/70 border border-line py-2 text-[12px]",
												children: "Photo / Document"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												className: "flex-1 rounded-lg bg-panel2/70 border border-line py-2 text-[12px]",
												children: "Quick Note"
											})]
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "spec rounded-2xl p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[11px] uppercase tracking-[0.2em] text-cyan mb-3",
									children: "After Shift"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg bg-ink/40 border border-cyan/25 p-3 text-[12px]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-mist",
											children: "🎙️ “We went grocery shopping and Sarah prepared her own shopping list. She needed less prompting than last week and paid independently.”"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-3 font-semibold font-display",
											children: "Draft Progress Note"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-1 text-mist",
											children: "Activity: Community access / shopping"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-mist",
											children: "Observed progress: increased independent planning and payment."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-1 text-mist",
											children: "Goal linkage: daily living independence."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-3 flex gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												className: "flex-1 cta-primary rounded-lg py-1.5 text-[11px]",
												children: "Submit"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												className: "flex-1 rounded-lg bg-panel2/70 border border-line py-1.5 text-[11px]",
												children: "Review / Edit"
											})]
										})
									]
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "max-w-6xl mx-auto px-6 py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl md:text-4xl font-bold tracking-tight font-display",
						children: "Don't just automate your NDIS business. Operate it differently."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-mist max-w-xl",
						children: "Technology alone doesn't eliminate every exception. That's why NDISFlow can combine three layers into one operating model."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid md:grid-cols-3 gap-5",
						children: [
							["Software", "One system to run the organisation."],
							["AI Workforce", "AI automates repetitive operational workflows and identifies issues requiring attention."],
							["APT Operations", "Specialists can handle back-office exceptions, administration and operational support when required."]
						].map(([t, c]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-line/60 bg-panel/50 p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] uppercase tracking-[0.2em] text-cyan",
								children: t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-[13px] text-mist leading-relaxed",
								children: c
							})]
						}, t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 spec rounded-2xl p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] uppercase tracking-[0.2em] text-cyan mb-4",
								children: "Example workflow"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid md:grid-cols-5 gap-3 text-[12px]",
								children: [
									"Shift completed",
									"AI checks documentation",
									"Complete? Yes → prepare claiming",
									"No → automatically request missing information",
									"Still unresolved → human operations handles exception"
								].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-lg border border-line/60 bg-ink/40 p-3 text-mist",
									children: s
								}, s))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 text-[13px] text-foreground",
								children: "Manager only sees issues requiring judgement."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-2xl md:text-3xl font-bold tracking-tight glow-text font-display max-w-2xl",
						children: "Your organisation should scale participants faster than it scales administration."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 text-[12px] text-mist/70",
						children: "Powered by APT Business Services + SoluLab"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "max-w-6xl mx-auto px-6 py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "spec rounded-3xl p-10 md:p-14 grid lg:grid-cols-2 gap-10 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl md:text-[40px] font-bold leading-tight tracking-tight glow-text font-display",
							children: "Imagine running your next 500 participants without building a 500-participant back office."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-mist text-[15px] leading-relaxed max-w-md",
							children: "Run the organisation. Let AI run the administration around it."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 flex flex-wrap gap-1.5",
							children: capabilities.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "chip rounded-full px-2.5 py-1 text-[11px] text-mist",
								children: ["✓ ", c]
							}, c))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "cta-primary rounded-full px-6 py-3 text-[14px]",
								children: "See NDISFlow AI in Action →"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "chip rounded-full px-6 py-3 text-[14px] font-medium",
								children: "Request a Tailored Demo"
							})]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [
							[montage_dashboard_default, "NDISFlow management dashboard"],
							[montage_command_default, "NDISFlow AI Command Centre"],
							[montage_roster_default, "NDISFlow roster view"],
							[montage_mobile_default, "NDISFlow mobile worker app"]
						].map(([src, alt]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src,
							alt,
							loading: "lazy",
							width: 1024,
							height: 1024,
							className: "rounded-xl border border-line/60 aspect-square object-cover"
						}, alt))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-3 border-t border-line/60",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-[13px] font-semibold font-display",
						children: ["NDISFlow ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-cyan",
							children: "AI"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[12px] text-mist",
						children: "The AI Operating System for Modern NDIS Providers."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[12px] text-mist/70",
						children: "Powered by APT Business Services + SoluLab"
					})
				]
			})
		]
	});
}
//#endregion
export { Index as component };
