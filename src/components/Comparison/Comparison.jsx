import React from 'react';
import styles from './Comparison.module.css'; 

    const ComparisonIcon = () => (
        <svg width="30" height="21" viewBox="0 0 30 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M1.86396 2.73446C1.88256 2.71651 1.95535 2.66115 2.16324 2.61534C2.45672 2.55066 2.90227 2.53476 3.5158 2.60531C4.73583 2.7456 6.40429 3.2008 8.37746 3.95538L9.04181 2.21816C7.00105 1.43773 5.16821 0.923149 3.72827 0.75757C3.01181 0.675185 2.3377 0.672334 1.76294 0.799004C1.19023 0.925223 0.595911 1.21048 0.253548 1.80195L0.253419 1.80217C-0.0193775 2.27375 -0.0434566 2.79249 0.0480426 3.26172C0.13797 3.72289 0.347244 4.18708 0.616258 4.63547C1.15456 5.5327 2.03425 6.53345 3.14239 7.57353C5.36978 9.66413 8.67762 12.0591 12.5371 14.2831C16.3966 16.507 20.1287 18.1684 23.0564 19.048C24.513 19.4856 25.821 19.7453 26.8684 19.7618C27.3917 19.77 27.8986 19.7187 28.3431 19.566C28.7951 19.4107 29.2325 19.131 29.5052 18.6597L29.5054 18.6593C29.8522 18.0594 29.797 17.393 29.6138 16.8281C29.4298 16.2606 29.0805 15.671 28.639 15.0839C27.7514 13.9038 26.3534 12.5549 24.6145 11.1595L23.4504 12.6101C25.1331 13.9604 26.3975 15.1979 27.1526 16.2019C27.5324 16.7069 27.7495 17.1087 27.8446 17.4017C27.9121 17.6101 27.9004 17.7029 27.8941 17.7284C27.8806 17.7413 27.8393 17.7724 27.7387 17.807C27.5704 17.8648 27.2983 17.9084 26.8976 17.9021C26.0967 17.8895 24.9759 17.6826 23.5916 17.2667C20.8374 16.4392 17.2388 14.8457 13.4657 12.6716C9.69254 10.4974 6.51042 8.18389 4.41525 6.21739C3.3621 5.22892 2.62235 4.36398 2.21116 3.6786C2.00542 3.33568 1.90742 3.07932 1.87358 2.90575C1.85356 2.80311 1.85967 2.7525 1.86396 2.73446ZM1.85865 2.74038C1.85858 2.74034 1.8592 2.73945 1.86068 2.73781C1.85946 2.7396 1.85872 2.74042 1.85865 2.74038ZM27.8916 17.736C27.8915 17.736 27.8919 17.7349 27.8928 17.7329C27.8921 17.7351 27.8917 17.7361 27.8916 17.736ZM27.8971 17.7254C27.8986 17.7232 27.8995 17.7221 27.8996 17.7222C27.8997 17.7223 27.8989 17.7234 27.8971 17.7254ZM1.86503 2.73042C1.86587 2.72765 1.86649 2.72641 1.86659 2.72648C1.86669 2.72656 1.86628 2.72794 1.86503 2.73042Z" fill="#404040" />
            <path fillRule="evenodd" clipRule="evenodd" d="M14.8793 1.85992C10.2569 1.85992 6.50967 5.60713 6.50967 10.2296C6.50967 14.852 10.2569 18.5992 14.8793 18.5992C19.5017 18.5992 23.2489 14.852 23.2489 10.2296C23.2489 5.60713 19.5017 1.85992 14.8793 1.85992ZM4.64975 10.2296C4.64975 4.57993 9.22968 0 14.8793 0C20.5289 0 25.1089 4.57993 25.1089 10.2296C25.1089 15.8792 20.5289 20.4591 14.8793 20.4591C9.22968 20.4591 4.64975 15.8792 4.64975 10.2296Z" fill="#404040" />
        </svg>
    );



const Comparison = () => {
    return (
        <section className="py-0 bg-warning rounded-lg px-6 pt-5 pb-5">
            <div className="container mx-auto">
                <div className="flex justify-center mb-5">
                    <h2 className="text-xl font-bold">Comparison</h2>
                </div>
                <div className="flex justify-center items-center mb-5">
                    <div className="text-right">
                        <h4 className="text-lg">Regular IT Solutions</h4>
                    </div>
                    <div className="text-center mx-4">
                        <h3 className="text-secondary font-semibold">V/S</h3>
                    </div>
                    <div className="text-left">
                        <h4 className="text-lg">IT Cart Solutions</h4>
                    </div>
                </div>

                <div className="flex justify-center mb-5">
                    <div className="flex justify-center items-center w-1/3">
                        <div className="bg-white shadow-sm py-2 px-4 rounded-l-lg relative" style={{ width: '215px' }}>
                            <h6 className="mb-0">High Cost</h6>
                            <div className={styles.circle}>
                                <ComparisonIcon />
                            </div>
                        </div>
                        <div className="bg-secondary shadow-sm py-2 text-right px-4 text-white rounded-r-lg" style={{ width: '212px' }}>
                            <h6 className="mb-0">Affordable</h6>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mb-5">
                    <div className="flex justify-center items-center w-2/3">
                        <div className="bg-white shadow-sm py-2 px-4 rounded-l-lg relative" style={{ width: '230px' }}>
                            <h6 className="mb-0 font-medium">Complex for end users</h6>
                            <div className={styles.circle}>
                                 <ComparisonIcon />
                            </div>
                        </div>
                        <div className="bg-secondary shadow-sm py-2 text-right px-4 text-white rounded-r-lg" style={{ width: '219px' }}>
                            <h6 className="mb-0">Easy to use</h6>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="flex justify-center items-center w-4/5">
                        <div className="bg-white shadow-sm py-2 px-4 rounded-l-lg relative" style={{ width: '281px' }}>
                            <h6 className="mb-0 font-medium">Irregular Support</h6>
                            <div className={styles.circle}>
                                 <ComparisonIcon />
                            </div>
                        </div>
                        <div className="bg-secondary shadow-sm py-2 text-right px-4 text-white rounded-r-lg" style={{ width: '280px' }}>
                            <h6 className="mb-0">Solid Support System</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comparison;
