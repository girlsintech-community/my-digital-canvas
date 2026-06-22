export const getYouTubeId = (url: string): string | null => {
  if (!url) return null;
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|live\/|embed\/|shorts\/))([\w-]{11})/);
  return m ? m[1] : null;
};

export const getYouTubeThumb = (url: string): string | null => {
  const id = getYouTubeId(url);
  return id ? `https://i.ytimg.com/vi/${id}/mqdefault.jpg` : null;
};
