export interface Book {
  title: string;
  firstPreviewImage: {
    plain: string;
    watermarked: string;
  };
  author: {
    details: {
      publicName: string;
    };
  };
  sale: {
    original_price: number;
    expireAt: string;
    sale_price: number;
    startAt: number;
  };
  hasFixedPrice: boolean;
}
