export function getAssetPath(path: string): string {
  const base = import.meta.env?.BASE_URL || '/GrowLeaf-Budgeting-Web/';
  return `${base}${path.replace(/^\//, '')}`;
}
