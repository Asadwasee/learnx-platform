const ProgressBar = ({
  value = 0,
  color = 'from-sky-500 to-emerald-500',
  showLabel = true,
  size = 'md',
}) => {
  const clamped = Math.min(100, Math.max(0, value));

  const heightMap = { sm: 'h-1.5', md: 'h-2.5', lg: 'h-3.5' };

  return (
    <div className="w-full space-y-1.5">
      {showLabel && (
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-[color:var(--text-muted)]">Progress</span>
          <span className="text-xs font-bold text-[color:var(--accent-primary)]">{clamped}%</span>
        </div>
      )}
      <div
        className={`w-full overflow-hidden rounded-full bg-[color:var(--surface-soft)] ${heightMap[size]}`}
      >
        <div
          className={`h-full rounded-full bg-linear-to-r ${color} transition-all duration-700 ease-out`}
          style={{ width: `${clamped}%` }}
          role="progressbar"
          aria-valuenow={clamped}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
};

export default ProgressBar;