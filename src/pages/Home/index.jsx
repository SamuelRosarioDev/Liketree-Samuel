import { Link } from "react-router-dom";

import Cotacao from "../../components/cotacao/Cotacao";

import LogoIcon from "../../assets/icons-profile/SamuelBottomless.png";
import PhotoSamuel from "../../assets/icons-profile/SamuelPerfil.png";
import {
    Card,
    Container,
    Gmail,
    Github,
    Job,
    Likedin,
    Logo,
    MyInfos,
    MyPhoto,
    Person,
    IconSkill,
    Skill,
    SkillsList,
    SocialNetworks,
    Whatsapp,
    Threads,
    LinkSocial
} from "./styler";

import Html5Icon from "../../assets/icons-skills/html5.svg"
import Css3Icon from "../../assets/icons-skills/css3.svg"
import JavascriptIcon from "../../assets/icons-skills/javascript.svg"
import ReactIcon from "../../assets/icons-skills/react.svg"
import TypescriptIcon from "../../assets/icons-skills/typescript.svg"
import NodeIcon from "../../assets/icons-skills/node.svg"

import LikedinIcon from "../../assets/icons-socialnetworks/linkedin.svg"
import GithubIcon from "../../assets/icons-socialnetworks/github.svg"
import GmailIcon from "../../assets/icons-socialnetworks/gmail.svg"
import WhatsappIcon from "../../assets/icons-socialnetworks/whatsapp.svg"
import ThreadsIcon from "../../assets/icons-socialnetworks/threads.svg"

export default function Home() {

    let teste = "www.google.com"
    return (
        <Container>
            <Card>
                <Person>
                    <Logo src={LogoIcon} alt="Logo Samuel" />

                    <MyInfos>
                        <MyPhoto width={200} src={PhotoSamuel} alt="Foto Samuel" />
                        <Job>Desenvolvedor Web</Job>
                    </MyInfos>
                </Person>

                <SkillsList>
                    <Skill>
                        <IconSkill src={Html5Icon} alt="icon html" />
                    </Skill>
                    <Skill>
                        <IconSkill src={Css3Icon} alt="icon css" />
                    </Skill>
                    <Skill>
                        <IconSkill src={JavascriptIcon} alt="icon javascript" />
                    </Skill>
                    <Skill>
                        <IconSkill src={ReactIcon} alt="icon react" />
                    </Skill>
                    <Skill>
                        <IconSkill src={TypescriptIcon} alt="icon typescript" />
                    </Skill>
                    <Skill>
                        <IconSkill src={NodeIcon} alt="icon node" />
                    </Skill>
                </SkillsList>

                <SocialNetworks>
                    <LinkSocial href="https://www.linkedin.com/in/samuelwsrosario/" target="_blank" rel="noopener noreferrer">
                        <Likedin width={40} src={LikedinIcon} alt="icon Likedin" />
                    </LinkSocial>
                    <LinkSocial href="https://github.com/SamuelRosarioDev" target="_blank" rel="noopener noreferrer">
                        <Github width={40} src={GithubIcon} alt="icon Github" />
                    </LinkSocial>
                    <LinkSocial href="mailto:samuelrosario.dev@gmail.com" target="_blank" rel="noopener noreferrer">
                        <Gmail width={40} src={GmailIcon} alt="icon Gmail" />
                    </LinkSocial>
                    <LinkSocial href="https://api.whatsapp.com/send?phone=5591985030237" target="_blank" rel="noopener noreferrer">
                        <Whatsapp width={40} src={WhatsappIcon} alt="icon Whatsapp" />
                    </LinkSocial>
                    <LinkSocial href="https://www.threads.net/@hisamuka" target="_blank" rel="noopener noreferrer">
                        <Threads width={40} src={ThreadsIcon} alt="icon Threads" />
                    </LinkSocial>
                </SocialNetworks>
                <Cotacao/>
            </Card>
        </Container>
    );
}
