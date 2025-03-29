interface IAPIRes<T> {
    data: T;
    status: boolean;
    message: string;
    metaData: {
        page: number;
        limit: number;
        totalDocs: number;
        totalPages: number;
        hasPrevPage: boolean;
        hasNextPage: boolean;
    }
}