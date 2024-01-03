"use client";

import React from "react";

import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const RecentlyAdded = () => {
    const list = [
        {
            title: "Orange",
            img: "https://autoid.co/cdn/shop/files/alpha-n-carbon-roof-bmw-3-series-g81-m3-313612_jpg.webp?v=1697643234&width=1000",
            price: "$5.50",
        },
        {
            title: "Tangerine",
            img: "https://autoid.co/cdn/shop/files/007_800x_jpg_8de2bcc9-9ea7-44e1-be7f-15379ecc8de3.webp?v=1697630617&width=800",
            price: "$3.00",
        },
        {
            title: "Raspberry",
            img: "https://autoid.co/cdn/shop/files/002_2829059b-8ef2-4890-82b8-17638e09a82a_800x_jpg.webp?v=1697630059&width=800",
            price: "$10.00",
        },
        {
            title: "Lemon",
            img: "https://autoid.co/cdn/shop/files/002_cf8ac470-fa97-434b-9328-040fb138c00b_800x_jpg.webp?v=1697629866&width=800",
            price: "$5.30",
        },
        {
            title: "Avocado",
            img: "https://autoid.co/cdn/shop/files/002_e9d3eaeb-871a-4021-bf61-1dd49914c578_800x_jpg.webp?v=1697629711&width=800",
            price: "$15.70",
        },
    ];

    return (
        <div className="flex flex-col mt-20 w-full px-8 max-w-[1536px]">
            <div className="flex justify-between items-center">
                <div className="flex space-x-2 items-center">
                    <h1 className="text-lg font-bold">Recently Added</h1>
                    <p className="text-gray-400">(128)</p>
                </div>
                <Button color="primary">View All</Button>
            </div>
            <div className="gap-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-4">
                {list.map((item, index) => (
                    <Card
                        shadow="sm"
                        key={index}
                        isPressable
                        onPress={() => console.log("item pressed")}
                    >
                        <CardBody className="overflow-visible p-0">
                            <Image
                                isZoomed
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                alt={item.title}
                                className="w-full object-cover h-[200px]"
                                src={item.img}
                            />
                        </CardBody>
                        <CardFooter className="text-small justify-between">
                            <b>{item.title}</b>
                            <p className="text-default-500">{item.price}</p>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default RecentlyAdded;
