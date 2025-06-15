import React from "react";

const Modal = ({ setShowModal, children }) => {
	const handleModalClick = (e) => {
		console.log("i got clicckedd modal inner");

		e.stopPropagation(); // to stop the inner child to close the modal
		// e.stopPropagation();
	};
	return (
		<div
			className="bg-black/50 z-50 absolute  flex justify-center items-center inset-0"
			onClick={() => setShowModal(false)}
		>
			<div
				className="bg-white rounded-lg px-4 py-4 min-w-6/12 relative min-h-[25rem]"
				onClick={handleModalClick}
			>
				{children}
			</div>
		</div>
	);
};

export default Modal;
