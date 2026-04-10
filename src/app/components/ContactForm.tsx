'use client';
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Enviando...');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: "contato@wonetwork.com.br",
          subject: `Contato de ${formData.name}`,
          text: `Telefone para contato: ${formData.phone}\nMensagem: ${formData.message}`,
          email: formData.email
        }),
      });

      if (res.ok) {
        setStatus('Mensagem enviada com sucesso!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('Erro ao enviar a mensagem. Tente novamente.');
      }
    } catch (error) {
      setStatus('Erro ao enviar a mensagem. Tente novamente.');
    }
  };

  const inputClasses = "mt-1 block w-full p-3 border border-[var(--border)] rounded-lg bg-surface text-text-primary placeholder-text-secondary/50 focus:ring-2 focus:ring-brand focus:border-brand focus:outline-none transition-colors";

  return (
    <div className="container mx-auto">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-brand font-medium text-sm uppercase tracking-wider mb-3">Entre em contato</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary">
            Contato
          </h2>
        </div>
        <div className="bg-surface rounded-2xl shadow-lg dark:shadow-slate-900/50 border border-[var(--border)] p-8 sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">Nome</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={inputClasses}
                placeholder="Seu nome"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={inputClasses}
                placeholder="Seu email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">Telefone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={inputClasses}
                placeholder="Seu telefone"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">Mensagem</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={inputClasses}
                rows={4}
                placeholder="Escreva sua mensagem"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-brand text-gray-900 font-semibold py-3.5 rounded-lg hover:bg-brand-dark transition duration-300"
            >
              Enviar
            </button>
            {status && (
              <p
                className={`text-center text-sm ${status.includes('sucesso')
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-red-600 dark:text-red-400'
                  }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
