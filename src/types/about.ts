export interface Minister {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
}

export interface AboutSubtitles {
  ministers: string;
  history: string;
  contacts: string;
}

export interface HistoryEvent {
  year: string;
  description: string;
}
