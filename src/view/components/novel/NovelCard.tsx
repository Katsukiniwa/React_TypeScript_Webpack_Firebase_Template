import React, { useState } from 'react';

export const OrganizationChart = () => {
  const [organizationChart, setOrganizationChart] = useState();

  return (
    <div>
      <h1>
        組織図
        {organizationChart}
      </h1>
    </div>
  );
};
