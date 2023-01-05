export interface SelectOption{
    value:string;
    label:string
  }
export interface SelectSpecificProps {
    options: SelectOption[];
    defaultValue?:SelectOption;
    searchable?:boolean;
    size?: 'large' | 'small';
    // eslint-disable-next-line no-unused-vars
    onChange: (option: SelectOption) => void;
  }
export interface ColorsMap {
    [key: string]: string;
  }
