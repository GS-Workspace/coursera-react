import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack borderRadius="lg" backgroundColor="white" textColor="black">
      <Image src={imageSrc} alt={title} borderRadius="lg" />
      <VStack padding="3" alignItems="start">
        <Heading size="sm">{title}</Heading>
        <Text fontSize="sm" textColor="blackAlpha.700">{description}</Text>
        <HStack>
          <Text fontSize="xs">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
