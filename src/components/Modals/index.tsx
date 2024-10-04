import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, } from "@nextui-org/react";

export const VideoModal = ({ isOpen, onOpenChange, name, url }: any) => {

  return (
    <>
      <Modal
        backdrop="opaque"
        size="4xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        radius="lg"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/90 backdrop-opacity-50",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p>{name}</p>
                <div>
                  <video style={{ width: '100%', height: '83%', marginTop: '20px', borderRadius: '5px' }} autoPlay>
                    <source src={`/video/${url}.mp4`} type="video/mp4" />
                  </video>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}