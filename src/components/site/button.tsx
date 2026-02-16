function Button({ text, btntype,className }: {
    text: string | React.ReactNode;
    onClick?: () => void;
    btntype: "primary" | "secondary";
    className?: string
}) {
    return (
        <>

            {btntype === "primary" ? (
                <button className={`bg-primary text-[16px] text-secondary px-[26px] py-[14.5px] rounded-[15px] ${className}`}>{text}</button>
            ) : (
                <button className={`bg-secondary border primary-border  text-[16px] text-primary px-[26px] py-[14.5px] rounded-[15px] ${className}`}>{text}</button>
            )}
        </>
    )
}

export default Button