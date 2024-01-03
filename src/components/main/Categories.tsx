import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import React from "react";

const Categories = () => {
    return (
        <div className="flex flex-col my-20 max-w-[1536px] w-full px-8">
            <div>
                <div>
                    <h1 className="text-lg font-bold">Shop By Category</h1>
                </div>
            </div>
            <div className="gap-2 grid grid-cols-12 grid-rows-2 mt-4">
                <Card className="col-span-6 sm:col-span-4 h-[300px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">
                            New
                        </p>
                        <h4 className="text-white font-medium text-large">
                            Body Styling
                        </h4>
                    </CardHeader>
                    <Image
                        isZoomed
                        removeWrapper
                        alt="Card background"
                        className="z-0 w-full h-full object-cover"
                        src="https://www.topgear.com/sites/default/files/2022/10/1%20Porsche%20911%20GT3%20RS.jpg?w=1952&h=1098"
                    />
                </Card>
                <Card className="col-span-6 sm:col-span-4 h-[300px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">
                            New
                        </p>
                        <h4 className="text-white font-medium text-large">
                            Suspension & Stance
                        </h4>
                    </CardHeader>
                    <Image
                        isZoomed
                        removeWrapper
                        alt="Card background"
                        className="z-0 w-full h-full object-cover"
                        src="https://www.topgear.com/sites/default/files/images/news-article/carousel/2021/02/6e54387d463412d86f5130bea1d88a08/p21_0071_a3_rgb.jpg?w=1952&h=1098"
                    />
                </Card>
                <Card className="col-span-6 sm:col-span-4 h-[300px]">
                    <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">
                            New
                        </p>
                        <h4 className="text-white font-medium text-large">
                            Alloy Wheels
                        </h4>
                    </CardHeader>
                    <Image
                        isZoomed
                        removeWrapper
                        alt="Card background"
                        className="z-0 w-full h-full object-cover"
                        src="https://www.topgear.com/sites/default/files/2022/10/7%20Porsche%20911%20GT3%20RS.jpg?w=1952&h=1098"
                    />
                </Card>
                <Card
                    isFooterBlurred
                    className="w-full h-[300px] col-span-6 sm:col-span-5"
                >
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">
                            New
                        </p>
                        <h4 className="text-white font-medium text-2xl">
                            Air Intakes
                        </h4>
                    </CardHeader>
                    <Image
                        isZoomed
                        removeWrapper
                        alt="Card example background"
                        className="z-0 w-full h-full object-cover"
                        src="https://autoid.co/cdn/shop/files/bmw-m140i-f20-f21-m240i-f22-f23-b58-mst-intake-kit-2015-2020-mst-performance-998195_744785f2-ca77-4f58-a9f1-addd33be2b20.jpg?v=1684866389&width=1000"
                    />
                </Card>
                <Card
                    isFooterBlurred
                    className="w-full h-[300px] col-span-12 sm:col-span-7"
                >
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">
                            New
                        </p>
                        <h4 className="text-white/90 font-medium text-xl">
                            Exhausts
                        </h4>
                    </CardHeader>
                    <Image
                        isZoomed
                        removeWrapper
                        alt="Relaxing app background"
                        className="z-0 w-full h-full object-cover"
                        src="https://hips.hearstapps.com/hmg-prod/images/mclaren-600lt-spider-2020-1600-5d-1573483725.jpg"
                    />
                </Card>
            </div>
        </div>
    );
};

export default Categories;
