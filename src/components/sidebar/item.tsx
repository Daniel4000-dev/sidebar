import React from 'react'

import { LucideIcon } from 'lucide-react';

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
  const { name, icon: Icon } = item;

  return (
    <div className='flex items-center space-x-2 p-3 bg-sidebar-background rounded-lg hover:bg-sidebar-background cursor-pointer hover:text-sidebar-nactive'>
        <Icon size={20 }/>
        <p className='font-semibold text-sm'>{name}</p>
        {name}
    </div>
  )
}

export default SidebarItem