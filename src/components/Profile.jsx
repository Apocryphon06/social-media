import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const ProfileWrapper = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  background-color: #e4e1e2;
  align-items: center;
  padding-top: 50px;
  border-radius: 10px;
`;

const Label = styled.div`
  font-size: 18px;
  color: grey;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 100px;
  border-radius: 50%;
`;

const Input = styled.input`
  background-color: transparent;
  border: 0.5px solid black;
  font-size: 16px;
  padding: 10px;
`;

const Textarea = styled.textarea`
  background-color: transparent;
  border: 0.5px solid black;
  font-size: 16px;
  padding: 10px;
`;

const EditWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #21bfae;
  border: 0.5px solid #e4e1e2;
  color: white;
  letter-spacing: 1px;
  cursor: pointer;
  &:hover {
    background-color: #07635e;
  }
  margin-top: 30px;
  margin-bottom: 20px;
`;

function Profile() {
  const [name, setName] = useState("Hrithik Ch");
  const [occupation, setOccupation] = useState("React Developer");
  const [bio, setBio] = useState("Hi there, I'm Hrithik");
  return (
    <Container>
      <ProfileWrapper>
        <Image src="https://picsum.photos/200" alt="profile-picture" />
        <EditWrapper>
          <Label>
            Name
            <br />
            <Input
              onChange={(e) => setName(e.target.value)}
              placeholder="Hrithik Ch"
              value={name}
            />
          </Label>
          <Label>
            Occupation
            <br />
            <Input
              onChange={(e) => setOccupation(e.target.value)}
              placeholder="React Developer"
              value={occupation}
            />
          </Label>
          <Label>
            Bio
            <br />
            <Textarea
              rows="5"
              placeholder="Hi there, I'm Hrithik"
              onChange={(e) => setBio(e.target.value)}
              value={bio}
            />
          </Label>
          <Button
            onClick={() =>
              console.log({ name: name, occupation: occupation, bio: bio })
            }
          >
            UPDATE
          </Button>
        </EditWrapper>
      </ProfileWrapper>
    </Container>
  );
}

export default Profile;
