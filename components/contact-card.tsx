import Link from 'next/link';
import { Mail } from 'lucide-react';
import { contact } from '@/content/site';

export function ContactCard() {
  return (
    <section id="contact" className="rounded-3xl border border-border/60 bg-gradient-to-br from-accent/15 via-card to-card/80 p-8 shadow-soft">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">Contact</p>
        <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">{contact.headline}</h2>
        <p className="max-w-xl text-base text-muted-foreground">{contact.description}</p>
        <Link
          href={`mailto:${contact.email}`}
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:bg-foreground/90"
        >
          <Mail className="h-4 w-4" aria-hidden />
          {contact.email}
        </Link>
      </div>
    </section>
  );
}
