"use client";
// Altiora AI - MVP Website (React + ShadCN + Tailwind)
// By Jeshu | Goal: Ultra-wealthy, AI-powered empire

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const [formState, setFormState] = useState("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/xovwjrpb", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setFormState("success");
      form.reset();
    } else {
      setFormState("error");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10 font-sans">
      {/* Hero Section */}
      <section className="text-center space-y-4 mb-20">
        <h1 className="text-4xl md:text-6xl font-bold text-violet-400">AI Agents. Zero Employees. Infinite Scale.</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Altiora AI builds custom AI agents that automate outreach, support, content, and backend workflows.
          Grow faster without hiring. Built for solo founders and modern startups.
        </p>
        <p className="italic text-sm text-gray-400"> Elite Intelligence. Majestic Solutions. </p>
        <div className="flex justify-center gap-4 mt-6">
          <Button className="bg-violet-500 hover:bg-violet-600">Build My Stack</Button>
          <Button variant="outline" className="border-violet-500 text-violet-400 hover:bg-violet-800">Book a Demo</Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {[
          { title: "AI Outreach Agents", desc: "Cold emails, LinkedIn DMs, and lead nurturing – fully automated." },
          { title: "Support Bots", desc: "24/7 chatbots trained in your voice and product." },
          { title: "Workflow Automation", desc: "Invoices, CRMs, and admin – done by AI." },
          { title: "Content Creation", desc: "AI-written blogs, images, reels & more." },
        ].map((service, i) => (
          <Card key={i} className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-6 space-y-2">
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="text-sm text-gray-400">{service.desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* How It Works Section */}
      <section className="text-center space-y-10 mb-20">
        <h2 className="text-3xl font-bold text-violet-400">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Tell us your workflow", "We build your AI stack", "You scale on autopilot"].map((step, i) => (
            <Card key={i} className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <p className="text-lg font-medium text-white">Step {i + 1}</p>
                <p className="text-gray-400 mt-2">{step}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Altiora Section */}
      <section className="text-center mb-20">
        <h2 className="text-3xl font-bold text-violet-400 mb-6">Why Altiora?</h2>
        <ul className="space-y-2 text-gray-300">
          <li>⚡ Save 100+ hours monthly</li>
          <li>💰 90% cheaper than hiring a team</li>
          <li>🤖 Built with GPT, Claude, Midjourney, and Langchain</li>
          <li>🔐 Your data, your rules. No third-party fluff</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="text-center mb-20">
        <h2 className="text-3xl font-bold text-violet-400 mb-4">Contact Us</h2>
        <p className="text-gray-300 mb-4">Have a project in mind or want a custom AI stack built for you?</p>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
          <input type="email" name="email" required placeholder="Your email" className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white" />
          <textarea name="message" required placeholder="Your message" className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white" rows={4}></textarea>
          <Button type="submit" className="bg-violet-500 hover:bg-violet-600">Send Message</Button>
          {formState === "success" && <p className="text-green-400">Message sent successfully!</p>}
          {formState === "error" && <p className="text-red-400">Something went wrong. Try again.</p>}
        </form>
        <div className="mt-4">
          <p className="text-white font-medium">📩 Email: <a href="mailto:altioraai@protonmail.com" className="text-violet-400 underline">altioraai@protonmail.com</a></p>
          <p className="text-white font-medium">🌐 Instagram: <a href="https://instagram.com/altiora.ai" className="text-violet-400 underline" target="_blank">@altiora.ai</a></p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-white">Let AI run your backend while you focus on your vision.</h2>
        <Button className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2">Launch Altiora</Button>
      </section>

      {/* Footer */}
      <footer className="text-center mt-20 text-gray-500 text-sm">
        <p>© 2025 Altiora AI. Built by Jeshu.</p>
        <p>Contact: altioraai@protonmail.com</p>
      </footer>
    </div>
  );
}
