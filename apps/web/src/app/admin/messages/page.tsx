"use client";

import { useState } from "react";
import Image from "next/image";
import { brand } from "@/config/brand";

const conversations = [
  {
    id: 1, name: "Alexander White",  avatar: "/imgs/pexels-vince-2233366.jpg",
    last: "Thanks, see you Thursday!", time: "10:32 AM", unread: 0,
    messages: [
      { from: "them", text: "Hi! Quick question — is the technician still coming Thursday at 9?", time: "10:20 AM" },
      { from: "me",   text: "Yes, Marcus is confirmed for Thursday at 9 AM. You'll get a notification when he's 30 min away.", time: "10:25 AM" },
      { from: "them", text: "Thanks, see you Thursday!", time: "10:32 AM" },
    ],
  },
  {
    id: 2, name: "Rachel Kim", avatar: "/imgs/pexels-sofiia-medynska-1268772480-34686824.jpg",
    last: "The pH is still off after last visit", time: "9:14 AM", unread: 2,
    messages: [
      { from: "them", text: "The pH is still off after last visit. My pool looks a bit cloudy too.", time: "9:10 AM" },
      { from: "them", text: "Can someone come check it sooner?", time: "9:14 AM" },
    ],
  },
  {
    id: 3, name: "Tom Anderson", avatar: "/imgs/pexels-petra-nesti-1766376-36676392.jpg",
    last: "Issue reported: pump making noise", time: "Yesterday", unread: 1,
    messages: [
      { from: "them", text: "Hey — my pump is making a grinding noise. Started this morning.", time: "Yesterday 4:45 PM" },
    ],
  },
  {
    id: 4, name: "Sarah Thompson", avatar: "/imgs/pexels-vlada-karpovich-7903138.jpg",
    last: "Perfect, thanks for the quick response!", time: "Mon", unread: 0,
    messages: [
      { from: "me",   text: "Your invoice for October has been sent to your email.", time: "Mon 11:00 AM" },
      { from: "them", text: "Perfect, thanks for the quick response!", time: "Mon 11:15 AM" },
    ],
  },
];

const quickReplies = [
  "Your technician is on the way!",
  "Your service report is ready.",
  "Invoice sent to your email.",
  "We'll schedule a follow-up visit.",
];

export default function MessagesPage() {
  const [activeId, setActiveId] = useState(conversations[0].id);
  const [input, setInput] = useState("");
  const active = conversations.find((c) => c.id === activeId)!;

  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden">
      {/* Sidebar */}
      <aside className="w-80 border-r border-outline-variant/20 flex flex-col bg-surface-container-lowest">
        <div className="p-4 border-b border-outline-variant/20">
          <h1 className="text-xl font-extrabold text-on-surface mb-3">Messages</h1>
          <div className="flex items-center gap-2 bg-surface-container px-3 py-2 rounded-xl">
            <span className="material-symbols-outlined text-outline text-base">search</span>
            <input type="text" placeholder="Search…" className="bg-transparent text-sm text-on-surface placeholder:text-outline outline-none flex-1" />
          </div>
        </div>
        <div className="overflow-y-auto flex-1">
          {conversations.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveId(c.id)}
              className={`w-full flex items-center gap-3 px-4 py-4 text-left hover:bg-surface-container transition-colors border-b border-outline-variant/10 ${activeId === c.id ? "bg-primary/5 border-l-2 border-l-primary" : ""}`}
            >
              <div className="relative flex-shrink-0">
                <div className="w-11 h-11 rounded-full overflow-hidden relative">
                  <Image src={c.avatar} alt={c.name} fill className="object-cover" />
                </div>
                {c.unread > 0 && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-on-primary text-[9px] font-extrabold flex items-center justify-center">
                    {c.unread}
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <p className={`text-sm font-bold truncate ${c.unread > 0 ? "text-on-surface" : "text-on-surface-variant"}`}>{c.name}</p>
                  <span className="text-[10px] text-outline flex-shrink-0 ml-2">{c.time}</span>
                </div>
                <p className={`text-xs truncate mt-0.5 ${c.unread > 0 ? "text-on-surface font-semibold" : "text-outline"}`}>{c.last}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Broadcast */}
        <div className="p-4 border-t border-outline-variant/20">
          <button className="w-full bg-secondary-container text-on-secondary-container py-3 rounded-xl font-bold text-sm hover:opacity-90 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-sm">campaign</span>
            Broadcast to All
          </button>
        </div>
      </aside>

      {/* Chat area */}
      <div className="flex-1 flex flex-col">
        {/* Chat header */}
        <div className="flex items-center gap-4 px-6 py-4 border-b border-outline-variant/20 bg-surface-container-lowest">
          <div className="w-10 h-10 rounded-full overflow-hidden relative flex-shrink-0">
            <Image src={active.avatar} alt={active.name} fill className="object-cover" />
          </div>
          <div>
            <p className="font-bold text-on-surface">{active.name}</p>
            <p className="text-xs text-tertiary font-semibold">Active customer · Weekly plan</p>
          </div>
          <div className="ml-auto flex gap-2">
            <button className="p-2 hover:bg-surface-container rounded-xl text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-base">call</span>
            </button>
            <button className="p-2 hover:bg-surface-container rounded-xl text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-base">person</span>
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-surface-container-low">
          {active.messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[70%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                msg.from === "me"
                  ? "bg-primary text-on-primary rounded-tr-sm"
                  : "bg-surface-container-lowest text-on-surface rounded-tl-sm shadow-sm"
              }`}>
                {msg.text}
                <p className={`text-[10px] mt-1 ${msg.from === "me" ? "text-on-primary/60" : "text-outline"}`}>{msg.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick replies */}
        <div className="px-4 pt-3 flex gap-2 overflow-x-auto bg-surface-container-lowest border-t border-outline-variant/10">
          {quickReplies.map((r) => (
            <button
              key={r}
              onClick={() => setInput(r)}
              className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold whitespace-nowrap hover:bg-primary/20 transition-colors flex-shrink-0"
            >
              {r}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="px-4 py-4 bg-surface-container-lowest flex items-center gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message ${active.name}…`}
            className="flex-1 bg-surface-container px-4 py-3 rounded-2xl text-sm text-on-surface placeholder:text-outline outline-none focus:ring-2 focus:ring-primary/30 transition-all"
          />
          <button className="w-11 h-11 bg-primary text-on-primary rounded-2xl flex items-center justify-center hover:opacity-90 transition-opacity flex-shrink-0">
            <span className="material-symbols-outlined text-base">send</span>
          </button>
        </div>
      </div>
    </div>
  );
}
