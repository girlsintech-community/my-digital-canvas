import { useState } from "react";
import { X, Lock, LogOut, Save, RotateCcw, Plus, Trash2, Calendar, Video, FileText, Sparkles, Award, GraduationCap, Code, Heart, Briefcase, Layers } from "lucide-react";
import { getSiteContent, saveSiteContent, resetSiteContent, SiteContent, WorkItem, ImpactItem, TestimonialItem, EventItem, SessionItem, ArticleItem, WhatIDoCard, EducationItem, AwardItem, CertCategory } from "@/lib/contentStore";
import { toast } from "sonner";

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminModal = ({ isOpen, onClose }: AdminModalProps) => {
  const [authenticated, setAuthenticated] = useState(() => {
    return sessionStorage.getItem("manik_admin_auth") === "true";
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  const [activeTab, setActiveTab] = useState<
    | "settings"
    | "hero"
    | "about"
    | "whatido"
    | "work"
    | "impact"
    | "education"
    | "awards"
    | "certifications"
    | "extracurriculars"
    | "skills"
    | "events"
    | "sessions"
    | "articles"
    | "testimonials"
  >("settings");

  const [content, setContent] = useState<SiteContent>(getSiteContent());

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() === "manik23265@gmail.com" && password === "#LoveYou3000") {
      setAuthenticated(true);
      sessionStorage.setItem("manik_admin_auth", "true");
      setAuthError("");
      toast.success("Welcome Manik! Admin panel unlocked.");
    } else {
      setAuthError("Invalid credentials. Please enter authorized email & password.");
      toast.error("Access denied. Invalid credentials.");
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    sessionStorage.removeItem("manik_admin_auth");
    toast.info("Logged out from admin panel.");
  };

  const handleSave = () => {
    saveSiteContent(content);
    toast.success("Website content saved and updated across all sections!");
  };

  const handleReset = () => {
    if (confirm("Are you sure you want to reset all site content to original defaults?")) {
      resetSiteContent();
      setContent(getSiteContent());
      toast.info("Content reset to initial portfolio state.");
    }
  };

  // What I Do Helpers
  const addWhatIDoCard = () => {
    const newCard: WhatIDoCard = {
      id: "wido_" + Date.now(),
      title: "New Focus Area",
      description: "Description of what you do in this area.",
    };
    setContent({ ...content, whatIDo: [...content.whatIDo, newCard] });
  };
  const updateWhatIDoCard = (index: number, updated: Partial<WhatIDoCard>) => {
    const updatedCards = [...content.whatIDo];
    updatedCards[index] = { ...updatedCards[index], ...updated };
    setContent({ ...content, whatIDo: updatedCards });
  };
  const removeWhatIDoCard = (index: number) => {
    setContent({ ...content, whatIDo: content.whatIDo.filter((_, i) => i !== index) });
  };

  // Work Helpers
  const addWorkItem = () => {
    const newItem: WorkItem = {
      id: "w_" + Date.now(),
      role: "New Role",
      company: "Company Name",
      location: "Location",
      period: "2026",
      type: "Full-time",
      website: "https://example.com",
      bullets: ["Key achievement or responsibility"],
    };
    setContent({ ...content, work: [newItem, ...content.work] });
  };
  const updateWorkItem = (index: number, updated: Partial<WorkItem>) => {
    const updatedWork = [...content.work];
    updatedWork[index] = { ...updatedWork[index], ...updated };
    setContent({ ...content, work: updatedWork });
  };
  const removeWorkItem = (index: number) => {
    setContent({ ...content, work: content.work.filter((_, i) => i !== index) });
  };

  // Impact Helpers
  const addImpactItem = () => {
    const newItem: ImpactItem = {
      id: "imp_" + Date.now(),
      metric: "100+",
      title: "Impact Initiative",
      description: "Brief description of real impact created.",
      category: "Growth",
    };
    setContent({ ...content, impact: [...content.impact, newItem] });
  };
  const updateImpactItem = (index: number, updated: Partial<ImpactItem>) => {
    const updatedImpact = [...content.impact];
    updatedImpact[index] = { ...updatedImpact[index], ...updated };
    setContent({ ...content, impact: updatedImpact });
  };
  const removeImpactItem = (index: number) => {
    setContent({ ...content, impact: content.impact.filter((_, i) => i !== index) });
  };

  // Education Helpers
  const addEducationItem = () => {
    const newItem: EducationItem = {
      id: "edu_" + Date.now(),
      institution: "Institution / College Name",
      program: "Degree or Fellowship Program",
      period: "2026",
      location: "City, Country",
      link: "",
      bullets: [],
    };
    setContent({ ...content, education: [...content.education, newItem] });
  };
  const updateEducationItem = (index: number, updated: Partial<EducationItem>) => {
    const updatedEdu = [...content.education];
    updatedEdu[index] = { ...updatedEdu[index], ...updated };
    setContent({ ...content, education: updatedEdu });
  };
  const removeEducationItem = (index: number) => {
    setContent({ ...content, education: content.education.filter((_, i) => i !== index) });
  };

  // Award Helpers
  const addAwardItem = () => {
    const newItem: AwardItem = {
      id: "aw_" + Date.now(),
      title: "Award Title",
      issuer: "Organization Name",
      date: "2026",
      description: "Brief details about the recognition.",
      link: "",
    };
    setContent({ ...content, awards: [...content.awards, newItem] });
  };
  const updateAwardItem = (index: number, updated: Partial<AwardItem>) => {
    const updatedAwards = [...content.awards];
    updatedAwards[index] = { ...updatedAwards[index], ...updated };
    setContent({ ...content, awards: updatedAwards });
  };
  const removeAwardItem = (index: number) => {
    setContent({ ...content, awards: content.awards.filter((_, i) => i !== index) });
  };

  // Event Helpers
  const addEventItem = () => {
    const newItem: EventItem = {
      id: "e_" + Date.now(),
      title: "New Event Title",
      type: "organised",
      date: "2026",
      attendees: "100+",
      link: "",
    };
    setContent({ ...content, eventsOrganised: [newItem, ...content.eventsOrganised] });
  };
  const updateEventItem = (index: number, updated: Partial<EventItem>) => {
    const updatedEvents = [...content.eventsOrganised];
    updatedEvents[index] = { ...updatedEvents[index], ...updated };
    setContent({ ...content, eventsOrganised: updatedEvents });
  };
  const removeEventItem = (index: number) => {
    setContent({ ...content, eventsOrganised: content.eventsOrganised.filter((_, i) => i !== index) });
  };

  // Session Helpers
  const addSessionItem = () => {
    const newItem: SessionItem = {
      id: "s_" + Date.now(),
      title: "Session Title",
      type: "hosted",
      link: "https://youtube.com",
      speakerName: "Speaker Name",
      speakerRole: "Role",
    };
    setContent({ ...content, sessionsOrganised: [newItem, ...content.sessionsOrganised] });
  };
  const updateSessionItem = (index: number, updated: Partial<SessionItem>) => {
    const updatedSessions = [...content.sessionsOrganised];
    updatedSessions[index] = { ...updatedSessions[index], ...updated };
    setContent({ ...content, sessionsOrganised: updatedSessions });
  };
  const removeSessionItem = (index: number) => {
    setContent({ ...content, sessionsOrganised: content.sessionsOrganised.filter((_, i) => i !== index) });
  };

  // Article Helpers
  const addArticleItem = () => {
    const newItem: ArticleItem = {
      id: "a_" + Date.now(),
      title: "Article Title",
      platform: "Medium",
      link: "https://medium.com",
    };
    setContent({ ...content, articlesWritten: [newItem, ...content.articlesWritten] });
  };
  const updateArticleItem = (index: number, updated: Partial<ArticleItem>) => {
    const updatedArticles = [...content.articlesWritten];
    updatedArticles[index] = { ...updatedArticles[index], ...updated };
    setContent({ ...content, articlesWritten: updatedArticles });
  };
  const removeArticleItem = (index: number) => {
    setContent({ ...content, articlesWritten: content.articlesWritten.filter((_, i) => i !== index) });
  };

  // Testimonial Helpers
  const addTestimonialItem = () => {
    const newItem: TestimonialItem = {
      id: "t_" + Date.now(),
      person: "Full Name",
      role: "Title & Organization",
      text: "Kind words or recommendation text.",
      linkedin: "https://linkedin.com",
    };
    setContent({ ...content, testimonials: [newItem, ...content.testimonials] });
  };
  const updateTestimonialItem = (index: number, updated: Partial<TestimonialItem>) => {
    const updatedTestimonials = [...content.testimonials];
    updatedTestimonials[index] = { ...updatedTestimonials[index], ...updated };
    setContent({ ...content, testimonials: updatedTestimonials });
  };
  const removeTestimonialItem = (index: number) => {
    setContent({ ...content, testimonials: content.testimonials.filter((_, i) => i !== index) });
  };

  return (
    <div className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-muted/30">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-primary" />
            <h2 className="font-serif text-lg font-bold text-foreground">
              {authenticated ? "Full Website CMS Control Panel" : "Admin Authentication"}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {!authenticated ? (
          /* Login Form - NO placeholder as requested */
          <div className="p-8 sm:p-12 space-y-6 max-w-md mx-auto w-full">
            <div className="text-center space-y-2">
              <div className="p-3 rounded-full bg-primary/10 text-primary w-fit mx-auto">
                <Lock size={28} />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground">Admin Sign In</h3>
              <p className="text-xs text-muted-foreground">
                Sign in to customize every section of your portfolio.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-foreground mb-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 text-sm rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-foreground mb-1">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-3 py-2 text-sm rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              {authError && (
                <p className="text-xs text-rose-500 font-medium">{authError}</p>
              )}

              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Unlock CMS Panel
              </button>
            </form>
          </div>
        ) : (
          /* Full Admin Dashboard */
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Navigation Tabs Bar */}
            <div className="flex items-center justify-between px-6 py-2.5 border-b border-border bg-muted/20 overflow-x-auto gap-2">
              <div className="flex items-center gap-1.5 flex-wrap">
                {[
                  { id: "settings", label: "Site Settings" },
                  { id: "hero", label: "Hero & Bio" },
                  { id: "about", label: "About Page" },
                  { id: "whatido", label: "What I Do" },
                  { id: "work", label: `Work (${content.work.length})` },
                  { id: "impact", label: `Impact (${content.impact.length})` },
                  { id: "education", label: `Education (${content.education.length})` },
                  { id: "awards", label: `Awards (${content.awards.length})` },
                  { id: "certifications", label: `Certifications (${content.certifications.length})` },
                  { id: "extracurriculars", label: "Leadership & Extracurriculars" },
                  { id: "skills", label: "Skills & Toolkit" },
                  { id: "events", label: `Events (${content.eventsOrganised.length})` },
                  { id: "sessions", label: `Sessions (${content.sessionsOrganised.length})` },
                  { id: "articles", label: `Articles (${content.articlesWritten.length})` },
                  { id: "testimonials", label: `Testimonials (${content.testimonials.length})` },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id as any)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      activeTab === t.id ? "bg-primary text-primary-foreground font-semibold" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handleReset}
                  title="Reset to defaults"
                  className="p-1.5 rounded-lg text-muted-foreground hover:text-rose-500 hover:bg-rose-500/10 transition-colors"
                >
                  <RotateCcw size={16} />
                </button>
                <button
                  onClick={handleLogout}
                  title="Log out"
                  className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  <LogOut size={16} />
                </button>
              </div>
            </div>

            {/* Active Tab Content Panel */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* SITE SETTINGS */}
              {activeTab === "settings" && (
                <div className="space-y-5 max-w-3xl">
                  <div>
                    <h3 className="font-serif font-bold text-lg text-foreground">Site Settings & Resume</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Resume file, social links, and SEO meta. Upload a new resume to the CDN and paste the URL here to update the /resume page.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-border bg-card space-y-3">
                    <h4 className="font-semibold text-sm text-foreground">Resume</h4>
                    <div>
                      <label className="block text-xs font-medium mb-1">Resume PDF URL</label>
                      <input
                        type="text"
                        value={content.settings.resumeUrl}
                        onChange={(e) => setContent({ ...content, settings: { ...content.settings, resumeUrl: e.target.value } })}
                        className="w-full px-3 py-2 text-xs font-mono rounded-lg bg-background border border-border"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1">Download Filename</label>
                      <input
                        type="text"
                        value={content.settings.resumeFileName}
                        onChange={(e) => setContent({ ...content, settings: { ...content.settings, resumeFileName: e.target.value } })}
                        className="w-full px-3 py-2 text-sm rounded-lg bg-background border border-border"
                      />
                    </div>
                    {content.settings.resumeUrl && (
                      <a
                        href={content.settings.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline"
                      >
                        Preview current resume ↗
                      </a>
                    )}
                  </div>

                  <div className="p-4 rounded-xl border border-border bg-card space-y-3">
                    <h4 className="font-semibold text-sm text-foreground">Social & Contact</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {([
                        ["email", "Email"],
                        ["linkedin", "LinkedIn"],
                        ["github", "GitHub"],
                        ["youtube", "YouTube"],
                        ["twitter", "Twitter / X"],
                        ["instagram", "Instagram"],
                      ] as const).map(([key, label]) => (
                        <div key={key}>
                          <label className="block text-xs font-medium mb-1">{label}</label>
                          <input
                            type="text"
                            value={(content.settings as any)[key]}
                            onChange={(e) => setContent({ ...content, settings: { ...content.settings, [key]: e.target.value } })}
                            className="w-full px-3 py-2 text-xs rounded-lg bg-background border border-border font-mono"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-border bg-card space-y-3">
                    <h4 className="font-semibold text-sm text-foreground">SEO Meta</h4>
                    <div>
                      <label className="block text-xs font-medium mb-1">Page Title</label>
                      <input
                        type="text"
                        value={content.settings.metaTitle}
                        onChange={(e) => setContent({ ...content, settings: { ...content.settings, metaTitle: e.target.value } })}
                        className="w-full px-3 py-2 text-sm rounded-lg bg-background border border-border"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1">Meta Description</label>
                      <textarea
                        rows={3}
                        value={content.settings.metaDescription}
                        onChange={(e) => setContent({ ...content, settings: { ...content.settings, metaDescription: e.target.value } })}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-background border border-border"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* CERTIFICATIONS */}
              {activeTab === "certifications" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif font-bold text-lg text-foreground">Certifications by Category</h3>
                    <button
                      onClick={() => {
                        const newCat: CertCategory = {
                          id: "cert_cat_" + Date.now(),
                          category: "New Category",
                          items: [{ name: "Certification name", link: "" }],
                        };
                        setContent({ ...content, certifications: [...content.certifications, newCat] });
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-primary text-primary-foreground"
                    >
                      <Plus size={14} /> Add Category
                    </button>
                  </div>

                  <div className="space-y-4">
                    {content.certifications.map((cat, cIdx) => (
                      <div key={cat.id || cIdx} className="p-4 rounded-xl border border-border bg-card space-y-3">
                        <div className="flex items-center justify-between border-b border-border/50 pb-2 gap-2">
                          <input
                            type="text"
                            value={cat.category}
                            onChange={(e) => {
                              const upd = [...content.certifications];
                              upd[cIdx] = { ...cat, category: e.target.value };
                              setContent({ ...content, certifications: upd });
                            }}
                            className="flex-1 px-2 py-1 rounded-md bg-background border border-border text-sm font-semibold"
                          />
                          <button
                            onClick={() => setContent({ ...content, certifications: content.certifications.filter((_, i) => i !== cIdx) })}
                            className="p-1 text-rose-500 hover:bg-rose-500/10 rounded-lg text-xs flex items-center gap-1"
                          >
                            <Trash2 size={14} /> Delete
                          </button>
                        </div>
                        <div className="space-y-2">
                          {cat.items.map((it, iIdx) => (
                            <div key={iIdx} className="flex gap-2 items-start">
                              <input
                                type="text"
                                placeholder="Certification name"
                                value={it.name}
                                onChange={(e) => {
                                  const upd = [...content.certifications];
                                  const items = [...cat.items];
                                  items[iIdx] = { ...it, name: e.target.value };
                                  upd[cIdx] = { ...cat, items };
                                  setContent({ ...content, certifications: upd });
                                }}
                                className="flex-1 px-2 py-1.5 text-xs rounded-md bg-background border border-border"
                              />
                              <input
                                type="text"
                                placeholder="Link (optional)"
                                value={it.link || ""}
                                onChange={(e) => {
                                  const upd = [...content.certifications];
                                  const items = [...cat.items];
                                  items[iIdx] = { ...it, link: e.target.value };
                                  upd[cIdx] = { ...cat, items };
                                  setContent({ ...content, certifications: upd });
                                }}
                                className="flex-1 px-2 py-1.5 text-xs rounded-md bg-background border border-border font-mono"
                              />
                              <button
                                onClick={() => {
                                  const upd = [...content.certifications];
                                  upd[cIdx] = { ...cat, items: cat.items.filter((_, i) => i !== iIdx) };
                                  setContent({ ...content, certifications: upd });
                                }}
                                className="p-1.5 text-rose-500 hover:bg-rose-500/10 rounded-lg"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          ))}
                          <button
                            onClick={() => {
                              const upd = [...content.certifications];
                              upd[cIdx] = { ...cat, items: [...cat.items, { name: "", link: "" }] };
                              setContent({ ...content, certifications: upd });
                            }}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md border border-border hover:bg-muted"
                          >
                            <Plus size={12} /> Add Certification
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* HERO & BIO */}
              {activeTab === "hero" && (
                <div className="space-y-5 max-w-3xl">
                  <h3 className="font-serif font-bold text-lg text-foreground">Hero Header & Bio Settings</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium mb-1">Display Name</label>
                      <input
                        type="text"
                        value={content.hero.name}
                        onChange={(e) => setContent({ ...content, hero: { ...content.hero, name: e.target.value } })}
                        className="w-full px-3 py-2 text-sm rounded-lg bg-background border border-border"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1">Base Location</label>
                      <input
                        type="text"
                        value={content.hero.location}
                        onChange={(e) => setContent({ ...content, hero: { ...content.hero, location: e.target.value } })}
                        className="w-full px-3 py-2 text-sm rounded-lg bg-background border border-border"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1">Main Tagline</label>
                    <textarea
                      rows={2}
                      value={content.hero.tagline}
                      onChange={(e) => setContent({ ...content, hero: { ...content.hero, tagline: e.target.value } })}
                      className="w-full px-3 py-2 text-sm rounded-lg bg-background border border-border"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1">Typing Animation Roles (comma-separated)</label>
                    <input
                      type="text"
                      value={content.hero.roles.join(", ")}
                      onChange={(e) => setContent({ ...content, hero: { ...content.hero, roles: e.target.value.split(",").map((s) => s.trim()) } })}
                      className="w-full px-3 py-2 text-xs font-mono rounded-lg bg-background border border-border"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1">Hero Timeline Milestones (1 per line)</label>
                    <textarea
                      rows={5}
                      value={content.hero.milestones.join("\n")}
                      onChange={(e) => setContent({ ...content, hero: { ...content.hero, milestones: e.target.value.split("\n") } })}
                      className="w-full px-3 py-2 text-xs font-mono rounded-lg bg-background border border-border"
                    />
                  </div>
                </div>
              )}

              {/* ABOUT PAGE */}
              {activeTab === "about" && (
                <div className="space-y-5 max-w-3xl">
                  <h3 className="font-serif font-bold text-lg text-foreground">Landing & Standalone About Page Content</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium mb-1">Eyebrow Subtitle</label>
                      <input
                        type="text"
                        value={content.about.eyebrow}
                        onChange={(e) => setContent({ ...content, about: { ...content.about, eyebrow: e.target.value } })}
                        className="w-full px-3 py-2 text-sm rounded-lg bg-background border border-border"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1">Main Heading</label>
                      <input
                        type="text"
                        value={content.about.heading}
                        onChange={(e) => setContent({ ...content, about: { ...content.about, heading: e.target.value } })}
                        className="w-full px-3 py-2 text-sm rounded-lg bg-background border border-border font-semibold"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-xs font-semibold">Landing Page Bio Paragraphs (Supports HTML formatting)</label>
                    {content.about.paragraphs.map((p, idx) => (
                      <div key={idx} className="flex gap-2">
                        <textarea
                          rows={3}
                          value={p}
                          onChange={(e) => {
                            const newP = [...content.about.paragraphs];
                            newP[idx] = e.target.value;
                            setContent({ ...content, about: { ...content.about, paragraphs: newP } });
                          }}
                          className="w-full px-3 py-2 text-xs rounded-lg bg-background border border-border font-mono"
                        />
                        <button
                          onClick={() => {
                            const newP = content.about.paragraphs.filter((_, i) => i !== idx);
                            setContent({ ...content, about: { ...content.about, paragraphs: newP } });
                          }}
                          className="p-2 text-rose-500 hover:bg-rose-500/10 rounded-lg h-fit"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => setContent({ ...content, about: { ...content.about, paragraphs: [...content.about.paragraphs, "New bio paragraph..."] } })}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-border hover:bg-muted"
                    >
                      <Plus size={14} /> Add Landing Paragraph
                    </button>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1">Key Recognitions List (1 per line)</label>
                    <textarea
                      rows={4}
                      value={(content.about.recognitions || []).join("\n")}
                      onChange={(e) => setContent({ ...content, about: { ...content.about, recognitions: e.target.value.split("\n") } })}
                      className="w-full px-3 py-2 text-xs font-mono rounded-lg bg-background border border-border"
                    />
                  </div>
                </div>
              )}

              {/* WHAT I DO */}
              {activeTab === "whatido" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif font-bold text-lg text-foreground">Manage What I Do Cards</h3>
                    <button
                      onClick={addWhatIDoCard}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-primary text-primary-foreground"
                    >
                      <Plus size={14} /> Add Focus Card
                    </button>
                  </div>

                  <div className="space-y-4">
                    {content.whatIDo.map((card, idx) => (
                      <div key={card.id || idx} className="p-4 rounded-xl border border-border bg-card space-y-3">
                        <div className="flex items-center justify-between border-b border-border/50 pb-2">
                          <span className="font-mono text-xs text-primary font-bold">Focus #{idx + 1}</span>
                          <button
                            onClick={() => removeWhatIDoCard(idx)}
                            className="p-1 text-rose-500 hover:bg-rose-500/10 rounded-lg text-xs flex items-center gap-1"
                          >
                            <Trash2 size={14} /> Delete
                          </button>
                        </div>
                        <div className="space-y-2 text-xs">
                          <div>
                            <label className="block text-muted-foreground mb-1">Card Title</label>
                            <input
                              type="text"
                              value={card.title}
                              onChange={(e) => updateWhatIDoCard(idx, { title: e.target.value })}
                              className="w-full px-2.5 py-1.5 rounded-md bg-background border border-border font-semibold"
                            />
                          </div>
                          <div>
                            <label className="block text-muted-foreground mb-1">Description</label>
                            <textarea
                              rows={2}
                              value={card.description}
                              onChange={(e) => updateWhatIDoCard(idx, { description: e.target.value })}
                              className="w-full px-2.5 py-1.5 rounded-md bg-background border border-border"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* WORK EXPERIENCE */}
              {activeTab === "work" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif font-bold text-lg text-foreground">Manage Work Experiences</h3>
                    <button
                      onClick={addWorkItem}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-primary text-primary-foreground"
                    >
                      <Plus size={14} /> Add Work Role
                    </button>
                  </div>

                  <div className="space-y-4">
                    {content.work.map((item, idx) => (
                      <div key={item.id || idx} className="p-4 rounded-xl border border-border bg-card space-y-3">
                        <div className="flex items-center justify-between border-b border-border/50 pb-2">
                          <span className="font-mono text-xs text-primary font-bold">Role #{idx + 1}</span>
                          <button
                            onClick={() => removeWorkItem(idx)}
                            className="p-1 text-rose-500 hover:bg-rose-500/10 rounded-lg text-xs flex items-center gap-1"
                          >
                            <Trash2 size={14} /> Delete
                          </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                          <div>
                            <label className="block text-muted-foreground mb-1">Job Role</label>
                            <input
                              type="text"
                              value={item.role}
                              onChange={(e) => updateWorkItem(idx, { role: e.target.value })}
                              className="w-full px-2.5 py-1.5 rounded-md bg-background border border-border font-semibold"
                            />
                          </div>
                          <div>
                            <label className="block text-muted-foreground mb-1">Company Name</label>
                            <input
                              type="text"
                              value={item.company}
                              onChange={(e) => updateWorkItem(idx, { company: e.target.value })}
                              className="w-full px-2.5 py-1.5 rounded-md bg-background border border-border"
                            />
                          </div>
                          <div>
                            <label className="block text-muted-foreground mb-1">Period</label>
                            <input
                              type="text"
                              value={item.period}
                              onChange={(e) => updateWorkItem(idx, { period: e.target.value })}
                              className="w-full px-2.5 py-1.5 rounded-md bg-background border border-border"
                            />
                          </div>
                          <div>
                            <label className="block text-muted-foreground mb-1">Location & Type</label>
                            <input
                              type="text"
                              value={item.location}
                              onChange={(e) => updateWorkItem(idx, { location: e.target.value })}
                              className="w-full px-2.5 py-1.5 rounded-md bg-background border border-border"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold mb-1">Bullet Points (1 per line)</label>
                          <textarea
                            rows={3}
                            value={item.bullets.join("\n")}
                            onChange={(e) => updateWorkItem(idx, { bullets: e.target.value.split("\n") })}
                            className="w-full px-2.5 py-1.5 text-xs font-mono rounded-md bg-background border border-border"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* IMPACT */}
              {activeTab === "impact" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif font-bold text-lg text-foreground">Manage Impact Section</h3>
                    <button
                      onClick={addImpactItem}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-primary text-primary-foreground"
                    >
                      <Plus size={14} /> Add Impact Metric
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {content.impact.map((item, idx) => (
                      <div key={item.id || idx} className="p-4 rounded-xl border border-border bg-card space-y-3">
                        <div className="flex items-center justify-between border-b border-border/50 pb-2">
                          <span className="font-mono text-xs text-primary font-bold">Impact #{idx + 1}</span>
                          <button
                            onClick={() => removeImpactItem(idx)}
                            className="p-1 text-rose-500 hover:bg-rose-500/10 rounded-lg text-xs flex items-center gap-1"
                          >
                            <Trash2 size={14} /> Delete
                          </button>
                        </div>
                        <div className="space-y-2 text-xs">
                          <div>
                            <label className="block text-muted-foreground mb-0.5">Big Metric (e.g. 3,300+)</label>
                            <input
                              type="text"
                              value={item.metric}
                              onChange={(e) => updateImpactItem(idx, { metric: e.target.value })}
                              className="w-full px-2.5 py-1.5 rounded-md bg-background border border-border font-bold text-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-muted-foreground mb-0.5">Title</label>
                            <input
                              type="text"
                              value={item.title}
                              onChange={(e) => updateImpactItem(idx, { title: e.target.value })}
                              className="w-full px-2.5 py-1.5 rounded-md bg-background border border-border font-semibold"
                            />
                          </div>
                          <div>
                            <label className="block text-muted-foreground mb-0.5">Description</label>
                            <textarea
                              rows={2}
                              value={item.description}
                              onChange={(e) => updateImpactItem(idx, { description: e.target.value })}
                              className="w-full px-2.5 py-1.5 rounded-md bg-background border border-border"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* EDUCATION */}
              {activeTab === "education" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif font-bold text-lg text-foreground flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      Manage Education Section
                    </h3>
                    <button
                      onClick={addEducationItem}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-primary text-primary-foreground"
                    >
                      <Plus size={14} /> Add Education
                    </button>
                  </div>

                  <div className="space-y-4">
                    {content.education.map((item, idx) => (
                      <div key={item.id || idx} className="p-4 rounded-xl border border-border bg-card space-y-3">
                        <div className="flex items-center justify-between border-b border-border/50 pb-2">
                          <span className="font-mono text-xs text-primary font-bold">Education #{idx + 1}</span>
                          <button
                            onClick={() => removeEducationItem(idx)}
                            className="p-1 text-rose-500 hover:bg-rose-500/10 rounded-lg text-xs flex items-center gap-1"
                          >
                            <Trash2 size={14} /> Delete
                          </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                          <div>
                            <label className="block text-muted-foreground mb-1">Institution</label>
                            <input
                              type="text"
                              value={item.institution}
                              onChange={(e) => updateEducationItem(idx, { institution: e.target.value })}
                              className="w-full px-2.5 py-1.5 rounded-md bg-background border border-border font-semibold"
                            />
                          </div>
                          <div>
                            <label className="block text-muted-foreground mb-1">Program / Degree</label>
                            <input
                              type="text"
                              value={item.program}
                              onChange={(e) => updateEducationItem(idx, { program: e.target.value })}
                              className="w-full px-2.5 py-1.5 rounded-md bg-background border border-border"
                            />
                          </div>
                          <div>
                            <label className="block text-muted-foreground mb-1">Period</label>
                            <input
                              type="text"
                              value={item.period}
                              onChange={(e) => updateEducationItem(idx, { period: e.target.value })}
                              className="w-full px-2.5 py-1.5 rounded-md bg-background border border-border"
                            />
                          </div>
                          <div>
                            <label className="block text-muted-foreground mb-1">Location</label>
                            <input
                              type="text"
                              value={item.location || ""}
                              onChange={(e) => updateEducationItem(idx, { location: e.target.value })}
                              className="w-full px-2.5 py-1.5 rounded-md bg-background border border-border"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* AWARDS */}
              {activeTab === "awards" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif font-bold text-lg text-foreground flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary" />
                      Manage Awards & Honors
                    </h3>
                    <button
                      onClick={addAwardItem}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-primary text-primary-foreground"
                    >
                      <Plus size={14} /> Add Award
                    </button>
                  </div>

                  <div className="space-y-4">
                    {content.awards.map((item, idx) => (
                      <div key={item.id || idx} className="p-4 rounded-xl border border-border bg-card space-y-3">
                        <div className="flex items-center justify-between border-b border-border/50 pb-2">
                          <span className="font-mono text-xs text-primary font-bold">Award #{idx + 1}</span>
                          <button
                            onClick={() => removeAwardItem(idx)}
                            className="p-1 text-rose-500 hover:bg-rose-500/10 rounded-lg text-xs flex items-center gap-1"
                          >
                            <Trash2 size={14} /> Delete
                          </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                          <div>
                            <label className="block text-muted-foreground mb-1">Award Title</label>
                            <input
                              type="text"
                              value={item.title}
                              onChange={(e) => updateAwardItem(idx, { title: e.target.value })}
                              className="w-full px-2.5 py-1.5 rounded-md bg-background border border-border font-semibold"
                            />
                          </div>
                          <div>
                            <label className="block text-muted-foreground mb-1">Issuer</label>
                            <input
                              type="text"
                              value={item.issuer}
                              onChange={(e) => updateAwardItem(idx, { issuer: e.target.value })}
                              className="w-full px-2.5 py-1.5 rounded-md bg-background border border-border"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold mb-1">Description</label>
                          <textarea
                            rows={2}
                            value={item.description}
                            onChange={(e) => updateAwardItem(idx, { description: e.target.value })}
                            className="w-full px-2.5 py-1.5 text-xs rounded-md bg-background border border-border"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* EXTRACURRICULARS */}
              {activeTab === "extracurriculars" && (
                <div className="space-y-5 max-w-3xl">
                  <h3 className="font-serif font-bold text-lg text-foreground">Extracurriculars & Leadership</h3>
                  <div>
                    <label className="block text-xs font-semibold mb-1">Achievements (1 per line)</label>
                    <textarea
                      rows={4}
                      value={(content.extracurriculars?.achievements || []).join("\n")}
                      onChange={(e) => setContent({ ...content, extracurriculars: { ...content.extracurriculars, achievements: e.target.value.split("\n") } })}
                      className="w-full px-3 py-2 text-xs font-mono rounded-lg bg-background border border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1">Leadership Roles (1 per line)</label>
                    <textarea
                      rows={4}
                      value={(content.extracurriculars?.leadershipRoles || []).join("\n")}
                      onChange={(e) => setContent({ ...content, extracurriculars: { ...content.extracurriculars, leadershipRoles: e.target.value.split("\n") } })}
                      className="w-full px-3 py-2 text-xs font-mono rounded-lg bg-background border border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1">Hackathons Attended (1 per line)</label>
                    <textarea
                      rows={4}
                      value={(content.extracurriculars?.hackathonsAttended || []).join("\n")}
                      onChange={(e) => setContent({ ...content, extracurriculars: { ...content.extracurriculars, hackathonsAttended: e.target.value.split("\n") } })}
                      className="w-full px-3 py-2 text-xs font-mono rounded-lg bg-background border border-border"
                    />
                  </div>
                </div>
              )}

              {/* SKILLS */}
              {activeTab === "skills" && (
                <div className="space-y-5 max-w-3xl">
                  <h3 className="font-serif font-bold text-lg text-foreground flex items-center gap-2">
                    <Code className="w-5 h-5 text-primary" />
                    Skills & Toolkit Management
                  </h3>
                  <div>
                    <label className="block text-xs font-semibold mb-1">Technical Skills (comma-separated)</label>
                    <input
                      type="text"
                      value={(content.skills?.technical || []).join(", ")}
                      onChange={(e) => setContent({ ...content, skills: { ...content.skills, technical: e.target.value.split(",").map((s) => s.trim()) } })}
                      className="w-full px-3 py-2 text-xs font-mono rounded-lg bg-background border border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1">Non-Technical Skills (comma-separated)</label>
                    <input
                      type="text"
                      value={(content.skills?.nonTechnical || []).join(", ")}
                      onChange={(e) => setContent({ ...content, skills: { ...content.skills, nonTechnical: e.target.value.split(",").map((s) => s.trim()) } })}
                      className="w-full px-3 py-2 text-xs font-mono rounded-lg bg-background border border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1">Interpersonal Skills (comma-separated)</label>
                    <input
                      type="text"
                      value={(content.skills?.interpersonal || []).join(", ")}
                      onChange={(e) => setContent({ ...content, skills: { ...content.skills, interpersonal: e.target.value.split(",").map((s) => s.trim()) } })}
                      className="w-full px-3 py-2 text-xs font-mono rounded-lg bg-background border border-border"
                    />
                  </div>
                </div>
              )}

              {/* EVENTS */}
              {activeTab === "events" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif font-bold text-lg text-foreground flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      Manage Events (Organised & Hosted)
                    </h3>
                    <button
                      onClick={addEventItem}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-primary text-primary-foreground"
                    >
                      <Plus size={14} /> Add Event
                    </button>
                  </div>

                  <div className="space-y-4">
                    {content.eventsOrganised.map((item, idx) => (
                      <div key={item.id || idx} className="p-4 rounded-xl border border-border bg-card space-y-3">
                        <div className="flex items-center justify-between border-b border-border/50 pb-2">
                          <span className="font-mono text-xs text-primary font-bold">Event #{idx + 1}</span>
                          <button
                            onClick={() => removeEventItem(idx)}
                            className="p-1 text-rose-500 hover:bg-rose-500/10 rounded-lg text-xs flex items-center gap-1"
                          >
                            <Trash2 size={14} /> Delete
                          </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                          <div className="sm:col-span-2">
                            <label className="block text-muted-foreground mb-1">Event Title</label>
                            <input
                              type="text"
                              value={item.title}
                              onChange={(e) => updateEventItem(idx, { title: e.target.value })}
                              className="w-full px-2.5 py-1.5 rounded-md bg-background border border-border font-semibold"
                            />
                          </div>
                          <div>
                            <label className="block text-muted-foreground mb-1">Type</label>
                            <select
                              value={item.type}
                              onChange={(e) => updateEventItem(idx, { type: e.target.value as any })}
                              className="w-full px-2.5 py-1.5 rounded-md bg-background border border-border"
                            >
                              <option value="organised">Organised</option>
                              <option value="hosted">Hosted</option>
                              <option value="attended">Attended</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SESSIONS */}
              {activeTab === "sessions" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif font-bold text-lg text-foreground flex items-center gap-2">
                      <Video className="w-5 h-5 text-primary" />
                      Manage Sessions (Organised & Hosted)
                    </h3>
                    <button
                      onClick={addSessionItem}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-primary text-primary-foreground"
                    >
                      <Plus size={14} /> Add Session
                    </button>
                  </div>

                  <div className="space-y-4">
                    {content.sessionsOrganised.map((item, idx) => (
                      <div key={item.id || idx} className="p-4 rounded-xl border border-border bg-card space-y-3">
                        <div className="flex items-center justify-between border-b border-border/50 pb-2">
                          <span className="font-mono text-xs text-primary font-bold">Session #{idx + 1}</span>
                          <button
                            onClick={() => removeSessionItem(idx)}
                            className="p-1 text-rose-500 hover:bg-rose-500/10 rounded-lg text-xs flex items-center gap-1"
                          >
                            <Trash2 size={14} /> Delete
                          </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                          <div className="sm:col-span-2">
                            <label className="block text-muted-foreground mb-1">Session Topic / Title</label>
                            <input
                              type="text"
                              value={item.title}
                              onChange={(e) => updateSessionItem(idx, { title: e.target.value })}
                              className="w-full px-2.5 py-1.5 rounded-md bg-background border border-border font-semibold"
                            />
                          </div>
                          <div>
                            <label className="block text-muted-foreground mb-1">Speaker Name(s)</label>
                            <input
                              type="text"
                              value={item.speakerName}
                              onChange={(e) => updateSessionItem(idx, { speakerName: e.target.value })}
                              className="w-full px-2.5 py-1.5 rounded-md bg-background border border-border"
                            />
                          </div>
                          <div>
                            <label className="block text-muted-foreground mb-1">Speaker Role</label>
                            <input
                              type="text"
                              value={item.speakerRole}
                              onChange={(e) => updateSessionItem(idx, { speakerRole: e.target.value })}
                              className="w-full px-2.5 py-1.5 rounded-md bg-background border border-border"
                            />
                          </div>
                          <div className="sm:col-span-2">
                            <label className="block text-muted-foreground mb-1">YouTube / Session Link</label>
                            <input
                              type="text"
                              value={item.link}
                              onChange={(e) => updateSessionItem(idx, { link: e.target.value })}
                              className="w-full px-2.5 py-1.5 rounded-md bg-background border border-border font-mono text-xs"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ARTICLES */}
              {activeTab === "articles" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif font-bold text-lg text-foreground flex items-center gap-2">
                      <FileText className="w-5 h-5 text-primary" />
                      Manage Articles & Threads Written
                    </h3>
                    <button
                      onClick={addArticleItem}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-primary text-primary-foreground"
                    >
                      <Plus size={14} /> Add Article
                    </button>
                  </div>

                  <div className="space-y-4">
                    {content.articlesWritten.map((item, idx) => (
                      <div key={item.id || idx} className="p-4 rounded-xl border border-border bg-card space-y-3">
                        <div className="flex items-center justify-between border-b border-border/50 pb-2">
                          <span className="font-mono text-xs text-primary font-bold">Article #{idx + 1}</span>
                          <button
                            onClick={() => removeArticleItem(idx)}
                            className="p-1 text-rose-500 hover:bg-rose-500/10 rounded-lg text-xs flex items-center gap-1"
                          >
                            <Trash2 size={14} /> Delete
                          </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                          <div className="sm:col-span-2">
                            <label className="block text-muted-foreground mb-1">Article Title</label>
                            <input
                              type="text"
                              value={item.title}
                              onChange={(e) => updateArticleItem(idx, { title: e.target.value })}
                              className="w-full px-2.5 py-1.5 rounded-md bg-background border border-border font-semibold"
                            />
                          </div>
                          <div>
                            <label className="block text-muted-foreground mb-1">Platform</label>
                            <input
                              type="text"
                              value={item.platform}
                              onChange={(e) => updateArticleItem(idx, { platform: e.target.value })}
                              className="w-full px-2.5 py-1.5 rounded-md bg-background border border-border"
                              placeholder="Medium, Hashnode, LinkedIn, etc."
                            />
                          </div>
                          <div className="sm:col-span-3">
                            <label className="block text-muted-foreground mb-1">Article Link</label>
                            <input
                              type="text"
                              value={item.link}
                              onChange={(e) => updateArticleItem(idx, { link: e.target.value })}
                              className="w-full px-2.5 py-1.5 rounded-md bg-background border border-border font-mono text-xs"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TESTIMONIALS */}
              {activeTab === "testimonials" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif font-bold text-lg text-foreground">Manage Testimonials & Recommendations</h3>
                    <button
                      onClick={addTestimonialItem}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-primary text-primary-foreground"
                    >
                      <Plus size={14} /> Add Testimonial
                    </button>
                  </div>

                  <div className="space-y-4">
                    {content.testimonials.map((item, idx) => (
                      <div key={item.id || idx} className="p-4 rounded-xl border border-border bg-card space-y-3">
                        <div className="flex items-center justify-between border-b border-border/50 pb-2">
                          <span className="font-mono text-xs text-primary font-bold">Testimonial #{idx + 1}</span>
                          <button
                            onClick={() => removeTestimonialItem(idx)}
                            className="p-1 text-rose-500 hover:bg-rose-500/10 rounded-lg text-xs flex items-center gap-1"
                          >
                            <Trash2 size={14} /> Delete
                          </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                          <div>
                            <label className="block text-muted-foreground mb-1">Author Name</label>
                            <input
                              type="text"
                              value={item.person}
                              onChange={(e) => updateTestimonialItem(idx, { person: e.target.value })}
                              className="w-full px-2.5 py-1.5 rounded-md bg-background border border-border font-semibold"
                            />
                          </div>
                          <div>
                            <label className="block text-muted-foreground mb-1">Role / Designation</label>
                            <input
                              type="text"
                              value={item.role}
                              onChange={(e) => updateTestimonialItem(idx, { role: e.target.value })}
                              className="w-full px-2.5 py-1.5 rounded-md bg-background border border-border"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold mb-1">Testimonial Text</label>
                          <textarea
                            rows={3}
                            value={item.text}
                            onChange={(e) => updateTestimonialItem(idx, { text: e.target.value })}
                            className="w-full px-2.5 py-1.5 text-xs rounded-md bg-background border border-border"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer Actions Bar */}
            <div className="p-4 border-t border-border bg-muted/30 flex items-center justify-between">
              <span className="text-xs text-muted-foreground">
                All changes persist to local storage.
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg text-xs font-medium border border-border hover:bg-muted"
                >
                  Close
                </button>
                <button
                  onClick={handleSave}
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg text-xs font-semibold bg-primary text-primary-foreground shadow-sm hover:opacity-90"
                >
                  <Save size={14} /> Save Website Changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
