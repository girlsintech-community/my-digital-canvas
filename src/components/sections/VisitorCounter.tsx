import { useState, useEffect } from "react";
import { Eye } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const VisitorCounter = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      const alreadyCounted = sessionStorage.getItem("visit_counted");
      try {
        if (alreadyCounted) {
          const { data, error } = await supabase
            .from("visitor_counter")
            .select("count")
            .eq("id", 1)
            .maybeSingle();
          if (error) throw error;
          if (!cancelled && data) setCount(Number(data.count));
        } else {
          const { data, error } = await supabase.rpc("increment_visitor_count");
          if (error) throw error;
          sessionStorage.setItem("visit_counted", "1");
          if (!cancelled && data !== null) setCount(Number(data));
        }
      } catch {
        // keep the counter hidden if the backend is unreachable
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  if (count === null) return null;

  return (
    <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground" title="Total visits">
      <Eye size={14} />
      <span className="tabular-nums">{count.toLocaleString()}</span>
    </div>
  );
};

export default VisitorCounter;
