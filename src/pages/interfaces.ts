export interface CardStack {
  cards: number[];
  stackId: number;
  topValue: number;
}

export interface Player {
  playerName: string;
  playerScore: number;
}

export interface PlayerCard {
  heads: number;
  value: number;
}