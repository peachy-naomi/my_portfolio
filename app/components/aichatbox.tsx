'use client';

import React, { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function AIChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm the Peachi DevLab AI Assistant. Ask me anything about Naomi's projects, skills, or experience in AI, frontend and backend development! 👋",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: data.content },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "Sorry, I'm having trouble connecting to the Lab right now. Please try again shortly.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">

      {/* ── Floating Toggle Button ── */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        className="relative w-14 h-14 rounded-full bg-[var(--portfolio-primary-purple)] text-white shadow-xl hover:bg-[var(--portfolio-hover-dark)] hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center"
      >
        {/* Pulse ring — only when closed */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-[var(--portfolio-primary-purple)] animate-ping opacity-30" />
        )}
        <span className="text-xl relative z-10">
          {isOpen ? '✕' : '💬'}
        </span>
      </button>

      {/* ── Chat Window ── */}
      {isOpen && (
        <div
          className="absolute bottom-20 right-0 w-80 md:w-96 h-[520px] bg-[var(--portfolio-bg)] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-[var(--portfolio-surface-soft)]"
          style={{ animation: 'chatIn 0.25s ease' }}
        >

          {/* Header */}
          <div className="bg-[var(--portfolio-primary-purple)] px-5 py-4 flex items-center gap-3 flex-shrink-0">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
              P
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-white text-sm leading-tight">
                Peachi DevLab Assistant
              </h3>
              <p className="text-white/70 text-xs">
                AI Research & Software Engineering
              </p>
            </div>
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-white/70 text-xs">Online</span>
            </div>
          </div>

          {/* Messages Area */}
          <div
            ref={scrollRef}
            className="flex-1 px-4 py-4 overflow-y-auto space-y-4 bg-[var(--portfolio-surface)]"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-end gap-2 ${
                  msg.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {/* Assistant avatar */}
                {msg.role === 'assistant' && (
                  <div className="w-6 h-6 rounded-full bg-[var(--portfolio-primary-purple)] flex items-center justify-center flex-shrink-0 text-white text-xs font-bold mb-0.5">
                    P
                  </div>
                )}

                <div
                  className={`max-w-[78%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-[var(--portfolio-primary-purple)] text-white rounded-br-sm'
                      : 'bg-[var(--portfolio-bg)] text-[var(--portfolio-text)] border border-[var(--portfolio-surface-soft)] rounded-bl-sm shadow-sm'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isLoading && (
              <div className="flex items-end gap-2 justify-start">
                <div className="w-6 h-6 rounded-full bg-[var(--portfolio-primary-purple)] flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
                  P
                </div>
                <div className="bg-[var(--portfolio-bg)] border border-[var(--portfolio-surface-soft)] px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm flex items-center gap-1.5">
                  <span
                    className="w-2 h-2 rounded-full bg-[var(--portfolio-primary-purple)] animate-bounce"
                    style={{ animationDelay: '0ms' }}
                  />
                  <span
                    className="w-2 h-2 rounded-full bg-[var(--portfolio-primary-purple)] animate-bounce"
                    style={{ animationDelay: '150ms' }}
                  />
                  <span
                    className="w-2 h-2 rounded-full bg-[var(--portfolio-primary-purple)] animate-bounce"
                    style={{ animationDelay: '300ms' }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Suggested questions — only before any user reply */}
          {messages.length === 1 && (
            <div className="px-4 pb-3 bg-[var(--portfolio-surface)] flex flex-wrap gap-2 flex-shrink-0">
              {[
                'What are her ML projects?',
                'What is her tech stack?',
                'Tell me about ATOE Group',
              ].map((q) => (
                <button
                  key={q}
                  onClick={() => setInput(q)}
                  className="text-xs px-3 py-1.5 rounded-full border border-[var(--portfolio-primary-purple)]/30 text-[var(--portfolio-primary-purple)] bg-[var(--portfolio-primary-purple)]/5 hover:bg-[var(--portfolio-primary-purple)]/15 transition-colors duration-150"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <form
            onSubmit={handleSubmit}
            className="px-4 py-3 bg-[var(--portfolio-bg)] border-t border-[var(--portfolio-surface-soft)] flex gap-2 items-center flex-shrink-0"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my projects..."
              className="flex-1 px-4 py-2.5 bg-[var(--portfolio-surface)] text-[var(--portfolio-text)] placeholder:text-[var(--portfolio-text-muted)]/50 rounded-xl text-sm outline-none border border-[var(--portfolio-surface-soft)] focus:border-[var(--portfolio-primary-purple)] transition-colors duration-200"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
              className="w-9 h-9 rounded-xl bg-[var(--portfolio-primary-purple)] text-white flex items-center justify-center hover:bg-[var(--portfolio-hover-dark)] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 flex-shrink-0"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </form>

        </div>
      )}

      {/* Animation keyframe */}
      <style>{`
        @keyframes chatIn {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

    </div>
  );
}
