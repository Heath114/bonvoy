export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  category: 'cookies' | 'cakes' | 'cupcakes' | 'brownies';
  image: string;
  images?: string[];
  inStock: boolean;
  featured?: boolean;
  ingredients?: string[];
  allergens?: string[];
  servings?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  shippingAddress: Address;
  billingAddress?: Address;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  addresses: Address[];
}
