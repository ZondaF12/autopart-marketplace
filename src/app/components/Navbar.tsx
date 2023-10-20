import React, { useState } from "react";
import { AcmeLogo } from "../../../public/AcmeLogo";

import {
    HiOutlineShoppingCart,
    HiOutlineUser,
    HiOutlineSearch,
} from "react-icons/hi";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
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
} from "@nextui-org/react";

const MainNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

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
            className="fixed inset-x-0 top-0"
            shouldHideOnScroll
        >
            <NavbarContent className="lg:hidden pr-3" justify="start">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="lg:hidden"
                />
                <NavbarBrand>
                    <AcmeLogo />
                    <p className="font-bold text-inherit">ACME</p>
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
                            <AcmeLogo />
                            <p className="font-bold text-inherit">ACME</p>
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
                                <NavbarItem className="flex ml-4">
                                    <Dropdown placement="bottom-end">
                                        <DropdownTrigger>
                                            <Avatar
                                                as="button"
                                                className="transition-transform"
                                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                            />
                                        </DropdownTrigger>
                                        <DropdownMenu
                                            aria-label="Profile Actions"
                                            variant="flat"
                                        >
                                            <DropdownItem
                                                key="profile"
                                                className="h-14 gap-2"
                                            >
                                                <p className="font-semibold">
                                                    Signed in as
                                                </p>
                                                <p className="font-semibold">
                                                    zoey@example.com
                                                </p>
                                            </DropdownItem>
                                            <DropdownItem key="saved">
                                                Saved
                                            </DropdownItem>
                                            <DropdownItem key="listings">
                                                My Listings
                                            </DropdownItem>
                                            <DropdownItem key="orders">
                                                My Orders
                                            </DropdownItem>
                                            <DropdownItem
                                                key="logout"
                                                color="danger"
                                            >
                                                Log Out
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </NavbarItem>
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
                <div className="my-2">
                    <div className="flex items-center space-x-6">
                        <div className="">
                            <Avatar
                                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                                className="h-10 w-10"
                            />
                        </div>
                        <div>
                            <h1 className="">Ruaridh Bell</h1>
                            <p>ruaridhbell73@googlemail.com</p>
                        </div>
                    </div>
                </div>
                <NavbarMenuItem>
                    <Link
                        color={"foreground"}
                        className="w-full"
                        href="#"
                        size="lg"
                    >
                        My Profile
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
                    >
                        Logout
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
    // return (
    //     <header>
    //         <nav className="px-2 max-w-7xl mx-auto sm:px-4 lg:px-8">
    //             <div className="flex h-16 items-center justify-between">
    //                 <div className="flex items-center px-2 lg:px-0">
    //                     <div className="flex flex-shrink-0 items-center">
    //                         <AcmeLogo />
    //                         <p className="font-bold text-inherit">ACME</p>
    //                     </div>
    //                     <div className="hidden lg:ml-6 lg:block">
    //                         <div className="flex space-x-6">
    //                             <a href="#">Shop By Car</a>
    //                             <a href="#">Shop By Brand</a>
    //                             <a href="#">Shop By Part</a>
    //                             <a href="#">More</a>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div className="flex flex-1 justify-center px-2 lg:px-6 lg:justify-end">
    //                     <div className="w-full max-w-lg lg:max-w-xs">
    //                         <Input
    //                             placeholder="Search..."
    //                             startContent={<HiOutlineSearch size={24} />}
    //                         />
    //                     </div>
    //                 </div>
    //                 <div className="flex lg:hidden">
    //                     <button className="relative inline-flex items-center justify-center p-2">
    //                         <svg
    //                             xmlns="http://www.w3.org/2000/svg"
    //                             fill="none"
    //                             viewBox="0 0 24 24"
    //                             stroke-width="1.5"
    //                             stroke="currentColor"
    //                             aria-hidden="true"
    //                             className="block h-6 w-6"
    //                         >
    //                             <path
    //                                 stroke-linecap="round"
    //                                 stroke-linejoin="round"
    //                                 d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    //                             ></path>
    //                         </svg>
    //                     </button>
    //                 </div>
    //                 <div className="hidden lg:block">
    //                     <div className="flex items-center">
    //                         <button className="relative flex-shrink-0 p-1">
    //                             <HiOutlineShoppingCart size={28} />
    //                         </button>
    //                         <button className="relative ml-4 flex-shrink-0">
    //                             <Avatar
    //                                 src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
    //                                 className="h-8 w-8"
    //                             />
    //                         </button>
    //                     </div>
    //                 </div>
    //             </div>
    //         </nav>
    //     </header>
    // );
};

export default MainNavbar;
