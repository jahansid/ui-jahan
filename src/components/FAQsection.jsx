import { useState } from "react";

const accordionData = [
  {
    question: "Where can I see my Nominee status?",
    answer:
      "If you click on the submission from your profile, you can find the Nominee Status in the upper right corner.",
  },
  {
    question: "Where can I find the Jury score for my submission?",
    answer:
      "The score from the Jury is only visible to Site of the Day winners.",
  },
  {
    question: "How long is my site eligible to win Site of the Day?",
    answer:
      "Each site has up to 3 months since approved to win SOTD. Once the max. 3-month period has ended, your site is no longer eligible to win SOTD.",
  },
  {
    question: "Can I submit website templates?",
    answer: "At the moment, we are not accepting website template submissions.",
  },
];
const FAQsection = () => {
  return (
    <div className=" pt-20  min-h-screen bg-zinc-900">
      <FAQcontent />
    </div>
  );
};

const FAQcontent = () => {
  return (
    <section className="container mx-auto rounded-xl  font-sans  md:max-w-xl lg:max-w-3xl  shadow-[7px_7px_25px_8px_#718096]">
      <div className=" flex flex-col items-center">
        <h1 className=" font-bold text-6xl md:text-7xl font-sans leading-tight   text-white">
          FAQs
        </h1>
        <div className="mt-10 md:mt-16">
          <div className=" bg-violet-500 mx-4  rounded-lg">
            {accordionData.map((item, index) => {
              return (
                <Accordion
                  key={index}
                  question={item.question}
                  answer={item.answer}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Accordion = ({ question, answer }) => {
  const [active, setActive] = useState(false);

  return (
    <div className=" mx-1 my-2">
      <button
        onClick={() => setActive(!active)}
        className="text-white leading-tight flex justify-between items-center w-full py-2"
      >
        <h3 className=" font-semibold text-sm md:text-base whitespace-nowrap">
          {question}
        </h3>
        <div> {active ? <span>-</span> : <span>+</span>}</div>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out text-slate-200 ${
          active
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="py-1 text-sm md:text-base">{answer}</div>{" "}
        {/* Added padding for better spacing */}
      </div>
    </div>
  );
};

export default FAQsection;
