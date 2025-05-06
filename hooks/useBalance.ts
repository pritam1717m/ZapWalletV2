import { useAtomValue } from "jotai"
import { balanceAtom } from "@/store/atom/balance";

export const useBalance = () => {
    const value = useAtomValue(balanceAtom);
    return value;
}