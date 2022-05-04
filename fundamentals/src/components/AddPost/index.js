import React, { useEffect } from "react";
import PropTypes from "proptypes";

import * as S from './styles'

function AddPost({ handleAddPost }) {

    useEffect(() => {
        function handleScroll() {
            console.debug('scroll');
        }

        document.addEventListener('scroll', handleScroll)

        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <S.Header as="h2">Header h2 - importado do componente Title</S.Header>
            <button onClick={handleAddPost}>Adicionar Post</button>
        </>
    );
}

AddPost.propTypes = {
    handleAddPost: PropTypes.func.isRequired,
};

export default AddPost;