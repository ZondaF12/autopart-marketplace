import Categories from "../components/main/Categories";
import RecentlyAdded from "../components/main/RecentlyAdded";
import Hero from "../components/main/Hero";
import "./globals.css";

export default function Home() {
    return (
        <div className="">
            <Hero />
            <div className="flex flex-col items-center justify-center">
                <RecentlyAdded />
                <Categories />
            </div>
        </div>
    );
}
