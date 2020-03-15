export const LINE_START_FOR_NEW_VERSION = '# version ';
export const LINE_START_FOR_TODO = '- [ ]';

/**
 * @param {string} content
 * @returns {string[]}
 */
const todoItems = (content) => {
  /**
   * @param {string} line
   * @returns {string}
   */
  const todoItem = (line) => {
    const startsAt = line.indexOf(LINE_START_FOR_TODO) + LINE_START_FOR_TODO.length + 1;
    return line.substr(startsAt);
  };
  return content
    .split('\n')
    .filter(line => line.trim().startsWith(LINE_START_FOR_TODO))
    .map(todoItem)
  ;
};

/**
 * @param {string} changelogContent
 * @returns {{version: number, items: string[]}}
 */
export const parseChangelog = (changelogContent) => {
  const hasContent = !!changelogContent.trim();
  if (!hasContent) {
    return { version: -1, items: [] };
  }
  if (!changelogContent.includes(LINE_START_FOR_NEW_VERSION)) {
    return { version: -1, items: [] };
  }
  const versions = changelogContent.split(LINE_START_FOR_NEW_VERSION);
  const firstVersionParagraph = versions[1];
  const version = Number.parseInt(firstVersionParagraph.split('\n')[0], 10);
  return { version, items: todoItems(firstVersionParagraph) };
};
