import { TData, TEntry } from './interfaces';

export interface INode {
  data: TData;
  next?: TEntry;
}
