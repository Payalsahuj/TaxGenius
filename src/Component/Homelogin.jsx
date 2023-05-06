
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
} from '@chakra-ui/react';

import { useToast } from '@chakra-ui/react';
import { useState } from 'react';

const Form1 = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Box >
      <Heading  w="100%" textAlign={'center'} fontWeight="700" fontSize={'23px'}  mb="7%">
        Sign up for the easy way to do tax return.
      </Heading>
      <Flex >
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" pl='10px' fontWeight={'normal'}>
            First name
          </FormLabel>
          <Input id="first-name" placeholder="First name" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" pl='10px' fontWeight={'normal'}>
            Last name
          </FormLabel>
          <Input id="last-name" placeholder="First name" />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="email" pl='10px' fontWeight={'normal'}>
          Email address
        </FormLabel>
        <Input id="email" type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="password" pl='10px' fontWeight={'normal'} mt="2%">
          Password
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </Box>
  );
};

// const Form2 = () => {
//   return (
//     <>
//       <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
//         User Details
//       </Heading>
//       <FormControl as={GridItem} colSpan={[6, 3]}>
//         <FormLabel
//           htmlFor="country"
//           fontSize="sm"
//           fontWeight="md"
//           color="gray.700"
//           _dark={{
//             color: 'gray.50',
//           }}>
//           Country / Region
//         </FormLabel>
//         <Select
//           id="country"
//           name="country"
//           autoComplete="country"
//           placeholder="Select option"
//           focusBorderColor="brand.400"
//           shadow="sm"
//           size="sm"
//           w="full"
//           rounded="md">
//           <option>United States</option>
//           <option>Canada</option>
//           <option>Mexico</option>
//         </Select>
//       </FormControl>

//       <FormControl as={GridItem} colSpan={6}>
//         <FormLabel
//           htmlFor="street_address"
//           fontSize="sm"
//           fontWeight="md"
//           color="gray.700"
//           _dark={{
//             color: 'gray.50',
//           }}
//           mt="2%">
//           Street address
//         </FormLabel>
//         <Input
//           type="text"
//           name="street_address"
//           id="street_address"
//           autoComplete="street-address"
//           focusBorderColor="brand.400"
//           shadow="sm"
//           size="sm"
//           w="full"
//           rounded="md"
//         />
//       </FormControl>

//       <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
//         <FormLabel
//           htmlFor="city"
//           fontSize="sm"
//           fontWeight="md"
//           color="gray.700"
//           _dark={{
//             color: 'gray.50',
//           }}
//           mt="2%">
//           City
//         </FormLabel>
//         <Input
//           type="text"
//           name="city"
//           id="city"
//           autoComplete="city"
//           focusBorderColor="brand.400"
//           shadow="sm"
//           size="sm"
//           w="full"
//           rounded="md"
//         />
//       </FormControl>

//       <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
//         <FormLabel
//           htmlFor="state"
//           fontSize="sm"
//           fontWeight="md"
//           color="gray.700"
//           _dark={{
//             color: 'gray.50',
//           }}
//           mt="2%">
//           State / Province
//         </FormLabel>
//         <Input
//           type="text"
//           name="state"
//           id="state"
//           autoComplete="state"
//           focusBorderColor="brand.400"
//           shadow="sm"
//           size="sm"
//           w="full"
//           rounded="md"
//         />
//       </FormControl>

//       <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
//         <FormLabel
//           htmlFor="postal_code"
//           fontSize="sm"
//           fontWeight="md"
//           color="gray.700"
//           _dark={{
//             color: 'gray.50',
//           }}
//           mt="2%">
//           ZIP / Postal
//         </FormLabel>
//         <Input
//           type="text"
//           name="postal_code"
//           id="postal_code"
//           autoComplete="postal-code"
//           focusBorderColor="brand.400"
//           shadow="sm"
//           size="sm"
//           w="full"
//           rounded="md"
//         />
//       </FormControl>
//     </>
//   );
// };

// const Form3 = () => {
//   return (
//     <>
//       <Heading w="100%" textAlign={'center'} fontWeight="normal">
//         Social Handles
//       </Heading>
//       <SimpleGrid columns={1} spacing={6}>
//         <FormControl as={GridItem} colSpan={[3, 2]}>
//           <FormLabel
//             fontSize="sm"
//             fontWeight="md"
//             color="gray.700"
//             _dark={{
//               color: 'gray.50',
//             }}>
//             Website
//           </FormLabel>
//           <InputGroup size="sm">
//             <InputLeftAddon
//               bg="gray.50"
//               _dark={{
//                 bg: 'gray.800',
//               }}
//               color="gray.500"
//               rounded="md">
//               http://
//             </InputLeftAddon>
//             <Input
//               type="tel"
//               placeholder="www.example.com"
//               focusBorderColor="brand.400"
//               rounded="md"
//             />
//           </InputGroup>
//         </FormControl>

//         <FormControl id="email" mt={1}>
//           <FormLabel
//             fontSize="sm"
//             fontWeight="md"
//             color="gray.700"
//             _dark={{
//               color: 'gray.50',
//             }}>
//             About
//           </FormLabel>
//           <Textarea
//             placeholder="you@example.com"
//             rows={3}
//             shadow="sm"
//             focusBorderColor="brand.400"
//             fontSize={{
//               sm: 'sm',
//             }}
//           />
//           <FormHelperText>
//             Brief description for your profile. URLs are hyperlinked.
//           </FormHelperText>
//         </FormControl>
//       </SimpleGrid>
//     </>
//   );
// };

export default function Multistep() {
  const toast = useToast();
  const [step, setStep] = useState(20);
  
  return (
    <>
      <Box
       bg='white' 
       position={'relative'}
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={340}
    //    maxHeight={437}
        p={4}
        m="10px auto"
        as="form">
        <Progress
          hasStripe
          value={step}
          mb="5%"
          mx="5%"
          isAnimated></Progress>
        {<Form1 /> }
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
            </Flex>
            
              <Button
                w={'100%'}
                mt={'10px'}
                colorScheme="green"
                variant="solid"
                onClick={() => {
                  toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  });
                  setStep(100)
                }}>
                Start my Tax Return
              </Button>
            
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}