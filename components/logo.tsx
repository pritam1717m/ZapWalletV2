type Size = 'sm' | 'md' | 'lg';

const sizeMap: Record<Size, number> = {
  sm: 26,
  md: 40,
  lg: 80
};

interface LogoProps {
  size?: Size; 
}
export default function Logo({ size = 'md' }: LogoProps) {
  const pixelSize = sizeMap[size];
  return (
    <img src="/logo.png" alt="ZW" style={{ width: pixelSize }} />
  )
}
