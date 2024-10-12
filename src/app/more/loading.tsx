import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col space-y-12">
      {Array(3)
        .fill(0)
        .map((i) => (
          <div key={i} className="space-y-6">
            <div className="flex flex-row justify-between">
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-4 w-10" />
            </div>
            {Array(3)
              .fill(0)
              .map((index) => (
                <div key={index} className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              ))}
          </div>
        ))}
    </div>
  );
};

export default Loading;
