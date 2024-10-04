import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MicjohnModule = buildModule("MicjohnModule", (m) => {

    const token = m.contract("EnhancedToken");

    return { token };
});

export default MicjohnModule;