import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const NoBackgroundIcon = (props: SvgProps) => (
  <Svg width={47} height={48} fill="none" {...props}>
    <Path
      fill="#BABABA"
      d="M7.687.64a7.549 7.549 0 0 0-7.55 7.55v18.582a7.502 7.502 0 0 0 1.29 4.22 7.593 7.593 0 0 0 2.297 2.206c.967.598 2.08.983 3.272 1.091l.014.002c.223.02.449.03.677.03h5.226v5.226c0 4.169 3.38 7.549 7.549 7.549h18.582c4.169 0 7.549-3.38 7.549-7.55V20.966c0-4.17-3.38-7.55-7.55-7.55h-5.225V8.19a7.504 7.504 0 0 0-1.29-4.22 7.59 7.59 0 0 0-2.296-2.207A7.502 7.502 0 0 0 26.959.672L26.945.67a7.64 7.64 0 0 0-.676-.03H7.687Zm1.601 3.485L3.622 9.79V8.19a4.065 4.065 0 0 1 4.065-4.065h1.601ZM3.622 14.718 14.215 4.125h4.364L3.622 19.082v-4.364ZM23.506 4.125h2.763c.479 0 .939.083 1.366.235l-9.385 9.385a7.566 7.566 0 0 0-5.008 5.008l-9.385 9.385a4.06 4.06 0 0 1-.235-1.366v-2.763L23.506 4.125ZM30.1 6.824c.152.427.235.886.235 1.366v2.762l-2.464 2.464h-4.364L30.1 6.824ZM12.913 24.009v4.364l-2.463 2.463H7.687c-.48 0-.94-.082-1.366-.235l6.592-6.592Zm3.484-3.044a4.065 4.065 0 0 1 4.065-4.065h18.582a4.065 4.065 0 0 1 4.065 4.065v18.582a4.065 4.065 0 0 1-4.065 4.065H20.462a4.065 4.065 0 0 1-4.065-4.065V20.965Z"
    />
  </Svg>
);
export default NoBackgroundIcon;
