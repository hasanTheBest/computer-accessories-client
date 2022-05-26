import React from "react";

const categories = [
  {
    name: "Laptops & Accessories",
    description: `Card Reader, Customized Service for Computer Products, Laptop, Laptop Stand, Palm Computer, Pocket PC & PDA, Power Bank, Stylus, Tablet Case & Cover, Tablet PC`,
  },
  {
    name: "Desktops & Servers",
    description: `Blockchain Miner, Computer, Embedded Computer & SCM, Industrial Computer & Accessories, Server & Workstation`,
  },
  {
    name: "Computer Components",
    description: `CPU, Computer Case, Cooling Fan & Heatsinks, Display & Accessories, Graphic Card, Mainboard, Power Supply, Sound Card`,
  },
  {
    name: "Storage Devices & Drive",
    description: `Drive - CD Burner & DVD Burner, CD Drive, DVD Drive, Floppy Drive, Other Drives. Storage Device - CD & DVD Media, Floppy Disk, HDD Enclosure, Hard Disk, Memory Card, USB Flash Disk, Other Storage Devices, Memory
    `,
  },
  {
    name: "PC Peripherals",
    description: `Speaker & Sound Box, Bluetooth Products, Computer Bag, Computer Cable, Earphones,Headphones & Accessories, Keyboard, Mouse, Mousepad, PC Camera, Screen Protector, USB Products`,
  },
  {
    name: "Networking Devices",
    description: `
    Network Hardware & Parts, Communication Module, Hub, Modem, Network Card, Network Switch, Router, Other Network Hardware & Parts, Optical Fiber`,
  },
];

const AccessoriesWeProvide = () => {
  return (
    <section className="max-w-screen-xl mx-auto py-12 lg:py-20">
      <header className="mb-12 text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold mb-6 lg:mb-10">
          Accessories - We provide
        </h2>
        <p className="max-w-3xl mx-auto">
          Buy most popular computer products in bulk from China Manufacturers,
          providing computer hardware, computer parts & accessories, PC
          peripheral and other computer related networking and storage device
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12  max-w-5xl mx-auto">
        {categories.map(({ name, description }, i) => (
          <div className="card w-full bg-neutral text-neutral-content" key={i}>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{name}</h2>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AccessoriesWeProvide;
