import styled from "styled-components";

export const Logo = () => {
  return (
    <Container>
      <Patern className="patern">/</Patern>
      <Text className="text">
        <span>Swii</span>
        <span>chy.</span>
      </Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  cursor: pointer;
  filter: var(--fileredShadow);

  &:hover .patern {
    background: var(--color-yellow);
  }

  &:hover span:nth-child(2) {
    color: var(--color-yellow);
  }
`;

const Patern = styled.div`
  border-radius: 0.7rem;
  background: var(--color-blue);
  padding: 0.5rem 1.1rem;
  color: var(--color-white);
  font-size: 1.3rem;
  font-weight: 700;
  transition: var(--transition-all);
`;

const Text = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -0.2rem;
  transition: all 0.3s ease-in-out;

  span:nth-child(2) {
    color: var(--color-blue);
  }
`;
