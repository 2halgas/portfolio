import { useTheme } from 'next-themes';
import React, { FC } from 'react'
import { colors, FontSize, LineHeight } from 'src/common/dictionaries';
import { P, H3, Button  } from 'src/components/atoms';
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { StyledUtils } from 'src/common/utils';
import { TextAttributes } from 'src/common/types';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().max(200).required(),
  });
const StyledTextArea = styled.textarea`
${({
        color,
        fontSize="14px",
        fontWeight=300,
        lineHeight="16px",
    }: TextAttributes) => `
  ${StyledUtils.createTextTemplate({
        color, fontSize, fontWeight, lineHeight,
    })}

    width: 300px;
    height: 150px;
    padding: 15px;
    background-color: ${colors.shades.dark.dark300};
    border-radius: 5px;
    border: 1px solid ${colors.shades.dark.dark100};
    transition: all 0.2s linear;
    -webkit-appearance: none;
    resize: none;
  
    ::placeholder {
      color: white;
      opacity: 1;
    }

    :focus {
      outline: 0;
      border: 1px solid rgba(255, 255, 255, 0.2);
      background-color: ${colors.shades.dark.dark600};
      color: ${colors.text.primary}
    }
`}
`;
const StyledInput = styled.input`
${({
        color,
        fontSize="14px",
        fontWeight=300,
        lineHeight="16px",
    }: TextAttributes) => `
  ${StyledUtils.createTextTemplate({
        color, fontSize, fontWeight, lineHeight,
    })}

    width: 300px;
    height: 40px;
    padding: 15px;
    background-color: ${colors.shades.dark.dark300};
    border-radius: 5px;
    border: 1px solid ${colors.shades.dark.dark100};
    transition: all 0.2s linear;
    -webkit-appearance: none;
  
    ::placeholder {
        color: white;
        opacity: 1;
    }

    :focus {
        outline: 0;
        border: 1px solid rgba(255, 255, 255, 0.2);
        background-color: ${colors.shades.dark.dark600};
        color: ${colors.text.primary}
    }
`}
`;

const ErrorP = styled(P)`
    color: ${colors.states.error};
    font-size: ${FontSize.Small};
    line-height: ${LineHeight.Small};
    font-family: "PoppinsRegular";
    margin-top: 5px;
`;

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: rgba(122, 122, 138, 0.2);
    border: 1px solid #545569;
    box-sizing: border-box;
    backdrop-filter: blur(24px);
    border-radius: 5px;
    text-align: justify;
`;


type Inputs = {
    name: string;
    email: string;
    subject?: string;
    message: string;
};

export const ContactSection: FC = () => {
const { theme } = useTheme()
const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

const onSubmit = (data: any) => {
    fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
          console.log('Response succeeded!')
        }
      });
      reset();
  };

return (
    <Wrapper id='contact' className='my-3 p-md-3'>
        <H3  
            color={theme === 'light' ? colors.text.secondary : colors.text.primary } 
            className='mb-3 pt-4'
        >Contact</H3>
        <P 
        color={theme === 'light' ? colors.text.secondary : colors.text.primary }
        className='text-center col-11 col-md-10'
        >
Let's be in touch! 
        </P>
        <form onSubmit={handleSubmit(onSubmit)} className='my-3 d-flex flex-column justify-content-center'>
        <div className='d-flex flex-column justify-content-center'>
            <P
            color={theme === 'light' ? colors.text.secondary : colors.text.primary }
            >Name</P>
            <StyledInput
                type="text"
                {...register('name', { required: true, maxLength: 20 })}
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            />
            <ErrorP>{errors.name?.message}</ErrorP>
        </div>
        <div className='d-flex flex-column justify-content-center'>
            <P
            color={theme === 'light' ? colors.text.secondary : colors.text.primary }
            >Email</P>
            <StyledInput
                type="text"
                {...register('email', { required: true })}
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            />
            <ErrorP>{errors.email?.message}</ErrorP>
        </div>
        <div className='d-flex flex-column justify-content-center'>
            <P
            color={theme === 'light' ? colors.text.secondary : colors.text.primary }
            >Subject</P>
            <StyledInput
                type="text"
                {...register('subject')}
                className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
            />
            <ErrorP>{errors.subject?.message}</ErrorP>
        </div>
        <div className='d-flex flex-column justify-content-center'>
            <P
            color={theme === 'light' ? colors.text.secondary : colors.text.primary }
            >Message</P>
            <StyledTextArea 
                {...register('message', { required: true })}
                className={`form-control ${errors.subject ? 'is-invalid' : ''}`} 
            />
            <ErrorP>{errors.message?.message}</ErrorP>
        </div>
        <div className='my-2 d-flex justify-content-center'>
          <Button size='sm' backgroundColor={colors.shades.dark.dark300} type="submit" >Send Message</Button>
        </div>
      </form>
    </Wrapper>
  )}
