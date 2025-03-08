// import {LogoSize} from "@repo/types"

// export default function Logo({size} : {size : LogoSize}) {
    // let width = 50;
    // let height = 50;

    // if(size === LogoSize.small) {
    //     width = 50;
    //     height = 50;
    // } else if(size === LogoSize.medium) {
    //     width = 100;
    //     height = 100;
    // } else if(size === LogoSize.large) {
    //     width = 150;
    //     height = 150;
    // } else if(size === LogoSize.extralarge) {
    //     width = 200;
    //     height = 200;
    // }
export default function Logo() {
    return (
        <img src="logo.svg" alt="Logo" width={50} height={50} />
    );
}
