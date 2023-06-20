"use client";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Group } from "@mantine/core";
import Image from "next/image";
import RText from "@/components/shared/RighteousText";
import PText from "@/components/shared/PoppinText";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Demo({ children }: Props) {
  const [opened, { open, close }] = useDisclosure(true);

  return (
    <>
      <Modal
        size={"80%"}
        sx={{
          "& .mantine-Modal-content": { borderRadius: "2em" },
          "& .mantine-Modal-header": { padding: "1em 2em" },
        }}
        opened={true}
        onClose={close}
        // withCloseButton={false}
      >
        {children}
      </Modal>
    </>
  );
}
