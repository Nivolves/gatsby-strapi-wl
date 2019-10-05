export interface IContext {
  language: string | null;
  setLanguage?: React.Dispatch<React.SetStateAction<string | null>>;
}
