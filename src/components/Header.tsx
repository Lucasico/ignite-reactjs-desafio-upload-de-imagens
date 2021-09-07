import { Box, Flex, Button, useDisclosure, Image } from '@chakra-ui/react';
import { ModalAddImage } from './Modal/AddImage';

export function Header(): JSX.Element {
  const { onOpen, isOpen, onClose } = useDisclosure();
  // 8 === 8 / 4 = 2rem || 8 * 4 = 32 px
  // 6 === 6 / 4 = 1.5rem || 6 * 2 = 24 px
  // console.log('onOpen', onOpen);
  // console.log('isOpen fora do retorno', isOpen);
  // console.log('onClose', onClose);
  return (
    <>
      <Box bgColor="pGray.800">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          maxW={1120}
          mx="auto"
          px={20}
          py={6}
        >
          <Image src="logo.svg" h={10} />
          <Button onClick={() => onOpen()}>Adicionar imagem</Button>
        </Flex>
      </Box>

      <ModalAddImage isOpen={isOpen} onClose={onClose} />
    </>
  );
}
