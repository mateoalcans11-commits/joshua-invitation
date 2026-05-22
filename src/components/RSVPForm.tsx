"use client";

import { FormEvent, useState } from "react";
import { sectionIds } from "@/lib/event-info";
import { CardCowCorners, CowDecorations } from "./CowDecorations";

type RSVPFormProps = {
  onSubmit: (name: string) => Promise<void>;
  disabled?: boolean;
};

export function RSVPForm({ onSubmit, disabled = false }: RSVPFormProps) {
  const [name, setName] = useState("");
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed || submitting) return;

    setSubmitting(true);
    try {
      await onSubmit(trimmed);
      setSuccess(true);
      setName("");
      setTimeout(() => setSuccess(false), 5000);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id={sectionIds.confirmar}
      tabIndex={-1}
      className="scroll-mt-6 animate-fade-in-up relative px-4 py-10 outline-none sm:px-5 sm:py-12"
      aria-labelledby="confirmar-heading"
    >
      <div className="relative mx-auto max-w-md">
        <CowDecorations variant="section" />
        <h2
          id="confirmar-heading"
          className="font-display text-center text-[1.5rem] font-bold leading-tight text-cow-brown sm:text-2xl"
        >
          Confirma tu asistencia
        </h2>
        <p className="mt-2 text-center text-[15px] text-cow-brown/60">
          Cuéntanos si vendrás a celebrar con nosotros
        </p>

        <form
          onSubmit={handleSubmit}
          className="relative mt-6 overflow-hidden rounded-3xl bg-white/90 p-4 shadow-card ring-1 ring-rose-100/50 backdrop-blur-md sm:mt-8 sm:p-6"
        >
          <CardCowCorners />
          <label htmlFor="guest-name" className="mb-2 block text-[15px] font-bold text-cow-brown/70">
            Escribe tu nombre
          </label>
          <input
            id="guest-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre aquí"
            disabled={disabled || submitting}
            enterKeyHint="done"
            className="input-mobile touch-target-text w-full rounded-2xl border border-beige-dark/50 bg-cream/50 px-4 py-4 text-cow-brown placeholder:text-cow-brown/40 outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-200/60 disabled:opacity-60"
            autoComplete="name"
            autoCapitalize="words"
            autoCorrect="off"
            maxLength={80}
          />

          <button
            type="submit"
            disabled={disabled || submitting || !name.trim()}
            className="btn-mobile touch-target mt-4 w-full rounded-2xl bg-gradient-to-r from-sky-400 to-sky-500 px-6 text-[1.0625rem] font-bold text-white shadow-soft transition active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {submitting ? "Enviando…" : "Sí, voy a ir 🎉"}
          </button>

          {success && (
            <p
              role="status"
              className="animate-fade-in-up mt-4 rounded-2xl bg-sky-50 px-4 py-3.5 text-center text-[15px] font-semibold leading-snug text-sky-800"
            >
              ¡Gracias! Te esperamos con muuucha alegría 🐄
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
