import React from "react";
import Eastar from "./Eastar";

const App = () => {
  const frameworksList = [
    {
      id: crypto.randomUUID(),
      title: "React",
      description:
        "React is a JavaScript library to build interactive user interaces like this one.",
    },
    {
      id: crypto.randomUUID(),
      title: "Flutter",
      description:
        "Built by the Google team, flutter ecompasses cross-platform applications from a single codebase.",
    },
    {
      id: crypto.randomUUID(),
      title: "Next.js",
      description:
        "It is a full-stack react framework used to build awesome applications.",
    },
    {
      id: crypto.randomUUID(),
      title: "GSAP",
      description:
        "Green Sock Animation Project, it is used to add animations using JavaScript in our web applications.",
    },
    {
      id: crypto.randomUUID(),
      title: "Spring",
      description:
        "Stupid Java frameworks that comes in unknown numbers of flavors including hibernate, hibernate plus!",
    },
    {
      id: crypto.randomUUID(),
      title: "Tauri",
      description:
        "Here comes the future of cross-platform applications. Built using Rust!",
    },
  ];

  return (
    <main className="font-gilroy min-h-screen bg-slate-50 grid place-items-center py-8">
      <section className="flex flex-col items-center">
        <h1 className="text-xl sm:text-2xl md:text-4xl mb-7 font-medium">
          Easter.Accordion
        </h1>
        <Eastar dataList={frameworksList} />
      </section>
    </main>
  );
};

export default App;
