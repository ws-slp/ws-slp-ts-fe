import {LibraryItem, Hardware, Book, DVD, Controller} from '~/models/models';

export const mockGetAllLibraryItems: Array<
  LibraryItem | Hardware | Book | DVD | Controller
> = [
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
    inventory_id: 5,
    created_at: new Date(),
    updated_at: new Date(),
    name: 'IK Multimedia iRig',
    quantity: 1,
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUm6pf5a6ovHD0bA2ghMhZ01Iw4oreF8sB514RWR1bI-9I0tvyhqFbY8kaKukrnmIToRg&usqp=CAU',
    availability: 'in stock',
    tags: ['controller', 'keyboard'],
    description:
      'IK Multimedia/s iRig Keys I/O combines a 25-key MIDI controller with an integrated audio interface to give you an all-in-one music production workstation that you can take anywhere. Compatible with iPhone, iPad, and Mac, it offers a full range of professional features, but keeps your setup clean and simple to help you focus on the music.',
    accessories: null,
    input_type: null,
    output_type: null,
  },
  {
    inventory_id: 6,
    created_at: new Date(),
    updated_at: new Date(),
    name: 'The Synthesizer',
    quantity: 1,
    image_url:
      'https://images-na.ssl-images-amazon.com/images/I/91E1s-Qq56L.jpg',
    availability: 'in stock',
    tags: ['book', 'synth'],
    description:
      'The Roland Company, founded in 1972, was one of the earliest manufacturers of music synthesizers, and has shaped electronic music immeasurably.',
    accessories: null,
    author: 'Roland',
    publish_date: new Date(),
    publisher: 'Roland',
    product_code: 'sadna8h310fna1',
  },
  {
    inventory_id: 8,
    created_at: new Date(),
    updated_at: new Date(),
    name: 'HD 450BT',
    quantity: 1,
    image_url:
      'https://cdn.shopify.com/s/files/1/1642/2999/products/HD450BTbw_1000x.jpg?v=1648311957',
    availability: 'in stock',
    tags: ['Head Phone', 'wireless'],
    description:
      'Step up to great wireless sound with the new HD 450BT. Delivering active noise cancellation, high-quality wireless codec support and Bluetooth® 5.0',
    accessories: null,
    manufacturer: 'sennheiser',
    model: 'HD 450 BT',
    weight: null,
  },
];

export const mockSearchLibraryItemsByName: Array<
  LibraryItem | Hardware | Book | DVD | Controller
> = [
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
    inventory_id: 5,
    created_at: new Date(),
    updated_at: new Date(),
    name: 'IK Multimedia iRig',
    quantity: 1,
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUm6pf5a6ovHD0bA2ghMhZ01Iw4oreF8sB514RWR1bI-9I0tvyhqFbY8kaKukrnmIToRg&usqp=CAU',
    availability: 'in stock',
    tags: ['controller', 'keyboard'],
    description:
      'IK Multimedia/s iRig Keys I/O combines a 25-key MIDI controller with an integrated audio interface to give you an all-in-one music production workstation that you can take anywhere. Compatible with iPhone, iPad, and Mac, it offers a full range of professional features, but keeps your setup clean and simple to help you focus on the music.',
    accessories: null,
    input_type: null,
    output_type: null,
  },
  {
    inventory_id: 6,
    created_at: new Date(),
    updated_at: new Date(),
    name: 'The Synthesizer',
    quantity: 1,
    image_url:
      'https://images-na.ssl-images-amazon.com/images/I/91E1s-Qq56L.jpg',
    availability: 'in stock',
    tags: ['book', 'synth'],
    description:
      'The Roland Company, founded in 1972, was one of the earliest manufacturers of music synthesizers, and has shaped electronic music immeasurably.',
    accessories: null,
    author: 'Roland',
    publish_date: new Date(),
    publisher: 'Roland',
    product_code: 'sadna8h310fna1',
  },
];

export const mockSearchLibraryItemsByTags: Array<
  LibraryItem | Hardware | Book | DVD | Controller
> = [
  {
    inventory_id: 6,
    created_at: new Date(),
    updated_at: new Date(),
    name: 'The Synthesizer',
    quantity: 1,
    image_url:
      'https://images-na.ssl-images-amazon.com/images/I/91E1s-Qq56L.jpg',
    availability: 'in stock',
    tags: ['book', 'synth'],
    description:
      'The Roland Company, founded in 1972, was one of the earliest manufacturers of music synthesizers, and has shaped electronic music immeasurably.',
    accessories: null,
    author: 'Roland',
    publish_date: new Date(),
    publisher: 'Roland',
    product_code: 'sadna8h310fna1',
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

export const mockSearchLibraryItemsByCategory: Array<
  LibraryItem | Hardware | Book | DVD | Controller
> = [
  {
    inventory_id: 6,
    created_at: new Date(),
    updated_at: new Date(),
    name: 'The Synthesizer',
    quantity: 1,
    image_url:
      'https://images-na.ssl-images-amazon.com/images/I/91E1s-Qq56L.jpg',
    availability: 'in stock',
    tags: ['book', 'synth'],
    description:
      'The Roland Company, founded in 1972, was one of the earliest manufacturers of music synthesizers, and has shaped electronic music immeasurably.',
    accessories: null,
    author: 'Roland',
    publish_date: new Date(),
    publisher: 'Roland',
    product_code: 'sadna8h310fna1',
  },
];

export const mockSearchLibraryItemsByAvailability: Array<
  LibraryItem | Hardware | Book | DVD | Controller
> = [
  {
    inventory_id: 6,
    created_at: new Date(),
    updated_at: new Date(),
    name: 'The Synthesizer',
    quantity: 1,
    image_url:
      'https://images-na.ssl-images-amazon.com/images/I/91E1s-Qq56L.jpg',
    availability: 'in stock',
    tags: ['book', 'synth'],
    description:
      'The Roland Company, founded in 1972, was one of the earliest manufacturers of music synthesizers, and has shaped electronic music immeasurably.',
    accessories: null,
    author: 'Roland',
    publish_date: new Date(),
    publisher: 'Roland',
    product_code: 'sadna8h310fna1',
  },
];

export const mockSearchAllLibraryItems: Array<
  LibraryItem | Hardware | Book | DVD | Controller
> = [
  {
    inventory_id: 2,
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
