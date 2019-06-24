import { TData, TEntry } from './interfaces';
import { TEntry } from './types';

export interface INode {
  data: TData;
  next?: TEntry;
  left?: TEntry;
  right?: TEntry;
}
