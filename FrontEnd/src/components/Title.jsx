import React from 'react';

const Title = ({ text1, text2 }) => {
  return (
    <div className='title-container'>
      <p className='text'>{text1} <span className='highlight-text'>{text2}</span></p>
      <p className='line'></p>

      {/* Embedded CSS */}
      <style>
  {`
    .title-container {
      display: inline-flex;
      gap: 0.5rem; /* Equivalent to gap-2 in Tailwind */
      align-items: center;
      margin-bottom: 0.75rem; /* Equivalent to mb-3 in Tailwind */
    }

    .text {
      color: #386840; /* Equivalent to text-gray-500 in Tailwind */
    }

    .highlight-text {
      color: #134f1d; /* Equivalent to text-gray-700 in Tailwind */
      font-weight: 500; /* Equivalent to font-medium in Tailwind */
    }

    .line {
      width: 2rem; /* Equivalent to w-8 in Tailwind */
      height: 1px; /* Equivalent to h-[1px] in Tailwind */
      background-color: #374151; /* Equivalent to bg-gray-700 in Tailwind */
    }

    @media (min-width: 640px) {
      .line {
        width: 3rem; /* Equivalent to sm:w-12 in Tailwind */
        height: 2px; /* Equivalent to sm:h-[2px] in Tailwind */
      }
    }
  `}
</style>

    </div>
  );
};

export default Title;
