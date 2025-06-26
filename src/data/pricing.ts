export interface PricingPlan {
  plan: 'trial' | 'paid';
  price: string;
  features: string[];
  buttonText: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    plan: 'trial',
    price: 'Free',
    features: [
      'Basic file merging',
      'Process up to 10 files per day',
      'Basic data cleaning',
      'No watermark'
    ],
    buttonText: 'Free Download'
  },
  {
    plan: 'paid',
    price: '$1.99',
    features: [
      'Unlimited file processing',
      'Advanced data cleaning',
      'Batch formatting adjustment',
      'Priority technical support',
      'Lifetime free updates'
    ],
    buttonText: 'Purchase Now'
  }
];