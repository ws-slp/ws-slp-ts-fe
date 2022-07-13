export interface LibraryItem {
  readonly inventory_id: number;
  readonly created_at?: Date;
  readonly updated_at?: Date;
  readonly name: string;
  readonly quantity: number;
  readonly image_url: string | null;
  readonly availability: 'in stock' | 'out of stock' | 'over due';
  readonly tags: string[] | null;
  readonly description: string | null;
  readonly accessories: string[] | null;
}

export interface Hardware extends LibraryItem {
  readonly manufacturer: string | null;
  readonly model: string | null;
  readonly weight: number | null;
}

export interface Controller extends Hardware {
  readonly input_type: string[] | null;
  readonly output_type: string[] | null;
}

export type Modular = Hardware;

export type SemiModular = Hardware;

export type KeyBoard = Hardware;

export type Pedals = Hardware;

export interface Book extends LibraryItem {
  readonly author: string | null;
  readonly publish_date: Date | null;
  readonly publisher: string | null;
  readonly product_code: string | null;
}
export interface DVD extends LibraryItem {
  readonly release_date: Date | null;
  readonly duration: number | null;
  readonly cast: string[] | null;
}
