import React from "react";
import styled from "styled-components";
import { Comment, Share, ThumbUp } from "@material-ui/icons";
import classes from "./Feed.module.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    border-radius: 0;
  }
  padding-bottom: 20px;
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
    border-radius: 0;
    border-bottom: 1px solid #dfdfdf;
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
  padding: 5px 25px;
  border-radius: 10px;
  &:hover {
    background: #dfdfdf;
  }
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
  const { _id, name, picture, description } = props;
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

        <Image src={picture} alt="image" />
        <p style={{ marginLeft: "5px", fontSize: "16px", lineHeight: 1.5 }}>
          {description}
        </p>
        <Actions>
          <Item>
            <ThumbUp className={classes.hover} /> Like
          </Item>
          <Item>
            <Comment className={classes.hover} /> Comment
          </Item>
          <Item>
            <Share className={classes.hover} /> Share
          </Item>
        </Actions>
      </Wrapper>
    </Container>
  );
}

export default Feed;
