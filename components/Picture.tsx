interface Props {
  description: string;
  path: string;
}

export const Picture = ({ description, path }: Props) => {
  return (
    <picture>
      <img className="rounded-3xl" height={900} src={path} alt={description} />
    </picture>
  );
};
