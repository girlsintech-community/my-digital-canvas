import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Plus, Trash2, Save, X, Upload } from "lucide-react";

export type FieldDef = {
  name: string;
  label: string;
  type: "text" | "textarea" | "date" | "number" | "stringArray";
  required?: boolean;
};

type Row = Record<string, any>;

export const TableEditor = ({
  table,
  fields,
  orderBy = "sort_order",
}: {
  table: string;
  fields: FieldDef[];
  orderBy?: string;
}) => {
  const [rows, setRows] = useState<Row[]>([]);
  const [editing, setEditing] = useState<Row | null>(null);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const { data, error } = await (supabase as any)
      .from(table)
      .select("*")
      .order(orderBy, { ascending: true });
    if (error) toast({ title: "Load failed", description: error.message, variant: "destructive" });
    setRows(data ?? []);
    setLoading(false);
  };

  useEffect(() => { load(); }, [table]);

  const save = async () => {
    if (!editing) return;
    const payload: Row = {};
    for (const f of fields) {
      let v = editing[f.name];
      if (f.type === "number") v = v === "" || v == null ? 0 : Number(v);
      if (f.type === "stringArray" && typeof v === "string")
        v = v.split("\n").map((s: string) => s.trim()).filter(Boolean);
      if (f.type === "date" && !v) v = null;
      payload[f.name] = v ?? (f.type === "stringArray" ? [] : null);
    }
    const isNew = !editing.id;
    const q = isNew
      ? (supabase as any).from(table).insert(payload)
      : (supabase as any).from(table).update(payload).eq("id", editing.id);
    const { error } = await q;
    if (error) {
      toast({ title: "Save failed", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: isNew ? "Created" : "Updated" });
    setEditing(null);
    load();
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this row?")) return;
    const { error } = await (supabase as any).from(table).delete().eq("id", id);
    if (error) toast({ title: "Delete failed", description: error.message, variant: "destructive" });
    else { toast({ title: "Deleted" }); load(); }
  };

  const startNew = () => {
    const blank: Row = {};
    for (const f of fields) blank[f.name] = f.type === "stringArray" ? [] : f.type === "number" ? 0 : "";
    setEditing(blank);
  };

  const uploadImage = async (file: File): Promise<string | null> => {
    const ext = file.name.split(".").pop();
    const path = `${table}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const { error } = await supabase.storage.from("portfolio-media").upload(path, file);
    if (error) {
      toast({ title: "Upload failed", description: error.message, variant: "destructive" });
      return null;
    }
    const { data } = await supabase.storage.from("portfolio-media").createSignedUrl(path, 60 * 60 * 24 * 365 * 10);
    return data?.signedUrl ?? null;
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">{rows.length} {rows.length === 1 ? "row" : "rows"}</p>
        <Button size="sm" onClick={startNew}><Plus size={14} /> Add new</Button>
      </div>

      {loading ? (
        <p className="text-sm text-muted-foreground">Loading…</p>
      ) : (
        <div className="space-y-2">
          {rows.map((r) => (
            <div key={r.id} className="flex items-center justify-between border border-border rounded-md p-3 bg-card/40">
              <div className="text-sm truncate flex-1 mr-3">
                <strong className="text-foreground">{r.title || r.name || r.role || r.id}</strong>
                {r.event_date && <span className="text-muted-foreground ml-2">— {r.event_date}</span>}
              </div>
              <div className="flex gap-2 shrink-0">
                <Button size="sm" variant="outline" onClick={() => setEditing(r)}>Edit</Button>
                <Button size="sm" variant="outline" onClick={() => remove(r.id)}><Trash2 size={14} /></Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {editing && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-serif text-xl font-semibold">{editing.id ? "Edit" : "New"}</h3>
              <button onClick={() => setEditing(null)} className="text-muted-foreground hover:text-foreground">
                <X size={20} />
              </button>
            </div>
            <div className="space-y-4">
              {fields.map((f) => (
                <div key={f.name}>
                  <Label>{f.label}{f.required && " *"}</Label>
                  {f.type === "textarea" ? (
                    <Textarea
                      value={editing[f.name] ?? ""}
                      onChange={(e) => setEditing({ ...editing, [f.name]: e.target.value })}
                      rows={5}
                    />
                  ) : f.type === "stringArray" ? (
                    <>
                      <Textarea
                        value={Array.isArray(editing[f.name]) ? editing[f.name].join("\n") : (editing[f.name] ?? "")}
                        onChange={(e) => setEditing({ ...editing, [f.name]: e.target.value })}
                        rows={5}
                        placeholder="One per line"
                      />
                      {f.name === "gallery" && (
                        <label className="inline-flex items-center gap-2 mt-2 text-xs text-muted-foreground cursor-pointer hover:text-foreground">
                          <Upload size={12} /> Upload image
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={async (e) => {
                              const file = e.target.files?.[0];
                              if (!file) return;
                              const url = await uploadImage(file);
                              if (url) {
                                const current = Array.isArray(editing[f.name])
                                  ? editing[f.name]
                                  : (editing[f.name] || "").split("\n").filter(Boolean);
                                setEditing({ ...editing, [f.name]: [...current, url] });
                              }
                            }}
                          />
                        </label>
                      )}
                    </>
                  ) : (
                    <Input
                      type={f.type === "number" ? "number" : f.type === "date" ? "date" : "text"}
                      value={editing[f.name] ?? ""}
                      onChange={(e) => setEditing({ ...editing, [f.name]: e.target.value })}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-end gap-2 mt-6">
              <Button variant="outline" onClick={() => setEditing(null)}>Cancel</Button>
              <Button onClick={save}><Save size={14} /> Save</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
