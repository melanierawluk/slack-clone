import { atom, useAtom } from 'jotai'

const modalState = atom(false);

export const useCreateChanneleModal = () => {
    return useAtom(modalState)
}