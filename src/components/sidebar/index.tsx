"use client"
import React from 'react';

import {
    LayoutDashboard,
    BadgeDollarSign,
    WalletCards,
    CircleUserRound,
    Settings,
    HelpingHand,
    LucideIcon

} from 'lucide-react';
import SidebarItem from './item';

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

const items: ISidebarItem[] = [
    {
        name: 'Dashboard',
        icon: LayoutDashboard,
        path: '/',
    },
    {
        name: 'Transaction',
        icon: BadgeDollarSign,
        path: '/transaction'
    },
    {
        name: 'Payment',
        icon: WalletCards,
        path: '/payment',
    },
    {
        name: 'Accounts',
        icon: CircleUserRound,
        path: '/accounts',
    },
    {
        name: 'Settings',
        icon: Settings,
        path: '/settings',
        items: [
            {
                name: 'General',
                path: '/settigns',
            },
            {
                name: 'Security',
                path: '/settings/security',
            },
            {
                name: 'Notification',
                path: '/settings/notifications'
            }
        ],
    },
    {
        name: 'Help',
        icon: HelpingHand,
        path: '/help',
        items: [
            {
                name: ' FAQs',
                path: '/help/faqs',
            },
            {
                name: 'Support',
                path: '/help/support',
            },
            {
                name: 'Contact us',
                path: '/help/contact-us'
            }
        ]
    }
]

const Sidebar = () => {
    return (
        <div className='fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-10 p-4'>
            <div className='flex flex-col space-y-10 w-full'>
                <img className='h-10 w-fit' src='/logo-expanded.png' alt='Logo' />
                <div className='flex flex-col space-y-2'>
                    {items?.map((item) => (
                       <SidebarItem key={item.path} item={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar