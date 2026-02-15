
function Button({ text, btntype }: {
    text: string;
    btntype: "primary" | "secondary"
}) {
    return (
        <>

            {btntype === "primary" ? (
                <button className="bg-primary text-[16px] text-secondary px-[26px] py-[14.5px] rounded-md">{text}</button>
            ) : (
                <button className="bg-secondary border primary-border  text-[16px] text-primary px-[26px] py-[14.5px] rounded-md">{text}</button>
            )}
        </>
    )
}

export default Button