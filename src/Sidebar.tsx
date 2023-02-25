export interface Props {
  className: string;
}

export default function Sidebar({ className }: Props) {
  return (
    <div className={className + " bg-slate-600"}>
      <p>Redpen</p>
    </div>
  );
}
