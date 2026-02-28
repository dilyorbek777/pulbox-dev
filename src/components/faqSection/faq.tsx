import { useEffect, useState } from "react";

type Quest = {
  answer: string;
  id: string | number;
  order: number;
  question: string;
};

interface QuestProps {
  ques: Quest;
}

export default function Faq() {
  const [question, setQuestion] = useState<Quest[]>([]);
  useEffect(function () {
    const fetchFaq = async () => {
      try {
        const request = await fetch(`https://api.pulbox.uz/api/v1/faqs/`);
        if (!request.ok) throw new Error(`setver xatosi: ${request.status}`);

        const data = await request.json();
        console.log(data.results);
        setQuestion(data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchFaq();
  }, []);

  return (
    <section className="max-w-[804px] w-full flex flex-col mx-auto text-[#000000] mb-30 px-10">
      <div className="max-w-[762px] w-full mx-auto mb-16 max-[800px]:mb-12 ">
        <h1 className="text-[48px] leading-6 font-semibold mb-7 text-center max-[800px]:text-[40px] max-[590px]:text-[32px]">
          Tez-tez so'raladigan savollar
        </h1>
        <p className="text-[20px] leading-6 text-center max-[780px]:text-[18px] max-[500px]:text-[14px]">
          Bu yerda PulBox haqida eng ko'p berilgan savollarga javob olishingiz
          mumkin.
        </p>
      </div>
      <div className="w-full flex flex-col gap-5">
        {question.map((ques) => {
          return <Questions key={ques.id} ques={ques} />;
        })}
      </div>
      <button className="text-[24px] leading-none text-[#FFFFFF] py-3.5 px-11 bg-[#17BE86] hover:bg-[#65cdaa] transition-all duration-200 active:translate-y-1.5 border rounded-[10px] w-51 mx-auto mt-16">
        Bog'lanish
      </button>
    </section>
  );
}

function Questions({ ques }: QuestProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  function isOpenToggle(){
    if(isOpen === false){
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }
  // const {}
  return (
    <div className="w-full px-4 flex flex-col gap-4  bg-[#EEEFEF] hover:bg-[#bdc0c0] duration-150 cursor-pointer py-5.25 border border-0 rounded-2xl">
      <div onClick={()=> isOpenToggle()} className="w-full flex justify-between items-center ">
        <p className=" leading-6 text-[#000000] text-[20px] max-[500px]:text-[16px] max-[400px]:text-[14px]">{ques.question}</p>
        <svg className={`transition-transform duration-400 ease-in-out transform ${isOpen ? "rotate-180" : "rotate-0"}`}
          width="20"
          height="12"
          viewBox="0 0 20 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.6065 10.6065L19.092 2.121L16.971 0L9.546 7.425L2.121 0L0 2.121L8.4855 10.6065C8.76679 10.8877 9.14825 11.0457 9.546 11.0457C9.94375 11.0457 10.3252 10.8877 10.6065 10.6065Z"
            fill="black"
          />
        </svg>
      </div>
      {isOpen ? (
        <div className="w-full bg-[#EEEFEF] p-3 rounded-2xl translate-y-5.25">
          <p className=" leading-6 text-[#000000] text-[20px] max-[500px]:text-[16px] max-[400px]:text-[14px]">
            {ques.answer}
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
