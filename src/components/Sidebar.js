import React from 'react';

export default function Sidebar({ isOpen }) {
  if (!isOpen) return null;

  return (
    <aside className="w-64 h-[calc(100vh-3.5rem)] bg-white p-3 sticky top-14 overflow-y-auto hidden md:flex flex-col gap-6 select-none flex-shrink-0">
      <div className="flex flex-col gap-1">
        <a href="#" className="flex items-center gap-6 px-4 py-2.5 bg-gray-100 rounded-xl font-medium text-gray-900 text-sm">
          <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
          Bosh sahifa
        </a>
        <a href="#" className="flex items-center gap-6 px-4 py-2.5 hover:bg-gray-100 rounded-xl font-medium text-gray-700 text-sm">
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Shorts
        </a>
        <a href="#" className="flex items-center gap-6 px-4 py-2.5 hover:bg-gray-100 rounded-xl font-medium text-gray-700 text-sm">
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          Obunalar
        </a>
      </div>

      <hr className="border-gray-200" />

      <div className="flex flex-col gap-1">
        <h3 className="px-4 text-sm font-semibold text-gray-900 mb-1">Siz</h3>
        <a href="#" className="flex items-center gap-6 px-4 py-2.5 hover:bg-gray-100 rounded-xl font-medium text-gray-700 text-sm">
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Tarix
        </a>
        <a href="#" className="flex items-center gap-6 px-4 py-2.5 hover:bg-gray-100 rounded-xl font-medium text-gray-700 text-sm">
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
          </svg>
          Videolaringiz
        </a>
      </div>
    </aside>
  );
}