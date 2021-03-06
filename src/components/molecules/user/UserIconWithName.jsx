import styled from "styled-components";

export const UserIconWithName = (props) => {
  const { image, name } = props;
  return (
    // <div>
    <SContainer>
      {/* <img height={160} width={160} src={user.image} alt={user.name} /> */}
      {/* <img height={160} width={160} src={image} alt={name} /> */}
      <SImg height={160} width={160} src={image} alt={name} />
      {/* <p>{user.name}</p> */}
      {/* <p>{name}</p> */}
      <SName>{name}</SName>
    </SContainer>
    // </div>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
