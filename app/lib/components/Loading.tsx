import { Grid, Stack } from "@chakra-ui/react";

import { LoadingItemList } from "~/lib/components/Loaders";

const Loading = ({ transition }: { transition: any }) => {
  return (
    <>
      {transition.state === "submitting" && (
        <Grid templateColumns={{ md: "30% 70%" }} gap={4}>
          <Stack spacing="2rem">
            <LoadingItemList variant="sidebar" itemsToRender={10} />
            <LoadingItemList variant="sidebar" itemsToRender={10} />
          </Stack>
          <LoadingItemList variant="main" itemsToRender={20} />
        </Grid>
      )}
    </>
  );
};

export default Loading;
