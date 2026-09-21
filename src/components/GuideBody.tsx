import { renderMarkdown } from '@/lib/utils/markdown';

// Rend le corps d'un guide (markdown écrit à neuf) en HTML.
// Même approche que les reviews : contenu stocké en markdown, rendu via marked,
// stylé par la classe .review-body déjà définie dans globals.css.
export default function GuideBody({ markdown }: { markdown: string }) {
  return (
    <section
      className="review-body"
      style={{ margin: '28px 0' }}
      dangerouslySetInnerHTML={{ __html: renderMarkdown(markdown) }}
    />
  );
}
