
import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";


export interface Tag {
    id: number;
    name: string;
    slug: string;
    is_active: boolean;
}

export interface NewsItem {
    id: string;
    title: string;
    slug: string;
    content: string;
    image: string;
    image_url: string;
    views_count: number;
    status: string;
    status_display: string;
    tags: number[];
    tags_info: Tag[];
    is_active: boolean;
    published_at: string;
    created_at: string;
    updated_at: string;
}

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
};

const stripHtml = (html: string) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
};

const NewsSection = () => {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {

        axios
            .get("/api/v1/news/")
            .then((res) => {
                setNews(res.data.results);

            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);

            });
    }, [])
    console.log(error);

    return (
        <section className="max-w-[1440px] py-14 w-full flex-col mx-auto flex items-center justify-between">
            <div className="flex my-12 font-inter font-black px-1.5 justify-between w-full flex-col" >
                {/* Header */}
                <div className="flex font-inter max-[550px]:items-start max-[550px]:px-2 max-[550px]:flex-col gap-3 items-center justify-between mb-8">
                    <div>
                        <h2 className="text-3xl max-md:text-[20px] font-semibold text-black font-inter">
                            Yangiliklar
                        </h2>
                        <p className="text-sm text-[#4B5563] ">
                            Kompaniya va tizimdagi so‘nggi o‘zgarishlar
                        </p>
                    </div>

                    <a
                        href="/news"
                        className="text-green-600  max-md:hidden text-sm font-medium flex items-center gap-1 hover:underline"
                    >
                        Barchasini ko‘rish <BsArrowRight size={16} />
                    </a>
                </div>

                {/* Cards */}
                <div className="flex w-full min-h-[500px] px-5 items-center justify-between overflow-x-auto ">
                    <div className="flex whitespace-nowrap gap-6 items-center justify-start  px-3 max-w-[1440px]">

                        {loading ? <>
                            <AiOutlineLoading3Quarters className="text-[#17BE86] animate-spin transition-all mx-auto" />
                        </> : ""}
                        {news.map((item) => (
                            <div
                                key={item.id}
                                className="hover:scale-[1.1] h-[385px] bg-[#F9FAFB] transition-all flex mx-auto flex-col max-[880px]:w-[330px] max-md:w-[324px] max-sm:w-[300px] w-[384px] shadow-xl rounded-2xl overflow-hidden mb-5"
                            >
                                <div className="h-44 overflow-hidden">
                                    <img
                                        src={item.image_url}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                                    />
                                </div>

                                <div className="p-5 text-wrap">
                                    <p className="text-xs text-[#4B5563] tracking-wider my-4">
                                        {formatDate(item.published_at)}
                                    </p>

                                    <h3 className="font-semibold text-black mb-3 text-lg">
                                        {item.title}
                                    </h3>

                                    <p className="text-xs text-[#4B5563]  ">
                                        {stripHtml(item.content)}
                                    </p>

                                    <a
                                        href={`/news/${item.slug}`}
                                        className="text-green-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all my-4"
                                    >
                                        Batafsil o‘qish <BsArrowRight size={14} />
                                    </a>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>
                <a
                    href="/news"
                    className="text-[#17BE86] text-[20px] mx-auto md:hidden text-sm font-medium flex items-center gap-1 hover:underline"
                >
                    Barchasini ko‘rish <BsArrowRight size={16} />
                </a>
            </div>
        </section>
    );
};

export default NewsSection;