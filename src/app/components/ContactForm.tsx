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
          to: "contato@wonetwork.com.br", // E-mail da empresa
          subject: `Contato de ${formData.name}`, // Assunto do e-mail
          text: `Telefone para contato: ${formData.phone}\nMensagem: ${formData.message}`,
          email: formData.email
        }),
      });

      if (res.ok) {
        setStatus('Mensagem enviada com sucesso!');
        setFormData({ name: '', email: '', phone: '', message: '' }); // Limpar formulário
      } else {
        setStatus('Erro ao enviar a mensagem. Tente novamente.');
      }
    } catch (error) {
      setStatus('Erro ao enviar a mensagem. Tente novamente.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8 space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nome</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="mt-1 block w-full p-2 border rounded-lg text-gray-700"
          placeholder="Seu nome"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="mt-1 block w-full p-2 border rounded-lg text-gray-700"
          placeholder="Seu email"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Telefone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="mt-1 block w-full p-2 border rounded-lg text-gray-700"
          placeholder="Seu telefone"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Mensagem</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          className="mt-1 block w-full p-2 border rounded-lg text-gray-700"
          rows={4}
          placeholder="Escreva sua mensagem"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        Enviar
      </button>
      {status && (
        <p
          className={`mt-4 text-center text-sm ${status.includes('sucesso')
              ? 'text-green-600'
              : 'text-red-600'
            }`}
        >
          {status}
        </p>
      )}
    </form>
  );
};

export default ContactForm;