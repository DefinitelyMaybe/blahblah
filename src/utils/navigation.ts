// import type { Badge } from "@astrojs/starlight/schemas/badge";
// import type { LinkHTMLAttributes } from "@astrojs/starlight/schemas/sidebar";

export interface Link {
  type: "link";
  label: string;
  href: string;
  isCurrent: boolean;
  // badge: Badge | undefined;
  // attrs: LinkHTMLAttributes;
}

interface Group {
  type: "group";
  label: string;
  entries: (Link | Group)[];
  collapsed: boolean;
  // badge: Badge | undefined;
}

export type SidebarEntry = Link | Group;

/** Turn the nested tree structure of a sidebar into a flat list of all the links. */
export function flattenSidebar(sidebar: SidebarEntry[]): Link[] {
  return sidebar.flatMap((entry) =>
    entry.type === "group" ? flattenSidebar(entry.entries) : entry
  );
}
