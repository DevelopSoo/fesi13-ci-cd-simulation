// app/page.ts

"use client";

import { useState } from "react";

export default function SimpleAnimationTest() {
  const [isLayoutWide, setIsLayoutWide] = useState(false);
  const [isCompositeWide, setIsCompositeWide] = useState(false);

  // 클래스를 토글하여 애니메이션을 시작합니다.
  const toggleLayoutAnimation = () => {
    setIsLayoutWide(!isLayoutWide);
  };

  const toggleTransformAnimation = () => {
    setIsCompositeWide(!isCompositeWide);
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">애니메이션 성능 비교</h1>
      <p className="mb-4 text-gray-700">
        DevTools의 Performance 탭을 열고 기록(Record)을 시작한 후, 각 버튼을
        클릭하여 애니메이션이 진행되는 3초 동안의 Main Thread 활동을 비교하세요.
      </p>

      <div className="flex space-x-4 mb-10">
        <button
          onClick={toggleLayoutAnimation}
          className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-lg hover:bg-red-700 transition duration-150"
        >
          Layout 유발 (width/height) 애니메이션 시작
        </button>
        <button
          onClick={toggleTransformAnimation}
          className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transition duration-150"
        >
          Composite 유발 (transform) 애니메이션 시작
        </button>
      </div>

      <div className="flex space-x-12">
        {/* 1. Layout 유발 애니메이션: width와 height 직접 변경 */}
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-2">
            Width/Height 변경 (Layout 유발)
          </h2>
          <div
            className={`
              bg-red-500 rounded-lg transition-all duration-3000 ease-in-out
              ${isLayoutWide ? "w-[200px] h-[200px]" : "w-[50px] h-[50px]"}
            `}
          ></div>
        </div>

        {/* 2. Composite 유발 애니메이션: transform (scale) 사용 */}
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-2">
            Transform 변경 (Composite 유발)
          </h2>
          <div
            className={`
              bg-green-500 rounded-lg transition-transform duration-3000 ease-in-out w-[50px] h-[50px]
              ${isCompositeWide ? "scale-[4.0]" : "scale-[1.0]"}
            `}
          ></div>
        </div>
      </div>
    </div>
  );
}
