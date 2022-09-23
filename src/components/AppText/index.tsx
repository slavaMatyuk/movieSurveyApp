import React, { FC, memo } from 'react';
import useWindowDimensions from '@utils/hooks/useWindowDimension';
import { FONT_SIZES } from '@constants/fontSize';
import { Props } from './types';
import * as Styled from './styles';

export const AppText: FC<Props> = memo(({ size = 'md', tag = 'p', text = '' }) => {
  const { isMobile } = useWindowDimensions();
  return (
    <Styled.Text
      fontSize={typeof size === 'string' ? FONT_SIZES[isMobile ? 'mobile' : 'default'][size] : size}
      as={tag}
    >
      {text}
    </Styled.Text>
  );
});

AppText.displayName = 'AppText';
