import { Skeleton, Stack } from "@chakra-ui/react";

function SideBarLoader() {
  return (
    <Stack>
      <Skeleton height="20px" />
    </Stack>
  );
}

function MainLoader() {
  return (
    <Stack>
      <Skeleton height={20} />
    </Stack>
  );
}

export function LoadingItemList({
  variant,
  itemsToRender,
}: {
  variant: "sidebar" | "main";
  itemsToRender: number;
}) {
  return (
    <>
      {variant === "sidebar" ? (
        <Stack
          spacing="1.2rem"
          w="full"
          p={4}
          rounded="md"
          borderWidth={1}
          h={{ md: "26rem" }}
        >
          {Array(itemsToRender)
            .fill(1)
            .map((_, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <SideBarLoader key={index} />
            ))}
        </Stack>
      ) : (
        <Stack>
          {Array(itemsToRender)
            .fill(1)
            .map((_, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <MainLoader key={index} />
            ))}
        </Stack>
      )}
    </>
  );
}
