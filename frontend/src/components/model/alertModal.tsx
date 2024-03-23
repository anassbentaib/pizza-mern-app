// import { useEffect, useState } from "react";
// import { Button } from "../ui/button";
// import Modal from "./Modal";

// interface AlertModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onConfirm: () => void;
//   loading: boolean;
// }

// export const AlertModal = ({
//   isOpen,
//   onClose,
//   onConfirm,
//   loading,
// }: AlertModalProps) => {
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   if (!isMounted) {
//     return null;
//   }

//   return (
//     <Dialog open={isOpen} onOpenChange={onChange}>
//       <DialogContent>
//         <DialogHeader>
//           <DialogTitle>{title}</DialogTitle>
//           <DialogDescription>{description}</DialogDescription>
//         </DialogHeader>
//         <div>{children}</div>
//         <div className="pt-6 space-x-2 flex items-center justify-end w-full">
//           <Button
//             variant="outline"
//             size="sm"
//             disabled={loading}
//             onClick={onClose}
//           >
//             Cancle
//           </Button>
//           <Button disabled={loading} variant="destructive" onClick={onConfirm}>
//             Continue
//           </Button>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };
