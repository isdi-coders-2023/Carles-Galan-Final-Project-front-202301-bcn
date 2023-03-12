import LoaderStyled from "./LoaderStyles";

const Loader = (): JSX.Element => {
  return (
    <LoaderStyled>
      <span data-testid="loader" className="loader"></span>
    </LoaderStyled>
  );
};

export default Loader;
