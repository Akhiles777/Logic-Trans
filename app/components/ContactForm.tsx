"use client";

import React, { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Запрос с сайта Express Logistics');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const body = `Имя: ${name}%0AEmail: ${email}%0A%0A${encodeURIComponent(message)}`;
    const mailto = `mailto:pavlov.anatoly@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    // Открываем почтовый клиент
    window.location.href = mailto;
    setTimeout(() => setLoading(false), 500);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full bg-white rounded-2xl p-6 shadow-lg">
      <h4 className="text-xl font-semibold mb-3">Связаться с нами</h4>
      <p className="text-sm text-slate-600 mb-4">Опишите груз и желаемые сроки — мы ответим с планом и примерной стоимостью.</p>

      <label className="block mb-3">
        <span className="text-sm text-slate-700">Имя</span>
        <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300" placeholder="Иван Петров" />
      </label>

      <label className="block mb-3">
        <span className="text-sm text-slate-700">Email</span>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300" placeholder="you@company.com" />
      </label>

      <label className="block mb-3">
        <span className="text-sm text-slate-700">Тема</span>
        <input value={subject} onChange={(e) => setSubject(e.target.value)} className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300" />
      </label>

      <label className="block mb-4">
        <span className="text-sm text-slate-700">Сообщение — опишите груз, размеры, вес, желаемые сроки</span>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300" placeholder="Например: насосы, 3 шт., 120 кг каждая, готово к отправке 05.12" />
      </label>

      <div className="flex items-center gap-3">
        <button type="submit" className="inline-flex items-center gap-2 bg-sky-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-sky-700 transition" disabled={loading}>
          {loading ? 'Открываем почту...' : 'Отправить запрос'}
        </button>
        <a href="tel:+79173555007" className="text-sm text-slate-700">Или позвоните: <span className="font-semibold">+7 (917) 355-50-07</span></a>
      </div>

      <div className="mt-4 text-xs text-slate-500">Ниже — контакты офисов и быстрая справка по услугам.</div>
    </form>
  );
}
