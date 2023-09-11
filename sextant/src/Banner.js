import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div className='mb-3'>
                <div class="banner-divider"></div>
                <div className="container">
                    <h1 className="text-center text-body-secondary my-5" >{this.props.bannerText}</h1>
                </div>
                <div class="banner-divider"></div>

            </div>
        );
    }
}

export default Banner;