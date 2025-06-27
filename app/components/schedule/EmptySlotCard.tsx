type EmptySlotCardProps = {
  message: string;
};

export function EmptySlotCard({ message }: EmptySlotCardProps) {
  return (
    <div className="bg-gray-50 border-2 border-dashed border-gray-300 p-4 rounded-lg text-center">
      <p className="text-gray-500 text-sm">{message}</p>
    </div>
  );
}