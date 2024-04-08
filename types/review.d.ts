interface Review {
  locationId: number;
  locationName: string;
  date: Date;
  commentData: {
    opName: string;
    opId: number;
    anon: boolean;
    commentText: string;
    likeCount: number;
    dislikeCount: number;
    commentCount: number;
    amenities: string[];
    rating: number;
    pictureUrls: string[];
  };
}
