import {v4 as randomUUID} from 'uuid';
import {TLibraryItems, Status} from '~/models/models';

const mockLibrary = [
  {
    // Hardware
    inventory_id: randomUUID(),
    created_at: new Date(),
    updated_at: new Date(),
    item_status: [Status.IN_STORAGE],
    hardware_id: randomUUID(),
    name: 'Digitakt',
    quantity: 1,
    image_url:
      'https://cdn.mos.cms.futurecdn.net/aB3Zb7FFmvAzKnE25rPiYV-1200-80.jpg.webp',
    tags: ['drum machine', 'synth'],
    description:
      'this is super cool sampler that work as a synth and drum machine. very power full',
    accessories: null,
    manufacturer: 'electron',
    model: 'Digitakt',
    weight: 1.5,
  },
  {
    // Controller
    inventory_id: randomUUID(),
    created_at: new Date(),
    updated_at: new Date(),
    item_status: [Status.IN_STORAGE],
    name: 'IK Multimedia iRig',
    quantity: 1,
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUm6pf5a6ovHD0bA2ghMhZ01Iw4oreF8sB514RWR1bI-9I0tvyhqFbY8kaKukrnmIToRg&usqp=CAU',
    tags: ['controller', 'keyboard'],
    description:
      'IK Multimedia/s iRig Keys I/O combines a 25-key MIDI controller with an integrated audio interface to give you an all-in-one music production workstation that you can take anywhere. Compatible with iPhone, iPad, and Mac, it offers a full range of professional features, but keeps your setup clean and simple to help you focus on the music.',
    accessories: null,
  },
  {
    // Book
    inventory_id: randomUUID(),
    created_at: new Date(),
    updated_at: new Date(),
    item_status: [Status.IN_STORAGE],
    book_id: randomUUID(),
    name: 'The Synthesizer',
    quantity: 1,
    image_url:
      'https://images-na.ssl-images-amazon.com/images/I/91E1s-Qq56L.jpg',
    tags: ['book', 'paperback'],
    description:
      'The Roland Company, founded in 1972, was one of the earliest manufacturers of music synthesizers, and has shaped electronic music immeasurably.',
    accessories: null,
    author: 'Roland',
    publisher: 'Roland',
    product_code: 'sadna8h310fna1',
  },
  {
    // Accessory
    inventory_id: randomUUID(),
    created_at: new Date(),
    updated_at: new Date(),
    item_status: [Status.IN_STORAGE],
    accessory_id: randomUUID(),
    name: 'HD 450BT',
    quantity: 1,
    image_url:
      'https://cdn.shopify.com/s/files/1/1642/2999/products/HD450BTbw_1000x.jpg?v=1648311957',
    tags: ['headphones', 'wireless'],
    description:
      'Step up to great wireless sound with the new HD 450BT. Delivering active noise cancellation, high-quality wireless codec support and Bluetooth® 5.0',
  },
];

export const mockGetAllLibraryItems: Array<TLibraryItems> = mockLibrary;

export const mockSearchLibraryItemsByName: Array<TLibraryItems> = [
  mockLibrary[0],
];

export const mockSearchLibraryItemsByCategory: Array<TLibraryItems> = [
  mockLibrary[1],
];

export const mockSearchLibraryItemsByAvailability: Array<TLibraryItems> = [
  mockLibrary[2],
];

export const mockSearchAllLibraryItems: Array<TLibraryItems> = [mockLibrary[3]];

export const mockSearchLibraryItemsByTags: Array<TLibraryItems> = [
  mockLibrary[1],
  mockLibrary[3],
];
