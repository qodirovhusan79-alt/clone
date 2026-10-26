import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import VideoGrid from "./components/VideoGrid";
import AdminPanel from "./components/AdminPanel";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const [videos, setVideos] = useState(() => {
    const savedVideos = localStorage.getItem("youtube_videos");
    if (savedVideos) {
      return JSON.parse(savedVideos);
    }
    return [
      {
        id: 1,
        title: "React JS to'liq kurs 2026 | Amaliy loyihalar bilan o'rganish",
        channel: "iTLive Academy",
        views: "45K ko'rish",
        time: "3 kun oldin",
        thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=500&auto=format&fit=crop",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop"
      },
      {
        id: 2,
        title: "Tailwind CSS darslari | Mukammal dizayn yaratish sirlari",
        channel: "Frontend Uz",
        views: "18K ko'rish",
        time: "1 hafta oldin",
        thumbnail: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=500&auto=format&fit=crop",
        avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=100&auto=format&fit=crop"
      }
    ];
  });

  useEffect(() => {
    localStorage.setItem("youtube_videos", JSON.stringify(videos));
  }, [videos]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const openAdmin = () => {
    setIsAdminOpen(true);
  };

  const closeAdmin = () => {
    setIsAdminOpen(false);
  };

  const handleAddVideo = (newVideo) => {
    setVideos([newVideo, ...videos]);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar onToggleSidebar={toggleSidebar} onOpenAdmin={openAdmin} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} />
        <VideoGrid videos={videos} />
      </div>
      <AdminPanel isOpen={isAdminOpen} onClose={closeAdmin} onAddVideo={handleAddVideo} />
    </div>
  );
}

export default App;