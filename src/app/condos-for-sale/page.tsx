import { getCondos } from '@/services/condosForSale/getCondos';
import React from 'react';

const CondosForSalePage = async () => {
  const results = await getCondos();

  return (
    <div>
      test
    </div>
  )
}

export default CondosForSalePage;