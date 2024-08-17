import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

`;
export const Card = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    padding: 1rem;
    border-radius: 1rem;

    background-color: #000;
    box-shadow: 0 0 1rem 0 #069;
`;
export const Person = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 1rem;
    padding: 0.5rem;

    width: 100%;
    background-color: #1C1C1C;
`;
export const Logo = styled.img`
    width: 200px;

`;
export const MyInfos = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
export const MyPhoto = styled.img`
    width: 10rem;
    border-radius: 50%;

`;
export const Job = styled.span`
  font-family: "Playwrite CZ", cursive;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
    color: #fff;
    margin-top: 0.5rem;
    text-align: center;
`;
export const SkillsList = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 1rem;
    padding: 1rem;

    background-color: #1C1C1C;
    width: 100%;
`;
export const Skill = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`;
export const IconSkill = styled.img`
    width: 30px;

`;
export const SocialNetworks = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
   

    border-radius: 1rem;
    padding: 0.5rem;

    background-color: #1C1C1C;
    width: 100%;

    a{
        
    }

`;
export const LinkSocial = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover{
        opacity: 0.6;
    }
    
`;
export const Likedin = styled.img`

`;
export const Github = styled.img`

`;
export const Gmail = styled.img`

`;
export const Whatsapp = styled.img`

`;
export const Threads = styled.img`

`;
