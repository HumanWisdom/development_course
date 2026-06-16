import { marked } from 'marked';

marked.setOptions({
  gfm: true,
  breaks: true,
  headerIds: false,
  mangle: false
});

/**
 * Renders accumulated chat markdown to HTML.
 * Backend may inject raw HTML (e.g. thumbnail <a>/<img> tags) inline with markdown tokens.
 */
export function renderChatMarkdown(markdown: string): string {
  if (!markdown) {
    return '';
  }

  return marked.parse(markdown, { async: false }) as string;
}
