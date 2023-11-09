export interface ActionProps {
  spin: boolean;
  onSpin: () => void;
}

export interface Selectors {
  parkIncludeDisney: boolean;
  onToggleParkDisney: () => void;

  parkIncludeDCA: boolean;
  onToggleParkDCA: () => void;

  parkIncludeDTD: boolean;
  onToggleParkDTD: () => void;

  typeIncludeRides: boolean;
  onToggleTypeRides: () => void;

  typeIncludeShows: boolean;
  onToggleTypeShows: () => void;

  typeIncludeMeetGreet: boolean;
  onToggleTypeMeetGreet: () => void;

  typeIncludeQuickEat: boolean;
  onToggleTypeQuickEat: () => void;

  typeIncludeSitEat: boolean;
  onToggleTypeSitEat: () => void;
}
