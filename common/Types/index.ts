export interface IProduct {
	id: number;
	attributes: {
		product_name: string;
		price: number;
		product_images: any;
		category: { data: { attributes: { categoryName: string } } };
		description: string;
	};
}
