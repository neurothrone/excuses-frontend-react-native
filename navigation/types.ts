import { Excuse } from "../models/excuse";

export type RootStackParamList = {
  Home: undefined;
  AddExcuse: undefined;
  ExcuseDetail: {
    excuse: Excuse
  };
};
