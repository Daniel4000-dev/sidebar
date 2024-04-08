import React from 'react'
import { useRouter } from '../../../node_modules/next/navigation';

interface ISubItem {
    name: string;
    path: string;
  }

const SubMenuItem = ({ item }:{ item: ISubItem }) => {
    const { name, path } = item;
    const router = useRouter();

    const onClick = () => {
        router.push(path);
    }
  return (
    <div
        onClick={onClick}
        className='text-sm hover:text-sidebar-active hover:font-semibold curosr-pointer'
    >{name}</div>
  )
}

export default SubMenuItem