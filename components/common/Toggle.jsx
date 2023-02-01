import styled from "styled-components";

export const Toggle = ({ isOn, handleToggle }) => {
  return (
    <ToggleSwitchContainer>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label className="react-switch-label" htmlFor={`react-switch-new`}>
        <span className={`react-switch-button`} />
      </label>
    </ToggleSwitchContainer>
  );
};

export const ToggleSwitchContainer = styled.div`
  width: 100%;
  display: flex;
  max-width: 60px;
  position: relative;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  border-radius: 45px;
  background-color: #f5f5f5;
  z-index: 1000;

  @media screen and (max-width: 1110px) {
    display: none;
  }

  .react-switch-checkbox {
    position: absolute;
    height: 0;
    width: 0;
    visibility: hidden;
  }

  .react-switch-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 60px;
    height: 30px;
    border-radius: 100px;
    position: relative;
    transition: all 200ms ease-in-out;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  }

  .react-switch-label .react-switch-button {
    content: "";
    position: absolute;
    top: 4px;
    left: 4px;
    width: 22px;
    height: 22px;
    border-radius: 45px;
    transition: 0.2s;
    background: var(--color-white);
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  }

  .react-switch-checkbox:checked + .react-switch-label .react-switch-button {
    left: calc(100% - 4px);
    transform: translateX(-100%);
  }
`;
