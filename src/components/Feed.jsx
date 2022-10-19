import React from "react";
import styled from "styled-components";
import commentIcon from "./ui/icons/speech-bubble.gif";
import heartIcon from "./ui/icons/heart.gif";
import shareIcon from "./ui/icons/share.gif";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    border-bottom: 1px solid #dfdfdf;
  }
  padding-bottom: 20px;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 450px;
  @media (max-width: 768px) {
    width: 100%;
    border: none;
  }
  flex-direction: column;
  border: 1px solid #dfdfdf;
  padding: 20px;
  border-radius: 10px;
`;

const Image = styled.img`
  margin: 10px -19.9px 10px -19.9px;
`;

const Item = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Bio = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;
`;
const ProfileIcon = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

function Feed(props) {
  // eslint-disable-next-line
  const { _id, name, picture } = props;
  return (
    <Container>
      <Wrapper>
        <Bio>
          {" "}
          <ProfileIcon
            src={`https://picsum.photos/id/${Math.floor(
              Math.random() * 100 + 1
            )}/300`}
          />{" "}
          <b style={{ marginLeft: "5px" }}>{name}</b>
        </Bio>
        <i style={{ marginLeft: "5px" }}>Ea culpa fugiat magna duis aliqua.</i>

        <Image src={picture} alt="image" />
        <span style={{ marginLeft: "5px", lineHeight: 1.5 }}>
          Qui ullamco magna officia consequat. <br /> Sunt nostrud dolore nisi
          irure ullamco veniam officia esse quis.
        </span>
        <Actions>
          <Item>
            <Icon src={commentIcon} alt="comment" /> Like
          </Item>
          <Item>
            <Icon src={heartIcon} alt="comment" /> Comment
          </Item>
          <Item>
            <Icon src={shareIcon} alt="comment" /> Share
          </Item>
        </Actions>
      </Wrapper>
    </Container>
  );
}

export default Feed;
