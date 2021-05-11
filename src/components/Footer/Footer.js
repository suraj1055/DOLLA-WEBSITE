import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialIconLink,
    SocialLogo,
    SocialMediaWrap,
    SocialIcons,
    WebsiteRight
} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle> About Us</FooterLinkTitle>
                            <FooterLink to="/">
                                How it works
                                </FooterLink>
                            <FooterLink to="/">
                                Testimonials
                                </FooterLink>
                            <FooterLink to="/">
                                Careers
                                </FooterLink>
                            <FooterLink to="/">
                                Investors
                                </FooterLink>
                            <FooterLink to="/">
                                Terms of Services
                                </FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle> Contact Us</FooterLinkTitle>
                            <FooterLink to="/">
                                Contact
                                </FooterLink>
                            <FooterLink to="/">
                                Support
                                </FooterLink>
                            <FooterLink to="/">
                                Destinations
                                </FooterLink>
                            <FooterLink to="/">
                                Sponsorships
                                </FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle> Videos</FooterLinkTitle>
                            <FooterLink to="/">
                                Submit Video
                                </FooterLink>
                            <FooterLink to="/">
                                Ambassodors
                                </FooterLink>
                            <FooterLink to="/">
                                Agency
                                </FooterLink>
                            <FooterLink to="/">
                                Influencer
                                </FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle> Social Media</FooterLinkTitle>
                            <FooterLink to="/">
                                Instagram
                                </FooterLink>
                            <FooterLink to="/">
                                Facebook
                                </FooterLink>
                            <FooterLink to="/">
                                Youtube
                                </FooterLink>
                            <FooterLink to="/">
                                Twitter
                                </FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>

                        <SocialLogo to='/'>
                            dolla
                        </SocialLogo>

                        <WebsiteRight> dolla © {new Date().getFullYear()}. All rights reserved.</WebsiteRight>

                        <SocialIcons>

                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" aria-label="Github">
                                <FaGithub />
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                            
                        </SocialIcons>

                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer >
    )
}

export default Footer;
