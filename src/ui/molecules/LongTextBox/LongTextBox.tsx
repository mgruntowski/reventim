import { PropsWithChildren } from "react";

import * as Styled from "./styles";

const LongTextBox = ({ children }: PropsWithChildren): JSX.Element => (
  <Styled._Container>{children}</Styled._Container>
);

export default LongTextBox;
