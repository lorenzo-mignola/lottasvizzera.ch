interface SpacingProps {
  spacing: boolean;
}

function Spacing({ spacing }: SpacingProps) {
  if (!spacing) {
    return null;
  }
  return (
    <p className="min-h-7"></p>
  );
}
export default Spacing;
