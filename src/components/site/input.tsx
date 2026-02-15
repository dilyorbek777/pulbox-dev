function Input({ label, text, placeholder, type, id }:
    { label: string; text: string; placeholder: string; type: string; id: string }) {
    return (
        <div className="flex flex-col gap-2 w-max">
            <label htmlFor={label} className="text-sm text-[#374151]">{text}</label>
            <input type={type} id={id} className="p-2 rounded-md text-sm border border-[#D1D5DB] text-[#000000] outline-0" placeholder={placeholder} />
        </div>
    )
}

export default Input