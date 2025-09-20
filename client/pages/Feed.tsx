import PixelLayout from "@/components/PixelLayout";
import { useState } from "react";

const mockPosts = [
  { id: 1, user: "Aarav", img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop", text: "Planted a tree near the library!", likes: 88 },
  { id: 2, user: "Mia", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop", text: "Cycle-to-class challenge complete.", likes: 54 },
];

export default function Feed() {
  const [likes, setLikes] = useState<Record<number, number>>({});
  return (
    <PixelLayout>
      <div className="space-y-4">
        <h1 className="font-pixel text-xl">Feed</h1>
        <section className="pixel-card">
          <div className="font-pixel mb-2">Crowdfunding projects</div>
          <div className="overflow-x-auto">
            <div className="flex gap-3 min-w-max">
              {["Solar benches","Campus garden","Rainwater harvest"].map(p => (
                <div key={p} className="pixel-card w-64">
                  <div className="mb-2">{p}</div>
                  <div className="h-2 bg-secondary rounded-sm overflow-hidden mb-2"><div className="h-full bg-primary w-1/2"/></div>
                  <button className="pixel-button w-full">Support</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="space-y-4">
          {mockPosts.map(post => (
            <article key={post.id} className="pixel-card">
              <div className="text-sm font-semibold mb-2">{post.user}</div>
              <img src={post.img} alt="post" className="w-full rounded-sm"/>
              <div className="mt-2 text-sm">{post.text}</div>
              <div className="flex gap-2 mt-2">
                <button className="pixel-button" onClick={()=>setLikes(s=>({...s,[post.id]:(s[post.id]??post.likes)+1}))}>❤ Like {likes[post.id] ?? post.likes}</button>
                <button className="pixel-button">Comment</button>
                <button className="pixel-button">Share</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PixelLayout>
  );
}
