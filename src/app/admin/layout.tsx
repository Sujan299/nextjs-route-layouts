'use client'
import React from 'react'
import styled from '../style.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
const adminLinks = [
    {
        id: 1,
        name: 'Home',
        href: '/admin'
    },
    {
        id: 2,
        name: 'Add products',
        href: '/add-products'
    },
]
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname();
    return (
        <html lang="en">
            <body>
                <nav className={styled.adminNav}>
                    <h1>Admin Layout</h1>
                    <ul><li>
                        {
                            adminLinks.map((e) => {
                                return (
                                    <Link key={e.id} href={e.href} className={clsx({ [styled.active]: pathname === e.href })}>{e.name}</Link>
                                )
                            })
                        }</li>
                    </ul>
                </nav>
                {children}
            </body>
        </html>
    )
}
