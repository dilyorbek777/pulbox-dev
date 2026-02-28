import { useState, type ChangeEvent } from "react";
import type { FormEvent } from 'react';
import { FaRegEnvelope } from "react-icons/fa";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import Button from "./site/button";


type FormDataType = {
    fullName: string;
    company: string;
    phone: string;
    deviceType: string;
    message: string;
};

const ContactSection = () => {

    const [formData, setFormData] = useState<FormDataType>({
        fullName: "",
        company: "",
        phone: "",
        deviceType: "",
        message: "",
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const dataObject = {
            fullName: formData.fullName,
            company: formData.company,
            phone: formData.phone,
            deviceType: formData.deviceType,
            message: formData.message,
        };

        console.log("Yuborilgan ma'lumot:", dataObject);

        // optional: formani tozalash
        setFormData({
            fullName: "",
            company: "",
            phone: "",
            deviceType: "",
            message: "",
        });
    };

    const details = [
        { name: "Telefon", value: "+998991234567", icon: <IoCallOutline /> },
        { name: "Email", value: "info@pulbox.uz", icon: <FaRegEnvelope /> },
        { name: "Manzil", value: "Toshkent sh., Chilonzor tumani", icon: <IoLocationOutline /> },
    ]

    return (
        <div className=" flex flex-col bg-[#064E3B]  lg:flex-row  w-full ">

            <div className="flex max-w-[1440px] max-md:flex-col mx-auto w-full items-center justify-between  px-1.5 ">
                {/* LEFT SIDE */}
                <div className="lg:w-1/2 max-md:w-full  text-white px-8 lg:px-16 py-16 flex flex-col justify-center ">
                    <h1 className="text-[32px] lg:text-4xl font-bold font-inter mb-6">
                        Biznesingizni yangi bosqichga olib chiqing
                    </h1>

                    <p className="text-[#D1FAE5] text-[16px] font-inter mb-10 max-w-md">
                        Savollaringiz bormi? Bizga yozing yoki qo'ng'iroq qiling.
                        Mutaxassislarimiz sizga yordam berishdan mamnun bo'lishadi.
                    </p>

                    <div className="space-y-6">
                        {details.map((detail, i) => (
                            <div key={i} className="flex items-center justify-start gap-8">
                                <div className="w-14 h-14 rounded-[12px] bg-[#FFFFFF1A] flex items-center justify-center text-[#17BE86]">
                                    {detail.icon}
                                </div>
                                <div className="flex flex-col gap-2 ">
                                    <p className="text-[#FFFFFF80] text-[18px]">{detail.name}</p>
                                    <p className="text-[20px] font-medium font-semibold">
                                        {detail.value}
                                    </p>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>


                {/* RIGHT SIDE */}
                <div className="lg:w-1/2 h-[90vh] text-inter max-md:w-full bg-[#FFFFFF1A] flex items-center justify-center p-6">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white w-full max-w-[576px] rounded-2xl shadow-2xl p-8 space-y-5"
                    >
                        <h2 className="text-xl font-bold mb-4">
                            So'rov qoldirish
                        </h2>

                        <div className="flex gap-3">
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Ism Familiya"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                className="w-1/2 p-2 rounded-md text-[16px] border border-[#D1D5DB] text-[#000000] outline-0"
                            />

                            <input
                                type="text"
                                name="company"
                                placeholder="Kompaniya nomi"
                                value={formData.company}
                                onChange={handleChange}

                                className="w-1/2 p-2 rounded-md text-[16px] border border-[#D1D5DB] text-[#000000] outline-0" />
                        </div>

                        <input
                            type="tel"
                            name="phone"
                            placeholder="+998"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full p-2 rounded-md text-sm border border-[#D1D5DB] text-[#000000] outline-0"
                        />

                        <select
                            name="deviceType"
                            value={formData.deviceType}
                            onChange={handleChange}
                            required
                            className="w-full p-2 rounded-md text-sm border border-[#D1D5DB] text-[#000000] outline-0"
                        >
                            <option value="">Tanglang</option>
                            <option value="POS Terminal">POS Terminal</option>
                            <option value="Kassa">Kassa</option>
                            <option value="Printer">Printer</option>
                        </select>

                        <textarea
                            name="message"
                            placeholder="Qo'shimcha ma'lumot"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                         className="w-full p-2 rounded-md text-sm border border-[#D1D5DB] text-[#000000] outline-0"
                        />

                        <Button btntype="primary" text="Yuborish" className="w-full"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;