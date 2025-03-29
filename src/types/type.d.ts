interface IBusiness {
    id: string;
    ttl: number;
    lat: number;
    long: number;
    address: string;
    updatedAt: string;
    createdAt: string;
    businessName: string;
    businessProfilePicture: string;
}

interface IMarket {
    _id: string;
    reviews: [];
    plan: string;
    name: string;
    address: string;
    vendorId: string;
    visibility: true,
    createdAt: string;
    noOfLikes: number;
    description: string;
    categories: string[];
    minutes_away: number;
    business_type: string;
    total_ratings: number;
    total_reviews: number;
    products_services: [];
    dist: { calculated: number; };
    business_profile_picture: string;
    vendor_status: { _id: string; status: string; }[];
    location: { type: string; coordinates: [number, number] };
}