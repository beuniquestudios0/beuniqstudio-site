import {Box, Image} from "@chakra-ui/react";
import React from "react";

const Item: React.FC<{url: string, isVideo?: boolean}> = ({url, isVideo}) => {
    return <>
        <Box
            w={{base: 'full'}}
            h={{base: '100px', md: '300px'}}
            rounded={'lg'}
            transition={'all 0.3s linear'}
            cursor={'pointer'}
            _hover={{
                boxShadow:
                `2.9px 2.3px 1.9px rgba(0, 0, 0, 0.018),
                6.8px 5.4px 4.3px rgba(0, 0, 0, 0.026),
                12.2px 9.7px 7.7px rgba(0, 0, 0, 0.032),
                20.2px 16.1px 12.8px rgba(0, 0, 0, 0.038),
                33.3px 26.5px 21.2px rgba(0, 0, 0, 0.044),
                58.3px 46.2px 37px rgba(0, 0, 0, 0.052),
                126px 100px 80px rgba(0, 0, 0, 0.07)`
            }}
        >
            {
                isVideo
                    ? <video controls={true} style={{width: '100%', height: '100%', borderRadius: '10px'}}>
                        <source src={url} type="video/mp4" />
                      </video>
                    : <Image
                        src={url}
                        objectFit={"cover"}
                        w={'full'}
                        h={'full'}
                        rounded={'lg'}
                    />
            }
        </Box>
    </>
}

export default Item;