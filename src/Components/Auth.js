import React from "react";

export default function Auth() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="border border-zinc-800 rounded-lg p-7 min-w-[35rem] bg-[#0C162D] font-mono flex flex-col gap-7 z-10">
        <div className="text-zinc-400">
          <h1>This is a gift!</h1>
          <h1>Only the right name can access this site</h1>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-bold text-cyan-400">Enter your name*</p>
          <div className="flex gap-5">
            <input
              type="text"
              name="name"
              id=""
              className="outline-none w-full rounded-md px-3 text-white bg-transparent bg-opacity-10 bg-white"
              autoComplete="off"
              aria-autocomplete="none"
            />
            <button className="px-4 py-1 rounded-md w-max border border-zinc-500 text-zinc-400">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
