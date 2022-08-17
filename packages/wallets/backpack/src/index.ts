import { WalletsWindow } from '@wallet-standard/standard';
import type { BackpackSolanaWalletAccount } from './wallet';
import { BackpackSolanaWallet } from './wallet';

declare const window: WalletsWindow<BackpackSolanaWalletAccount>;

export function register(): void {
    window.navigator.wallets = window.navigator.wallets || [];
    window.navigator.wallets.push({
        method: 'register',
        wallets: [new BackpackSolanaWallet()],
        callback() {},
    });
}