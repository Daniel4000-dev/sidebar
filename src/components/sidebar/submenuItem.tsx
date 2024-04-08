import React, { useMemo } from 'react'
import { usePathname, useRouter } from '../../../node_modules/next/navigation';

interface ISubItem {
    name: string;
    path: string;
  }

const SubMenuItem = ({ item }:{ item: ISubItem }) => {
    const { name, path } = item;

    const router = useRouter();
    const pathname = usePathname();

    const isActive = useMemo(() => {
        return path === pathname;
      }, [path, pathname]);

    const onClick = () => {
        router.push(path);
    }
  return (
    <div
        onClick={onClick}
        className={`text-sm hover:text-sidebar-active hover:font-semibold curosr-pointer ${isActive &&  'text-sidebar-active font-semibold'}`}
    >{name}</div>
  )
}

export default SubMenuItem