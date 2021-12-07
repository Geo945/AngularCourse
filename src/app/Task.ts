//create interface
export interface Task{
  id?: number; // "?" so the id is optional
  text: string;
  day: string;
  reminder: boolean;
}
