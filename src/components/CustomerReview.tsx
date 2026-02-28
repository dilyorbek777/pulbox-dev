import { FaStar } from "react-icons/fa"
import axios from "axios";
import { useEffect, useState } from "react";


interface Review {
    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    full_name: "string",
    position: "string",
    company: "string",
    image: "string",
    comment: "string",
    rating: 5,
    is_active: true
}

function CustomerReview() {

    const [reviews, setReview] = useState<Review[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {

        const datatel = localStorage.getItem("results")

        if (loading === true && datatel) {
            const loadingRes = JSON.parse(datatel) as Review[]
            setReview(loadingRes)
        }


        axios
            .get("/api/v1/testimonial/")
            .then((res) => {
                // setReview(res.data.results);
                setReview(res.data.results);
                localStorage.setItem("results", JSON.stringify(res.data.results))


            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });


    }, []);
    console.log(error);
    



    return (
        <div className="max-w-[1440px] w-full mx-auto px-1.5">
            <div className="title font-inter text-center py-[100px] max-md:py-[50px]">
                <h2 className="text-[32px] tracking-wide font-bold text-primary">Mijozlarimiz fikrlari</h2>
                <p className="text-[16px] font-sans font-normal text-[#4B5563] my-3">Barcha qurilmalaringizni bitta ekranda kuzating. Xatoliklarni oldindan aniqlang va biznesingizni <br /> samarali boshqaring.</p>
            </div>
            <div className="reviews w-full flex items-center justify-between max-md:flex-col max-md:gap-10 gap-6">
                {reviews.map((review, i) => (
                    <div key={i} className="review w-[384px] bg-[#F9FAFB] rounded-2xl shadow-lg p-6 text-center flex flex-col gap-6
                    
                    max-[880px]:w-[330px] max-md:w-[324px] max-sm:w-[300px] 
                    ">
                        <div className="flex items-center justify-start gap-2.5">
                            {review.rating && Array.from({ length: review.rating }).map((index) => (
                                <FaStar key={`${index}`} className="text-amber-300" />
                            ))}
                        </div>
                        <p className="text-[14px] font-poppins text-left font-sans font-normal text-[#4B5563]">{review.comment}</p>
                        <div className="flex items-center justify-start gap-2.5">
                            <img src={review.image} alt={review.position} className="w-10 h-10 rounded-full" />
                            <h3 className="text-[20px] font-bold text-primary">{review.full_name}</h3>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default CustomerReview