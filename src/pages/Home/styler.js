import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: auto;
    margin-top: 2rem;
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
    box-shadow: 0 0 2rem 0 #000;

    max-width: 30rem;
    min-width: 20rem;
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
    width: 50%;

`;
export const MyInfos = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
export const MyPhoto = styled.img`
    width: 70%;
    border-radius: 50%;
    border: dotted 0.3rem #fff;
    box-shadow: 0 0 0.1rem 0 #fff;
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

export const TrainingsList = styled.div`
    background-color: #1C1C1C;
    border-radius: 1rem;
    padding: 1rem;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    z-index: 1;

    #devclub{
        background-color: #000000;
    
    }

    #unama{
        background-color: #045444;
    }
`;

export const Trainings = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    border-radius: 1rem;
    img{
        width: 5rem;
        height: auto;
        z-index: 0;
        opacity: 0.5;
        border-radius: 1rem;

    }

`;

export const TrainingDescription = styled.p`

`;
