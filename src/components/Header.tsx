"use client";

import React, { useState } from "react";

import { HiOutlineShoppingCart, HiOutlineSearch } from "react-icons/hi";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Avatar,
    Input,
    Divider,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button,
} from "@nextui-org/react";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Header = ({ session }: { session: Session | null }) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const router = useRouter();

    const menuItems = [
        "Shop By Car",
        "Shop By Brand",
        "Shop By Product",
        "More",
        "Contact Us",
    ];

    return (
        <Navbar
            onMenuOpenChange={setIsMenuOpen}
            maxWidth={"2xl"}
            className="inset-x-0 top-0"
            shouldHideOnScroll
        >
            <NavbarContent className="lg:hidden pr-3" justify="start">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="lg:hidden"
                />
                <NavbarBrand>
                    <a
                        className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r to-blue-700 from-sky-400"
                        href="/"
                    >
                        AUTONEXUS
                    </a>
                </NavbarBrand>

                <Input
                    placeholder="Search..."
                    startContent={<HiOutlineSearch size={24} />}
                    className="ml-8"
                />
            </NavbarContent>

            <NavbarContent justify="start" className="hidden lg:flex">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                        <NavbarBrand className="mr-10">
                            <a
                                className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r to-[#0070F0] from-purple-500"
                                href="/"
                            >
                                AUTONEXUS
                            </a>
                        </NavbarBrand>

                        <div className="flex space-x-4">
                            <NavbarItem>
                                <Link color="foreground" href="#">
                                    Shop By Car
                                </Link>
                            </NavbarItem>
                            <NavbarItem isActive>
                                <Link
                                    href="#"
                                    aria-current="page"
                                    color="primary"
                                >
                                    Shop By Brand
                                </Link>
                            </NavbarItem>
                            <NavbarItem>
                                <Link color="foreground" href="#">
                                    Shop By Product
                                </Link>
                            </NavbarItem>
                            <NavbarItem>
                                <Link color="foreground" href="#">
                                    More
                                </Link>
                            </NavbarItem>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <Input
                            placeholder="Search..."
                            startContent={<HiOutlineSearch size={24} />}
                            className="flex lg:w-80"
                        />
                        <div className="flex ml-4">
                            <div className="flex items-center">
                                <NavbarItem className="flex">
                                    <button className="relative flex-shrink-0 p-1">
                                        <HiOutlineShoppingCart size={28} />
                                    </button>
                                </NavbarItem>
                                {session ? (
                                    <NavbarItem className="flex ml-4">
                                        <Dropdown placement="bottom-end">
                                            <DropdownTrigger>
                                                <Avatar
                                                    as="button"
                                                    className="transition-transform"
                                                    src={session.user?.image!}
                                                />
                                            </DropdownTrigger>
                                            <DropdownMenu
                                                aria-label="Profile Actions"
                                                variant="flat"
                                            >
                                                <DropdownItem
                                                    key="profile"
                                                    className="h-14 gap-2"
                                                    onClick={() => {
                                                        router.push("/account");
                                                    }}
                                                >
                                                    <p className="font-semibold">
                                                        Signed in as
                                                    </p>
                                                    <p className="font-semibold">
                                                        {session.user?.email}
                                                    </p>
                                                </DropdownItem>

                                                <DropdownItem
                                                    key="saved"
                                                    onClick={() => {
                                                        router.push(
                                                            "/account/saved"
                                                        );
                                                    }}
                                                >
                                                    Saved
                                                </DropdownItem>
                                                <DropdownItem
                                                    key="saved"
                                                    onClick={() => {
                                                        router.push(
                                                            "/account/bids"
                                                        );
                                                    }}
                                                >
                                                    My Bids
                                                </DropdownItem>
                                                <DropdownItem
                                                    key="listings"
                                                    onClick={() => {
                                                        router.push(
                                                            "/account/listings"
                                                        );
                                                    }}
                                                >
                                                    My Listings
                                                </DropdownItem>
                                                <DropdownItem
                                                    key="orders"
                                                    onClick={() => {
                                                        router.push(
                                                            "/account/orders"
                                                        );
                                                    }}
                                                >
                                                    My Orders
                                                </DropdownItem>
                                                <DropdownItem
                                                    onClick={() => signOut()}
                                                    key="logout"
                                                    color="danger"
                                                >
                                                    Log Out
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </NavbarItem>
                                ) : (
                                    <NavbarItem className="flex ml-4">
                                        <Button
                                            color="primary"
                                            onClick={() => signIn()}
                                        >
                                            Login
                                        </Button>
                                    </NavbarItem>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={"foreground"}
                            className="w-full"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
                <Divider className="mt-2" />
                {session ? (
                    <>
                        <div className="my-2">
                            <div className="flex items-center space-x-6">
                                <div className="">
                                    <Avatar
                                        src={session.user?.image!}
                                        className="h-10 w-10"
                                    />
                                </div>
                                <div>
                                    <h1 className="">{session.user?.name}</h1>
                                    <p>{session.user?.email}</p>
                                </div>
                            </div>
                        </div>
                        <NavbarMenuItem>
                            <Link
                                color={"foreground"}
                                className="w-full"
                                href="/account/bids"
                                size="lg"
                            >
                                Account
                            </Link>
                        </NavbarMenuItem>
                        <NavbarMenuItem>
                            <Link
                                color={"foreground"}
                                className="w-full"
                                href="#"
                                size="lg"
                            >
                                Settings
                            </Link>
                        </NavbarMenuItem>
                        <NavbarMenuItem>
                            <Link
                                color={"danger"}
                                className="w-full"
                                href="#"
                                size="lg"
                                onClick={() => signOut()}
                            >
                                Logout
                            </Link>
                        </NavbarMenuItem>
                    </>
                ) : (
                    <Button color="primary" onClick={() => signIn()}>
                        Login
                    </Button>
                )}
            </NavbarMenu>
        </Navbar>
    );
};

export default Header;
