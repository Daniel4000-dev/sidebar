"use client";
import React, { useMemo, useState } from "react";

import { LucideIcon, ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "../../../node_modules/next/navigation";

interface ISidebarItem {
  name: string;
  icon: LucideIcon;
  path: string;
  items?: ISubItem[];
}

interface ISubItem {
  name: string;
  path: string;
}

const SidebarItem = ({ item }: { item: ISidebarItem }) => {
  const { name, icon: Icon, items, path } = item;
  const [expanded, setExpanded] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const onClick = () => {
    if (items && items.length > 0) {
      setExpanded(!expanded);
    }
    router.push(path);
  };

  const isActive = useMemo(() => {
    return path === pathname;
  }, [path, pathname]);

  return (
    <>
      <div
        onClick={onClick}
        className={`flex items-center justify-between p-3 rounded-lg hover:bg-sidebar-background cursor-pointer hover:text-sidebar-active text-sidebar-iconColor ${
          isActive && "text-sidebar-active bg-sidebar-background"
        }`}
      >
        <div className="flex items-center space-x-2">
          <Icon size={20} />
          <p className="font-semibold text-sm">{name}</p>
        </div>

        {items && items.length > 0 && (
          <ChevronDown
            size={18}
            className={expanded ? "rotate-180 duration-200" : ""}
          />
        )}
      </div>
      {expanded &&
        items &&
        items.length > 0 &&
        items.map((item) => <p key={item.path}>{item.name}</p>)}
    </>
  );
};

export default SidebarItem;
