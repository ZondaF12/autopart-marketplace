"use client";

import React, { Key, ReactNode, useEffect, useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";

const AccountLayout = ({ children }: { children: ReactNode }) => {
    const [selected, setSelected] = useState<any>("/account/saved");
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        router.push(selected);
    }, [selected]);

    return (
        <div className="max-w-[1536px] mx-auto p-4 lg:p-6">
            <div className="mb-4">
                <h1 className="text-2xl">Saved</h1>
            </div>
            <div className="flex flex-wrap gap-4 mb-4">
                <Tabs
                    size="lg"
                    variant="solid"
                    aria-label="Tabs variants"
                    selectedKey={selected}
                    onSelectionChange={setSelected}
                >
                    <Tab key="/account/saved" title="Saved" />
                    <Tab key="/account/bids" title="Bids" />
                    <Tab key="/account/listings" title="My Listings" />
                    <Tab key="/account/orders" title="My Orders" />
                    <Tab key="/account/settings" title="Settings" />
                </Tabs>
            </div>
            <div>{children}</div>
        </div>
    );
};

export default AccountLayout;
