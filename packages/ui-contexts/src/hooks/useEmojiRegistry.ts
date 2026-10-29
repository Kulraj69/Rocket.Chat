import { useContext } from 'react';

import type { EmojiRegistryContextValue } from '../EmojiRegistryContext';
import { EmojiRegistryContext } from '../EmojiRegistryContext';

export const useEmojiRegistry = (): EmojiRegistryContextValue => useContext(EmojiRegistryContext);
