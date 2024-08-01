export interface Item {
    itemName: string,
    itemCost: number
};

export interface IndividualTransaction {
    name: string,
    items: item[],
};