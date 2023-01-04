export interface SelectOption{
    value:string;
    label:string
  }
export interface SelectSpecificProps {
    options: SelectOption[];
    defaultValue:SelectOption;
    searchable?:boolean;
    size?: 'large' | 'small';
    state?: 'idle' | 'disabled' | 'error' | 'success';
  }
export interface ColorsMap {
    [key: string]: string;
  }
