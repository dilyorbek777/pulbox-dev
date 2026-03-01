import { useState, useEffect } from "react";
import ProductCard from "./site/productCard";
import axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type Category = "Hammasi" | "web" | "mobile" | "design";


interface CategoryType {
    id: "d38d8551-65ac-4f64-9f39-65e55afffe9a",
    name: string,
    slug: Category,
    is_active: true
}

interface Products {
    id: string;
    name: string;
    slug: string;
    description: string;
    media_type: string;
    media_type_display: string;
    file: string;
    file_url: string;
    category: string;
    category_info: {
        id: string;
        name: string;
        slug: string;
        is_active: boolean;
    };
}



const Catalog: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<Category>("Hammasi");

    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [products, setProducts] = useState<Products[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        if (activeCategory == "Hammasi") {
            axios
                .get(`/api/v1/categories/`)
                .then((res) => {
                    setCategories(res.data.results);

                })
                .catch((err) => {
                    setError(err.message);
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            axios
                .get(`/api/v1/categories/${activeCategory}`)
                .then((res) => {
                    setCategories(res.data.results);

                })
                .catch((err) => {
                    setError(err.message);
                })
                .finally(() => {
                    setLoading(false);
                });
        }

        axios
            .get("/api/v1/products/")
            .then((res) => {
                setProducts(res.data.results);

            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);

            });
    }, [])

    console.log(error);
    const filteredProjects =
        activeCategory === "Hammasi"
            ? products
            : products.filter((project) => project.category_info.slug === activeCategory);
            

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
                        <button
                            key={"hammasi"}
                            onClick={() => setActiveCategory("Hammasi")}
                            className={`  transition-all hover:bg-[#17BE86]/80  shadow-sm shadow-[#9AFDDC] rounded-3xl text-[16px] text-secondary px-[26px] py-[10.5px] ${activeCategory === "Hammasi" ? "bg-[#17BE86] text-white" : " border border-[#000000] text-[#000000]"}`}
                        >Hammasi</button>
                        {categories.map((cat, i) => (

                            <button
                                key={i}
                                onClick={() => setActiveCategory(cat.slug)}
                                className={`  transition-all hover:bg-[#17BE86]/80  shadow-sm shadow-[#9AFDDC] rounded-3xl text-[16px] text-secondary px-[26px] py-[10.5px] ${activeCategory === cat.slug ? "bg-[#17BE86] text-white" : " border border-[#000000] text-[#000000]"}`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* CARDS */}
                <div
                    className="grid-cols-3 my-12 max-md:grid-cols-1 grid items-center gap-y-10 max-[1270px]:grid-cols-2"
                >
                    {loading ? <>
                        <AiOutlineLoading3Quarters className="text-[#17BE86] animate-spin transition-all mx-auto" />
                    </> : ""}

                    {filteredProjects.map((project) => (
                        <ProductCard
                            category={project.id}
                            key={project.id}
                            description={project.description}
                            image={project.file_url}
                            type={project.media_type}
                            title={project.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Catalog;
