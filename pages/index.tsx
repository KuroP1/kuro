import React, { useState, useEffect } from "react";
import axios from "axios";
import { Footer, Navbar } from "@/components";

const index = () => {
  const [player, setPlayer] = useState("");
  const [result, setResult] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        "https://api.mozambiquehe.re/bridge?auth=f70ea231d8513fc9b1e8e21d22eedd02&player=" +
          player +
          "&platform=PC"
      );
      setResult(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="relative px-4 sm:px-8 lg:px-12">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">Welcome to My website</h1>
        </main>
        <div className="mt-10">
          <form
            className="bg-white rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter player name"
                value={player}
                onChange={(e) => setPlayer(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
          {result.total && (
            <ul>
              {Object.entries(result.total).map(([key, value]) => (
                <li key={key}>
                  {value.name}: {value.value}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
