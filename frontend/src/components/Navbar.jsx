import { Button, Container, Flex, HStack, Link, Text } from '@chakra-ui/react';

import { useColorMode } from '../components/ui/color-mode';

import { FaRegPlusSquare } from 'react-icons/fa';
import { IoIosMoon } from 'react-icons/io';
import { LuSun } from 'react-icons/lu';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={'1140px'} px={4}>
      <Flex
        h={16}
        alignItems={'center'}
        justifyContent={'space-between'}
        flexDir={{
          sm: 'column',
          md: 'row'
        }}
      >
        <Text>
          <Link
            href={'/'}
            fontWeight={'bold'}
            textTransform={'uppercase'}
            textAlign={'center'}
            bgGradient={'to-r'}
            gradientFrom={'cyan.200'}
            gradientTo={'blue.500'}
            bgClip={'text'}
            textStyle={{ sm: 'md', md: 'lg' }}
          >
            Product Store 🛒
          </Link>
        </Text>

        <HStack spacing={2} alignItems={'center'}>
          <Link href={'/create'}>
            <Button variant="outline">
              <FaRegPlusSquare size={80} />
            </Button>
          </Link>
          <Button variant="outline" onClick={toggleColorMode}>
            {colorMode === 'light' ? <IoIosMoon /> : <LuSun size={100} />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};
export default Navbar;
