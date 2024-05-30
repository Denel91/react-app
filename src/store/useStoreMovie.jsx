import { create } from "zustand";

const useStoreMovie = create((set) => ({
  favoriti: [],
  addFavoriti: (movie) =>
    set((state) => ({
      favoriti: [...state.favoriti, movie],
    })),
}));

export default useStoreMovie;
