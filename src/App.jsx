import React from "react";
import items from "./assets/items.json";
import Eastar from "./Eastar";

const App = () => {
  return (
    <main className="font-gilroy min-h-screen bg-gradient-to-br from-teal-50 to-green-100 grid place-items-center py-8">
      <section className="flex flex-col items-center">
        <h1 className="text-xl sm:text-2xl md:text-4xl mb-7 font-medium">
          Easter.Accordion
        </h1>
        <Eastar
          dataList={items}
          isOpen={false}
          showWordCount={true}
          handleClick={() => console.log("Run the task!")}
        />
      </section>
    </main>
  );
};

export default App;
