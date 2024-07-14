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

import {ArrowRightStartOnRectangleIcon, ChevronUpIcon, UserIcon,} from '@heroicons/react/16/solid'
import {Square2StackIcon,} from '@heroicons/react/20/solid'
import {usePathname, useRouter} from 'next/navigation'
import {useDispatch, useSelector} from "react-redux";
import {eraseClientCookie, getClientCookie} from "@/app/utils/clientCookie";
import {examTokenKey, refreshKey, tokenKey} from "@/app/utils/constants";
import {AuthState, logoutApi, UserSummaryApi} from "@/app/redux/authReducer/authReducer";
import {useEffect} from "react";

function AccountDropdownMenu({anchor, isAdmin}) {
    const dispatch = useDispatch()
    const router = useRouter()
    const payload = {refresh_token: getClientCookie(refreshKey)}
    const {Logout} = useSelector(AuthState)

    useEffect(() => {
        if (Logout.data) {
            eraseClientCookie(tokenKey)
            eraseClientCookie(refreshKey)
            eraseClientCookie(examTokenKey)
            eraseClientCookie("ld")
            router.push("/auth/login")
        }
    }, [Logout.data]);

    return (
        <DropdownMenu className="min-w-64" anchor={anchor}>
            <DropdownItem onClick={() => {
                if (isAdmin) {
                    dispatch(logoutApi(payload))
                } else {
                    eraseClientCookie(tokenKey)
                    eraseClientCookie(refreshKey)
                    eraseClientCookie(examTokenKey)
                    eraseClientCookie("ld")
                    router.push("/auth/login")
                }
            }}>
                <ArrowRightStartOnRectangleIcon/>
                <DropdownLabel>Sign out</DropdownLabel>
            </DropdownItem>
        </DropdownMenu>
    )
}


export function ApplicationLayout({isAdmin = false, children}) {
    let pathname = usePathname()
    const {UserSummary} = useSelector(AuthState)
    const ld = JSON.parse(getClientCookie("ld") ?? "{}")
    const dispatch = useDispatch()
    useEffect(() => {
        if (isAdmin) {
            dispatch(UserSummaryApi())
        }
    }, []);

    return (
        <SidebarLayout
            isAdmin={isAdmin}
            navbar={
                <Navbar>
                    <NavbarSpacer/>
                    <NavbarSection>
                        {(ld || isAdmin) &&
                            <Dropdown>
                                <DropdownButton as={NavbarItem}>
                                    <div>
                                        <UserIcon className={"stroke-amber-50"} style={{height: 30, width: 30}}/>
                                    </div>
                                </DropdownButton>
                                <AccountDropdownMenu anchor="bottom end" isAdmin={isAdmin}/>
                            </Dropdown>
                        }
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

                                <SidebarItem href="/home/exam" current={pathname.startsWith('/events')}>
                                    <Square2StackIcon/>
                                    <SidebarLabel>Exam</SidebarLabel>
                                </SidebarItem>
                            </SidebarSection>
                        </SidebarBody>
                    }
                    <SidebarSpacer/>

                    {ld &&
                        <SidebarFooter className="max-lg:hidden">
                            <Dropdown>
                                <DropdownButton as={SidebarItem}>
                <span className="flex min-w-0 items-center gap-3">
                  <span className="min-w-0">
                    <span
                        className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">{ld.name}</span>
                    <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
                      {ld.email}
                    </span>
                  </span>
                </span>
                                    <ChevronUpIcon/>
                                </DropdownButton>
                                <AccountDropdownMenu anchor="top start" isAdmin={isAdmin}/>
                            </Dropdown>
                        </SidebarFooter>
                    }

                    {isAdmin &&
                        <SidebarFooter className="max-lg:hidden">
                            <Dropdown>
                                <DropdownButton as={SidebarItem}>
                <span className="flex min-w-0 items-center gap-3">
                  <span className="min-w-0">
                    <span
                        className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">Admin</span>
                    <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
                      {UserSummary?.data?.email ?? ''}
                    </span>
                  </span>
                </span>
                                    <ChevronUpIcon/>
                                </DropdownButton>
                                <AccountDropdownMenu anchor="top start" isAdmin={isAdmin}/>
                            </Dropdown>
                        </SidebarFooter>
                    }

                </Sidebar>
            }
        >
            {children}
        </SidebarLayout>
    )
}
