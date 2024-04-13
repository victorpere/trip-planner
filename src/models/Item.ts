export interface Item {
    [index: string]: undefined | string | number | boolean | Date | Item | Item[];
    uuid?: string;
    name?: string;
    type: string;
}