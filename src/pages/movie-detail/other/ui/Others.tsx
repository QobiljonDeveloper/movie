import { memo } from "react";
import { CastView } from "../../../../entities/cast";
import { useParams } from "react-router-dom";

export const Others = memo(() => {
  const { id } = useParams();

  return (
    <div className="container">
      <CastView type="crew" id={id as string} />
    </div>
  );
});
