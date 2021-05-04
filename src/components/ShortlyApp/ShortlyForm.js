import React, { useState } from 'react';
import { ShortlyFormContainer, ShortlyFormWrap, TryShortlyForm, TryShortlyFormControl } from './ShortlyAppElements';
import {
    HiddenLabel, FormInput, FormError, SubmitButton
} from '../Forms';

const ShortlyForm = ({ onUrlSubmit }) => {
    const [ url, setUrl ] = useState('');
    const [ formError, setFormError ] = useState('');
    const [ isValid, setIsValid ] = useState(true);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!url || !url.trim()) {
            setFormError('Please add a link')
            setIsValid(false);
        } else {
            setFormError('');
            setIsValid(true);
            onUrlSubmit(url);
        }

        setUrl('');
    }

    return (
        <ShortlyFormContainer>
            <ShortlyFormWrap>
            <TryShortlyForm onSubmit={handleSubmit}>
                <TryShortlyFormControl>
                    <HiddenLabel htmlFor='url'>Shorten a link here </HiddenLabel>
                    <FormInput 
                    type='text'
                    id='url'
                    placeholder='Shorten a link here...'
                    value={ url }
                    onChange={ e => setUrl(e.target.value)} 
                    isValid={isValid}
                    />
                    { formError ? <FormError>{formError}</FormError> : null }
                </TryShortlyFormControl>
                <SubmitButton>Shorten It!</SubmitButton>
            </TryShortlyForm>
            </ShortlyFormWrap>

        </ShortlyFormContainer>

    )
}

export default ShortlyForm
