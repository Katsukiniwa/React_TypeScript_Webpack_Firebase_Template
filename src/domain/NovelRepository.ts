import { Novel } from './Novel';

export interface NovelRepository {
  // eslint-disable-next-line no-unused-vars
  store(novel: Novel): void
}
