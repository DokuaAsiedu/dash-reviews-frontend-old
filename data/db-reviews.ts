export const DB_REVIEWS: Review[] = [
  {
    locationId: 0,
    locationName: "Bonny and Clyde Street, Ajao Estate, Lagos",
    date: new Date("2024-03-25 01:02:03"),
    commentData: {
      opName: "John Doe",
      opId: 1,
      anon: false,
      commentText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo
        magna, tincidunt id mattis sit amet, commodo porta mauris. Curabitur
        risus justo, euismod quis dictum vel, pulvinar et tellus. Suspendisse
        volutpat rutrum eros et pulvinar. Mauris aliquet elit et ipsum porta,
        eu accumsan tortor egestas. Ut a ornare velit.`,
      likeCount: 23,
      dislikeCount: 5,
      commentCount: 8,
      amenities: ["security", "quiet"],
      rating: 3,
      pictureUrls: [
        "/dash-reviews-frontend/assets/location-images/img-1.jpg",
        "/dash-reviews-frontend/assets/location-images/img-2.jpg",
      ],
    },
  },
  {
    locationId: 0,
    locationName: "Bonny and Clyde Street, Ajao Estate, Lagos",
    date: new Date("2024-04-05 16:53:17"),
    commentData: {
      opName: "Jane Doe",
      opId: 2,
      anon: false,
      commentText: `Vivamus ac volutpat ex. Curabitur hendrerit tortor sed ex mollis, nec finibus lorem faucibus. Nulla lorem nibh, gravida a varius eu, condimentum ac metus. Integer ut tristique risus. Ut nec mollis nulla, a varius quam. Duis posuere risus ac enim imperdiet placerat. Mauris consequat ullamcorper mauris, sed consequat dolor fringilla eu.`,
      likeCount: 23,
      dislikeCount: 5,
      commentCount: 8,
      amenities: ["water", "quiet"],
      rating: 3,
      pictureUrls: [
        "/dash-reviews-frontend/assets/location-images/img-3.jpg",
        "/dash-reviews-frontend/assets/location-images/img-4.jpg",
      ],
    },
  },
];
