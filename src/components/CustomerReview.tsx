import { FaStar } from "react-icons/fa"

function CustomerReview() {
    const reviews = [
        {
            name: "John Doe",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
            image: "https://picsum.photos/200/300",
            star: 5
        },

        {
            name: "John Doe",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
            image: "https://picsum.photos/200/300",
            star: 4
        },

        {
            name: "John Doe",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
            image: "https://picsum.photos/200/300",
            star: 3
        }
    ]



    return (
        <div className="max-w-[1440px] w-full mx-auto">
            <div className="title text-center py-[100px] max-md:py-[50px]">
                <h2 className="text-[32px] font-bold text-primary">Mijozlarimiz fikrlari</h2>
                <p className="text-[16px] font-sans font-normal text-[#4B5563] my-3">Barcha qurilmalaringizni bitta ekranda kuzating. Xatoliklarni oldindan aniqlang va biznesingizni <br /> samarali boshqaring.</p>
            </div>
            <div className="reviews w-full flex items-center justify-between max-md:flex-col max-md:gap-10 gap-6">
                {reviews.map((review) => (
                    <div className="review bg-[#F9FAFB] rounded-2xl shadow-lg p-6 text-center flex flex-col gap-6">
                        <div className="flex items-center justify-start gap-2.5">
                            {review.star && Array.from({ length: review.star }).map((_, index) => (
                                <FaStar key={index} className="text-amber-300" />
                            ))}
                        </div>
                        <p className="text-[16px] text-left font-sans font-normal text-[#4B5563]">{review.review}</p>
                        <div className="flex items-center justify-start gap-2.5">
                            <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full" />
                            <h3 className="text-[20px] font-bold text-primary">{review.name}</h3>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default CustomerReview