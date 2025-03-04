import { Button, Container, Flex, HStack, Link, Text } from '@chakra-ui/react';
import { useColorMode } from './ui/color-mode.jsx';

import { FaRegPlusSquare } from 'react-icons/fa';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={'1140px'} px={4}>
      <Flex
        h={16}
        alignItems={'center'}
        justifyContent={'space-between'}
        flexDir={{
          base: 'column',
          sm: 'row'
        }}
      >
        <Text
          fontSize={{ base: '22', sm: '28' }}
          fontWeight={'bold'}
          textTransform={'uppercase'}
          textAlign={'center'}
          bgGradient={'linear(to-r, cyan.400, blue.500)'}
          bgClip={'text'}
        >
          <Link href={'/'}>Product Store 🛒</Link>
        </Text>
        <HStack spacing={2} alignItems={'center'}>
          <Link href={'/create'}>
            <Button>
              <FaRegPlusSquare fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <IoSunnyOutline /> : <IoMoonOutline />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};
export default Navbar;
