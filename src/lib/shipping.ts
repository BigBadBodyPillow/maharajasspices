export interface ShippingAddress {
  fullName: string;
  email: string;
  phone: string;
  streetAddress: string;
  city: string;
  province: string;
  postalCode: string;
}

const FALLBACK_BASE = 70;
const FALLBACK_PER_ITEM = 20;

function calculateFallbackCost(itemsCount: number): number {
  const cost = FALLBACK_BASE + itemsCount * FALLBACK_PER_ITEM * 2;
  return Math.min(250, Math.max(45, Math.round(cost)));
}

export async function getCourierShippingCost(itemsCount: number, address?: ShippingAddress) {
  const apiKey = import.meta.env.VITE_COURIER_GUY_API_KEY;

  if (!apiKey) {
    return calculateFallbackCost(itemsCount);
  }

  // const payload = {
  //   from: {
  //     postalCode: '4001',
  //     city: 'Durban',
  //     country: 'ZA'
  //   },
  //   to: {
  //     postalCode: address?.postalCode ?? '',
  //     city: address?.city ?? '',
  //     country: 'ZA'
  //   },
  //   parcels: [
  //     {
  //       weightKg: Math.max(0.5, itemsCount * 0.75),
  //       lengthCm: 30,
  //       widthCm: 20,
  //       heightCm: 10
  //     }
  //   ]
  // };

  // try {
  //   const response = await fetch('https://api.courierguy.co.za/v1/rates', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${apiKey}`
  //     },
  //     body: JSON.stringify(payload)
  //   });

  //   const result = await response.json();
  //   if (response.ok && typeof result.totalCost === 'number') {
  //     return result.totalCost;
  //   }

  //   console.warn('Courier Guy API returned unexpected data', result);
  // } catch (error) {
  //   console.warn('Courier Guy API call failed:', error);
  // }

  // return calculateFallbackCost(itemsCount);
}
