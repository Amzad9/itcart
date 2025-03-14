import React from 'react';

const Video = () => {
    return (
        <section className="bg-[#D1EFF1] py-8">
            <div className="max-w-screen-xl mx-auto px-4">
                {/* Title Section */}
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold">What does iT Cart have to offer?</h2>
                </div>

                {/* Video Section */}
                <div className="flex justify-center">
                    <iframe
                        src="https://www.youtube.com/embed/i5nbUr0kNF0"
                        title="YouTube video player"
                        className="rounded-2xl border-[15px] border-gray-400 max-w-[696px] w-full min-h-[450px] sm:min-h-[300px]"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Video;
