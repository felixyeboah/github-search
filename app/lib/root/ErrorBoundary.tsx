import { Heading, Stack } from "@chakra-ui/react";

import Document from "./Document";

// https://remix.run/docs/en/v1/api/conventions#errorboundary
const ErrorBoundary = ({ error }: { error: Error }) => {
  return (
    <Document title="Error!">
      <Stack>
        <Heading>There was an error</Heading>
        <p>{error.message}</p>
        <hr />
        <p>
          Hey, developer, you should replace this with what you want your users
          to see.
        </p>
      </Stack>
    </Document>
  );
};

export default ErrorBoundary;
