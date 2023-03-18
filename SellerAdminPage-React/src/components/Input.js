import { useRef, forwardRef, useImperativeHandle } from "react";

const Input = forwardRef((props, ref) => {
    const inputRef = useRef();

    const activate = () => {
        inputRef.current.focus();
    };

    useImperativeHandle(ref, () => {
        return {
            focus: activate,
        };
    });

    return (
        <div class="input-group">
            <span class="input-group-text">
                <i class={props.iconClass}></i>
            </span>
            <input
                ref={inputRef}
                id={props.inputId}
                type={props.inputType}
                class="form-control"
                value={props.value}
                placeholder={props.inputPlaceHolder}
                onChange={props.onChange}
            />
        </div>
    );
});

export default Input;
