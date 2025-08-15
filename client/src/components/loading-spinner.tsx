export const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-4">
    <div className="w-6 h-6 border-2 border-orange-200 border-t-orange-600 rounded-full animate-spin"></div>
  </div>
);

export const SectionSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
    <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto mb-6"></div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="h-48 bg-gray-200 rounded-lg"></div>
      ))}
    </div>
  </div>
);