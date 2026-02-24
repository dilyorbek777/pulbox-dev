export default function Faq() {
  return (
    <section className="max-w-[804px] w-full flex flex-col outline-3 mx-auto text-[#000000] mb-30">
      <div className="max-w-[762px] w-full mx-auto mb-16 ">
        <h1 className="text-[48px] leading-6 font-semibold mb-7 text-center">Tez-tez so'raladigan savollar</h1>
        <p className="text-[20px] leading-6 text-center">
          Bu yerda PulBox haqida eng ko'p berilgan savollarga javob olishingiz
          mumkin.
        </p>
      </div>
      <div className="w-full flex flex-col gap-5">
        <Questions/>
        <Questions/>
        <Questions/>
        <Questions/>
        <Questions/>
        <Questions/>
        <Questions/>
        <Questions/>
      </div>
      <button className="text-[24px] leading-none text-[#FFFFFF] py-3.5 px-11 bg-[#17BE86] hover:bg-[#65cdaa] transition-all duration-200 active:translate-y-1.5 border rounded-[10px] w-51 mx-auto mt-16">Bog'lanish</button>
    </section>
  );
}

function Questions() {
  return (
    <div className="w-full px-4 flex justify-between items-center bg-[#EEEFEF] py-5.25 border border-0 rounded-2xl">
      <p className="text-[20px] leading-6 text-[#000000] ">PulBox platformasi qurilmaga ulanadi ?</p>
      <svg
        width="20"
        height="12"
        viewBox="0 0 20 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.6065 10.6065L19.092 2.121L16.971 0L9.546 7.425L2.121 0L0 2.121L8.4855 10.6065C8.76679 10.8877 9.14825 11.0457 9.546 11.0457C9.94375 11.0457 10.3252 10.8877 10.6065 10.6065Z"
          fill="black"
        />
      </svg>
    </div>
  );
}
