interface ProgressCircleProps {
    progress: number,
    size?: number
}

const ProgressCircle = ({ progress, size = 80 }: ProgressCircleProps) => {
  const angle = progress * 360;
  return (
    <div className={`rounded-full bg-blue-500 w-[${size}px] h-[${size}px] duration-200`}>{angle}</div>
  );
};

export default ProgressCircle;