  export interface ComponentProps {
    title: string;
    data: Record<string, unknown>;            // Or a more specific type
    onClick: () => void;                      // If it's a function
  }
  