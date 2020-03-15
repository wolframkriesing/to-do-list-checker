type TodoItems = {
    version: string,
    items: string[]
}

export const LINE_START_FOR_TODO: string;
export function parseChangelog(content: string): TodoItems;
