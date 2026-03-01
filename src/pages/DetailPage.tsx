import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface CategoryInfo {
  id: string;
  name: string;
  slug: string;
  is_active: boolean;
}

interface Tag {
  id: number;
  name: string;
  slug: string;
  is_active: boolean;
}

interface ProductDetail {
  id: string;
  name: string;
  slug: string;
  description: string;
  media_type: string;
  media_type_display: string;
  file: string;
  file_url: string;
  category: string;
  category_info: CategoryInfo;
  tags: Tag[];
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

const DetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [data, setData] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        setLoading(true);

        const response = await axios.get<ProductDetail>(
          `/api/v1/products/${slug}/`
        );

        setData(response.data);
      } catch (err: any) {
        setError(err.response?.data?.message || "Xatolik yuz berdi");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchDetail();
    }
  }, [slug]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-lg font-semibold">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        {error}
      </div>
    );

  if (!data) return null;

  return (
    <div className="max-w-[1440px] min-h-screen mx-auto px-4 py-10 flex gap-10 items-center justify-between">
      {/* Image */}
      <div className="w-1/2 h-[400px] overflow-hidden rounded-2xl shadow-lg">
       {data.media_type === "image" ? <img
          src={data.file_url}
          alt={data.name}
          className="w-full h-full object-cover"
        /> : <video autoPlay muted loop className="" src={data.file_url} />}
      </div>

      {/* Content */}
      <div className="mt-8 w-1/2 font-inter">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {data.name}
        </h1>

        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          {data.description}
        </p>

        {/* Category */}
        <div className="mb-4">
          <span className="font-semibold">Category: </span>
          <span className="text-blue-600">
            {data.category_info.name}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {data.tags.map((tag) => (
            <span
              key={tag.id}
              className="px-3 py-1 bg-gray-200 text-sm rounded-full hover:bg-gray-300 transition"
            >
              #{tag.name}
            </span>
          ))}
        </div>

        {/* Dates */}
        <div className="text-sm text-gray-500">
          <p>
            Created at:{" "}
            {new Date(data.created_at).toLocaleDateString()}
          </p>
          <p>
            Updated at:{" "}
            {new Date(data.updated_at).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;