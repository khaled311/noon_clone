import Image from "next/image";
import React from "react";

const Spinner = () => {
	return (
		<div className="h-screen">
			<div className="flex justify-center items-center h-full">
				<Image
					className="h-16 w-16"
					src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
					alt=""
					width={64}
					height={64}
				/>
			</div>
		</div>
	);
};

export default Spinner;
