import { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './input.component';

const meta: Meta<InputComponent> = {
    component: InputComponent,
    title: 'input'
}

export default meta

interface StoryInputComponentProps{
    text: string;
    icon: string;
}

type Story = StoryObj<InputComponent & StoryInputComponentProps>;

export const inputComponet:Story = {
    render: (props)=>({
        props,
        template: `<lib-input></lib-input>`
    })  
}