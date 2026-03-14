'use client';

import { useState, useMemo } from 'react';

interface Placement {
  zone: string;
  priceFrom: number; // øre
  description: string;
}

interface Product {
  key: string;
  name: string;
  placements: Placement[];
}

export function usePricingCalculator(products: Product[]) {
  const [productIndex, setProductIndex] = useState(0);
  const [placementIndex, setPlacementIndex] = useState(0);
  const [quantity, setQuantity] = useState(500);
  const [restaurants, setRestaurants] = useState(1);

  const product = products[productIndex];
  const placement = product?.placements[placementIndex];

  const result = useMemo(() => {
    if (!placement) return null;

    const totalUnits = quantity * restaurants;
    const monthlyCostOre = placement.priceFrom * totalUnits;
    const monthlyCostDkk = monthlyCostOre / 100;
    const estimatedImpressions = Math.round(totalUnits * 2.8);

    // Midpoint estimates for comparison
    const facebookCostDkk = Math.round((estimatedImpressions / 1000) * 100);
    const googleCostDkk = Math.round((estimatedImpressions / 1000) * 190);

    return {
      totalUnits,
      monthlyCostOre,
      monthlyCostDkk,
      estimatedImpressions,
      facebookCostDkk,
      googleCostDkk,
    };
  }, [placement, quantity, restaurants]);

  return {
    productIndex,
    setProductIndex: (i: number) => {
      setProductIndex(i);
      setPlacementIndex(0);
    },
    placementIndex,
    setPlacementIndex,
    quantity,
    setQuantity,
    restaurants,
    setRestaurants,
    product,
    placement,
    result,
  };
}
