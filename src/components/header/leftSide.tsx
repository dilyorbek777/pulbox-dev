import Button from "../site/button";

export default function LeftSide() {
  return (
    <section className="max-w-[530px] mb-16 w-full flex flex-col gap-[32px] max-[1200px]:max-w-[720px] my-auto  max-[1200px]:mt-18 max-[1200px]:mb-0 max-[768px]:mt-1 max-[410px]:max-w-83.75">
      <div>
        <h1 className="text-[60px] font-bold text-[#000000] max-[1200px]:text-[40px] max-[600px]:text-[32px] ">
          O'z-o'ziga xizmat ko'rsatish uchun
          <span className="bg-gradient-to-r  from-[#1564F6] to-[#03B485] bg-clip-text text-transparent">
            {" "}
            only{" "}
          </span>{" "}
          <span className="bg-gradient-to-r from-[#1564F6] to-[#03B485] bg-clip-text text-transparent">
            tranzaksiyalar
          </span>{" "}
          va aqlli monitoring
        </h1>
      </div>
      <div>
        <p className="text-[#4B5563] text-[24px] leading-8 max-w-[487px] w-full max-[1200px]:text-[20px] max-w-[720px]:text-[16px] max-[410px]:text-[18 px]">
          Hayot uchun oson va samarali echimlar. Pulbox bilan oson va xavfsiz.
          Biznesingizni masofadan boshqaring va daromadingizni oshiring.
        </p>
      </div>
      <div className="max-w-[485px] w-full flex justify-between max-[560px]:flex-col gap-4 max-[560px]:m-auto p-5">
        <Button 
          btntype="primary"
          className="max-[400px]:px-4 max-[400px]:py-4 py-[17px]"
          text={
            <>
              Demo ko'rish
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.1583 8.32949L7.30275 5.90099C7.16549 5.83231 7.01294 5.79986 6.8596 5.80675C6.70627 5.81364 6.55724 5.85963 6.42669 5.94036C6.29614 6.02108 6.1884 6.13384 6.11372 6.26794C6.03904 6.40203 5.99989 6.553 6 6.70649V11.2935C5.99989 11.447 6.03904 11.5979 6.11372 11.732C6.1884 11.8661 6.29614 11.9789 6.42669 12.0596C6.55724 12.1403 6.70627 12.1863 6.8596 12.1932C7.01294 12.2001 7.16549 12.1677 7.30275 12.099L12.1583 9.67049C12.2827 9.60814 12.3873 9.5124 12.4604 9.39399C12.5335 9.27557 12.5722 9.13915 12.5722 8.99999C12.5722 8.86083 12.5335 8.72441 12.4604 8.606C12.3873 8.48758 12.2827 8.39185 12.1583 8.32949Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75Z"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
            </>
          }
        />
        <Button
          btntype="secondary"
          className="max-[400px]:px-4 max-[400px]:py-3"
          text={
            <>
              Bog'lanish
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12L20.5 12"
                  stroke="#17BE86"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 19L21 12L14 5"
                  stroke="#17BE86"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </>
          }
        />
      </div>
    </section>
  );
}
