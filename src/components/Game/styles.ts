import styled, { css } from 'styled-components';
import { darken, shade } from 'polished';

interface BlockProps {
  listColor: 'X' | 'O' | '';
  win: boolean;
}

export const Container = styled.div`
  width: 500px;
  height: 300px;
  background-color: #efefef;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  flex-direction: column;

  @media (max-width: 400px) {
    width: 380px;
    height: 320px;
  }
`;

export const Table = styled.div`
  align-items: center;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(3, auto);
  width: 400px;
  margin: 10px auto;
  color: #efefef;

  @media (max-width: 400px) {
    max-width: 300px;
  }
`;

export const Block = styled.div<BlockProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 5px;
  background-color: #457b9d;
  box-shadow: 2px #efefef;
  border: 2px solid #efefef;
  cursor: pointer;
  line-height: 100px;
  font-size: 60px;
  color: #fca311;
  text-shadow: 2px 3px 5px ${darken(0.3, '#000')};

  ${(props) =>
    props.listColor === 'O' &&
    css`
      color: #fff;
      text-shadow: 2px 3px 5px ${darken(0.3, '#000')};
    `}

  ${(props) =>
    props.win &&
    css`
      background-color: #1d3557;
    `}
`;

export const Winner = styled.div`
  color: #fca311;
  font-size: 18px;
`;
