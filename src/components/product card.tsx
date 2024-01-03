import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";
import { Modal, ButtonToolbar, Button, Placeholder } from "rsuite";

/*data handelling */
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

export const Card: React.FC<ProductCardProps> = ({ product }) => {
  /*modal controll*/
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();
  const handleOpen = (value: any) => {
    setSize(value);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  /*animation controll*/
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["10.5deg", "-10.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-10.5deg", "10.5deg"]
  );

  const handleMouseMove = (e: any) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
          height: "290px",
        }}
        className="relative m-1 w-64 rounded-xl bg-gradient-to-br from-indigo-200 to-violet-400"
      >
        <div
          style={{
            transform: "translateZ(30px)",
            transformStyle: "preserve-3d",
          }}
          className="block inset-1 place-content-center  rounded-xl bg-white shadow-lg"
        >
          <div className="bg-white shadow-lg hover:shadow-xl rounded-lg h-full">
            <div
              className="bg-gray-400 h-40 rounded-t-lg  bg-no-repeat bg-center bg-cover "
              style={{
                backgroundImage:
                  "url(https://loremflickr.com/400/340/iceream,book)",
              }}
            >
              <div className="text-right h-3">
                <button
                  className="text-gray-300 hover:text-pink-500 p-2 rounded-full"
                  style={{ background: "rgba(0,0,0,0.3)" }}
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex justify-between items-start px-2 pt-2">
              <div className="p-2 flex-grow">
                <h1 className="font-medium text-xl font-poppins">
                  {product.name}
                </h1>

              </div>
              <div className="p-2 text-right">
                <div className="text-teal-500 font-semibold text-lg font-poppins">
                  {product.price}
                </div>
                <div className="text-xs text-gray-500 line-through font-poppins">
                  $50
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center px-2 pb-2">
              <div className="w-1/2 p-2">
                <button
                  onClick={() => handleOpen("lg")}
                  className="block w-full bg-teal-500 hover:bg-teal-600 text-white border-2 border-teal-500 hover:border-teal-600 px-3 py-2 rounded uppercase font-poppins font-medium"
                >
                  <svg viewBox="0 0 24 24" className="inline w-4 h-4">
                    <path
                      fill="currentColor"
                      d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
                    />
                  </svg>{" "}
                  جزِیات محصول
                </button>
                <Modal size={size} open={open} onClose={handleClose}>
                  <Modal.Header>
                    <Modal.Title>توضیحات</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>{product.description}</Modal.Body>
                  <Modal.Footer>
                    <Button onClick={handleClose} appearance="primary">
                      بستن
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
              <div className="w-1/2 p-2">
                <button className="block w-full bg-white hover:bg-gray-100 text-teal-500 border-2 border-teal-500 px-3 py-2 rounded uppercase font-poppins font-medium">
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default Card;
