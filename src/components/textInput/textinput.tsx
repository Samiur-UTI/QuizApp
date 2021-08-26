import { TextField } from '@material-ui/core'
import { useField } from 'formik';
import './textInput.scss'
interface Props {
    name: string;
    type: string;
    variant: 'filled'|'outlined'|'standard';
    label: string;
}
interface Config {
    name:string;
    type:string;
    variant: 'filled'|'outlined'|'standard';
    className: string
    fullWidth: boolean;
    error?: boolean;
    helperText?: string;
}
const Textinput = ({name,type,variant,label}: Props) => {
    const [field,meta] = useField(name)
    const textFieldConfig: Config = {
        ...field,
        name,
        type,
        variant,
        className:'form-field',
        fullWidth: true
    }
    if(meta && meta.touched && meta.error){
        textFieldConfig.error = true;
        textFieldConfig.helperText = meta.error
    }
    return (
        <div className='form-field'>
            <TextField {...textFieldConfig} label={<>
            <span className='text-label'>{label}</span></>}/>
        </div>
    )
}

export default Textinput
