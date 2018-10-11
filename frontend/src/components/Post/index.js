import React from 'react';
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from 'reactstrap';

type PostObject = {
    post: object
}

const Post = (props: PostObject) => {
    const { title, body, author } = props.post
    console.log(props)
    return (
        <Card style={{flex: 1, width: '60%'}}>
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardSubtitle>{author}</CardSubtitle>
                <CardText>{body}</CardText>
                <Button>Gostei</Button>{`    `}
                <Button>Não Gostei</Button>
            </CardBody>
        </Card>
    );
};

export default Post;