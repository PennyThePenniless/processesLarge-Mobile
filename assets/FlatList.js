import styled from "styled-components";

const List = styled.View`
    overflow: auto;
`;

export const FlatList = ({
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
