export default function CardMenu({ children, onSelect, isSelected }) {
    console.log('TABBUTTON COMPONENT EXECUTING');
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
                {children}
            </button>
        </li>
    );
}