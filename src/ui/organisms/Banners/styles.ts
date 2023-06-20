import styled from "styled-components";
import spacings from "styles/spacings";

import { Row } from "ui/atoms";

export const _Container = styled(Row)`
  margin-top: ${spacings.x5};

  * > img {
    transition: filter 0.5s;
  }

  &:hover {
    * > img {
      filter: grayscale(100%);
    }
  }
`;
