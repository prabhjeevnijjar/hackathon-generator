import React from 'react';
import Description from '@/app/components/OverviewComp/Description';

const OverviewPage = ({ params }) => {
  return (
    <div>
      <Description slug={params.slug} />
    </div>
  );
};

export default OverviewPage;
