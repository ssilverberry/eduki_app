export interface Material {
  description: string;
  coverPath: string;
  isInYellowList: boolean;
  distributionType: number;
  sources: string;
  bundleListTotal: string;
  customPagesTotal: number;
  language: string;
  isActive: boolean;
  titleUpdatedByHuman: boolean;
  materialFiles: {
    createdAt: string;
    type: string;
  }[];
  title: string;
  createdAt: string;
  firstPreviewImage: {
    plain: string;
    watermarked: string;
  };
  world: string;
  price: number;
  inFavorites: number;
  averageRating: number;
  id: number;
  isCompletedByAuthor: boolean;
  bundle: boolean;
  slug: string;
  totalFeedbacks: number;
  ccStatus: string;
  descriptionUpdatedByHuman: boolean;
  materialTopCategories: {
    id: number;
    title: string;
  }[];
  author: {
    followersNumber: number;
    becameSellerAt: string;
    searchMode: boolean;
    details: {
      world: string;
      totalMaterials: number;
      publicName: string;
      imagePath: string;
      needsSellerInfo: boolean;
      subjects: string[];
      classes: string[];
      subtitle: string;
      privateProfile: boolean;
      userType: number;
      teachableCertified: boolean;
    };
    id: number;
    slug: string;
  };
  fileTypes: string;
  tags: string[];
  schoolTypes: {
    id: number;
    title: string;
    interdisciplinary: boolean;
  }[];
  authorFeatured: boolean;
  totalPages: number;
  isShadow: boolean;
  materialTypes: {
    id: number;
    title: string;
  }[];
  hasBibPreview: boolean;
  materialClassGrades: {
    id: number;
    title: string;
  }[];
  status: string;
  hasFixedPrice: boolean;
}

export interface SearchResponse {
  code: number;
  data: {
    items: {
      materials: Material[];
      suggestion: unknown | null;
    };
    total: number;
  };
  errors: unknown[];
  status: string;
}
