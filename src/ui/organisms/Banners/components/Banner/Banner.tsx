import Image from "next/image";

import * as Styled from "./styles";

type Props = {
  data: any;
};

const Banner = ({ data }: Props): JSX.Element => {
  return (
    <Styled._Container>
      <Image layout="fill" src={data.pictureUrl} />
    </Styled._Container>
  );
};

export default Banner;
