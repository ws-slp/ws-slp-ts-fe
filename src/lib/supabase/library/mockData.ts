import {LibraryItem, Hardware, Book, DVD, Controller} from '~/models/models';

export const mockGetAllLibraryItems:
  | LibraryItem[]
  | Hardware[]
  | Book[]
  | DVD[]
  | Controller[] = [
  {
    inventory_id: 1,
    created_at: new Date(),
    updated_at: new Date(),
    name: 'Digitakt',
    quantity: 1,
    image_url:
      'https://cdn.mos.cms.futurecdn.net/aB3Zb7FFmvAzKnE25rPiYV-1200-80.jpg.webp',
    availability: 'in stock',
    tags: ['drum machine', 'synth'],
    description:
      'this is super cool sampler that work as a synth and drum machine. very power full',
    accessories: null,
    manufacturer: 'electron',
    model: 'Digitakt',
    weight: 1.5,
  },
  {
    inventory_id: 1,
    created_at: new Date(),
    updated_at: new Date(),
    name: 'Digitakt',
    quantity: 1,
    image_url:
      'https://cdn.mos.cms.futurecdn.net/aB3Zb7FFmvAzKnE25rPiYV-1200-80.jpg.webp',
    availability: 'in stock',
    tags: ['drum machine', 'synth'],
    description:
      'this is super cool sampler that work as a synth and drum machine. very power full',
    accessories: null,
    manufacturer: 'electron',
    model: 'Digitakt',
    weight: 1.5,
  },
  {
    inventory_id: 1,
    created_at: new Date(),
    updated_at: new Date(),
    name: 'Digitakt',
    quantity: 1,
    image_url:
      'https://cdn.mos.cms.futurecdn.net/aB3Zb7FFmvAzKnE25rPiYV-1200-80.jpg.webp',
    availability: 'in stock',
    tags: ['drum machine', 'synth'],
    description:
      'this is super cool sampler that work as a synth and drum machine. very power full',
    accessories: null,
    manufacturer: 'electron',
    model: 'Digitakt',
    weight: 1.5,
  },
];
