import type { ButtonProps } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

export const PaginationButton = ({
  title,
  ...rest
}: { title: string } & ButtonProps) => (
  <Button
    h={9}
    px={3}
    fontSize="sm"
    borderWidth={0}
    variant="outline"
    color="brand.blue.link"
    _hover={{ bg: "transparent" }}
    {...rest}
  >
    {title}
  </Button>
);
