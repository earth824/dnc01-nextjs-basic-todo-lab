export function CardSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-8 animate-pulse flex flex-col gap-2">
      <h3 className="w-20 h-5 bg-gray-400 rounded"></h3>
      <h2 className="w-20 h-8 bg-gray-400 rounded self-center"></h2>
    </div>
  );
}

export function RowSkeleton() {
  return (
    <div className="flex justify-between items-center p-4 animate-pulse">
      <h4 className="w-40 h-6 bg-gray-400 rounded"></h4>
      <div className="flex items-center gap-12">
        <div className="bg-gray-400 rounded h-5 w-20"></div>
        <div className="flex items-center gap-2">
          <div className="rounded bg-gray-400 size-10"></div>
          <div className="rounded bg-gray-400 size-10"></div>
        </div>
      </div>
    </div>
  );
}

export function RowSkeletonContainer() {
  return (
    <div className="border-y border-gray-200 divide-y divide-gray-200">
      <RowSkeleton />
      <RowSkeleton />
      <RowSkeleton />
      <RowSkeleton />
      <RowSkeleton />
    </div>
  );
}
