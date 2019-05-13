export interface OrderResponse {
    content:          Order[];
    pageable:         Pageable;
    last:             boolean;
    totalPages:       number;
    totalElements:    number;
    size:             number;
    number:           number;
    sort:             Sort;
    numberOfElements: number;
    first:            boolean;
    empty:            boolean;
}

export interface Order {
    orderProduct:     string;
    orderDescription: string;
    firstName:        string;
    lastName:         string;
    id:               number;
    userId:           number;
}

export interface Pageable {
    sort:       Sort;
    offset:     number;
    pageSize:   number;
    pageNumber: number;
    unpaged:    boolean;
    paged:      boolean;
}

export interface Sort {
    sorted:   boolean;
    unsorted: boolean;
    empty:    boolean;
}
