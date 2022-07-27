import styled from 'styled-components/native';

const List = styled.View`
    overflow: auto;
`;

export const RegularList = ({
    items,
    resourceName,
    itemComponent: ItemComponent
}) => {
    return (
        <List>
            {items.map((item, i) => (
                <ItemComponent key={i} {...{ [resourceName]: item}} />
            ))}
        </List>
    );
}
