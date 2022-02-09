import React from 'react';
import {
  Box,
  Button,
  ChakraProvider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  RadioGroup,
  Stack,
  Text,
  theme,
  useDisclosure,
} from '@chakra-ui/react';
import { Navbar } from './components/navbar';
import questions from './questions.json';
import { Form, Formik } from 'formik';
import RadioInput from './RadioInput';
import confetti from 'canvas-confetti';

function getDuplicates(data) {
  let dups = data.filter(
    (
      s => v =>
        s.has(v) || !s.add(v)
    )(new Set())
  );
  if (dups.length) {
    return dups[0];
  } else {
    return 'human';
  }
}

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [result, setResult] = React.useState('');

  const animals = {
    turtle: '🐢',
    cat: '🐱',
    rabbit: '🐰',
    dog: '🐶',
    human: '👽',
  };
  return (
    <ChakraProvider theme={theme}>
      <>
        <Navbar />
        <Formik
          initialValues={{
            question1: '',
            question2: '',
            question3: '',
          }}
          onSubmit={formValues => {
            const valueList = Object.values(formValues);
            onOpen();
            console.log(getDuplicates(valueList));
            setResult(getDuplicates(valueList));
          }}
        >
          {({ handleChange }) => (
            <Form>
              <Stack
                direction={'column'}
                spacing={5}
                px={{ base: 2, sm: 4 }}
                py={4}
              >
                {questions.map((question, index) => (
                  <>
                    <Text as={'b'} key={`question-title-${index}`}>
                      {question.question}
                    </Text>
                    <RadioGroup onChange={handleChange}>
                      <Stack direction={'column'}>
                        {question.answers.map((prompt, index) => (
                          <RadioInput
                            key={`${question.question}-${index}`}
                            name={question.key}
                            value={prompt['animal-type']}
                          >
                            {prompt.answer}
                          </RadioInput>
                        ))}
                      </Stack>
                    </RadioGroup>
                  </>
                ))}
                <Box>
                  <Button
                    type={'submit'}
                    onClick={() => {
                      for (let i = 0; i < 5; i++) {
                        confetti({
                          particleCount: 100,
                          startVelocity: 30,
                          spread: 360,
                          origin: {
                            x: Math.random(),
                            y: Math.random() - 0.2,
                          },
                        });
                      }
                    }}
                  >
                    Find your personality type
                  </Button>
                </Box>
              </Stack>
            </Form>
          )}
        </Formik>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Your personality result:</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>
                {result
                  ? `You are a ${result}
                ${animals[result]}!!`
                  : 'You a nobody, answer all the questions homie.'}
              </Text>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </ChakraProvider>
  );
}

export default App;
