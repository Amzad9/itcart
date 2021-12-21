import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './Comparison.scss'
const Comparison = () => {
    return (
        <section className="py-0 comparison">
            <Container fluid="xxl" className="bg-warning rounded-8 px-6 pt-5 pb-5">
                <Row className="mb-5">
                    <Col>
                        <h2>Comparison</h2>
                    </Col>
                </Row>
                <Row className="jsutify-content-center mb-5">
                    <Col className="text-end">
                        <h4>Regular IT  Solutions</h4>
                    </Col>
                    <Col md={2} className="text-center">
                        <h3 className="text-secondary fw-semibold">V/S</h3>
                    </Col>
                    <Col className="text-start">
                        <h4>IT Cart  Solutions</h4>
                    </Col>
                </Row>
                {/* <Row  className="justify-content-center">
                    <Col md={12} lg={10}>
                       <div className="d-flex justify-content-center align-items-center ms-1">
                            <div className="bg-white shadow-sm py-2 br-left pe-8 position-relative text-end col-6 col-md-4">
                                <h6 className="mb-0 fw-500">High Cost</h6>
                                <div className="circle">
                                    <div>
                                        <svg width="15" height="26" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.59411 0.0371094C8.1784 0.0371094 8.65207 0.51077 8.65207 1.09506V24.37C8.65207 24.9543 8.1784 25.4279 7.59411 25.4279C7.00982 25.4279 6.53616 24.9543 6.53616 24.37V1.09506C6.53616 0.51077 7.00982 0.0371094 7.59411 0.0371094Z" fill="#404040"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.58288 5.66393C2.4757 4.77111 3.68662 4.26953 4.94926 4.26953H12.8839C13.4682 4.26953 13.9418 4.74319 13.9418 5.32748C13.9418 5.91177 13.4682 6.38543 12.8839 6.38543H4.94926C4.24779 6.38543 3.57506 6.66409 3.07905 7.1601C2.58303 7.65611 2.30438 8.32885 2.30438 9.03031C2.30438 9.73178 2.58303 10.4045 3.07905 10.9005C3.57506 11.3965 4.24779 11.6752 4.94926 11.6752H10.239C11.5016 11.6752 12.7126 12.1768 13.6054 13.0696C14.4982 13.9624 14.9998 15.1733 14.9998 16.436C14.9998 17.6986 14.4982 18.9095 13.6054 19.8023C12.7126 20.6952 11.5016 21.1967 10.239 21.1967H1.24643C0.662137 21.1967 0.188477 20.7231 0.188477 20.1388C0.188477 19.5545 0.662137 19.0808 1.24643 19.0808H10.239C10.9405 19.0808 11.6132 18.8022 12.1092 18.3062C12.6052 17.8102 12.8839 17.1374 12.8839 16.436C12.8839 15.7345 12.6052 15.0618 12.1092 14.5658C11.6132 14.0697 10.9405 13.7911 10.239 13.7911H4.94926C3.68662 13.7911 2.4757 13.2895 1.58288 12.3967C0.690058 11.5039 0.188477 10.2929 0.188477 9.03031C0.188477 7.76767 0.690058 6.55675 1.58288 5.66393Z" fill="#404040"/>
                                        </svg>

                                    </div>
                                </div>
                            </div>
                            <div className="bg-secondary shadow-sm py-2 text-start ps-8 text-white br-right col-6 col-md-4"><h6 className="mb-0 fw-500">Affordable</h6></div>
                       </div>
                    </Col>
                    <Col md={12} lg={10} className="mt-4">
                       <div className="d-flex justify-content-center align-items-center ms-1">
                            <div className="bg-white shadow-sm py-2 br-left pe-8 position-relative text-end col-6 col-md-4">
                                <h6 className="mb-0 fw-500">Complex for end users</h6>
                                <div className="circle">
                                    <div>
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12.0895C0 5.41489 5.41489 0 12.0895 0C18.7641 0 24.1789 5.41489 24.1789 12.0895C24.1789 18.7641 18.7641 24.1789 12.0895 24.1789C5.41489 24.1789 0 18.7641 0 12.0895ZM12.0895 1.85992C6.44209 1.85992 1.85992 6.44209 1.85992 12.0895C1.85992 17.7368 6.44209 22.319 12.0895 22.319C17.7368 22.319 22.319 17.7368 22.319 12.0895C22.319 6.44209 17.7368 1.85992 12.0895 1.85992Z" fill="#404040"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2674 6.72767C18.6606 7.05802 18.7116 7.64462 18.3813 8.03789L10.5696 17.3375C10.3965 17.5436 10.1426 17.6646 9.87344 17.6692C9.60431 17.6738 9.34639 17.5615 9.16633 17.3614L5.81848 13.6416C5.47489 13.2599 5.50584 12.6718 5.8876 12.3283C6.26936 11.9847 6.85736 12.0156 7.20094 12.3974L9.83336 15.3223L16.9571 6.8416C17.2875 6.44834 17.8741 6.39733 18.2674 6.72767Z" fill="#404040"/>
                                        </svg>

                                    </div>
                                </div>
                            </div>
                            <div className="bg-secondary shadow-sm py-2 text-start ps-8 text-white br-right col-6 col-md-4"><h6 className="mb-0 fw-500">Easy to use</h6></div>
                       </div>
                    </Col>
                    <Col md={12} lg={10} className="mt-4">
                       <div className="d-flex justify-content-center align-items-center ms-1">
                            <div className="bg-white shadow-sm py-2 br-left pe-8 position-relative text-end col-6 col-md-4">
                                <h6 className="mb-0 fw-500">Irregular Support</h6>
                                <div className="circle">
                                    <div>
                                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.57976 3.71929C4.55256 3.71929 3.71984 4.55201 3.71984 5.57921V20.4586C3.71984 21.4858 4.55256 22.3185 5.57976 22.3185H20.4591C21.4863 22.3185 22.319 21.4858 22.319 20.4586V5.57921C22.319 4.55201 21.4863 3.71929 20.4591 3.71929H5.57976ZM1.85992 5.57921C1.85992 3.5248 3.52535 1.85938 5.57976 1.85938H20.4591C22.5135 1.85938 24.1789 3.5248 24.1789 5.57921V20.4586C24.1789 22.513 22.5135 24.1784 20.4591 24.1784H5.57976C3.52535 24.1784 1.85992 22.513 1.85992 20.4586V5.57921Z" fill="#404040"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.57974 7.44C5.57974 6.41279 6.41246 5.58008 7.43966 5.58008H18.5992C19.6264 5.58008 20.4591 6.41279 20.4591 7.44V18.5995C20.4591 19.6267 19.6264 20.4594 18.5992 20.4594H7.43966C6.41246 20.4594 5.57974 19.6267 5.57974 18.5995V7.44ZM18.5992 7.44H7.43966V18.5995H18.5992V7.44Z" fill="#404040"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.36963 0C8.88324 0 9.29959 0.416357 9.29959 0.929959V2.78988C9.29959 3.30348 8.88324 3.71984 8.36963 3.71984C7.85603 3.71984 7.43967 3.30348 7.43967 2.78988V0.929959C7.43967 0.416357 7.85603 0 8.36963 0ZM13.0194 0C13.533 0 13.9494 0.416357 13.9494 0.929959V2.78988C13.9494 3.30348 13.533 3.71984 13.0194 3.71984C12.5058 3.71984 12.0895 3.30348 12.0895 2.78988V0.929959C12.0895 0.416357 12.5058 0 13.0194 0ZM17.6692 0C18.1828 0 18.5992 0.416357 18.5992 0.929959V2.78988C18.5992 3.30348 18.1828 3.71984 17.6692 3.71984C17.1556 3.71984 16.7393 3.30348 16.7393 2.78988V0.929959C16.7393 0.416357 17.1556 0 17.6692 0ZM0 8.36963C0 7.85603 0.416357 7.43967 0.929959 7.43967H2.78988C3.30348 7.43967 3.71984 7.85603 3.71984 8.36963C3.71984 8.88324 3.30348 9.29959 2.78988 9.29959H0.929959C0.416357 9.29959 0 8.88324 0 8.36963ZM22.319 8.36963C22.319 7.85603 22.7354 7.43967 23.249 7.43967H25.1089C25.6225 7.43967 26.0389 7.85603 26.0389 8.36963C26.0389 8.88324 25.6225 9.29959 25.1089 9.29959H23.249C22.7354 9.29959 22.319 8.88324 22.319 8.36963ZM0 13.0194C0 12.5058 0.416357 12.0895 0.929959 12.0895H2.78988C3.30348 12.0895 3.71984 12.5058 3.71984 13.0194C3.71984 13.533 3.30348 13.9494 2.78988 13.9494H0.929959C0.416357 13.9494 0 13.533 0 13.0194ZM22.319 13.0194C22.319 12.5058 22.7354 12.0895 23.249 12.0895H25.1089C25.6225 12.0895 26.0389 12.5058 26.0389 13.0194C26.0389 13.533 25.6225 13.9494 25.1089 13.9494H23.249C22.7354 13.9494 22.319 13.533 22.319 13.0194ZM0 17.6692C0 17.1556 0.416357 16.7393 0.929959 16.7393H2.78988C3.30348 16.7393 3.71984 17.1556 3.71984 17.6692C3.71984 18.1828 3.30348 18.5992 2.78988 18.5992H0.929959C0.416357 18.5992 0 18.1828 0 17.6692ZM22.319 17.6692C22.319 17.1556 22.7354 16.7393 23.249 16.7393H25.1089C25.6225 16.7393 26.0389 17.1556 26.0389 17.6692C26.0389 18.1828 25.6225 18.5992 25.1089 18.5992H23.249C22.7354 18.5992 22.319 18.1828 22.319 17.6692ZM8.36963 22.319C8.88324 22.319 9.29959 22.7354 9.29959 23.249V25.1089C9.29959 25.6225 8.88324 26.0389 8.36963 26.0389C7.85603 26.0389 7.43967 25.6225 7.43967 25.1089V23.249C7.43967 22.7354 7.85603 22.319 8.36963 22.319ZM13.0194 22.319C13.533 22.319 13.9494 22.7354 13.9494 23.249V25.1089C13.9494 25.6225 13.533 26.0389 13.0194 26.0389C12.5058 26.0389 12.0895 25.6225 12.0895 25.1089V23.249C12.0895 22.7354 12.5058 22.319 13.0194 22.319ZM17.6692 22.319C18.1828 22.319 18.5992 22.7354 18.5992 23.249V25.1089C18.5992 25.6225 18.1828 26.0389 17.6692 26.0389C17.1556 26.0389 16.7393 25.6225 16.7393 25.1089V23.249C16.7393 22.7354 17.1556 22.319 17.6692 22.319Z" fill="#404040"/>
                                    </svg>

                                    </div>
                                </div>
                            </div>
                            <div className="bg-secondary shadow-sm py-2 text-start ps-8 text-white br-right col-6 col-md-4"><h6 className="mb-0 fw-500">Solid Support System</h6></div>
                       </div>
                    </Col>
                    <Col md={12} lg={10} className="mt-4">
                       <div className="d-flex justify-content-center align-items-center ms-1">
                            <div className="bg-white shadow-sm py-2 br-left pe-8 position-relative text-end col-6 col-md-4">
                                <h6 className="mb-0 fw-500">System Issues/Breakdowns</h6>
                                <div className="circle">
                                    <div>
                                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2781 7.66826C18.6665 8.0044 18.7088 8.5917 18.3726 8.98002L11.9326 16.4197C11.7647 16.6137 11.5241 16.7297 11.2677 16.7402C11.0114 16.7508 10.762 16.6549 10.5787 16.4754L7.71911 13.6738C7.35223 13.3144 7.34618 12.7256 7.7056 12.3588C8.06503 11.9919 8.65381 11.9858 9.0207 12.3453L11.1738 14.4546L16.9664 7.76274C17.3025 7.37442 17.8898 7.33212 18.2781 7.66826Z" fill="#404040"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6369 0.0824231C12.8803 -0.0274744 13.1591 -0.0274744 13.4025 0.0824231C18.026 2.17049 20.1015 2.83762 25.2211 3.75595C25.6426 3.83157 25.958 4.18531 25.985 4.61274C26.9678 20.1903 14.326 25.5853 13.3671 25.9715C13.1442 26.0613 12.8952 26.0613 12.6723 25.9715C11.7134 25.5853 -0.928424 20.1903 0.0544271 4.61274C0.0813954 4.18531 0.396794 3.83157 0.818347 3.75595C5.9379 2.83762 8.01341 2.17049 12.6369 0.0824231ZM1.87525 5.45379C1.43676 18.1415 10.9472 23.1565 13.0197 24.0964C15.0922 23.1565 24.6026 18.1415 24.1641 5.45379C19.5377 4.59493 17.3 3.86756 13.0197 1.9497C8.73944 3.86756 6.50169 4.59493 1.87525 5.45379Z" fill="#404040"/>
                                        </svg>

                                    </div>
                                </div>
                            </div>
                            <div className="bg-secondary shadow-sm py-2 text-start ps-8 text-white br-right col-6 col-md-4"><h6 className="mb-0 fw-500">Robust Development</h6></div>
                       </div>
                    </Col>
                    <Col md={12} lg={10} className="mt-4">
                       <div className="d-flex justify-content-center align-items-center ms-1">
                            <div className="bg-white shadow-sm py-2 br-left pe-8 position-relative text-end col-6 col-md-4">
                                <h6 className="mb-0 fw-500">Dimensional Development</h6>
                                <div className="circle">
                                    <div>
                                    <svg width="30" height="21" viewBox="0 0 30 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.86396 2.73446C1.88256 2.71651 1.95535 2.66115 2.16324 2.61534C2.45672 2.55066 2.90227 2.53476 3.5158 2.60531C4.73583 2.7456 6.40429 3.2008 8.37746 3.95538L9.04181 2.21816C7.00105 1.43773 5.16821 0.923149 3.72827 0.75757C3.01181 0.675185 2.3377 0.672334 1.76294 0.799004C1.19023 0.925223 0.595911 1.21048 0.253548 1.80195L0.253419 1.80217C-0.0193775 2.27375 -0.0434566 2.79249 0.0480426 3.26172C0.13797 3.72289 0.347244 4.18708 0.616258 4.63547C1.15456 5.5327 2.03425 6.53345 3.14239 7.57353C5.36978 9.66413 8.67762 12.0591 12.5371 14.2831C16.3966 16.507 20.1287 18.1684 23.0564 19.048C24.513 19.4856 25.821 19.7453 26.8684 19.7618C27.3917 19.77 27.8986 19.7187 28.3431 19.566C28.7951 19.4107 29.2325 19.131 29.5052 18.6597L29.5054 18.6593C29.8522 18.0594 29.797 17.393 29.6138 16.8281C29.4298 16.2606 29.0805 15.671 28.639 15.0839C27.7514 13.9038 26.3534 12.5549 24.6145 11.1595L23.4504 12.6101C25.1331 13.9604 26.3975 15.1979 27.1526 16.2019C27.5324 16.7069 27.7495 17.1087 27.8446 17.4017C27.9121 17.6101 27.9004 17.7029 27.8941 17.7284C27.8806 17.7413 27.8393 17.7724 27.7387 17.807C27.5704 17.8648 27.2983 17.9084 26.8976 17.9021C26.0967 17.8895 24.9759 17.6826 23.5916 17.2667C20.8374 16.4392 17.2388 14.8457 13.4657 12.6716C9.69254 10.4974 6.51042 8.18389 4.41525 6.21739C3.3621 5.22892 2.62235 4.36398 2.21116 3.6786C2.00542 3.33568 1.90742 3.07932 1.87358 2.90575C1.85356 2.80311 1.85967 2.7525 1.86396 2.73446ZM1.85865 2.74038C1.85858 2.74034 1.8592 2.73945 1.86068 2.73781C1.85946 2.7396 1.85872 2.74042 1.85865 2.74038ZM27.8916 17.736C27.8915 17.736 27.8919 17.7349 27.8928 17.7329C27.8921 17.7351 27.8917 17.7361 27.8916 17.736ZM27.8971 17.7254C27.8986 17.7232 27.8995 17.7221 27.8996 17.7222C27.8997 17.7223 27.8989 17.7234 27.8971 17.7254ZM1.86503 2.73042C1.86587 2.72765 1.86649 2.72641 1.86659 2.72648C1.86669 2.72656 1.86628 2.72794 1.86503 2.73042Z" fill="#404040"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8793 1.85992C10.2569 1.85992 6.50967 5.60713 6.50967 10.2296C6.50967 14.852 10.2569 18.5992 14.8793 18.5992C19.5017 18.5992 23.2489 14.852 23.2489 10.2296C23.2489 5.60713 19.5017 1.85992 14.8793 1.85992ZM4.64975 10.2296C4.64975 4.57993 9.22968 0 14.8793 0C20.5289 0 25.1089 4.57993 25.1089 10.2296C25.1089 15.8792 20.5289 20.4591 14.8793 20.4591C9.22968 20.4591 4.64975 15.8792 4.64975 10.2296Z" fill="#404040"/>
                                    </svg>

                                    </div>
                                </div>
                            </div>
                            <div className="bg-secondary shadow-sm py-2 text-start ps-8 text-white br-right col-6 col-md-4"><h6 className="mb-0 fw-500">360° Technology Consultation</h6></div>
                       </div>
                    </Col>
                </Row> */}
                <Row className="justify-content-center">
                    <Col md={12} lg={5}>

                        <div className="d-flex justify-content-center align-items-center ms-1">
                            <div className="bg-white shadow-sm py-2 ps-2 ps-md-4 br-left position-relative" style={{ width: '215px' }}>
                                <h6 className="mb-0">High Cost</h6>

                                <div className="circle">
                                    <div>
                                        <svg width="15" height="26" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.59411 0.0371094C8.1784 0.0371094 8.65207 0.51077 8.65207 1.09506V24.37C8.65207 24.9543 8.1784 25.4279 7.59411 25.4279C7.00982 25.4279 6.53616 24.9543 6.53616 24.37V1.09506C6.53616 0.51077 7.00982 0.0371094 7.59411 0.0371094Z" fill="#404040" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.58288 5.66393C2.4757 4.77111 3.68662 4.26953 4.94926 4.26953H12.8839C13.4682 4.26953 13.9418 4.74319 13.9418 5.32748C13.9418 5.91177 13.4682 6.38543 12.8839 6.38543H4.94926C4.24779 6.38543 3.57506 6.66409 3.07905 7.1601C2.58303 7.65611 2.30438 8.32885 2.30438 9.03031C2.30438 9.73178 2.58303 10.4045 3.07905 10.9005C3.57506 11.3965 4.24779 11.6752 4.94926 11.6752H10.239C11.5016 11.6752 12.7126 12.1768 13.6054 13.0696C14.4982 13.9624 14.9998 15.1733 14.9998 16.436C14.9998 17.6986 14.4982 18.9095 13.6054 19.8023C12.7126 20.6952 11.5016 21.1967 10.239 21.1967H1.24643C0.662137 21.1967 0.188477 20.7231 0.188477 20.1388C0.188477 19.5545 0.662137 19.0808 1.24643 19.0808H10.239C10.9405 19.0808 11.6132 18.8022 12.1092 18.3062C12.6052 17.8102 12.8839 17.1374 12.8839 16.436C12.8839 15.7345 12.6052 15.0618 12.1092 14.5658C11.6132 14.0697 10.9405 13.7911 10.239 13.7911H4.94926C3.68662 13.7911 2.4757 13.2895 1.58288 12.3967C0.690058 11.5039 0.188477 10.2929 0.188477 9.03031C0.188477 7.76767 0.690058 6.55675 1.58288 5.66393Z" fill="#404040" />
                                        </svg>

                                    </div>
                                </div>
                            </div>
                            <div className="bg-secondary shadow-sm py-2 text-end pe-2 pe-md-4 text-white br-right" style={{ width: '212px' }}><h6 className="mb-0">Affordable</h6></div>

                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-4">

                    <Col md={12} lg={8}>
                        <div className="d-flex justify-content-center align-items-center pe-0 pe-md-5 me-0 me-md-5">
                            <div className="bg-white shadow-sm py-2 ps-2 ps-md-4 br-left position-relative" style={{ width: '320px' }}>
                                <h6 className="mb-0 fw-500">Complex for end users</h6>
                                <div className="circle">
                                    <div>
                                        <svg width="15" height="26" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.59411 0.0371094C8.1784 0.0371094 8.65207 0.51077 8.65207 1.09506V24.37C8.65207 24.9543 8.1784 25.4279 7.59411 25.4279C7.00982 25.4279 6.53616 24.9543 6.53616 24.37V1.09506C6.53616 0.51077 7.00982 0.0371094 7.59411 0.0371094Z" fill="#404040" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.58288 5.66393C2.4757 4.77111 3.68662 4.26953 4.94926 4.26953H12.8839C13.4682 4.26953 13.9418 4.74319 13.9418 5.32748C13.9418 5.91177 13.4682 6.38543 12.8839 6.38543H4.94926C4.24779 6.38543 3.57506 6.66409 3.07905 7.1601C2.58303 7.65611 2.30438 8.32885 2.30438 9.03031C2.30438 9.73178 2.58303 10.4045 3.07905 10.9005C3.57506 11.3965 4.24779 11.6752 4.94926 11.6752H10.239C11.5016 11.6752 12.7126 12.1768 13.6054 13.0696C14.4982 13.9624 14.9998 15.1733 14.9998 16.436C14.9998 17.6986 14.4982 18.9095 13.6054 19.8023C12.7126 20.6952 11.5016 21.1967 10.239 21.1967H1.24643C0.662137 21.1967 0.188477 20.7231 0.188477 20.1388C0.188477 19.5545 0.662137 19.0808 1.24643 19.0808H10.239C10.9405 19.0808 11.6132 18.8022 12.1092 18.3062C12.6052 17.8102 12.8839 17.1374 12.8839 16.436C12.8839 15.7345 12.6052 15.0618 12.1092 14.5658C11.6132 14.0697 10.9405 13.7911 10.239 13.7911H4.94926C3.68662 13.7911 2.4757 13.2895 1.58288 12.3967C0.690058 11.5039 0.188477 10.2929 0.188477 9.03031C0.188477 7.76767 0.690058 6.55675 1.58288 5.66393Z" fill="#404040" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-secondary shadow-sm py-2 text-end pe-2 pe-md-4 text-white br-right" style={{ width: '219px' }}><h6 className="mb-0">Easy to use</h6></div>
                        </div>

                    </Col>
                </Row>
                <Row className="justify-content-center">


                    <Col md={12} lg={10} className="mt-4">
                        <div className="d-flex justify-content-center align-items-center ms-0 ms-md-4 ps-1">
                            <div className="bg-white shadow-sm py-2 ps-2 ps-md-4 br-left position-relative" style={{ width: '281px' }}>
                                <h6 className="mb-0 fw-500">Irregular Support</h6>
                                <div className="circle">
                                    <div>
                                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.57976 3.71929C4.55256 3.71929 3.71984 4.55201 3.71984 5.57921V20.4586C3.71984 21.4858 4.55256 22.3185 5.57976 22.3185H20.4591C21.4863 22.3185 22.319 21.4858 22.319 20.4586V5.57921C22.319 4.55201 21.4863 3.71929 20.4591 3.71929H5.57976ZM1.85992 5.57921C1.85992 3.5248 3.52535 1.85938 5.57976 1.85938H20.4591C22.5135 1.85938 24.1789 3.5248 24.1789 5.57921V20.4586C24.1789 22.513 22.5135 24.1784 20.4591 24.1784H5.57976C3.52535 24.1784 1.85992 22.513 1.85992 20.4586V5.57921Z" fill="#404040" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.57974 7.44C5.57974 6.41279 6.41246 5.58008 7.43966 5.58008H18.5992C19.6264 5.58008 20.4591 6.41279 20.4591 7.44V18.5995C20.4591 19.6267 19.6264 20.4594 18.5992 20.4594H7.43966C6.41246 20.4594 5.57974 19.6267 5.57974 18.5995V7.44ZM18.5992 7.44H7.43966V18.5995H18.5992V7.44Z" fill="#404040" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.36963 0C8.88324 0 9.29959 0.416357 9.29959 0.929959V2.78988C9.29959 3.30348 8.88324 3.71984 8.36963 3.71984C7.85603 3.71984 7.43967 3.30348 7.43967 2.78988V0.929959C7.43967 0.416357 7.85603 0 8.36963 0ZM13.0194 0C13.533 0 13.9494 0.416357 13.9494 0.929959V2.78988C13.9494 3.30348 13.533 3.71984 13.0194 3.71984C12.5058 3.71984 12.0895 3.30348 12.0895 2.78988V0.929959C12.0895 0.416357 12.5058 0 13.0194 0ZM17.6692 0C18.1828 0 18.5992 0.416357 18.5992 0.929959V2.78988C18.5992 3.30348 18.1828 3.71984 17.6692 3.71984C17.1556 3.71984 16.7393 3.30348 16.7393 2.78988V0.929959C16.7393 0.416357 17.1556 0 17.6692 0ZM0 8.36963C0 7.85603 0.416357 7.43967 0.929959 7.43967H2.78988C3.30348 7.43967 3.71984 7.85603 3.71984 8.36963C3.71984 8.88324 3.30348 9.29959 2.78988 9.29959H0.929959C0.416357 9.29959 0 8.88324 0 8.36963ZM22.319 8.36963C22.319 7.85603 22.7354 7.43967 23.249 7.43967H25.1089C25.6225 7.43967 26.0389 7.85603 26.0389 8.36963C26.0389 8.88324 25.6225 9.29959 25.1089 9.29959H23.249C22.7354 9.29959 22.319 8.88324 22.319 8.36963ZM0 13.0194C0 12.5058 0.416357 12.0895 0.929959 12.0895H2.78988C3.30348 12.0895 3.71984 12.5058 3.71984 13.0194C3.71984 13.533 3.30348 13.9494 2.78988 13.9494H0.929959C0.416357 13.9494 0 13.533 0 13.0194ZM22.319 13.0194C22.319 12.5058 22.7354 12.0895 23.249 12.0895H25.1089C25.6225 12.0895 26.0389 12.5058 26.0389 13.0194C26.0389 13.533 25.6225 13.9494 25.1089 13.9494H23.249C22.7354 13.9494 22.319 13.533 22.319 13.0194ZM0 17.6692C0 17.1556 0.416357 16.7393 0.929959 16.7393H2.78988C3.30348 16.7393 3.71984 17.1556 3.71984 17.6692C3.71984 18.1828 3.30348 18.5992 2.78988 18.5992H0.929959C0.416357 18.5992 0 18.1828 0 17.6692ZM22.319 17.6692C22.319 17.1556 22.7354 16.7393 23.249 16.7393H25.1089C25.6225 16.7393 26.0389 17.1556 26.0389 17.6692C26.0389 18.1828 25.6225 18.5992 25.1089 18.5992H23.249C22.7354 18.5992 22.319 18.1828 22.319 17.6692ZM8.36963 22.319C8.88324 22.319 9.29959 22.7354 9.29959 23.249V25.1089C9.29959 25.6225 8.88324 26.0389 8.36963 26.0389C7.85603 26.0389 7.43967 25.6225 7.43967 25.1089V23.249C7.43967 22.7354 7.85603 22.319 8.36963 22.319ZM13.0194 22.319C13.533 22.319 13.9494 22.7354 13.9494 23.249V25.1089C13.9494 25.6225 13.533 26.0389 13.0194 26.0389C12.5058 26.0389 12.0895 25.6225 12.0895 25.1089V23.249C12.0895 22.7354 12.5058 22.319 13.0194 22.319ZM17.6692 22.319C18.1828 22.319 18.5992 22.7354 18.5992 23.249V25.1089C18.5992 25.6225 18.1828 26.0389 17.6692 26.0389C17.1556 26.0389 16.7393 25.6225 16.7393 25.1089V23.249C16.7393 22.7354 17.1556 22.319 17.6692 22.319Z" fill="#404040" />
                                        </svg>
                                    </div>

                                </div>
                            </div>

                            <div className="bg-secondary shadow-sm py-2 text-end pe-2 pe-md-4 text-white br-right" style={{ width: '303px' }}><h6 className="mb-0">Solid Support System</h6></div>


                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center  mt-4">
                    <Col md={12} lg={10}>
                        <div className="d-flex justify-content-center align-items-center me-0 me-md-5">
                            <div className="bg-white shadow-sm py-2 ps-2 ps-md-4 br-left position-relative" style={{ width: '357px' }}>
                                <h6 className="mb-0 fw-500">System Issues/Breakdowns</h6>
                                <div className="circle">

                                    <div>
                                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2781 7.66826C18.6665 8.0044 18.7088 8.5917 18.3726 8.98002L11.9326 16.4197C11.7647 16.6137 11.5241 16.7297 11.2677 16.7402C11.0114 16.7508 10.762 16.6549 10.5787 16.4754L7.71911 13.6738C7.35223 13.3144 7.34618 12.7256 7.7056 12.3588C8.06503 11.9919 8.65381 11.9858 9.0207 12.3453L11.1738 14.4546L16.9664 7.76274C17.3025 7.37442 17.8898 7.33212 18.2781 7.66826Z" fill="#404040" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6369 0.0824231C12.8803 -0.0274744 13.1591 -0.0274744 13.4025 0.0824231C18.026 2.17049 20.1015 2.83762 25.2211 3.75595C25.6426 3.83157 25.958 4.18531 25.985 4.61274C26.9678 20.1903 14.326 25.5853 13.3671 25.9715C13.1442 26.0613 12.8952 26.0613 12.6723 25.9715C11.7134 25.5853 -0.928424 20.1903 0.0544271 4.61274C0.0813954 4.18531 0.396794 3.83157 0.818347 3.75595C5.9379 2.83762 8.01341 2.17049 12.6369 0.0824231ZM1.87525 5.45379C1.43676 18.1415 10.9472 23.1565 13.0197 24.0964C15.0922 23.1565 24.6026 18.1415 24.1641 5.45379C19.5377 4.59493 17.3 3.86756 13.0197 1.9497C8.73944 3.86756 6.50169 4.59493 1.87525 5.45379Z" fill="#404040" />
                                        </svg>

                                    </div>

                                </div>
                            </div>
                            <div className="bg-secondary shadow-sm py-2 text-end pe-2 pe-md-4 text-white br-right" style={{ width: '303px' }}><h6 className="mb-0">Robust Development</h6></div>
                        </div>
                    </Col>
                </Row>

                <Row className="justify-content-center  mt-4">
                    <Col md={12} lg={10}>
                        <div className="d-flex justify-content-center align-items-center me-0 me-md-5">
                            <div className="bg-white shadow-sm py-2 ps-2 ps-md-4 br-left position-relative" style={{ width: '355px' }}>
                                <h6 className="mb-0">Dimensional Development</h6>
                                <div className="circle">

                                    <div>
                                        <svg width="30" height="21" viewBox="0 0 30 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.86396 2.73446C1.88256 2.71651 1.95535 2.66115 2.16324 2.61534C2.45672 2.55066 2.90227 2.53476 3.5158 2.60531C4.73583 2.7456 6.40429 3.2008 8.37746 3.95538L9.04181 2.21816C7.00105 1.43773 5.16821 0.923149 3.72827 0.75757C3.01181 0.675185 2.3377 0.672334 1.76294 0.799004C1.19023 0.925223 0.595911 1.21048 0.253548 1.80195L0.253419 1.80217C-0.0193775 2.27375 -0.0434566 2.79249 0.0480426 3.26172C0.13797 3.72289 0.347244 4.18708 0.616258 4.63547C1.15456 5.5327 2.03425 6.53345 3.14239 7.57353C5.36978 9.66413 8.67762 12.0591 12.5371 14.2831C16.3966 16.507 20.1287 18.1684 23.0564 19.048C24.513 19.4856 25.821 19.7453 26.8684 19.7618C27.3917 19.77 27.8986 19.7187 28.3431 19.566C28.7951 19.4107 29.2325 19.131 29.5052 18.6597L29.5054 18.6593C29.8522 18.0594 29.797 17.393 29.6138 16.8281C29.4298 16.2606 29.0805 15.671 28.639 15.0839C27.7514 13.9038 26.3534 12.5549 24.6145 11.1595L23.4504 12.6101C25.1331 13.9604 26.3975 15.1979 27.1526 16.2019C27.5324 16.7069 27.7495 17.1087 27.8446 17.4017C27.9121 17.6101 27.9004 17.7029 27.8941 17.7284C27.8806 17.7413 27.8393 17.7724 27.7387 17.807C27.5704 17.8648 27.2983 17.9084 26.8976 17.9021C26.0967 17.8895 24.9759 17.6826 23.5916 17.2667C20.8374 16.4392 17.2388 14.8457 13.4657 12.6716C9.69254 10.4974 6.51042 8.18389 4.41525 6.21739C3.3621 5.22892 2.62235 4.36398 2.21116 3.6786C2.00542 3.33568 1.90742 3.07932 1.87358 2.90575C1.85356 2.80311 1.85967 2.7525 1.86396 2.73446ZM1.85865 2.74038C1.85858 2.74034 1.8592 2.73945 1.86068 2.73781C1.85946 2.7396 1.85872 2.74042 1.85865 2.74038ZM27.8916 17.736C27.8915 17.736 27.8919 17.7349 27.8928 17.7329C27.8921 17.7351 27.8917 17.7361 27.8916 17.736ZM27.8971 17.7254C27.8986 17.7232 27.8995 17.7221 27.8996 17.7222C27.8997 17.7223 27.8989 17.7234 27.8971 17.7254ZM1.86503 2.73042C1.86587 2.72765 1.86649 2.72641 1.86659 2.72648C1.86669 2.72656 1.86628 2.72794 1.86503 2.73042Z" fill="#404040" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8793 1.85992C10.2569 1.85992 6.50967 5.60713 6.50967 10.2296C6.50967 14.852 10.2569 18.5992 14.8793 18.5992C19.5017 18.5992 23.2489 14.852 23.2489 10.2296C23.2489 5.60713 19.5017 1.85992 14.8793 1.85992ZM4.64975 10.2296C4.64975 4.57993 9.22968 0 14.8793 0C20.5289 0 25.1089 4.57993 25.1089 10.2296C25.1089 15.8792 20.5289 20.4591 14.8793 20.4591C9.22968 20.4591 4.64975 15.8792 4.64975 10.2296Z" fill="#404040" />
                                        </svg>

                                    </div>

                                </div>
                            </div>
                            <div className="bg-secondary shadow-sm py-2 text-end pe-2 pe-md-4 text-white br-right" style={{ width: '303px' }}><h6 className="mb-0">Robust Development</h6></div>                       </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Comparison
