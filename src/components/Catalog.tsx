import { useState } from "react";
import ProductCard from "./site/productCard";

type Category = "all" | "web" | "mobile" | "design";

interface Project {
    id: number;
    title: string;
    description: string;
    category: Category;
    image_url: string
}

const projects: Project[] = [
    {
        id: 102,
        title: "Smart Car Wash Pro",
        description: "Avtomobillarni yuvish shoxobchalari uchun to'liq avtomatlashtirilgan boshqaruv tizimi.",
        image_url: "https://picsum.photos/200/305",
        category: "web"
    },
    { id: 1, image_url: "https://picsum.photos/200/300", title: "Smart Car Wash Pro", description: "Web loyiha", category: "web", },
    { id: 2, image_url: "https://picsum.photos/250/300", title: "E-Commerce App", description: "Mobile loyiha", category: "mobile" },
    { id: 3, image_url: "https://picsum.photos/200/350", title: "Portfolio UI", description: "Design loyiha", category: "design" },
    { id: 4, image_url: "https://picsum.photos/240/300", title: "CRM System", description: "Web loyiha", category: "web" },
    { id: 5, image_url: "https://picsum.photos/220/300", title: "Taxi App", description: "Mobile loyiha", category: "mobile" },
    { id: 6, image_url: "https://picsum.photos/290/300", title: "Dashboard UI", description: "Design loyiha", category: "design" },
];

const categories: { label: string; value: Category }[] = [
    { label: "Hammasi", value: "all" },
    { label: "Web", value: "web" },
    { label: "Mobile", value: "mobile" },
    { label: "Design", value: "design" },
];

const Catalog: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<Category>("all");

    const filteredProjects =
        activeCategory === "all"
            ? projects
            : projects.filter((project) => project.category === activeCategory);

    return (
        <div style={{ padding: "40px" }} className="bg-[#F9FAFB] w-full">
            <div className="py-12 max-w-[1440px] w-full mx-auto">
                <div className="flex flex-col items-center justify-center gap-5">

                    <h2 className="font-bold text-[32px] max-sm:text-[20px]">Mahsulotlar katalogi</h2>
                    <p className="text-[#4B5563] text-center text-sm">Biznesingiz turiga mos keluvchi maxsus yechimlarni tanlang</p>

                </div>
                {/* FILTER BUTTONS */}
                <div className="w-full  px-2 flex my-8 overflow-x-auto items-center gap-10">

                    <div className="flex items-center px-5 justify-center gap-4 min-w-max w-full whitespace-nowrap ">
                        {categories.map((cat) => (
                            <button
                                key={cat.value}
                                onClick={() => setActiveCategory(cat.value)}
                                className="bg-[#17BE86] text-white transition-all hover:bg-[#17BE86]/80  shadow-sm shadow-[#9AFDDC] rounded-3xl text-[16px] text-secondary px-[26px] py-[10.5px] "
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* CARDS */}
                <div
                    className="grid-cols-3 max-md:grid-cols-1 grid items-center gap-y-10 max-[1270px]:grid-cols-2"
                >
                    {filteredProjects.map((project) => (

                        <ProductCard
                            category={project.category}
                            key={project.id}
                            description={project.description}
                            image={project.image_url}
                            title={project.title}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Catalog;
