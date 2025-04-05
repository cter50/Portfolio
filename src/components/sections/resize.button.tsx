
interface IProps{
    btnText?: string;
    btnIcons?: React.ReactNode;
    btnStyle?: React.CSSProperties;
    onclick?: () => void;
}
const ResizeButton = (props: IProps) => {
    const { btnText, btnIcons, btnStyle , onclick} = props;

    return (
        <button
        onClick={onclick}
        className="resize-button" style={btnStyle}>
            <span style={{ textTransform: "uppercase" }}>{btnText}</span>
            <>{btnIcons}</>
        </button>
    )
}

export default ResizeButton;