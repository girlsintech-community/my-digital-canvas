import { useState } from "react";
import { X, Lock, LogOut, Save, RotateCcw, Plus, Trash2, Calendar, Video, FileText, Sparkles } from "lucide-react";
import { getSiteContent, saveSiteContent, resetSiteContent, SiteContent, WorkItem, ImpactItem, TestimonialItem, EventItem, SessionItem, ArticleItem } from "@/lib/contentStore";
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

  const [activeTab, setActiveTab] = useState<"hero" | "about" | "work" | "impact" | "testimonials" | "events" | "sessions" | "articles">("hero");
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
    toast.success("Website content saved and updated live!");
  };

  const handleReset = () => {
    if (confirm("Are you sure you want to reset all content to defaults?")) {
      resetSiteContent();
      setContent(getSiteContent());
      toast.info("Content reset to initial portfolio state.");
    }
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
      bullets: ["Accomplishment or key responsibility"],
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

  // Event Helpers
  const addEventItem = () => {
    const newItem: EventItem = {
      id: "e_" + Date.now(),
      title: "New Event Title",
      type: "organised",
      date: "2026",
      attendees: "100+",
      link: "https://example.com",
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
      title: "New Session Title",
      type: "hosted",
      link: "https://youtube.com",
      speakerName: "Speaker Name",
      speakerRole: "Role / Company",
      speakerLinkedin: "https://linkedin.com",
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
      title: "New Article Title",
      platform: "Medium",
      link: "https://medium.com",
      category: "Tech",
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

  return (
    <div className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-muted/30">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-primary" />
            <h2 className="font-serif text-lg font-bold text-foreground">
              {authenticated ? "Admin Control Panel" : "Admin Authentication"}
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
          /* Login Form */
          <div className="p-8 sm:p-12 space-y-6 max-w-md mx-auto w-full">
            <div className="text-center space-y-2">
              <div className="p-3 rounded-full bg-primary/10 text-primary w-fit mx-auto">
                <Lock size={28} />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground">Sign In to Admin Panel</h3>
              <p className="text-xs text-muted-foreground">
                Enter your credentials to edit website elements & content.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-foreground mb-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="manik23265@gmail.com"
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
                  placeholder="••••••••••••"
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
                Unlock Admin Panel
              </button>
            </form>
          </div>
        ) : (
          /* Admin Dashboard */
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Navigation Tabs */}
            <div className="flex items-center justify-between px-6 py-2 border-b border-border bg-muted/20 overflow-x-auto gap-2">
              <div className="flex items-center gap-1.5 flex-wrap">
                <button
                  onClick={() => setActiveTab("hero")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    activeTab === "hero" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Hero & Bio
                </button>
                <button
                  onClick={() => setActiveTab("about")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    activeTab === "about" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  About
                </button>
                <button
                  onClick={() => setActiveTab("work")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    activeTab === "work" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Work ({content.work.length})
                </button>
                <button
                  onClick={() => setActiveTab("impact")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    activeTab === "impact" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Impact ({content.impact.length})
                </button>
                <button
                  onClick={() => setActiveTab("events")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    activeTab === "events" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Events ({content.eventsOrganised.length})
                </button>
                <button
                  onClick={() => setActiveTab("sessions")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    activeTab === "sessions" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Sessions ({content.sessionsOrganised.length})
                </button>
                <button
                  onClick={() => setActiveTab("articles")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    activeTab === "articles" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Articles ({content.articlesWritten.length})
                </button>
                <button
                  onClick={() => setActiveTab("testimonials")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    activeTab === "testimonials" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Testimonials ({content.testimonials.length})
                </button>
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

            {/* Tab Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* HERO TAB */}
              {activeTab === "hero" && (
                <div className="space-y-4 max-w-2xl">
                  <h3 className="font-serif font-bold text-lg text-foreground">Edit Hero Header Content</h3>
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
                    <label className="block text-xs font-medium mb-1">Tagline / Main Headline</label>
                    <textarea
                      rows={2}
                      value={content.hero.tagline}
                      onChange={(e) => setContent({ ...content, hero: { ...content.hero, tagline: e.target.value } })}
                      className="w-full px-3 py-2 text-sm rounded-lg bg-background border border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1">Hero Paragraph 1</label>
                    <textarea
                      rows={3}
                      value={content.hero.bioParagraph1}
                      onChange={(e) => setContent({ ...content, hero: { ...content.hero, bioParagraph1: e.target.value } })}
                      className="w-full px-3 py-2 text-sm rounded-lg bg-background border border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1">Hero Paragraph 2</label>
                    <textarea
                      rows={3}
                      value={content.hero.bioParagraph2}
                      onChange={(e) => setContent({ ...content, hero: { ...content.hero, bioParagraph2: e.target.value } })}
                      className="w-full px-3 py-2 text-sm rounded-lg bg-background border border-border"
                    />
                  </div>
                </div>
              )}

              {/* ABOUT TAB */}
              {activeTab === "about" && (
                <div className="space-y-4 max-w-2xl">
                  <h3 className="font-serif font-bold text-lg text-foreground">Edit Landing & Detailed About Section</h3>
                  <div>
                    <label className="block text-xs font-medium mb-1">Heading</label>
                    <input
                      type="text"
                      value={content.about.heading}
                      onChange={(e) => setContent({ ...content, about: { ...content.about, heading: e.target.value } })}
                      className="w-full px-3 py-2 text-sm rounded-lg bg-background border border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1">Description / Eyebrow Subtitle</label>
                    <input
                      type="text"
                      value={content.about.description}
                      onChange={(e) => setContent({ ...content, about: { ...content.about, description: e.target.value } })}
                      className="w-full px-3 py-2 text-sm rounded-lg bg-background border border-border"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="block text-xs font-semibold text-foreground">Landing Page Bio Paragraphs</label>
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
                      <Plus size={14} /> Add Paragraph
                    </button>
                  </div>
                </div>
              )}

              {/* WORK TAB */}
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
                              className="w-full px-2.5 py-1.5 rounded-md bg-background border border-border"
                            />
                          </div>
                          <div>
                            <label className="block text-muted-foreground mb-1">Company</label>
                            <input
                              type="text"
                              value={item.company}
                              onChange={(e) => updateWorkItem(idx, { company: e.target.value })}
                              className="w-full px-2.5 py-1.5 rounded-md bg-background border border-border"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold mb-1">Bullets (1 per line)</label>
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

              {/* IMPACT TAB */}
              {activeTab === "impact" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif font-bold text-lg text-foreground">Manage Impact Section</h3>
                    <button
                      onClick={addImpactItem}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-primary text-primary-foreground"
                    >
                      <Plus size={14} /> Add Impact Item
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
                              className="w-full px-2.5 py-1.5 rounded-md bg-background border border-border"
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

              {/* EVENTS TAB (Organised & Hosted) */}
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
                          <div>
                            <label className="block text-muted-foreground mb-1">Year / Date</label>
                            <input
                              type="text"
                              value={item.date}
                              onChange={(e) => updateEventItem(idx, { date: e.target.value })}
                              className="w-full px-2.5 py-1.5 rounded-md bg-background border border-border"
                            />
                          </div>
                          <div>
                            <label className="block text-muted-foreground mb-1">Attendees</label>
                            <input
                              type="text"
                              value={item.attendees || ""}
                              onChange={(e) => updateEventItem(idx, { attendees: e.target.value })}
                              className="w-full px-2.5 py-1.5 rounded-md bg-background border border-border"
                            />
                          </div>
                          <div>
                            <label className="block text-muted-foreground mb-1">Link (Optional)</label>
                            <input
                              type="text"
                              value={item.link || ""}
                              onChange={(e) => updateEventItem(idx, { link: e.target.value })}
                              className="w-full px-2.5 py-1.5 rounded-md bg-background border border-border"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SESSIONS TAB (Organised & Hosted) */}
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

              {/* ARTICLES TAB */}
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
                              placeholder="Medium, Hashnode, X Thread, etc."
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

              {/* TESTIMONIALS TAB */}
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

            {/* Footer Actions */}
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
