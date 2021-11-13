// 1. Create a component that consumes the `useRadio` hook
import {useRadio, useRadioGroup} from "@chakra-ui/radio";
import {Box, HStack} from "@chakra-ui/react";

function RadioCard(props: any) {
    const { getInputProps, getCheckboxProps } = useRadio(props)

    const input = getInputProps()
    const checkbox = getCheckboxProps()

    return (
        <Box as="label">
            <input {...input} />
            <Box
                {...checkbox}
                cursor="pointer"
                borderWidth="1px"
                borderRadius="md"
                boxShadow="md"
                _checked={{
                    bgGradient:"linear(to-r, red.400,pink.400)",
                    color: "white",
                }}
                _focus={{
                    boxShadow: "outline",
                }}
                px={5}
                py={3}
            >
                {props.children}
            </Box>
        </Box>
    )
}

export default RadioCard;