import { Container, Link, Text, VStack } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Container maxW={'xl'} py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={30}
          fontWeight={'bold'}
          bgGradient={'to-r'}
          gradientFrom={'cyan.400'}
          gradientTo={'blue.500'}
          bgClip={'text'}
          textAlign={'center'}
        >
          Current Products 🚀
        </Text>

        <Text
          fontSize={'xl'}
          textAlign={'center'}
          fontWeight={'bold'}
          color="gray.500"
        >
          No products found 😢{' '}
          <Link to={'/create'}>
            <Text
              as="span"
              color="blue.500"
              _hover={{ textDecoration: 'underline' }}
            >
              Create a product
            </Text>
          </Link>
        </Text>
      </VStack>
    </Container>
  );
};

export default HomePage;
