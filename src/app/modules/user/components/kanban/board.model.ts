export interface Board {
  columns: Column[];
  cards: Card[];
}

export interface Column {
  id: number;
  title: string;
  cards: number[];
}

export interface Card {
  id: number;
  title: string;
  description: string;
}
