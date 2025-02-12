export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: 'light',
  properties: {
    '--foreground-default': '#3d4852',
    '--foreground-secondary': '#41474D',
    '--foreground-tertiary': '#797C80',
    '--foreground-quaternary': '#F4FAFF',
    '--foreground-light': '#41474D',

    '--background-default': '#F4FAFF',
    '--background-secondary': '#A3B9CC',
    '--background-tertiary': '#aaadaf',
    '--background-light': '#FFFFFF',

    '--primary-default': '#5DFDCB',
    '--primary-dark': '#24B286',
    '--primary-light': '#f5fbf9',

    '--error-default': '#EF3E36',
    '--error-dark': '#800600',
    '--error-light': '#FFCECC',
    '--border': '#808080a3',

    '--background-tertiary-shadow': '0 1px 3px 0 rgba(92, 125, 153, 0.5)',
  },
};

export const dark: Theme = {
         name: 'dark',
         properties: {
           '--foreground-default': '#5C7D99',
           '--foreground-secondary': '#A3B9CC',
           '--foreground-tertiary': '#F4FAFF',
           '--foreground-quaternary': '#E5E5E5',
           '--foreground-light': '#FFFFFF',

           '--background-default': '#797C80',
           '--background-secondary': '#41474D',
           '--background-tertiary': '#1c5069',
           '--background-light': '#41474D',

           '--primary-default': '#5DFDCB',
           '--primary-dark': '#24B286',
           '--primary-light': '#f3efef',

           '--error-default': '#EF3E36',
           '--error-dark': '#800600',
           '--error-light': '#FFCECC',
           '--border': '#808080a3',

           '--background-tertiary-shadow': '0 1px 3px 0 rgba(8, 9, 10, 0.5)',
         },
       };
