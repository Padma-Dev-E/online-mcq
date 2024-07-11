'use client'

import {Avatar} from '@/components/avatar'
import {Dropdown, DropdownButton, DropdownItem, DropdownLabel, DropdownMenu,} from '@/components/dropdown'
import {Navbar, NavbarItem, NavbarSection, NavbarSpacer} from '@/components/navbar'
import {
    Sidebar,
    SidebarBody,
    SidebarFooter,
    SidebarHeader,
    SidebarItem,
    SidebarLabel,
    SidebarSection,
    SidebarSpacer,
} from '@/components/sidebar'
import {SidebarLayout} from '@/components/sidebar-layout'

import {ArrowRightStartOnRectangleIcon, ChevronUpIcon,} from '@heroicons/react/16/solid'
import {HomeIcon, Square2StackIcon,} from '@heroicons/react/20/solid'
import {usePathname, useRouter} from 'next/navigation'
import {useDispatch, useSelector} from "react-redux";
import {eraseClientCookie, getClientCookie} from "@/app/utils/clientCookie";
import {refreshKey, tokenKey} from "@/app/utils/constants";
import {AuthState, logoutApi} from "@/app/redux/authReducer/authReducer";
import {useEffect} from "react";

function AccountDropdownMenu({anchor}) {
    const dispatch = useDispatch()
    const router = useRouter()
    const payload = {refresh_token: getClientCookie(refreshKey)}
    const {Logout} = useSelector(AuthState)

    useEffect(() => {
        if (Logout.data) {
            eraseClientCookie(tokenKey)
            eraseClientCookie(refreshKey)
            router.push("/auth/login")
        }
    }, [Logout.data]);

    return (
        <DropdownMenu className="min-w-64" anchor={anchor}>
            <DropdownItem onClick={() => {
                dispatch(logoutApi(payload))
            }}>
                <ArrowRightStartOnRectangleIcon/>
                <DropdownLabel>Sign out</DropdownLabel>
            </DropdownItem>
        </DropdownMenu>
    )
}


export function ApplicationLayout({isAdmin = false, children}) {
    let pathname = usePathname()

    return (
        <SidebarLayout
            navbar={
                <Navbar>
                    <NavbarSpacer/>
                    <NavbarSection>
                        <Dropdown>
                            <DropdownButton as={NavbarItem}>
                                <Avatar src="/users/erica.jpg" square/>
                            </DropdownButton>
                            <AccountDropdownMenu anchor="bottom end"/>
                        </Dropdown>
                    </NavbarSection>
                </Navbar>
            }
            sidebar={
                <Sidebar>
                    <SidebarHeader>
                        <Dropdown>
                            <DropdownButton as={SidebarItem}>
                                <Avatar src="/teams/catalyst.svg"/>
                                <SidebarLabel>Online MCQ</SidebarLabel>
                            </DropdownButton>
                        </Dropdown>
                    </SidebarHeader>

                    {isAdmin &&
                        <SidebarBody>
                            <SidebarSection>
                                <SidebarItem href="/home" current={pathname === '/'}>
                                    <HomeIcon/>
                                    <SidebarLabel>Home</SidebarLabel>
                                </SidebarItem>
                                <SidebarItem href="/home/exam" current={pathname.startsWith('/events')}>
                                    <Square2StackIcon/>
                                    <SidebarLabel>Exam</SidebarLabel>
                                </SidebarItem>
                            </SidebarSection>
                        </SidebarBody>
                    }
                    <SidebarSpacer/>


                    <SidebarFooter className="max-lg:hidden">
                        <Dropdown>
                            <DropdownButton as={SidebarItem}>
                <span className="flex min-w-0 items-center gap-3">
                  <Avatar src="/users/erica.jpg" className="size-10" square alt=""/>
                  <span className="min-w-0">
                    <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">Erica</span>
                    <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
                      erica@example.com
                    </span>
                  </span>
                </span>
                                <ChevronUpIcon/>
                            </DropdownButton>
                            <AccountDropdownMenu anchor="top start"/>
                        </Dropdown>
                    </SidebarFooter>
                </Sidebar>
            }
        >
            {children}
        </SidebarLayout>
    )
}
