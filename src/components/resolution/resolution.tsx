import type { ReactNode } from "react";
// import Logo from "../site/logo";
// import logo from "../../assets/images/logo.png";
import logo from "../../assets/images/logo.png";
import warning from "../../assets/images/warning.png";
import tick from "../../assets/images/tick.png";

interface ProblemItem {
  id: number; // majburiy qildik
  prTitle: string;
  description: string;
  icon: ReactNode;
}
interface TitleTwoSides {
  title: string;
  poster: string;
}
interface ProblemSideProps {
  resolution: ProblemItem[];
  statusObj: TitleTwoSides;
}

// interface Items {
//   items: ProblemItem;
//   soluiton:ProblemItem;
// }

export default function ReasonPullbox() {
  interface StrNumTypes {
    id: number;
    prTitle: string;
    description: string;
    icon: React.ReactNode; // yoki JSX.Element, lekin ReactNode eng mos keladi
  }

  const problems: StrNumTypes[] = [
    {
      id: 1,
      prTitle: "Tranzaksiya uzilishlari",
      description: "Mijozlar to'lov qila olmaydi, siz daromad yo'qotasiz.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 20H12.01M8.5 16.429C9.43464 15.5129 10.6912 14.9997 12 14.9997C13.3088 14.9997 14.5654 15.5129 15.5 16.429M5 12.859C6.41803 11.4689 8.21781 10.5325 10.17 10.169M19 12.859C18.3979 12.2688 17.7235 11.757 16.993 11.336M2 8.82C3.2366 7.71408 4.64809 6.82095 6.177 6.177M22 8.82C20.4747 7.45581 18.6864 6.41814 16.7452 5.77083C14.8039 5.12352 12.7508 4.88025 10.712 5.056M2 2L22 22"
            stroke="#DC2626"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 2,
      prTitle: "Texnik nosozliklar",
      description:
        "Nosozlik haqida kech xabar topish va uzoq vaqt ishlamaslik.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.8345 11.6667H15.1679V17.5001H12.8345V11.6667ZM12.8334 18.6667H15.1667V21.0001H12.8334V18.6667Z"
            fill="#DC2626"
          />
          <path
            d="M16.0627 4.89989C15.6567 4.13572 14.8657 3.66089 14 3.66089C13.1343 3.66089 12.3433 4.13572 11.9373 4.90106L3.37634 21.0746C3.18682 21.4299 3.09298 21.8284 3.10402 22.2309C3.11507 22.6334 3.23062 23.0262 3.43934 23.3706C3.64514 23.7166 3.93783 24.0029 4.28839 24.201C4.63894 24.3991 5.03519 24.5022 5.43784 24.4999H22.5622C23.3882 24.4999 24.136 24.0776 24.5618 23.3706C24.7706 23.0262 24.8861 22.6334 24.8972 22.2309C24.9082 21.8284 24.8144 21.4299 24.6248 21.0746L16.0627 4.89989ZM5.43784 22.1666L14 5.99306L22.568 22.1666H5.43784Z"
            fill="#DC2626"
          />
        </svg>
      ),
    },
    {
      id: 3,
      prTitle: "Nazoratsiz jihozlar",
      description:
        "Qaysi apparat qancha foyda keltirayotganini aniq bilmaslik.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 1.5C6.21 1.5 1.5 6.21 1.5 12C1.5 17.79 6.21 22.5 12 22.5C17.79 22.5 22.5 17.79 22.5 12C22.5 6.21 17.79 1.5 12 1.5ZM12 21C7.0365 21 3 16.9635 3 12C3 7.0365 7.0365 3 12 3C16.9635 3 21 7.0365 21 12C21 16.9635 16.9635 21 12 21ZM16.281 8.781L13.062 12L16.281 15.219C16.4216 15.3598 16.5006 15.5508 16.5004 15.7498C16.5003 15.9488 16.4211 16.1396 16.2803 16.2803C16.1394 16.4209 15.9485 16.4998 15.7495 16.4997C15.5504 16.4995 15.3596 16.4203 15.219 16.2795L12 13.0605L8.781 16.2795C8.71133 16.3493 8.62857 16.4048 8.53745 16.4426C8.44633 16.4804 8.34865 16.4998 8.25 16.4998C8.15135 16.4998 8.05367 16.4804 7.96255 16.4426C7.87143 16.4048 7.78867 16.3493 7.719 16.2795C7.5784 16.1389 7.49941 15.9481 7.49941 15.7493C7.49941 15.5504 7.5784 15.3596 7.719 15.219L10.938 12L7.719 8.781C7.58238 8.63955 7.50679 8.4501 7.50849 8.25345C7.5102 8.0568 7.58908 7.86869 7.72814 7.72964C7.86719 7.59058 8.0553 7.5117 8.25195 7.50999C8.4486 7.50829 8.63805 7.58388 8.7795 7.7205L11.9985 10.9395L15.2175 7.7205C15.359 7.58388 15.5484 7.50829 15.7451 7.50999C15.9417 7.5117 16.1298 7.59058 16.2689 7.72964C16.4079 7.86869 16.4868 8.0568 16.4885 8.25345C16.4902 8.4501 16.4146 8.63955 16.278 8.781H16.281Z"
            fill="#DC2626"
          />
        </svg>
      ),
    },
  ];
  const soluiton: StrNumTypes[] = [
    {
      id: 4,
      prTitle: "Tranzaksiya uzilishlari",
      description: "Mijozlar to'lov qila olmaydi, siz daromad yo'qotasiz.",
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.1667 1.53434C15.034 1.1792 13.8537 0.999019 12.6667 1C6.22317 1 1 6.22317 1 12.6667C1 19.1102 6.22317 24.3333 12.6667 24.3333C19.1102 24.3333 24.3333 19.1102 24.3333 12.6667C24.3343 11.4796 24.1541 10.2994 23.799 9.16667"
            stroke="#17BE86"
            strokeWidth="2"
            stroke-linecap="round"
          />
          <path
            d="M8.58325 9.75008L12.6666 13.8334L23.1666 2.16675"
            stroke="#17BE86"
            strokeWidth="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 5,
      prTitle: "Texnik nosozliklar",
      description:
        "Nosozlik haqida kech xabar topish va uzoq vaqt ishlamaslik.",
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.1667 1.53434C15.034 1.1792 13.8537 0.999019 12.6667 1C6.22317 1 1 6.22317 1 12.6667C1 19.1102 6.22317 24.3333 12.6667 24.3333C19.1102 24.3333 24.3333 19.1102 24.3333 12.6667C24.3343 11.4796 24.1541 10.2994 23.799 9.16667"
            stroke="#17BE86"
            strokeWidth="2"
            stroke-linecap="round"
          />
          <path
            d="M8.58325 9.75008L12.6666 13.8334L23.1666 2.16675"
            stroke="#17BE86"
            strokeWidth="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 3,
      prTitle: "Nazoratsiz jihozlar",
      description:
        "Qaysi apparat qancha foyda keltirayotganini aniq bilmaslik.",
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.1667 1.53434C15.034 1.1792 13.8537 0.999019 12.6667 1C6.22317 1 1 6.22317 1 12.6667C1 19.1102 6.22317 24.3333 12.6667 24.3333C19.1102 24.3333 24.3333 19.1102 24.3333 12.6667C24.3343 11.4796 24.1541 10.2994 23.799 9.16667"
            stroke="#17BE86"
            strokeWidth="2"
            stroke-linecap="round"
          />
          <path
            d="M8.58325 9.75008L12.6666 13.8334L23.1666 2.16675"
            stroke="#17BE86"
            strokeWidth="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
  ];
  const soluitongObj: TitleTwoSides = {
    title: "Pulbox bilan yechim ",
    poster: tick,
  };
  const warningObj: TitleTwoSides = {
    title: "Muamo",
    poster: warning,
  };
  return (
    <section className="max-w-263 w-full flex flex-col gap-30  mx-auto mt-25 h-auto">
      <div className=" max-w-[754px] w-full mx-auto mb-8">
        <div className="max-w-96.5 w-full mx-auto flex justify-between items-center mb-8">
          <h1 className="text-3xl text-[#000000] font-bold ">Nega aynan</h1>
          <div className="max-w-46 w-full">
            <img src={logo} alt="pullBox logo" className="w-full" />
          </div>
        </div>
        <div className="max-w-190 w-full">
          <p className="font-[500] text-[20px] text-[#000000] leading-[40px] text-center">
            Biznesingizdagi eng og'riqli muammolarni zamonaviy texnologiyalar
            yordamida hal qilamiz.
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <ProblemSide statusObj={warningObj} resolution={problems} />
        <ProblemSide statusObj={soluitongObj} resolution={soluiton} />
      </div>
    </section>
  );
}

function ProblemSide({ resolution, statusObj }: ProblemSideProps) {
  const { poster, title } = statusObj;

  return (
    <div className="max-w-126 w-full p-8 border border-[#D1D5DB] rounded-3xl">
      <div className="max-w-74 w-full flex gap-4 items-center mb-[37px]">
        <img className="max-w-10 w-full" src={poster} alt="warning sign" />
        <h1 className="text-[#111827] text-[24px] font-bold ">{title}</h1>
      </div>
      <div className="flex flex-col gap-6">
        {resolution.map((items) => {
          return <WarningDescriptions key={items.id} fullObj={items} />;
        })}
      </div>
    </div>
  );
}

function WarningDescriptions({ fullObj }: { fullObj: ProblemItem }) {
  const { prTitle, icon, description } = fullObj;
  return (
    <div className="flex gap-4 w-full items-center">
      <div>{icon}</div>
      <div>
        <h3 className="text-[13.6px] text-[#111827] font-bold mb-1">
          {prTitle}
        </h3>
        <p className="text-[#4B5563] text-[12px] ">{description}</p>
      </div>
    </div>
  );
}
