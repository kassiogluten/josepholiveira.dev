import styled from 'styled-components';

interface ControlButtonProps {
  left?: boolean;
  right?: boolean;
  disabled: boolean;
}

export const Content = styled.div`
  display: flex;
  margin-top: 260px;

  img {
    align-self: flex-start;
  }

  .projects {
    display: flex;
  }

  .previews {
    flex: 1;
    margin-left: 96px;

    .slide {
        background: transparent !important;
    }

    .dots {
      display: flex;
      justify-content: center;
      margin: 0 auto;
      margin-top: 35px;

      .dot {
        margin-left: 8px;

        background: #36364d;

        &.active {
          background: ${props => props.theme.colors.primary};
        }

        display: inline-block;
        width: 32px;
        height: 4px;
      }
    }
  }

  #left-bubble {
    position: absolute;
    left: 0;
    top: 575px;
    z-index: -1;
  }

  .content {
    span {
      color: ${props => props.theme.colors.primary};
      font-size: 16px;
      display: flex;
      align-items: center;
      font-weight: 600;

      &::before {
        content: ' ';
        width: 40px;
        height: 2px;
        background: #36364d;
        display: block;
        margin-right: 16px;
      }
    }

    h2 {
      margin-top: 64px;
      color: ${props => props.theme.colors.title};
      font-weight: 600;
      font-size: 36px;
      line-height: 46px;
    }

    p {
      width: 383px;
      font-size: 20px;
      margin-top: 24px;
      color: ${props => props.theme.colors.texts};
      font-weight: 300;
      font-size: 16px;
      line-height: 30px;

      b {
        font-weight: bold;
        color: ${props => props.theme.colors.primary};
      }
    }
  }

  .controls {
    display: flex;
    align-self: flex-start;
    margin-top: 64px;
  }



  @media (max-width: 1120px) {
    padding: 0px 24px;
  }

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    margin-top: 160px;
    width: 100%;

    .projects {
      display: flex;
      flex-direction: column;
    }

    .previews {
      margin-top: 48px;
      margin-left: 0px;


      .project-image {
        width: 640px; 
        height: 480px;
      }

      .dots {
        margin-left: 8px;
      }
    }

    .controls {
      display: none;
    }
  
    .content {
      padding: 31px 0 0 0;
    }
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    margin-top: 160px;
    width: 100%;
    padding: 0px 24px;

    .projects {
      display: flex;
      flex-direction: column;
    }

    .previews {
      margin-top: 48px;
      margin-left: 0px;

      .project-image {
        width: 358px;
        height: 269.05px;
      }

      .dots {
        margin-left: 8px;
      }
    }

    .content {
      padding: 31px 0 0 0;

      span {
        color: ${props => props.theme.colors.primary};
        font-size: 14px;
        line-height: 16px;
        display: flex;
        align-items: center;

        &::before {
          content: ' ';
          width: 40px;
          height: 2px;
          background: #36364d;
          display: block;
          margin-right: 16px;
        }
      }

      h2 {
        width: 326px;
        margin-top: 48px;
        color: ${props => props.theme.colors.title};
        font-size: 26px;
        line-height: 38px;
      }

      p {
        width: 326px;
        font-size: 20px;
        margin-top: 24px;
        color: ${props => props.theme.colors.texts};
        font-weight: 300;
        font-size: 16px;
        line-height: 30px;

        b {
          font-weight: bold;
          color: ${props => props.theme.colors.primary};
        }
      }
    }

    .controls {
      display: none;
    }
  }
`;

export const ControlButton = styled.div<ControlButtonProps>`
  display: flex;
  justify-content: center;
  background: transparent;
  padding: 18px;
  user-select: none;
  transition: 0.3s ease;
  box-sizing: border-box;
  border: 1.5px solid ${props => props.theme.colors.primary};

  &:hover {
    background: ${props => props.theme.colors.primary};
    box-shadow: 0px 10px 40px rgba(69, 69, 229, 0.5);
    cursor: pointer;
  }

  & + & {
    margin-left: 24px;
  }

  img {
    transform: ${props => (props.right ? 'rotate(-90deg)' : 'rotate(90deg)')};
  }

  img {
    width: 24px;
    height: 24px;
    align-self: center;
  }

  ${({ disabled }) =>
    disabled &&
    `
      opacity: 20%;
      cursor: not-allowed !important;

      &:hover{
        box-shadow: none !important;
        background: transparent !important;
      }
    `}
`;
