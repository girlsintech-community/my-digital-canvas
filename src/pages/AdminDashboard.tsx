import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BentoCard from "@/components/BentoCard";
import { TableEditor, FieldDef } from "@/components/admin/TableEditor";
import { LogOut } from "lucide-react";

const TABLES: { key: string; label: string; table: string; fields: FieldDef[]; orderBy?: string }[] = [
  {
    key: "events_attended",
    label: "Events Attended",
    table: "events_attended",
    orderBy: "sort_order",
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "event_date", label: "Date", type: "date" },
      { name: "location", label: "Location", type: "text" },
      { name: "description", label: "Description", type: "textarea" },
      { name: "gallery", label: "Gallery image URLs (one per line)", type: "stringArray" },
      { name: "sort_order", label: "Sort order", type: "number" },
    ],
  },
  {
    key: "events_organised",
    label: "Events Organised",
    table: "events_organised",
    orderBy: "sort_order",
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "event_date", label: "Date", type: "date" },
      { name: "description", label: "Description", type: "textarea" },
      { name: "sort_order", label: "Sort order", type: "number" },
    ],
  },
  {
    key: "podcasts",
    label: "Podcasts",
    table: "podcasts",
    orderBy: "sort_order",
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "url", label: "YouTube URL", type: "text", required: true },
      { name: "description", label: "Description", type: "textarea" },
      { name: "sort_order", label: "Sort order", type: "number" },
    ],
  },
  {
    key: "diary_entries",
    label: "Diary",
    table: "diary_entries",
    orderBy: "entry_date",
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "entry_date", label: "Date", type: "date" },
      { name: "mood", label: "Mood", type: "text" },
      { name: "body", label: "Body", type: "textarea", required: true },
      { name: "sort_order", label: "Sort order", type: "number" },
    ],
  },
  {
    key: "recommendations",
    label: "Recommendations",
    table: "recommendations",
    orderBy: "sort_order",
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "role", label: "Role", type: "text" },
      { name: "relationship", label: "Relationship", type: "text" },
      { name: "rec_date", label: "Date", type: "date" },
      { name: "body", label: "Body", type: "textarea", required: true },
      { name: "sort_order", label: "Sort order", type: "number" },
    ],
  },
  {
    key: "work_experiences",
    label: "Work",
    table: "work_experiences",
    orderBy: "sort_order",
    fields: [
      { name: "role", label: "Role", type: "text", required: true },
      { name: "company", label: "Company", type: "text", required: true },
      { name: "start_date", label: "Start", type: "text" },
      { name: "end_date", label: "End", type: "text" },
      { name: "location", label: "Location", type: "text" },
      { name: "bullets", label: "Bullets (one per line)", type: "stringArray" },
      { name: "sort_order", label: "Sort order", type: "number" },
    ],
  },
  {
    key: "articles",
    label: "Articles",
    table: "articles",
    orderBy: "sort_order",
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "url", label: "URL", type: "text", required: true },
      { name: "platform", label: "Platform", type: "text" },
      { name: "description", label: "Description", type: "textarea" },
      { name: "published_date", label: "Date", type: "date" },
      { name: "sort_order", label: "Sort order", type: "number" },
    ],
  },
];

const AdminDashboard = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const nav = useNavigate();

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) nav("/admin/login", { replace: true });
  }, [loading, user, isAdmin, nav]);

  if (loading || !user || !isAdmin) {
    return <div className="min-h-screen flex items-center justify-center text-muted-foreground">Loading…</div>;
  }

  return (
    <div className="min-h-screen bg-background text-foreground px-4 sm:px-6 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold">Admin</h1>
            <p className="text-sm text-muted-foreground">Signed in as {user.email}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => nav("/")}>View site</Button>
            <Button variant="outline" size="sm" onClick={async () => { await signOut(); nav("/"); }}>
              <LogOut size={14} /> Sign out
            </Button>
          </div>
        </div>

        <BentoCard className="p-4 sm:p-6">
          <Tabs defaultValue={TABLES[0].key}>
            <TabsList className="flex flex-wrap h-auto">
              {TABLES.map((t) => (
                <TabsTrigger key={t.key} value={t.key}>{t.label}</TabsTrigger>
              ))}
            </TabsList>
            {TABLES.map((t) => (
              <TabsContent key={t.key} value={t.key} className="mt-6">
                <TableEditor table={t.table} fields={t.fields} orderBy={t.orderBy} />
              </TabsContent>
            ))}
          </Tabs>
        </BentoCard>
      </div>
    </div>
  );
};

export default AdminDashboard;
