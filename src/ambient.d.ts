export interface Item {
    itemName: string,
    itemCost: number
};

export interface Split {
    name: string,
    items: item[],
};