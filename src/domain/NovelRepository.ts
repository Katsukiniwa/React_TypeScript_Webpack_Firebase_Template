import { Novel } from './Novel';

export interface NovelRepository {
  store(novel: Novel): void
}
