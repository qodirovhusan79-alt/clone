import React, { useState } from 'react';

export default function AdminPanel({ isOpen, onClose, onAddVideo }) {
  const [title, setTitle] = useState('');
  const [channel, setChannel] = useState('');
  const [thumbnail, setThumbnail] = useState(null);

  if (!isOpen) return null;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnail(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!thumbnail) return;

    const newVideo = {
      id: Date.now(),
      title,
      channel,
      views: "0 ko'rish",
      time: "Hozirgina",
      thumbnail,
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop"
    };

    onAddVideo(newVideo);
    setTitle('');
    setChannel('');
    setThumbnail(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-lg p-6 shadow-2xl relative">
        <div className="flex justify-between items-center mb-6 border-b pb-3">
          <h2 className="text-xl font-bold text-gray-900">Admin Panel</h2>
          <button 
            type="button"
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full cursor-pointer text-gray-500 hover:text-gray-800"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Video nomi</label>
            <input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Video nomini kiriting"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-blue-500 text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Kanal nomi</label>
            <input 
              type="text" 
              value={channel} 
              onChange={(e) => setChannel(e.target.value)}
              placeholder="Kanal nomini kiriting"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-blue-500 text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Kompyuterdan rasm (Thumbnail) tanlang</label>
            <input 
              type="file" 
              accept="image/*"
              onChange={handleImageChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-blue-500 text-sm cursor-pointer"
              required
            />
          </div>

          {thumbnail && (
            <div className="w-full h-40 bg-gray-100 rounded-lg overflow-hidden mt-2">
              <img src={thumbnail} alt="Preview" className="w-full h-full object-cover" />
            </div>
          )}

          <div className="flex justify-end gap-3 mt-4">
            <button 
              type="button" 
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 cursor-pointer"
            >
              Bekor qilish
            </button>
            <button 
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 cursor-pointer"
            >
              Video qo'shish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}