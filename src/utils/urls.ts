export function siteUrl(path: string = "") {
  const base = import.meta.env.BASE_URL;

  if (!path) {
    return base;
  }

  if (path.startsWith("#")) {
    return `${base}${path}`;
  }

  return `${base}${path.replace(/^\/+/, "")}`;
}