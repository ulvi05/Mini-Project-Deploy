export type Product = {
    id: string;
    name: string;
    description: string | null;
    price: number;
    category: Category | null;
    imageUrl: string;
    categoryId: string | null;
    createdAt: Date;
    updatedAt: Date;
};

export type Category = {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
};

export enum SortOrder {
    PRICE_ASC = 'price_asc',
    PRICE_DESC = 'price_desc',
    DATE_DESC = 'createdAt_desc',
    DATE_ASC = 'createdAt_asc',
}
export type ReservationProps = {
    userId: string;
    productId: string;
    startDate: Date;
    endDate: Date;
};

export type DateRangePickerProps = {
    onDateChange: (range: { startDate: Date | null; endDate: Date | null; }) => void;
    moveRangeOnFirstSelection?: boolean;
    retainEndDateOnFirstSelection?: boolean;
    onRangeFocusChange?: (range: any) => void;
    rangeColors?: string[];
    ranges?: any[];
    reservedDates: Date[];
};