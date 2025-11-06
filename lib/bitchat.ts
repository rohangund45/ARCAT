import { Alert } from "@/lib/storage";
import { getLocal, setLocal, StorageKeys } from "@/lib/storage";

export type BitChatMessage = { id: string; fromFarmerId: string; alert: Alert; timestamp: string };

export function getBitChatQueue(): BitChatMessage[] {
  return getLocal<BitChatMessage[]>(StorageKeys.bitchat, []);
}

export function pushBitChat(msg: BitChatMessage) {
  const q = getBitChatQueue();
  q.push(msg);
  setLocal(StorageKeys.bitchat, q);
}

export function consumeBitChat(forFarmerId: string): BitChatMessage[] {
  const q = getBitChatQueue();
  const mine = q.filter((m) => m.fromFarmerId !== forFarmerId);
  // For simplicity: consume all not from me, keep only from me
  const keep = q.filter((m) => m.fromFarmerId === forFarmerId);
  setLocal(StorageKeys.bitchat, keep);
  return mine;
}

