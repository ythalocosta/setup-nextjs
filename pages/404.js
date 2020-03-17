export default function Custom404() {
    return (
        <div>
            <style global jsx>{`
                html, body {
                width:100%;
                height:100%;
                }

                body {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                min-height: 100vh;
                background-color: #003cb5;
                overflow: hidden;
                }

                body:before,
                body:after {
                    content: "";
                    position: absolute;
                    left: 50%;
                    min-width: 300vw;
                    min-height: 300vw;
                    background-color: #33c2fd;
                    animation-name: rotate;
                    animation-iteration-count: infinite;
                    animation-timing-function: linear;
                }

                body:before {
                    bottom: 15vh;
                    border-radius: 45%;
                    animation-duration: 10s;
                }

                body:after {
                    bottom: 12vh;
                    opacity: .5;
                    border-radius: 47%;
                    animation-duration: 10s;
                }

                @keyframes rotate {
                0% {transform: translate(-50%, 0) rotateZ(0deg);}
                50% {transform: translate(-50%, -2%) rotateZ(180deg);}
                100% {transform: translate(-50%, 0%) rotateZ(360deg);}
                }

                h1, h2 {
                color: #ffffff;
                z-index: 10;
                margin: 0;
                font-weight: 300;
                line-height: 1.3;
                text-align: center;
                }

                h1 {
                margin-top:24px;
                font-size: 66px;
                font-weight:700;
                text-align:center;
                }

                h2 {
                font-size: 22px;
                text-align:center;
                }

                .circle {
                position: relative;
                overflow: hidden;
                width: 180px;
                height: 180px;
                border-radius: 100%;
                background: transparant;
                box-shadow: #E94E3D;
                z-index:99;
                }
            `}</style>
            <div className="spin circle">
                <h1>404</h1>
                <h2>NOT FOUND</h2>
            </div>
        </div>
    )
}
