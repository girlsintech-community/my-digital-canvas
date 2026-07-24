export const LOGO_MAP: Record<string, string> = {
  "mckinsey": "/logos/mckinsey.png",
  "aspire": "/logos/aspire-institute.png",
  "chandigarh group of colleges": "/logos/cgc.png",
  "cgc": "/logos/cgc.png",
  "cmx academy": "/logos/cmx-academy.png",
  "cmx": "/logos/cmx.png",
  "community collective": "/logos/community-collective.png",
  "blockon": "/logos/blockon-ventures.png",
  "cyber security": "/logos/association-cyber-security.png",
  "udacity": "/logos/udacity.png",
  "propeers": "/logos/propeers.png",
  "girls leading tech": "/logos/girls-leading-tech.png",
  "lamit": "/logos/lamit-club.png",
  "letz connect": "/logos/letz-connect.png",
  "gdg on campus": "/logos/gdg-on-campus-cgc.png",
  "gdg": "/logos/gdg-on-campus-cgc.png",
  "shebuilds": "/logos/shebuilds.png",
  "cncf": "/logos/cncf-jalandhar.png",
  "google cloud": "/logos/google-cloud.png",
  "thm": "/logos/thm-chandigarh.png",
  "tpg": "/logos/tpg-chandigarh.png",
  "phoenix guild": "/logos/tpg-chandigarh.png",
  "socrates": "/logos/socrates-global.png",
  "hack for bloom": "/logos/hack-for-bloom.png",
  "ibw": "/logos/ibw.png",
  "web3conf": "/logos/web3conf-goa.png",
  "web3 conf": "/logos/web3conf-goa.png",
  "kotlin": "/logos/kotlin-conf.png",
  "outdefine": "/logos/outdefine.png",
  "hackarcode": "/logos/hackarcode.png",
  "devrel": "/logos/devrel-uni.png",
  "gdg cloud": "/logos/gdg-cloud-chandigarh.png",
  "police dav": "/logos/police-dav-public-school.png",
  "shecancode": "/logos/shecancode.png",
  "she can code": "/logos/shecancode.png"
};

export function getLogoForName(name: string): string | null {
  if (!name) return null;
  const lower = name.toLowerCase();

  // Specific multi-word check precedence
  if (lower.includes("cmx academy")) return LOGO_MAP["cmx academy"];
  if (lower.includes("gdg cloud")) return LOGO_MAP["gdg cloud"];
  if (lower.includes("gdg")) return LOGO_MAP["gdg on campus"];
  if (lower.includes("google cloud")) return LOGO_MAP["google cloud"];
  if (lower.includes("mckinsey")) return LOGO_MAP["mckinsey"];
  if (lower.includes("aspire")) return LOGO_MAP["aspire"];
  if (lower.includes("chandigarh group of colleges") || lower.includes("cgc")) return LOGO_MAP["cgc"];
  if (lower.includes("community collective")) return LOGO_MAP["community collective"];
  if (lower.includes("blockon")) return LOGO_MAP["blockon"];
  if (lower.includes("cyber security")) return LOGO_MAP["cyber security"];
  if (lower.includes("udacity")) return LOGO_MAP["udacity"];
  if (lower.includes("propeers")) return LOGO_MAP["propeers"];
  if (lower.includes("girls leading tech")) return LOGO_MAP["girls leading tech"];
  if (lower.includes("lamit")) return LOGO_MAP["lamit"];
  if (lower.includes("letz connect")) return LOGO_MAP["letz connect"];
  if (lower.includes("shebuilds")) return LOGO_MAP["shebuilds"];
  if (lower.includes("cncf")) return LOGO_MAP["cncf"];
  if (lower.includes("thm")) return LOGO_MAP["thm"];
  if (lower.includes("tpg") || lower.includes("phoenix guild")) return LOGO_MAP["tpg"];
  if (lower.includes("socrates")) return LOGO_MAP["socrates"];
  if (lower.includes("hack for bloom") || lower.includes("hackforbloom")) return LOGO_MAP["hack for bloom"];
  if (lower.includes("ibw") || lower.includes("india blockchain week")) return LOGO_MAP["ibw"];
  if (lower.includes("web3conf") || lower.includes("web3 conf")) return LOGO_MAP["web3conf"];
  if (lower.includes("kotlin")) return LOGO_MAP["kotlin"];
  if (lower.includes("outdefine")) return LOGO_MAP["outdefine"];
  if (lower.includes("hackarcode")) return LOGO_MAP["hackarcode"];
  if (lower.includes("devrel")) return LOGO_MAP["devrel"];
  if (lower.includes("police dav")) return LOGO_MAP["police dav"];
  if (lower.includes("cmx")) return LOGO_MAP["cmx"];

  return null;
}
