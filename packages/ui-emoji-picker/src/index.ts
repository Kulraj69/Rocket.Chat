import { lazy } from 'react';

export const EmojiPicker = lazy(() => import('./EmojiPicker'));
export type { EmojiPickerProps } from './EmojiPicker/EmojiPicker';

export { default as EmojiElement } from './EmojiPicker/EmojiElement';
export { EmojiPickerContext, useEmojiPicker, usePreviewEmoji, useEmojiPickerData } from './contexts/EmojiPickerContext';
export * from './lib/emoji';
export type * from './lib/types';
