function Button({ text, btntype, className,onclick }: {
    text: string | React.ReactNode;
    onclick?: Function;
    btntype: "primary" | "secondary";
    className?: string
}) {
    return (
        <>

            {btntype === "primary" ? (
                <button onClick={() => onclick} className={`bg-primary text-[16px] text-secondary px-[26px] py-[14.5px] rounded-[15px] hover:bg-[#17BE86]/80 ${className}`}>{text}</button>
            ) : (
                <button onClick={() => onclick} className={`bg-secondary border primary-border  text-[16px] text-primary px-[26px] hover:bg-[#17BE86]/80 py-[14.5px] rounded-[15px] ${className}`}>{text}</button>
            )}
        </>
    )
}

export default Button