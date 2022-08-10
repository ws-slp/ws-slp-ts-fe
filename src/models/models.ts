enum Status {
  Available = 'available for checkout',
  InStorage = 'in storage',
  NeedsRepair = 'needs repair',
}

export interface LibraryItem {
  readonly inventory_id: string;
  readonly item_status: Status[];
  readonly created_at: Date;
  readonly updated_at: Date;
  readonly name: string;
  readonly quantity: number;
  readonly image_url?: string | null;
  readonly tags?: string[] | null;
  readonly description?: string | null;
  readonly accessories?: string[] | null;
}

export interface Hardware extends LibraryItem {
  readonly hardware_id: string;
  readonly manufacturer?: string | null;
  readonly model?: string | null;
  readonly weight?: number | null;
}

export type Controller = Hardware;

export type Modular = Hardware;

export type SemiModular = Hardware;

export type KeyBoard = Hardware;

export type Pedals = Hardware;

export interface Book extends LibraryItem {
  readonly book_id: string;
  readonly author?: string | null;
  readonly publisher?: string | null;
  readonly product_code?: string | null;
}
export interface Films extends LibraryItem {
  readonly film_id: string;
  readonly release_date?: Date | null;
  readonly duration_in_minutes?: number | null;
  readonly actors?: string[] | null;
}
