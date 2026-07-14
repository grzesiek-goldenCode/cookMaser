"use client";

import { BsForkKnife } from "react-icons/bs";

import { useChat } from "@ai-sdk/react";
import { useState } from "react";

// ToDo - submit button - sprawdzić w poprzednich projektach czy ma być na zewnątrz kontenera

export default function ChatWindow() {
  const [input, setInput] = useState("");
  const { messages, sendMessage } = useChat();

  return (
    <div className="flex w-[40%] justify-center items-center py-24 mx-auto stretch">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage({ text: input });
          setInput("");
        }}
        className="flex flex-col w-full dark:bg-zinc-900 p-3 mb-8 border border-zinc-300 dark:border-zinc-800 rounded-2xl shadow-xl"
      >
        <div className="flex items-start ">
          <span className="px-2 scale-125 pt-1">
            <BsForkKnife />
          </span>
          <textarea
            className="field-sizing-content resize-none flex-1 bg-transparent outline-none max-h-40 overflow-y-auto"
            placeholder="Napisz coś..."
            rows={1}
            value={input}
            onChange={(e) => setInput(e.currentTarget.value)}
          ></textarea>
        </div>
      </form>
    </div>
  );
}

// <input
//           type="text"
//           className="p-2 focus:outline-none w-full"
//           value={input}
//           placeholder={"Opisz, na co masz ochotę..."}
//           onChange={(e) => setInput(e.currentTarget.value)}
//         />
