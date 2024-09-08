import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import { useNavScroll } from "../hooks/useNavScroll";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
    id: 1,
  },
  {
    icon: faGithub,
    url: "https://github.com",
    id: 2,
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
    id: 3,
  },
  {
    icon: faMedium,
    url: "https://medium.com",
    id: 4,
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
    id: 5,
  },
];

const internalLinks = [
  {
    name: "Projects",
    url: "Contact me",
    id: 1,
  },
  {
    name: "Projects",
    url: "Contact me",
    id: 2,
  },
];

const Header = () => {
  const isVisible = useNavScroll()

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      style={{
        transition: "transform 0.3s ease-in-out",
        transform: isVisible ? "translateY(0)" : "translateY(-200px)",
      }}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack as="ul" spacing={8}>
              {socials.map((social) => {
                const { icon, id, url } = social;
                return (
                  <li key={id}>
                    <a href={url}>
                      <FontAwesomeIcon icon={icon} size="2x" />
                    </a>
                  </li>
                );
              })}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8} as="ul">
              {internalLinks.map((item) => {
                const { name, url, id } = item;
                return (
                  <li key={id}>
                    <a href={url}>{name}</a>
                  </li>
                );
              })}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
