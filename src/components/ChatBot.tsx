"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// --- FAQ DATA ---
const FAQS = [
    {
        question: "What dental implants do you offer?",
        answer: "We offer Grade 5 Titanium implants with SLA micro-surface texturing in diameters from 3.5mm to 5.0mm. All implants are ISO 13485 certified and FDA approved. Visit our Products page for full specifications."
    },
    {
        question: "How do I register for a workshop?",
        answer: "Head to our Training & Workshops page, pick a course, and click 'Register Now'. You'll fill out a quick form with your details and DCI number. Payment is processed securely via Razorpay."
    },
    {
        question: "What are your bone graft materials?",
        answer: "Our synthetic bone graft is a β-TCP + Hydroxyapatite (60:40) blend. It's osteoconductive, gamma-irradiated for sterility, and resorbs in 4-6 months. Available in 0.25g to 2.0g vials."
    },
    {
        question: "How can I request a mobile dental camp?",
        answer: "Go to our Mobile Dental Clinic page and click 'Request a Camp in Your Area'. Fill in your organization details, expected patient count, and preferred dates. Our outreach team responds within 48 hours."
    },
    {
        question: "Where are you located?",
        answer: "Our headquarters is at Connaught Place, New Delhi, Delhi 110001, India. You can view our location on the Contact Us page with an interactive map. Call us at +91 91988 46529."
    },
    {
        question: "Do you ship products internationally?",
        answer: "Yes! We serve dental practitioners worldwide. For international orders, please contact our sales team via the Contact Us page or WhatsApp at +91 91988 46529 for shipping quotes."
    },
];

type Message = {
    id: number;
    text: string;
    sender: "bot" | "user";
};

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Hi! 👋 I'm the Kindway BioReZens assistant. How can I help you today? Choose a question below or type your own.",
            sender: "bot",
        },
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const addBotReply = (text: string) => {
        setIsTyping(true);
        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                { id: Date.now(), text, sender: "bot" },
            ]);
            setIsTyping(false);
        }, 800); // Simulates typing delay
    };

    const handleFaqClick = (faq: typeof FAQS[0]) => {
        // Add user question
        setMessages((prev) => [
            ...prev,
            { id: Date.now(), text: faq.question, sender: "user" },
        ]);
        // Add bot answer after delay
        addBotReply(faq.answer);
    };

    const handleSend = () => {
        if (!inputValue.trim()) return;
        const userMsg = inputValue.trim();
        setMessages((prev) => [
            ...prev,
            { id: Date.now(), text: userMsg, sender: "user" },
        ]);
        setInputValue("");

        // Try to match with FAQ
        const match = FAQS.find((f) =>
            f.question.toLowerCase().includes(userMsg.toLowerCase()) ||
            userMsg.toLowerCase().includes(f.question.toLowerCase().split(" ").slice(0, 3).join(" "))
        );

        if (match) {
            addBotReply(match.answer);
        } else {
            addBotReply(
                "Thank you for your question! Our team will get back to you shortly. For immediate assistance, you can also reach us at +91 91988 46529 or via WhatsApp."
            );
        }
    };

    return (
        <>
            {/* CHAT WINDOW */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 z-50 w-[370px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-8rem)] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4">
                    {/* Header */}
                    <div className="bg-teal-600 text-white p-4 flex items-center justify-between shrink-0">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center">
                                <Bot size={22} />
                            </div>
                            <div>
                                <h3 className="font-bold text-sm">Kindway Assistant</h3>
                                <p className="text-xs text-teal-100">Online • Answers instantly</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                            <X size={20} />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex gap-2 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                            >
                                {msg.sender === "bot" && (
                                    <div className="h-7 w-7 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center shrink-0 mt-1">
                                        <Bot size={14} />
                                    </div>
                                )}
                                <div
                                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${msg.sender === "user"
                                            ? "bg-teal-600 text-white rounded-br-md"
                                            : "bg-white text-slate-700 shadow-sm border border-slate-100 rounded-bl-md"
                                        }`}
                                >
                                    {msg.text}
                                </div>
                                {msg.sender === "user" && (
                                    <div className="h-7 w-7 bg-slate-200 text-slate-600 rounded-full flex items-center justify-center shrink-0 mt-1">
                                        <User size={14} />
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Typing indicator */}
                        {isTyping && (
                            <div className="flex gap-2 items-center">
                                <div className="h-7 w-7 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center shrink-0">
                                    <Bot size={14} />
                                </div>
                                <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-md shadow-sm border border-slate-100">
                                    <div className="flex gap-1">
                                        <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                        <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                        <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                                    </div>
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick FAQ Buttons */}
                    <div className="p-3 border-t border-slate-100 bg-white shrink-0">
                        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                            {FAQS.slice(0, 4).map((faq, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleFaqClick(faq)}
                                    className="text-xs bg-teal-50 text-teal-700 px-3 py-1.5 rounded-full whitespace-nowrap hover:bg-teal-100 transition-colors border border-teal-100 shrink-0"
                                >
                                    {faq.question.length > 30 ? faq.question.slice(0, 30) + "..." : faq.question}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Input */}
                    <div className="p-3 border-t border-slate-100 bg-white flex gap-2 shrink-0">
                        <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                            placeholder="Type your question..."
                            className="text-sm"
                        />
                        <Button
                            size="icon"
                            className="bg-teal-600 hover:bg-teal-700 shrink-0"
                            onClick={handleSend}
                        >
                            <Send size={16} />
                        </Button>
                    </div>
                </div>
            )}

            {/* FLOATING TRIGGER BUTTON */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-teal-600 text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform hover:bg-teal-700"
                aria-label="Chat with us"
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
            </button>
        </>
    );
}
