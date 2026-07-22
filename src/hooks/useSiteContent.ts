import { useState, useEffect } from "react";
import { getSiteContent, SiteContent } from "@/lib/contentStore";

export const useSiteContent = (): SiteContent => {
  const [content, setContent] = useState<SiteContent>(getSiteContent());

  useEffect(() => {
    const handleUpdate = () => {
      setContent(getSiteContent());
    };

    window.addEventListener("site-content-updated", handleUpdate);
    return () => {
      window.removeEventListener("site-content-updated", handleUpdate);
    };
  }, []);

  return content;
};
