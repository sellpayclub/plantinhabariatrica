export interface ProductPlan {
  id: number;
  title: string;
  price: number;
  pricePerUnit?: number;
  imageUrl: string;
  popular?: boolean;
  savings?: string;
  checkoutUrl: string;
}

export interface Comment {
  id: number;
  name: string;
  avatar: string;
  time: string;
  text: string;
  likes: number;
}