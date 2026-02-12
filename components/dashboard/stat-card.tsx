type StatCardProps = {
  label: string;
  value: number;
};

export default function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8">
      <h3 className="text-gray-500">{label}</h3>
      <h2 className="text-center font-medium text-3xl">{value}</h2>
    </div>
  );
}
