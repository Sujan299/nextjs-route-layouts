"use client"
const links =[
    {
        linkName : 'Admin',
        href : '/admin'
    },
    {
        linkName : 'User',
        href : '/user'
    }
];
import styled from './style.module.css' // importing css 
import Link from 'next/link';
import clsx from 'clsx'; // used for returning string
//// using Link tag instead of a is more efficient , Link tag help to not refresh whole page when transiting, Link 
// tag help to transtion instantly than a tag
import {usePathname} from 'next/navigation'

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
        {
            links.map((e)=>{
                return(
                    <nav className={styled.navbar}>
                        <ul className={styled.ulist}>
                            <li className={styled.list}>
                            <button><Link href={e.href} key={e.href} className={clsx({[styled.active] : pathname=== e.href})}>{e.linkName}</Link></button>
                            </li>
                        </ul>
                    </nav>
                )
            })
        }
        </>
    )
}