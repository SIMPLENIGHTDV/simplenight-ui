interface SelectOption{
    value:string;
    label:string
  }
export interface SelectSpecificProps {
    options: SelectOption[];
    selectedOption:SelectOption;
    searchable?:boolean;
    size?: 'large' | 'small';
    state?: 'idle' | 'disabled' | 'error' | 'success'|'open';
  }
export interface ColorsMap {
    [key: string]: string;
  }
