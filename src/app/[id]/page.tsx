// src/app/[id]/page.tsx

"use client";

import ChartComponent from "@/components/ChartComponent";
import { useState } from "react";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h1>차트를 여는데 오래걸리는 상황</h1>
      <button className="bg-blue-400 p-2 rounded-lg" onClick={toggleChart}>
        차트 열기
      </button>
      {isOpen && <ChartComponent />}
    </div>
  );
}
