// Convertisseur markdown minimal, sans dépendance externe.
// Gère ce qu'on utilise dans les reviews et guides : titres ##, gras **,
// listes à puces -, tableaux |...|, italiques *, et paragraphes.
// Volontairement simple et robuste — pas de lib tierce à installer.

function inline(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*]+)\*(?!\*)/g, '$1<em>$2</em>');
}

export function renderMarkdown(md: string): string {
  const lines = md.replace(/\r\n/g, '\n').split('\n');
  const out: string[] = [];
  let i = 0;

  const flushParagraph = (buf: string[]) => {
    if (buf.length) {
      out.push(`<p>${inline(buf.join(' '))}</p>`);
      buf.length = 0;
    }
  };

  const para: string[] = [];

  while (i < lines.length) {
    const line = lines[i];

    // ligne vide
    if (!line.trim()) { flushParagraph(para); i++; continue; }

    // séparateur ---
    if (/^---+$/.test(line.trim())) { flushParagraph(para); out.push('<hr />'); i++; continue; }

    // titres ## / ###
    const h = line.match(/^(#{2,3})\s+(.*)$/);
    if (h) {
      flushParagraph(para);
      const level = h[1].length;
      out.push(`<h${level}>${inline(h[2])}</h${level}>`);
      i++; continue;
    }

    // tableau : ligne | ... | suivie d'une ligne de séparation |---|
    if (line.trim().startsWith('|') && i + 1 < lines.length && /^\s*\|[\s:|-]+\|\s*$/.test(lines[i + 1])) {
      flushParagraph(para);
      const header = line.split('|').slice(1, -1).map((c) => c.trim());
      i += 2; // saute l'en-tête et le séparateur
      const bodyRows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        bodyRows.push(lines[i].split('|').slice(1, -1).map((c) => c.trim()));
        i++;
      }
      let t = '<table><thead><tr>';
      t += header.map((c) => `<th>${inline(c)}</th>`).join('');
      t += '</tr></thead><tbody>';
      for (const row of bodyRows) {
        t += '<tr>' + row.map((c) => `<td>${inline(c)}</td>`).join('') + '</tr>';
      }
      t += '</tbody></table>';
      out.push(t);
      continue;
    }

    // listes à puces
    if (/^-\s+/.test(line.trim())) {
      flushParagraph(para);
      const items: string[] = [];
      while (i < lines.length && /^-\s+/.test(lines[i].trim())) {
        items.push(`<li>${inline(lines[i].trim().replace(/^-\s+/, ''))}</li>`);
        i++;
      }
      out.push(`<ul>${items.join('')}</ul>`);
      continue;
    }

    // paragraphe (accumulation)
    para.push(line.trim());
    i++;
  }
  flushParagraph(para);
  return out.join('\n');
}
