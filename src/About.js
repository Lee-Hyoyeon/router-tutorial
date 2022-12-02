import qs from 'qs';
import React from 'react';
import { useLocation } from 'react-router-dom';

const About = () => {
    const location = useLocation();
    console.log('location:', location);

    const type = qs.parse(location.search, {
        ignoreQueryPrefix: true, //url 에서 ?를 생략하게 해줌
    });
    console.log('type: ', type);

    const showDetail = type.detail === 'true';
    //true, false 값.
    console.log('showDetail:', showDetail);

    return (
        <>
            <h1> 소개 </h1>
            {showDetail && <p> detail is true!!!!</p>}
            {showDetail || <p> detail is false!!!!</p>}
        </>
    );
};

export default About;
