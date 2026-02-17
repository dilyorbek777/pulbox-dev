function Button({ text, btntype,className }: {
    text: string | React.ReactNode;
    onClick?: () => void;
    btntype: "primary" | "secondary";
    className?: string
}) {
    return (
        <>

            {btntype === "primary" ? (
                <button className={`bg-primary text-[18px] text-secondary px-[45px] py-[17px] rounded-[15px] flex justify-between items-center gap-[10px] ${className}`}>{text}</button>
            ) : (
                <button className={`bg-secondary border primary-border  text-[18px] text-primary px-[45px] py-[17px] rounded-[15px] flex justify-between items-center gap-[10px] ${className}`}>{text}</button>
            )}
        </>
    )
}

export default Button