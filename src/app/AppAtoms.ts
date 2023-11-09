import { atom } from "jotai";
import { ObjectGraph } from "../arch/ObjectGraph";
import { Attraction } from "../pages/roulette/model/Attraction";
import { DarkModePreference } from "./Dark";

export const DarkTheme = atom(DarkModePreference.matches);
export const DefaultObjectGraph = atom<ObjectGraph | undefined>(undefined);
export const ShowSplashScreen = atom(false);
export const AttractionLoading = atom(false);
export const AttractionList = atom<Attraction[]>([]);
export const AttractionLoadError = atom<Error | undefined>(undefined);
